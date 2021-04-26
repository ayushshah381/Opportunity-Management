package com.accolite.ayush.models;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Audit {
	 int aid;
	 String username;
	 String useremail;
	 String action;
	 String date;
	
	 public Audit() {}
	 
	 public Audit(int aid, String username, String useremail, String action, String date) {
		super();
		this.aid = aid;
		this.username = username;
		this.useremail = useremail;
		this.action = action;
		Calendar calobj = Calendar.getInstance();
		this.date = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss").format(Calendar.getInstance().getTime());;
	}
	 
	 public Audit(String username, String useremail, String action, String date) {
			super();
			this.username = username;
			this.useremail = useremail;
			this.action = action;
			Calendar calobj = Calendar.getInstance();
			this.date = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss").format(Calendar.getInstance().getTime());;
		}

	@Override
	public String toString() {
		return "Audit [aid=" + aid + ", username=" + username + ", useremail=" + useremail + ", action=" + action
				+ ", date=" + date + "]";
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
	 
	 

}
