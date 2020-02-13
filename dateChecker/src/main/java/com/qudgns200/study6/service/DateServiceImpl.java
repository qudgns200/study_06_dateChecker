package com.qudgns200.study6.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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

	@Override
	public boolean putDate(User_Date user_date) {
		// TODO Auto-generated method stub
		return mapper.putDate(user_date) > 0 ? true : false;
	}

	@Override
	public boolean changeDate(User_Date user_date) {
		// TODO Auto-generated method stub
		return mapper.updateDate(user_date) > 0 ? true : false;
	}

	@Override
	public boolean delDate(User_Date user_date) {
		// TODO Auto-generated method stub
		return mapper.deleteDate(user_date) > 0 ? true : false;
	}

	@Override
	public Date strToDate(String input_date) {
		// TODO Auto-generated method stub
		Date to = null;
		SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			to = transFormat.parse(input_date);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return to;
	}
}
