package com.accolite.ayush.controller;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.repository.DemandRepo;

@RestController
@RequestMapping(path="/demand")
public class DemandController {

	@Autowired
	DemandRepo demandrepo;
	
	private static final Logger logger = LoggerFactory.getLogger(DemandController.class);
	
	@GetMapping(path="viewAll")
	public List<Demand> getAllDemands() throws NoRecordFound{
		logger.info("DemandController - getAllDemands()");
		List<Demand> demandList = new ArrayList<>();
		demandList = demandrepo.getAllDemands();
		return demandList;
	}
	
	@GetMapping(path="{id}")
	public Demand getDemandById(@PathVariable int id) throws NoRecordFound
	{
		logger.info("DemandController - getDemandById()");
		Demand d = demandrepo.getDemandById(id);
		return d;
	}
	
	@PostMapping(path="add",produces=MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int addDemand(@RequestBody Demand d)
	{
		logger.info("DemandController - addDemand()");
		int val = demandrepo.addDemand(d);
		return val;
	}
	
	@PutMapping(path="update/{id}")
    @ResponseBody
    public int updateDemand(@RequestBody Demand d,@PathVariable("id") int id){
		logger.info("DemandController - updateDemand()");
		int val = demandrepo.updateDemand(d,id);
		return val;
    }
	
	@DeleteMapping(path="delete/{id}")
	@ResponseBody
	public int deleteDemand(@PathVariable("id") int id)
	{
		logger.info("DemandController - deleteDemand()");
		int index = demandrepo.deleteDemand(id);
		return index;
	}
}
