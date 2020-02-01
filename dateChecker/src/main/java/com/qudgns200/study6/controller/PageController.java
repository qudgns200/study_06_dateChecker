package com.qudgns200.study6.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qudgns200.study6.service.UserServiceImpl;

@Controller
public class PageController {
	
	@Autowired
	private UserServiceImpl UserService;
	
	@RequestMapping("/{name}.html")
	public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }
	
	@RequestMapping("/name")
	public String nameApi(@RequestParam int no) {
		return UserService.searchOne(no);
	}
	
	
}
