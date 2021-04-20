package com.accolite.ayush.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.accolite.ayush.models.Demand;


public class DemandRowMapper implements RowMapper<Demand> {
	
	@Override
	public Demand mapRow(ResultSet rs, int rowNum) throws SQLException {
		Demand d = new Demand();
		d.setDid(rs.getInt("id"));
		d.setEd_name(rs.getString("manager_name"));
		d.setEd_email(rs.getString("manager_email"));
		d.setDescription(rs.getString("demand_desc"));
		d.setLocation(rs.getString("location"));
		d.setSkills(rs.getString("skills"));
		d.setVacancy(rs.getInt("vacancy"));
		d.setEndDate(rs.getDate("endDate").toLocalDate());
		return d;
	}
}
