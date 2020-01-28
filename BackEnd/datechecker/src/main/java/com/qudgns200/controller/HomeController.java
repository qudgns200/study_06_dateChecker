package com.qudgns200.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController{
	@RequestMapping("/{name}")
	public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }
	
	@RequestMapping("/")
	public String hello() {
		System.out.println("내프로젝트의 루트경로는?  " + System.getProperty("user.dir")); 
        return "hello";
    }
}
