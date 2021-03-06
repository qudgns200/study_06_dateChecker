package com.qudgns200.study6.mapper;


import java.util.ArrayList;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.qudgns200.study6.model.User_Date;

@Mapper
@Repository
public interface DateMapper {
	
	public ArrayList<User_Date> getDate(String id);
	public int putDate(User_Date user_date);
	public int updateDate(User_Date user_date);
	public int deleteDate(User_Date user_date);
}
