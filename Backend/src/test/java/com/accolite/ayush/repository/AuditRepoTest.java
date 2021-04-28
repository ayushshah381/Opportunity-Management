package com.accolite.ayush.repository;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Audit;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.rowmapper.AuditRowMapper;
import com.accolite.ayush.rowmapper.DemandRowMapper;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AuditRepoTest {
	
	@Mock
	JdbcTemplate jdbctemplate;
	
	@InjectMocks
	AuditRepo auditrepo;
	
	@Test
	public void ItShouldGetAllAudits() throws NoRecordFound
	{
		ArrayList<Audit> list1 = new ArrayList<>();
		Mockito.when(jdbctemplate.query(Mockito.anyString(), Mockito.any(AuditRowMapper.class))).thenReturn(list1);
		List<Audit> list2 = auditrepo.getAllAudits();
		Assert.assertEquals(list1.size(),list2.size());
	}
	
	@Test
	public void ItShouldAddAudit() 
	{
		int res1 = 5;
		Mockito.when(jdbctemplate.update(Mockito.anyString(),(Object[])Mockito.any())).thenReturn(res1);
		int res2 = auditrepo.addAudit(new Audit());
		Assert.assertEquals(res1,res2);
	}

}
