package com.qudgns200.study6.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.qudgns200.study6.service.UserService;

@Controller
public class PageController {
	private UserService UserService;
	
	@RequestMapping("/{name}.html")
	public String page(@PathVariable String name, Model model) {
		model.addAttribute("name", UserService.searchOne(3));
        model.addAttribute("pageName", name);
        return "page";
    }
}
