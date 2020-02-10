package com.qudgns200.study6;

import java.util.Date;
import java.util.Calendar;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.qudgns200.study6.model.User_Date;
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

	@Test
	void dateChecker() {
		
		Calendar today = Calendar.getInstance();
		Calendar dday = Calendar.getInstance();
		
		dday.set(2020, 2, 9);
		
		long day = dday.getTimeInMillis()/(24*60*60*1000);
		
		long tday = today.getTimeInMillis()/(24*60*60*1000);
		
		long count = tday - day;
		
		System.out.println(count);
	}

}
