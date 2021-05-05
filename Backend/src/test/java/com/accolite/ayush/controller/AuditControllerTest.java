package com.accolite.ayush.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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
import com.accolite.ayush.models.Audit;
import com.accolite.ayush.repository.AuditRepo;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = {AuditController.class})
public class AuditControllerTest {
	
	@Autowired
	public MockMvc mockMvc;
	
	@MockBean
	public AuditRepo auditrepo;
	
	@Autowired
	private ObjectMapper objectMapper;
	
	Audit demoAudit = new Audit(100,"Ayush Shah","a@gmail.com","Action performed","Current Date",17);
	
	@Test
	public void ItShouldGetAllAudits() throws Exception
	{
		Mockito.when(auditrepo.getAllAudits()).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/audit/viewAll")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldGetAuditByDemandId() throws Exception
	{
		Mockito.when(auditrepo.getAuditByDemandId(91)).thenReturn(new ArrayList<>());
		mockMvc.perform(get("/audit/byDemandId/91")).andExpect(status().isOk());
	}
	
	@Test
	public void ItShouldAddAudit() throws Exception
	{
		String json = objectMapper.writeValueAsString(demoAudit);
		Mockito.when(auditrepo.addAudit(demoAudit)).thenReturn(1);
		mockMvc.perform(post("/audit/add").contentType(MediaType.APPLICATION_JSON_VALUE).content(json).accept(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk());
		
	}

}
