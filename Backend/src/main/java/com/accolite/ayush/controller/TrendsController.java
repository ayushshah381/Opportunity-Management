package com.accolite.ayush.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.repository.TrendsRepo;

@RestController
@RequestMapping(path="/trends")
public class TrendsController {
	
	@Autowired
	TrendsRepo trepo;
	
	@GetMapping(path="location")
	@ResponseBody
	public List<List<?>> getDemandsByLoc(){
		return trepo.getDemandsByLocation();
	}
	
	@GetMapping(path="skills")
	@ResponseBody
	public List<List<?>> getDemandsBySkills(){
		return trepo.getDemandsBySkills();
	}
}
