package com.Virtusa.VirtusaBackend1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class VirtusaBackend1Application {

	public static void main(String[] args) {
		SpringApplication.run(VirtusaBackend1Application.class, args);
	}

}
