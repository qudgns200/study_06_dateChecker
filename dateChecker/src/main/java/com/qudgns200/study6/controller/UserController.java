package com.qudgns200.study6.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qudgns200.study6.model.User;
import com.qudgns200.study6.service.UserServiceImpl;

@Controller
public class UserController {
	
	@Autowired
	UserServiceImpl service;
	
	@RequestMapping("/{name}")
	public String otherPage(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }
	
	@RequestMapping("/")
	public String basicPage(Model model) {
		model.addAttribute("pageName", "SignIn");
        return "page";
    }
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public @ResponseBody int login(@RequestBody User user) {
		// return 0 => Right Value
		// return 1 => Not exist ID
		// return 2 => Wrong Password
		User selectUser = service.getUser(user.getId());
		
		if(selectUser == null) {
			return 1;
		} else {
			if(user.getPassword().equals(selectUser.getPassword())) return 0;
			else return 2;
		}
    }
	
	@RequestMapping("/join")
	public String join(HttpServletRequest req, Model model) {
		User user = new User();
		user.setId(req.getParameter("id"));
		user.setPassword(req.getParameter("password"));
		user.setName(req.getParameter("name"));
		user.setEmail(req.getParameter("email"));
		
		if(service.signUpUser(user)) {
			model.addAttribute("pageName", "Main");
			return "page";
		} else {
			System.out.println("ERROR");
			return "Error22";
		}
	}
}
