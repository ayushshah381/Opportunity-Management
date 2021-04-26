package com.accolite.ayush.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.repository.TrendsRepo;

@RestController
@RequestMapping(path="/trends")
public class TrendsController {
	
	@Autowired
	TrendsRepo trepo;
	
	@GetMapping(path="location/{year}")
	@ResponseBody
	public List<List<?>> getDemandsByLoc(@PathVariable("year") String year){
		return trepo.getDemandsByLocation(year);
	}
	
	@GetMapping(path="skills/{year}")
	@ResponseBody
	public List<List<?>> getDemandsBySkills(@PathVariable("year") String year){
		return trepo.getDemandsBySkills(year);
	}
}
