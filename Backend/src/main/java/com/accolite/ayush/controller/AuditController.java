package com.accolite.ayush.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Audit;
import com.accolite.ayush.repository.AuditRepo;
import com.accolite.ayush.repository.DemandRepo;

@RestController
@RequestMapping(path="/audit")
public class AuditController {
	
	private static final Logger logger = LoggerFactory.getLogger(AuditController.class);
	
	@Autowired
	AuditRepo auditrepo;
	
	@GetMapping(path="viewAll")
	public List<Audit> getAllAudits() throws NoRecordFound{
		logger.info("Audit Controller - getAllAudits()");
		List<Audit> auditList = new ArrayList<>();
		auditList = auditrepo.getAllAudits();
		return auditList;
	}
	
	@PostMapping(path="add",produces=MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int addAudit(@RequestBody Audit a)
	{
		logger.info("Audit Controller - addAudit()");
		int val = auditrepo.addAudit(a);
		return val;
	}
}
