package com.accolite.ayush.models;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Audit {
	 int aid;
	 String username;
	 String useremail;
	 String action;
	 String date;
	 int demandId;
	 
	 public Audit() {}

	 
	public Audit(int aid, String username, String useremail, String action, String date, int demandId) {
		super();
		this.aid = aid;
		this.username = username;
		this.useremail = useremail;
		this.action = action;
		this.date = date;
		this.demandId = demandId;
	}
	
	


	public Audit(String username, String useremail, String action, String date, int demandId) {
		super();
		this.username = username;
		this.useremail = useremail;
		this.action = action;
		this.date = date;
		this.demandId = demandId;
	}


	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUseremail() {
		return useremail;
	}

	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getDemandId() {
		return demandId;
	}

	public void setDemandId(int demandId) {
		this.demandId = demandId;
	}
	 

}
