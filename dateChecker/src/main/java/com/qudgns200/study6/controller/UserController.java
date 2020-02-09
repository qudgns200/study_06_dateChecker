package com.qudgns200.study6.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.qudgns200.study6.model.User;
import com.qudgns200.study6.service.UserServiceImpl;

@RestController
@RequestMapping(value="/api")
public class UserController {

	@Autowired
	private UserServiceImpl service;

	private HttpSession session;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public int login(User user, HttpServletRequest req) {
		// return 0 => Right Value
		// return 1 => Not exist ID
		// return 2 => Wrong Password
		
		// Get Session
		session = req.getSession();
		
		User selectUser = service.getUser(user.getId());
			
		if(selectUser.getId() == null) {
			return 1;
		} else {
			if(user.getPassword().equals(selectUser.getPassword())) {
				session.setAttribute("ID", selectUser.getId());
				return 0;
			}
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

		if (service.signUpUser(user)) {
			model.addAttribute("pageName", "Main");
			return "page";
		} else {
			System.out.println("ERROR");
			return "Error22";
		}
	}
}
