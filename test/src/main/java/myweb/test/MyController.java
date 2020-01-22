package myweb.test;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import myweb.Model.user;
import myweb.Service.userService;
 
@RestController
@SpringBootApplication(scanBasePackages = {"myweb"})
@MapperScan("myweb.Repository")
public class MyController {

    @Autowired
    private userService userService;
 
    @GetMapping("/{name}.html")
    public String page(@PathVariable final String name, final Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }

    @RequestMapping(value="/name")
    public List<user> selectUserList() {
        return userService.selectUserList();
    }

}