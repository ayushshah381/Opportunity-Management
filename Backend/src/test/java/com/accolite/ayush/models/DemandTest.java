package com.accolite.ayush.models;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemandTest {
	
	@Test
	public void ItShouldCreateDemand() throws Exception
	{
		LocalDate dat = null;
		Demand d = new Demand("Ayush","a@gmail.com","Analyst","Mumbai","SQL",1,dat);
		String s = d.toString();
	}

}
