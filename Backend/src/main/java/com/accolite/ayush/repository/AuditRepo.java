package com.accolite.ayush.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.accolite.ayush.models.Audit;
import com.accolite.ayush.rowmapper.AuditRowMapper;

import java.util.*;

import com.accolite.ayush.exception.*;

@Component
public class AuditRepo {
	
	@Autowired
	JdbcTemplate jdbctemplate;
	
	public List<Audit> getAllAudits() throws NoRecordFound
	{
		List<Audit> list = jdbctemplate.query("SELECT * from audits", new AuditRowMapper());
		return list;
	}
	
	public int addAudit(Audit a)
	{
		String sqlquery = "INSERT INTO audits(username,useremail,actionperformed,currdate) VALUES(?,?,?,?)";
		int rowsAffected = jdbctemplate.update(sqlquery,new Object[] {a.getUsername(),a.getUseremail(),a.getAction(),a.getDate()});
		return rowsAffected;
	}
}
