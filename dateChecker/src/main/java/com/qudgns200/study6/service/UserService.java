package com.qudgns200.study6.service;

import org.springframework.stereotype.Service;
import com.qudgns200.study6.mapper.UserMapper;

@Service
public class UserService {

	private UserMapper userMapper;
	
	public String searchOne(int no) {
		String name = null;
		try {
			name = userMapper.selectOne(no).getName();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return name;
	}
}
