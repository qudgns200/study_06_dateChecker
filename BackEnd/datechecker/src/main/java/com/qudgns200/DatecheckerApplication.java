package com.qudgns200;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value= {"com.qudgns200.mapper"})
public class DatecheckerApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatecheckerApplication.class, args);
	}

}
