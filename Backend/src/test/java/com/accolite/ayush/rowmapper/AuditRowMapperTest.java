package com.accolite.ayush.rowmapper;

import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.test.context.junit4.SpringRunner;

import com.accolite.ayush.exception.NoRecordFound;
import com.accolite.ayush.models.Audit;
import com.accolite.ayush.models.Demand;
import com.accolite.ayush.repository.AuditRepo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AuditRowMapperTest {
	
	@Mock
    private JdbcTemplate jdbcTemplate;

    @InjectMocks
    private AuditRepo arepo;
    
    @SuppressWarnings("unchecked")
	@Test
    public void testGetAllUsers() throws NoRecordFound {

        Mockito.when(jdbcTemplate.query(
            ArgumentMatchers.anyString(),ArgumentMatchers.any(RowMapper.class)))
            .thenAnswer((invocation) -> {

                RowMapper<Audit> rowMapper = (RowMapper<Audit>) invocation.getArgument(1);
                ResultSet rs = Mockito.mock(ResultSet.class);

                // Mock ResultSet to return two rows.
                Mockito.when(rs.getInt(ArgumentMatchers.eq("aid")))
                    .thenReturn(506, 400);
                Mockito.when(rs.getString(ArgumentMatchers.eq("username")))
                    .thenReturn("Jim Carrey", "John Travolta");

                List<Audit> users = new ArrayList<>();
                users.add(rowMapper.mapRow(rs, 0));
                users.add(rowMapper.mapRow(rs, 1));

                return users;
        });

        List<Audit> users = arepo.getAllAudits();
        
        // Assert First Row
        assertFirstUser(users.get(0));

        // Assert Second Row
        assertSecondUser(users.get(1));
    }

	public void assertFirstUser(Audit d) {
        Assert.assertEquals(Integer.valueOf(506), Integer.valueOf(d.getAid()));
        Assert.assertEquals("Jim Carrey", d.getUsername());
    }
    

	public void assertSecondUser(Audit d) {
    	Assert.assertEquals(Integer.valueOf(400), Integer.valueOf(d.getAid()));
        Assert.assertEquals("John Travolta",d.getUsername());
    }

}
