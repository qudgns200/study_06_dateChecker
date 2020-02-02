package com.qudgns200.study6.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.qudgns200.study6.service.UserServiceImpl;

@RestController
public class apiController {
	
	@Autowired
	private UserServiceImpl UserService;

	@RequestMapping("/name")
	public String nameApi(@RequestParam int no) {
		return UserService.searchOne(no);
	}
}
