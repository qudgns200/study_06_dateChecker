package com.qudgns200.study6.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.qudgns200.study6.model.User;

@Mapper
@Repository
public interface UserMapper {
	
	public User selectUser(String id);
	public int insertUser(User user);
	public int updateUser(User user);
	public int deleteUser(String id);
}
