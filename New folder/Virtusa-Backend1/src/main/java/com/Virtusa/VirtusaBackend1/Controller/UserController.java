package com.Virtusa.VirtusaBackend1.Controller;

import com.Virtusa.VirtusaBackend1.Model.User;
import com.Virtusa.VirtusaBackend1.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserServiceImpl userService;


    @GetMapping("/{policeId}/{password}")
    public ResponseEntity<User> getUserById(@PathVariable int policeId ,@PathVariable String password) {
        User user = userService.getUserById(policeId,password);
        if(user!=null){
            return ResponseEntity.ok().body(user);
        }
        return ResponseEntity.notFound().build();

    }

}
