package com.accolite.ayush.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.exception.NoRecordFound;
import org.springframework.jdbc.core.RowCallbackHandler;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TrendsRepoTest {
	@Mock
	JdbcTemplate jdbctemplate;
	
	@Autowired
	TrendsRepo trendsrepo;
	
	@Test
	public void ItShouldGetDemandsByLocation() throws NoRecordFound
	{
		List<List<?>> li = trendsrepo.getDemandsByLocation();
		Assert.assertEquals(2, li.size());
	}
	
	@Test
	public void ItShouldGetDemandsBySkills() throws NoRecordFound
	{
		List<List<?>> list1=trendsrepo.getDemandsBySkills();
		Assert.assertEquals(2,list1.size());
	}
	
	@Test
	public void ItShouldGetDistinctYears() throws NoRecordFound
	{
		List<String> res = trendsrepo.getDistinctYears();
		Assert.assertEquals(4, res.size());
	}
	
	@Test
	public void ItShouldGetDistinctLocations() throws NoRecordFound
	{
		List<String> res = trendsrepo.getDistinctLocations();
		Assert.assertEquals(5, res.size());
	}
	
	@Test
	public void ItShouldGetDistinctSkills() throws NoRecordFound
	{
		List<String> res = trendsrepo.getDistinctSkills();
		Assert.assertEquals(10, res.size());
	}
	
	@Test
	public void ItShouldGetCountOfLocationsEachYear() throws NoRecordFound
	{
		int res = trendsrepo.getCountOfLocationsEachYear("2019","Mumbai");
		Assert.assertEquals(3,res);
	}
	
	@Test
	public void ItShouldGetCountOfSkillsEachYear() throws NoRecordFound
	{
		int res = trendsrepo.getCountOfSkillsEachYear("2019","SQL");
		Assert.assertEquals(3,res);
	}
	
	@Test
	public void ItShouldGetCurrentDistinctLocations() throws NoRecordFound
	{
		List<String> res = trendsrepo.getCurrentDistinctLocations();
		Assert.assertEquals(5, res.size());
	}
	
	@Test
	public void ItShouldGetCurrentDistinctSkills() throws NoRecordFound
	{
		List<String> res = trendsrepo.getCurrentDistinctSkills();
		Assert.assertEquals(4, res.size());
	}
	
	@Test
	public void ItShouldGetVacancies() throws NoRecordFound
	{
		List<Integer> res = trendsrepo.getVacancies("Mumbai", "Java");
		Assert.assertEquals(1, res.size());
	}
	
	
}
