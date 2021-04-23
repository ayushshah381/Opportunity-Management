package com.accolite.ayush.controller;


import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;

import com.accolite.ayush.models.Demand;
import com.accolite.ayush.repository.DemandRepo;

@RestController
@RequestMapping(path="/demand")
public class DemandController {

	@Autowired
	DemandRepo demandrepo;
	
	@GetMapping(path="viewAll")
	public List<Demand> getAllDemands(){
		List<Demand> demandList = new ArrayList<>();
		demandList = demandrepo.getAllDemands();
		return demandList;
	}
	
	@GetMapping(path="{id}")
	public Demand getDemandById(@PathVariable int id)
	{
		Demand d = demandrepo.getDemandById(id);
		return d;
	}
	
	@PostMapping(path="add",produces=MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public int addDemand(@RequestBody Demand d)
	{
		int val = demandrepo.addDemand(d);
		return val;
	}
	
	@PutMapping(path="update/{id}")
    @ResponseBody
    public int updateOpportunity(@RequestBody Demand d,@PathVariable("id") int id){
        int val = demandrepo.updateDemand(d,id);
		return val;
    }
	
	@DeleteMapping(path="delete/{id}")
	@ResponseBody
	public int deleteOpportunity(@PathVariable("id") int id)
	{
		int index = demandrepo.deleteDemand(id);
		return index;
	}
}
