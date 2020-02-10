package com.qudgns200.study6.model;

import java.util.Date;

public class User_Date {
	private int no;
	private String id;
	private Date input_date;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Date getInput_date() {
		return input_date;
	}
	public void setInput_date(Date input_date) {
		this.input_date = input_date;
	}
	@Override
	public String toString() {
		return "User_Date [no=" + no + ", id=" + id + ", input_date=" + input_date + "]";
	}
}
