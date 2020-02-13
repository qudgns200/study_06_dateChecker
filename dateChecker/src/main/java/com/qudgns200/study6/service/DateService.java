package com.qudgns200.study6.service;

import java.util.ArrayList;
import java.util.Date;

import com.qudgns200.study6.model.User_Date;

public interface DateService {

	public ArrayList<Long> getDateInfo(String id);
	public boolean putDate(User_Date user_date);
	public boolean changeDate(User_Date user_date);
	public boolean delDate(User_Date user_date);
	public Date strToDate(String input_date);
}
