package com.qudgns200.study6.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.qudgns200.study6.mapper.UserMapper;
import com.qudgns200.study6.model.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper mapper;

	@Override
	public String getUser(String id) {
		// TODO Auto-generated method stub
		return mapper.selectUser(id).getId();
	}

	@Override
	public int signUpUser(User user) {
		// TODO Auto-generated method stub
		try {
			mapper.insertUser(user);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return 1;
		}
		return 0;
	}

	@Override
	public int modifyUser(User user) {
		// TODO Auto-generated method stub
		try {
			mapper.updateUser(user);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return 1;
		}
		return 0;
	}

	@Override
	public int outUser(String id) {
		// TODO Auto-generated method stub
		try {
			mapper.deleteUser(id);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return 1;
		}
		return 0;
	}
}
