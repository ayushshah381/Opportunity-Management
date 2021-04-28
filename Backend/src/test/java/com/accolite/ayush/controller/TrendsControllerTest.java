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
		Mockito.when(trendsrepo.getDemandsByLocation("2021")).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/location/2021")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetDemandsBySkills() throws Exception
	{
		Mockito.when(trendsrepo.getDemandsBySkills("2021")).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/trends/skills/2021")).andExpect(status().isOk());
	}


}
