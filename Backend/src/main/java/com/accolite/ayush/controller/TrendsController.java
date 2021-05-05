package com.accolite.ayush.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.repository.TrendsRepo;

@RestController
@RequestMapping(path="/trends")
public class TrendsController {
	
	private static final Logger logger = LoggerFactory.getLogger(TrendsController.class);
	
	@Autowired
	TrendsRepo trepo;
	
	@GetMapping(path="location")
	@ResponseBody
	public List<List<?>> getDemandsByLoc() throws NoRecordFound{
		logger.info("TrendsController - getDemandsByLoc()");
		return trepo.getDemandsByLocation();
	}
	
	@GetMapping(path="skills")
	@ResponseBody
	public List<List<?>> getDemandsBySkills() throws NoRecordFound{
		logger.info("TrendsController - getDemandsBySkills()");
		return trepo.getDemandsBySkills();
	}
	
	@GetMapping(path="distinctYears")
	@ResponseBody
	public List<String> getAllYears() throws NoRecordFound
	{
		return trepo.getDistinctYears();
	}
	
	@GetMapping(path="distinctLocations")
	@ResponseBody
	public List<String> getAllLocations() throws NoRecordFound
	{
		return trepo.getDistinctLocations();
	}
	
	@GetMapping(path="distinctSkills")
	@ResponseBody
	public List<String> getAllSkills() throws NoRecordFound
	{
		return trepo.getDistinctSkills();
	}
	
	@GetMapping(path="yearLocations")
	@ResponseBody
	public List<List<Integer>> getTrendsLocations() throws NoRecordFound
	{
		List<List<Integer>> res = new ArrayList<>();
		List<String> locs = trepo.getDistinctLocations();
		List<String> yrs = trepo.getDistinctYears();
		for(int i=0;i<locs.size();i++)
		{
			List<Integer> list = new ArrayList<>();
			for(int j=0;j<yrs.size();j++)
			{
				list.add(trepo.getCountOfLocationsEachYear(yrs.get(j),locs.get(i)));
			}
			res.add(list);
		}
		return res;
	}
	
	@GetMapping(path="yearSkills")
	@ResponseBody
	public List<List<Integer>> getTrendsSkills() throws NoRecordFound
	{
		List<List<Integer>> res = new ArrayList<>();
		List<String> tskills = trepo.getDistinctSkills();
		List<String> yrs = trepo.getDistinctYears();
		for(int i=0;i<tskills.size();i++)
		{
			List<Integer> list = new ArrayList<>();
			for(int j=0;j<yrs.size();j++)
			{
				list.add(trepo.getCountOfSkillsEachYear(yrs.get(j),tskills.get(i)));
			}
			res.add(list);
		}
		return res;
	}
	
	@GetMapping(path="currentDistinctSkills")
	@ResponseBody
	public List<String> getCurrentDistinctSkills() throws NoRecordFound
	{
		List<String> res = trepo.getCurrentDistinctSkills();
		return res;
	}
	
	@GetMapping(path="currentDistinctLocations")
	@ResponseBody
	public List<String> getCurrentDistinctLocations() throws NoRecordFound
	{
		List<String> res = trepo.getCurrentDistinctLocations();
		return res;
	}
	
	@GetMapping(path="currentVacancy")
	@ResponseBody
	public List<List<Integer>> getCurrentVacancy() throws NoRecordFound
	{
		List<String> locs = trepo.getCurrentDistinctLocations();
		List<String> skills = trepo.getCurrentDistinctSkills();
		List<List<Integer>> res = new ArrayList<>();
		for(int i=0;i<skills.size();i++)
		{
			List<Integer> l = new ArrayList<>();
			for(int j=0;j<locs.size();j++)
			{
				l.add(trepo.getVacancies(locs.get(j), skills.get(i)).get(0));
			}
			res.add(l);
		}
		return res;
	}
}
