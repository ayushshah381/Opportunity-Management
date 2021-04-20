package com.accolite.ayush.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Demand {
	private int did;
	private String ed_name;
	private String ed_email;
	private String description;
	private String location;
	private String skills;
	private int vacancy;
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate endDate;
	
	public Demand() {}

	public Demand(int did, String ed_name, String ed_email, String description, String location, String skills,
			int vacancy, LocalDate endDate) {
		super();
		this.did = did;
		this.ed_name = ed_name;
		this.ed_email = ed_email;
		this.description = description;
		this.location = location;
		this.skills = skills;
		this.vacancy = vacancy;
		this.endDate = endDate;
	}

	public Demand(String ed_name, String ed_email, String description, String location, String skills, int vacancy,
			LocalDate endDate) {
		super();
		this.ed_name = ed_name;
		this.ed_email = ed_email;
		this.description = description;
		this.location = location;
		this.skills = skills;
		this.vacancy = vacancy;
		this.endDate = endDate;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public String getEd_name() {
		return ed_name;
	}

	public void setEd_name(String ed_name) {
		this.ed_name = ed_name;
	}

	public String getEd_email() {
		return ed_email;
	}

	public void setEd_email(String ed_email) {
		this.ed_email = ed_email;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public int getVacancy() {
		return vacancy;
	}

	public void setVacancy(int vacancy) {
		this.vacancy = vacancy;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}
	
	@Override
	public String toString() {
		return ("Id: " + did + ", ED-Name: " + ed_name + ", ED-Email: " + ed_email + ", Description: " + description + ", Location: " + location + ", Skills: " + skills + ", Vacancy: " + vacancy + ", EndDate: " + endDate);
	}
	
	

}
