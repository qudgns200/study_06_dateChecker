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
	public User getUser(String id) {
		// TODO Auto-generated method stub
		return mapper.selectUser(id);
	}

	@Override
	public boolean signUpUser(User user) {
		// TODO Auto-generated method stub
		return mapper.insertUser(user) > 0 ? true : false;
	}

	@Override
	public boolean modifyUser(User user) {
		// TODO Auto-generated method stub
		return mapper.updateUser(user) > 0 ? true : false;
	}

	@Override
	public boolean outUser(String id) {
		// TODO Auto-generated method stub
		return mapper.deleteUser(id) > 0 ? true : false;
	}
}
