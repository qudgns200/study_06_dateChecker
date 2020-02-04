package com.qudgns200.study6.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
	
	@RequestMapping("/{name}")
	public String page1(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }
	
	@RequestMapping("/")
	public String page(Model model) {
		model.addAttribute("pageName", "SignIn");
        return "page";
    }
	
}
