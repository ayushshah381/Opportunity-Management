package com.accolite.ayush.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDate;
import java.util.ArrayList;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.repository.DemandRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = {DemandController.class})
public class DemandControllerTest {
	
	@Autowired
	public MockMvc mockMvc;
	
	@MockBean
	public DemandRepo demandrepo;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	LocalDate currDate = null;
	public Demand demoDemand = new Demand(26,"Ayush","a@gmail.com","Developer","Delhi","Python",2,currDate);;
	
	
	@Test
	public void ItShouldGetAllDemands() throws Exception
	{
		Mockito.when(demandrepo.getAllDemands()).thenReturn(new ArrayList<Demand>());
		mockMvc.perform(get("/demand/viewAll")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetCurrentDemands() throws Exception
	{
		Mockito.when(demandrepo.getCurrentDemands()).thenReturn(new ArrayList<Demand>());
		mockMvc.perform(get("/demand/current")).andExpect(status().isOk());
	}
	
	
	@Test
	public void ItShouldGetDemandById() throws Exception
	{
		Mockito.when(demandrepo.getDemandById(1)).thenReturn(new Demand());
		mockMvc.perform(get("/demand/1")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetLatestDemand() throws Exception
	{
		Mockito.when(demandrepo.getLatestDemand()).thenReturn(new Demand());
		mockMvc.perform(get("/demand/latest")).andExpect(status().isOk());
	}
	
	
	
	@Test
	public void ItShouldAddDemand() throws Exception
	{
		String json = objectMapper.writeValueAsString(demoDemand);
		Mockito.when(demandrepo.addDemand(demoDemand)).thenReturn(1);
		mockMvc.perform(post("/demand/add").contentType(MediaType.APPLICATION_JSON_VALUE).content(json).accept(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldUpdateDemand() throws Exception
	{
		String json = objectMapper.writeValueAsString(demoDemand);
		Mockito.when(demandrepo.updateDemand(demoDemand, 26)).thenReturn(1);
		mockMvc.perform(put("/demand/update/26").contentType(MediaType.APPLICATION_JSON_VALUE).content(json).accept(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldDeleteDemand() throws Exception
	{
		Mockito.when(demandrepo.deleteDemand(26)).thenReturn(1);
		mockMvc.perform(delete("/demand/delete/26")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetDemandFilter() throws Exception
	{
		Mockito.when(demandrepo.getDemandsFilter("Mumbai","Java")).thenReturn(new ArrayList<Demand>());
		mockMvc.perform(get("/demand/Mumbai/Java")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetCurrentDemandFilter() throws Exception
	{
		Mockito.when(demandrepo.getCurrentDemandsFilter("Mumbai","Java")).thenReturn(new ArrayList<Demand>());
		mockMvc.perform(get("/demand/current/Mumbai/Java")).andExpect(status().isOk());
	}

}
