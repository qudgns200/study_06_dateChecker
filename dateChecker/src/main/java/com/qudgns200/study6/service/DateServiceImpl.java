package com.qudgns200.study6.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.qudgns200.study6.mapper.DateMapper;
import com.qudgns200.study6.model.User_Date;

@Service
public class DateServiceImpl implements DateService {
	
	@Autowired
	private DateMapper mapper;

	@Override
	public ArrayList<Long> getDateInfo(String id) {
		// TODO Auto-generated method stub
		
		Calendar today = Calendar.getInstance(); // Get Today
		Calendar dDay = Calendar.getInstance(); 
		
		long tday = today.getTimeInMillis()/(24*60*60*1000);
		
		ArrayList<User_Date> arr = mapper.getDate(id); // Days Which User entered
		ArrayList<Long> diff = new ArrayList<Long>(); // For return Values
		
		for(int i=0; i<arr.size(); i++) {
			dDay.set(arr.get(i).getInput_date().getYear()+1900, arr.get(i).getInput_date().getMonth()+1, arr.get(i).getInput_date().getDay()-20);
			diff.add(tday-(dDay.getTimeInMillis()/(24*60*60*1000)));
		}
		
		return diff;
	}
}
