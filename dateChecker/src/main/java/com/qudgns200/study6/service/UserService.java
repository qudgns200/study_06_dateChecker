package com.qudgns200.study6.service;

import com.qudgns200.study6.model.User;

public interface UserService {

	public User getUser(String id);
	public boolean signUpUser(User user);
	public boolean modifyUser(User user);
	public boolean outUser(String id);
	public int compareUser(User user1, User user2);
}
