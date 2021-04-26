package com.accolite.ayush.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.models.Audit;
import com.accolite.ayush.repository.AuditRepo;
import com.accolite.ayush.repository.DemandRepo;

@RestController
@RequestMapping(path="/audit")
public class AuditController {
	
	@Autowired
	AuditRepo auditrepo;
	
	@GetMapping(path="viewAll")
	public List<Audit> getAllDemands(){
		List<Audit> auditList = new ArrayList<>();
		auditList = auditrepo.getAllAudits();
		return auditList;
	}
	
	@PostMapping(path="add",produces=MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int addAudit(@RequestBody Audit a)
	{
		int val = auditrepo.addAudit(a);
		return val;
	}
}
