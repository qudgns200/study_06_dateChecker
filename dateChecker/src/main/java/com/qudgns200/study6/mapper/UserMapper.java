package com.qudgns200.study6.mapper;

import org.apache.ibatis.annotations.Insert;

import com.qudgns200.study6.model.User;;

public interface UserMapper {
	@Insert("insert into user values(#{no}, #{name});")
	public void create(User user) throws Exception;
	
	public User read(int no) throws Exception;
}
