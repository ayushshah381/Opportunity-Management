package com.accolite.ayush.repository;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.logging.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.rowmapper.DemandRowMapper;

@Component
public class DemandRepo {
	
	@Autowired
	private JdbcTemplate jdbctemplate;
	
	
	public List<Demand> getCurrentDemands() throws NoRecordFound
	{
		List<Demand> demandList;
		String sqlquery = "SELECT * FROM demands WHERE endDate>=curDate() ORDER BY endDate ASC";
		demandList = jdbctemplate.query(sqlquery,new DemandRowMapper());
		return demandList;
	}
	
	public List<Demand> getAllDemands() throws NoRecordFound
	{
		List<Demand> demandList;
		String sqlquery = "SELECT * FROM demands ORDER BY endDate ";
		demandList = jdbctemplate.query(sqlquery,new DemandRowMapper());
		return demandList;
	}
	
	public Demand getDemandById(int id) throws NoRecordFound
	{
		Demand demand;
		String sqlquery = "SELECT * FROM demands WHERE id="+id;
		demand = jdbctemplate.queryForObject(sqlquery, new DemandRowMapper());
		return demand;
	}
	
	public int addDemand(Demand d)
	{
		String sqlquery = "INSERT INTO DEMANDS(manager_name,manager_email,demand_desc,location,skills,vacancy,endDate) VALUES(?,?,?,?,?,?,?)";
		int rowsAffected = jdbctemplate.update(sqlquery,new Object[] {d.getEd_name(),d.getEd_email(),d.getDescription(),d.getLocation(),d.getSkills(),d.getVacancy(),d.getEndDate()});
		return rowsAffected;
	}
	
	public int updateDemand(Demand d,int id)
	{
		String sqlquery = "UPDATE DEMANDS SET manager_name=?,manager_email=?,demand_desc=?,location=?,skills=?,vacancy=?,endDate=? WHERE id="+id;
		int rowsAffected = jdbctemplate.update(sqlquery,new Object[] {d.getEd_name(),d.getEd_email(),d.getDescription(),d.getLocation(),d.getSkills(),d.getVacancy(),d.getEndDate()});
		return rowsAffected;
	}
	
	public int deleteDemand(int id)
	{
		String sqlquery = "DELETE FROM DEMANDS WHERE id=?";
		int rowsAffected = jdbctemplate.update(sqlquery, new Object[] {id});
		return rowsAffected;
	}
	
	public List<Demand> getDemandsFilter(String loc,String skill) throws NoRecordFound
	{
		List<Demand> demandList;
		String sqlquery = "SELECT * FROM demands WHERE location LIKE '%" + loc + "%' AND skills LIKE '%" + skill+"%' ORDER BY endDate DESC";
		demandList = jdbctemplate.query(sqlquery,new DemandRowMapper());
		return demandList;
	}
	
	public List<Demand> getCurrentDemandsFilter(String loc,String skill) throws NoRecordFound
	{
		List<Demand> demandList;
		String sqlquery = "SELECT * FROM demands WHERE endDate>=curDate() AND location LIKE '%" + loc + "%' AND skills LIKE '%" + skill+"%' ORDER BY endDate DESC";
		demandList = jdbctemplate.query(sqlquery,new DemandRowMapper());
		return demandList;
	}
	
	public Demand getLatestDemand()
	{
		Demand d;
		String sqlquery = "SELECT * FROM demands WHERE id=(SELECT MAX(id) FROM demands)";
		d = jdbctemplate.queryForObject(sqlquery, new DemandRowMapper());
		return d;
	}

}
