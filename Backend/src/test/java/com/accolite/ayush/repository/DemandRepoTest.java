package com.accolite.ayush.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.rowmapper.DemandRowMapper;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemandRepoTest {
	
	@Mock
	JdbcTemplate jdbctemplate;
	
	@InjectMocks
	DemandRepo demandrepo;
	
	@Test
	public void ItShouldGetAllDemands() throws NoRecordFound
	{
		ArrayList<Demand> list1 = new ArrayList<>();
		Mockito.when(jdbctemplate.query(Mockito.anyString(), Mockito.any(DemandRowMapper.class))).thenReturn(list1);
		List<Demand> list2 = demandrepo.getAllDemands();
		Assert.assertEquals(list1.size(),list2.size());
	}
	
	@Test
	public void ItShouldGetCurrentDemands() throws NoRecordFound
	{
		ArrayList<Demand> list1 = new ArrayList<>();
		Mockito.when(jdbctemplate.query(Mockito.anyString(), Mockito.any(DemandRowMapper.class))).thenReturn(list1);
		List<Demand> list2 = demandrepo.getCurrentDemands();
		Assert.assertEquals(list1.size(),list2.size());
	}
	
	@Test
	public void ItShouldGetDemandsFilter() throws NoRecordFound
	{
		ArrayList<Demand> list1 = new ArrayList<>();
		Mockito.when(jdbctemplate.query(Mockito.anyString(), Mockito.any(DemandRowMapper.class))).thenReturn(list1);
		List<Demand> list2 = demandrepo.getDemandsFilter("Mumbai","Java");
		Assert.assertEquals(list1.size(),list2.size());
	}
	
	@Test
	public void ItShouldGetCurrentDemandsFilter() throws NoRecordFound
	{
		ArrayList<Demand> list1 = new ArrayList<>();
		Mockito.when(jdbctemplate.query(Mockito.anyString(), Mockito.any(DemandRowMapper.class))).thenReturn(list1);
		List<Demand> list2 = demandrepo.getCurrentDemandsFilter("Mumbai","Java");
		Assert.assertEquals(list1.size(),list2.size());
	}
	
	@Test
	public void ItShouldGetDemandById() throws NoRecordFound
	{
		Demand d = new Demand();
		Mockito.when(jdbctemplate.queryForObject(Mockito.anyString(),Mockito.any(DemandRowMapper.class))).thenReturn(d);
		Demand d2 = demandrepo.getDemandById(1);
		Assert.assertEquals(d,d2);
	}
	
	@Test
	public void ItShouldAddDemand() throws NoRecordFound
	{
		int res1 = 5;
		Mockito.when(jdbctemplate.update(Mockito.anyString(),(Object[])Mockito.any())).thenReturn(res1);
		int res2 = demandrepo.addDemand(new Demand());
		Assert.assertEquals(res1,res2);
		
	}
	
	@Test
	public void ItShouldUpdateDemand() throws NoRecordFound
	{
		int res1 = 5;
		LocalDate d = null;
		Mockito.when(jdbctemplate.update(Mockito.anyString(),(Object[])Mockito.any())).thenReturn(res1);
		int res2 = demandrepo.updateDemand(new Demand(25,"Ayush","a@gmail.com","Developer","Delhi","Python",2,d),25);
		Assert.assertEquals(res1,res2);
		
	}
	
	@Test
	public void ItShouldDeleteDemand() throws NoRecordFound
	{
		int res1 = 5;
		Mockito.when(jdbctemplate.update(Mockito.anyString(),(Object[])Mockito.any())).thenReturn(res1);
		int res2 = demandrepo.deleteDemand(25);
		Assert.assertEquals(res1,res2);
		
	}
	
	@Test
	public void ItShouldGetLatestDemand() throws NoRecordFound
	{
		Demand d = new Demand();
		Mockito.when(jdbctemplate.queryForObject(Mockito.anyString(),Mockito.any(DemandRowMapper.class))).thenReturn(d);
		Demand d2 = demandrepo.getLatestDemand();
		Assert.assertEquals(d,d2);
	}
	
}
