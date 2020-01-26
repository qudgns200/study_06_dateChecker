package com.qudgns200;

import java.sql.Connection;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.qudgns200.mapper.UserMapper;
import com.qudgns200.model.User;

@SpringBootTest
class DatecheckerApplicationTests {
	
//	@Autowired
//	private DataSource ds;
	
//	@Autowired
//	private SqlSessionFactory sqlSession;
	
	@Autowired
	private UserMapper uMapper;

	@Test
	void contextLoads() {
	}
	
//	@Test
//	public void testSqlSession() throws Exception {
//		System.out.println("sqlSession : " + sqlSession);
//	}
	
//	@Test
//	public void testConnection() throws Exception {
//		
//		System.out.println("ds : " + ds);
//		Connection con = ds.getConnection();
//		System.out.println("con : " + con);
//		con.close();
//		
//	}
	
	@Test
	public void testSQL() throws Exception {
		User user = new User();
		user.setNo(3);
		user.setName("LEE");
		uMapper.create(user);
		
		System.out.println(uMapper.read(3).toString());
	}

}
