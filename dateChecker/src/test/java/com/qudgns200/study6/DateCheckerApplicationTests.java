package com.qudgns200.study6;

import java.sql.Connection;
import java.util.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

import javax.inject.Inject;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.qudgns200.study6.mapper.UserMapper;
import com.qudgns200.study6.model.User;
import com.qudgns200.study6.model.User_Date;
import com.qudgns200.study6.service.UserService;
import com.qudgns200.study6.service.UserServiceImpl;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
//@ContextConfiguration(locations = {"classpath:application.properties"})
class DateCheckerApplicationTests {

//	@Autowired
//	private UserMapper userMapper;

	@Autowired
	private UserServiceImpl userService;

//	@Inject
//	private DataSource ds;
//	
//	@Inject
//	private SqlSessionFactory sqlFactory;

//	@Test
//	public void userTest() throws Exception {
//		User user = new User();
//		user.setNo(4);
//		user.setName("Abi");
//		
//		if(userMapper.selectOne(4).toString()==null) {
//			System.out.println("NuLLNULLNULL");
//		} else {
//			System.out.println(userMapper.selectOne(4).toString());
//		}
//	}

//	@Test
//	public void setUp() {
//		User user = new User();
//		user.setNo(4);
//		user.setName("Abi");
//		
//		System.out.println(UserService.searchOne(4));
//	}

//	@Test
//	void testConnection() {
//		try {
//			Connection con = ds.getConnection();
//			SqlSession session = sqlFactory.openSession();
//			System.out.println("con = " + con);
//			System.out.println("session = " + session);
//		} catch (Exception e) {
//			// TODO: handle exception
//			e.printStackTrace();
//		}
//	}
	
	
	public User_Date dateInput() throws Exception {
		User_Date dates = new User_Date();
		dates.setNo(1);
		dates.setId("1");
		Date testDay = new Date();
		testDay.setYear(Calendar.YEAR + 119);
		testDay.setMonth(Calendar.FEBRUARY);
		testDay.setDate(9);
		dates.setInput_date(testDay);
		
		System.out.println("dates.getInput_date() : " + dates.getInput_date());
		
		return dates;
	}

	@Test
	void dateChecker() {
		User_Date dates = new User_Date();
		
		try {
			dates = dateInput();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(new Date());
		
		Calendar today = Calendar.getInstance();
		System.out.println(today);
		long tday = today.getTimeInMillis() / (24 * 60 * 60 * 1000);
		
		Calendar dday = Calendar.getInstance();
		dday.set(dates.getInput_date().getYear(), dates.getInput_date().getMinutes(), dates.getInput_date().getDay());
		
		long ldday = dday.getTimeInMillis() / (24 * 60 * 60 * 1000);

		System.out.println(tday-ldday);
	}

}
