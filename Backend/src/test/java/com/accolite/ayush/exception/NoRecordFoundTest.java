package com.accolite.ayush.exception;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.repository.DemandRepo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class NoRecordFoundTest {
	
	@Test
	public void ItShouldTestNoRecordFound()
	{
		NoRecordFound e = new NoRecordFound();
		e.getMessage();
	}
}
