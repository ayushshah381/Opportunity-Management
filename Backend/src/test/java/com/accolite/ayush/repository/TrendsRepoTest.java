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
import org.springframework.jdbc.core.RowCallbackHandler;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TrendsRepoTest {
	@Mock
	JdbcTemplate jdbctemplate;
	
	@InjectMocks
	TrendsRepo trendsrepo;
	
	@Test
	public void ItShouldGetDemandsByLocation() throws NoRecordFound
	{
		List<List<?>> list1;
		trendsrepo.getDemandsByLocation("2021");
	}
	
	@Test
	public void ItShouldGetDemandsBySkills() throws NoRecordFound
	{
		List<List<?>> list1;
		trendsrepo.getDemandsBySkills("2021");
	}
}
