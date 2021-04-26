package com.accolite.ayush.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.accolite.ayush.models.Audit;

public class AuditRowMapper implements RowMapper<Audit> {

	@Override
	public Audit mapRow(ResultSet rs, int rowNum) throws SQLException {
		Audit a = new Audit();
		a.setAid(rs.getInt("aid"));
		a.setUsername(rs.getString("username"));
		a.setUseremail(rs.getString("useremail"));
		a.setAction(rs.getString("actionperformed"));
		a.setDate(rs.getString("currdate"));
		return a;
	}

}
