package com.accolite.ayush.models;

import java.sql.ResultSet;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.rowmapper.AuditRowMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AuditTest {
	
	@Test
	public void ItShouldCreateAnAudit() throws Exception
	{
		Audit a = new Audit("Ayush","a@gmail.com","New Demand Added","2021-12-23",1);
	}
	
	@Test
	public void ItShouldCreateRowMapper() throws Exception
	{
		AuditRowMapper a = new AuditRowMapper();
		ResultSet rs = null;
	}
}
