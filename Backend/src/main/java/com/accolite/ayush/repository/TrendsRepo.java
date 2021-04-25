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

@Component
public class TrendsRepo {

	@Autowired
	JdbcTemplate jdbctemplate;
	
	public List<List<?>> getDemandsByLocation()
	{	
		List<List<?>> mp = new ArrayList<>();
		List<String> locations = new ArrayList<>();
		List<Integer> count = new ArrayList<>();	
		String sqlquery = "SELECT location,count(*) FROM demands GROUP BY location";
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
	
	public List<List<?>> getDemandsBySkills()
	{	
		List<List<?>> mp = new ArrayList<>();
		List<String> skills = new ArrayList<>();
		List<Integer> count = new ArrayList<>();	
		String sqlquery = "SELECT skills,count(*) FROM demands GROUP BY skills ORDER BY count(*) DESC";
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
	
	
	
}
