package com.accolite.ayush.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Component;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.rowmapper.DemandRowMapper;

@Component
public class TrendsRepo {

	@Autowired
	JdbcTemplate jdbctemplate;
	
	public List<List<?>> getDemandsByLocation() throws NoRecordFound
	{	
		List<List<?>> mp = new ArrayList<>();
		List<String> locations = new ArrayList<>();
		List<Integer> count = new ArrayList<>();	
		String sqlquery = "SELECT location,SUM(vacancy) FROM demands WHERE endDate >= curDate() GROUP BY location";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				locations.add(rs.getString(1));
				count.add(rs.getInt(2));
				while(rs.next())
				{
					locations.add(rs.getString(1));
					count.add(rs.getInt(2));
				}
			}});
		mp.add(locations);
		mp.add(count);
		return mp;
	}
	
	public List<List<?>> getDemandsBySkills() throws NoRecordFound
	{	
		List<List<?>> mp = new ArrayList<>();
		List<String> skills = new ArrayList<>();
		List<Integer> count = new ArrayList<>();	
		String sqlquery = "SELECT skills,SUM(vacancy) FROM demands WHERE endDate >= curDate() GROUP BY skills ORDER BY SUM(vacancy) DESC LIMIT 10";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				skills.add(rs.getString(1));
				count.add(rs.getInt(2));
				while(rs.next())
				{
					skills.add(rs.getString(1));
					count.add(rs.getInt(2));
				}
			}});
		mp.add(skills);
		mp.add(count);
		return mp;
	}
	
	public List<String> getDistinctYears() throws NoRecordFound
	{
		List<String> res = new ArrayList<>();
		String sqlquery = "SELECT DISTINCT year(endDate) from demands";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getString(1));
				while(rs.next())
				{
					res.add(rs.getString(1));
				}
			}});
		return res;
	
	}
	
	public List<String> getDistinctLocations() throws NoRecordFound
	{
		List<String> res = new ArrayList<>();
		String sqlquery = "SELECT DISTINCT location from demands";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getString(1));
				while(rs.next())
				{
					res.add(rs.getString(1));
				}
			}});
		return res;
	}
	
	public List<String> getDistinctSkills() throws NoRecordFound
	{
		List<String> res = new ArrayList<>();
		String sqlquery = "SELECT DISTINCT skills from demands";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getString(1));
				while(rs.next())
				{
					res.add(rs.getString(1));
				}
			}});
		return res;
	}
	
	public int getCountOfLocationsEachYear(String year,String loc) throws NoRecordFound
	{
		List<Demand> res = jdbctemplate.query("SELECT * FROM DEMANDS WHERE YEAR(endDate)='"+year+"' AND location='"+loc+"'",new DemandRowMapper());
		return res.size();
	}
	
	public int getCountOfSkillsEachYear(String year,String skill) throws NoRecordFound
	{
		List<Demand> res = jdbctemplate.query("SELECT * FROM DEMANDS WHERE YEAR(endDate)='"+year+"' AND skills='"+skill+"'",new DemandRowMapper());
		return res.size();
	}
	
	public List<String> getCurrentDistinctLocations() throws NoRecordFound
	{
		List<String> res = new ArrayList<>();
		String sqlquery = "SELECT DISTINCT location from demands WHERE endDate>=curDate()";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getString(1));
				while(rs.next())
				{
					res.add(rs.getString(1));
				}
			}});
		return res;
	}
	
	public List<String> getCurrentDistinctSkills() throws NoRecordFound
	{
		List<String> res = new ArrayList<>();
		String sqlquery = "SELECT DISTINCT skills from demands WHERE endDate>=curDate()";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getString(1));
				while(rs.next())
				{
					res.add(rs.getString(1));
				}
			}});
		return res;
	}
	
	public List<Integer> getVacancies(String loc,String skill) throws NoRecordFound
	{
		List<Integer> res = new ArrayList<>();
		String sqlquery = "SELECT SUM(vacancy) FROM (SELECT * FROM DEMANDS WHERE endDate>=curDate() AND location='"+loc+"' AND skills='"+skill+"') AS D";
		jdbctemplate.query(sqlquery,new RowCallbackHandler() {
			@Override
			public void processRow(ResultSet rs) throws SQLException {
				res.add(rs.getInt(1));
			}});
			
		return res;
	}
	
	
}
