package com.qudgns200.study6.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qudgns200.study6.model.User;
import com.qudgns200.study6.model.User_Date;
import com.qudgns200.study6.service.DateServiceImpl;
import com.qudgns200.study6.service.UserServiceImpl;

@Controller
public class AppController{

	@Autowired
	private UserServiceImpl uService;
	@Autowired
	private DateServiceImpl dService;

	private HttpSession session;
	
	@RequestMapping("/")
	public String basicPage(Model model) {
		model.addAttribute("pageName", "SignIn");
		return "page";
	}
	
	@RequestMapping("/{name}")
	public String basicPage(@PathVariable String name, Model model) {
		model.addAttribute("pageName", name);
		return "page";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public @ResponseBody int login(User user, HttpServletRequest req) {
		// return 0 => Right Value
		// return 1 => Not exist ID
		// return 2 => Wrong Password
		int result = 0;
		
		session = req.getSession(); // Get Session
		User selectUser = uService.getUser(user.getId());
		result = uService.compareUser(selectUser, user);
		if(result==0) session.setAttribute("ID", user.getId());
		return result;
    }

	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public @ResponseBody boolean join(User user) {
		return uService.signUpUser(user);
	}
	
	@RequestMapping("/getUserInfo")
	public @ResponseBody String getUserInfo(HttpServletRequest req) {
		session = req.getSession(); // Get Session
		return (String)session.getAttribute("ID");
	}
	
	@RequestMapping("/getDateInfo")
	public @ResponseBody ArrayList<HashMap<String, String>> getDateInfo(HttpServletRequest req) {
		session = req.getSession(); // Get Session
		String currentID = (String)session.getAttribute("ID");
		
		ArrayList<HashMap<String, String>> arr = dService.getDateInfo(currentID);
		return arr;
	}
	
	@RequestMapping(value = "/inputDate", method = RequestMethod.GET)
	public @ResponseBody boolean inputDate(String id, String input_date, HttpServletRequest req) {		
		User_Date user_date = new User_Date();
		user_date.setInput_date(dService.strToDate(input_date));
		user_date.setId(id);
		return dService.putDate(user_date) == true ? true : false;
	}
}
