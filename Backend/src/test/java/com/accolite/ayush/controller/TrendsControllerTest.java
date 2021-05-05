package com.accolite.ayush.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.repository.DemandRepo;
import com.accolite.ayush.repository.TrendsRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = {TrendsController.class})
public class TrendsControllerTest {
	
	@Autowired
	public MockMvc mockMvc;
	
	@MockBean
	public TrendsRepo trendsrepo;
	
	@Test
	public void ItShouldGetDemandsByLocation() throws Exception
	{
		Mockito.when(trendsrepo.getDemandsByLocation()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/location")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetDemandsBySkills() throws Exception
	{
		Mockito.when(trendsrepo.getDemandsBySkills()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/skills")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetAllLocations() throws Exception
	{
		Mockito.when(trendsrepo.getDistinctLocations()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/distinctLocations")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetAllSkills() throws Exception
	{
		Mockito.when(trendsrepo.getDistinctSkills()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/distinctSkills")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetAllYears() throws Exception
	{
		Mockito.when(trendsrepo.getDistinctYears()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/distinctYears")).andExpect(status().isOk());
	}

	
	@Test
	public void ItShouldGetTrendsLocation() throws Exception
	{
		mockMvc.perform(get("/trends/yearLocations")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetTrendsSkills() throws Exception
	{
		mockMvc.perform(get("/trends/yearSkills")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetCurrentDistinctLocations() throws Exception
	{
		Mockito.when(trendsrepo.getCurrentDistinctLocations()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/currentDistinctLocations")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetCurrentDistinctSkills() throws Exception
	{
		Mockito.when(trendsrepo.getCurrentDistinctSkills()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/currentDistinctSkills")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetCurrentVacancy() throws Exception
	{
		mockMvc.perform(get("/trends/currentVacancy")).andExpect(status().isOk());
	}


}
