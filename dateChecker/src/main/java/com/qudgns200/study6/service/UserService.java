package com.qudgns200.study6.service;

import com.qudgns200.study6.model.User;

public interface UserService {

	public String getUser(String id);
	public int signUpUser(User user);
	public int modifyUser(User user);
	public int outUser(String id);
}
