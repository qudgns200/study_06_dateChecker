package com.qudgns200.study6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qudgns200.study6.mapper.UserMapper;
import com.qudgns200.study6.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public String searchOne(int no) {
		// TODO Auto-generated method stub
		User user = new User();
		try {
			user = userMapper.selectOne(no);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(user == null) {
			return "NullVaule";
		} else {
			return user.getName();
		}
	}
	
//	@Autowired
//	private UserDao userDao;
//
//	@Override
//	public String searchOne(int no) {
//		// TODO Auto-generated method stub
//		String name = null;
//		try {
//			name = userDao.selectOne(no).getName();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return name;
//	}

}
