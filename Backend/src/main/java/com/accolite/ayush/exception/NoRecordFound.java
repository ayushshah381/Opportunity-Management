package com.accolite.ayush.exception;

import java.time.LocalTime;

public class NoRecordFound extends Exception{

	private static final long serialVersionUID = 1L;
	
	@Override
	public String getMessage() {
		return "No record was found at "+LocalTime.now();
	}
	
}
