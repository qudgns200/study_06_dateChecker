package com.qudgns200.study6.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.qudgns200.study6.model.User;

@Mapper
@Repository
public interface UserMapper {
	
	public User selectOne(int no) throws Exception;
}
