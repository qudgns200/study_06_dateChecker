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
		
		// Calculate a Today
		Calendar today = Calendar.getInstance();		
		long tday = today.getTimeInMillis()/(24*60*60*1000);
		
		ArrayList<User_Date> arr = mapper.getDate(id);
		
		System.out.println("day : " + arr.get(0).getInput_date());
		
		ArrayList<Long> diff = new ArrayList<Long>();
		
		for(int i=0; i<arr.size(); i++) {
			Calendar dday = new GregorianCalendar(arr.get(i).getInput_date().getYear()+1900,
					arr.get(i).getInput_date().getMonth()+1,
					arr.get(i).getInput_date().getDay()					
					);
			diff.add(tday-(dday.getTimeInMillis()/(24*60*60*1000)));
		}
		
		System.out.println("diff : " + diff.toString());
		
		return diff;
	}
}
