package com.Virtusa.VirtusaBackend1.Service;

import com.Virtusa.VirtusaBackend1.Model.User;
import com.Virtusa.VirtusaBackend1.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;


    @Override
    public User getUserById(int policeId, String password) {
        Optional<User> userOptional = userRepository.findById(policeId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return user;
            }
        }
        return null;
    }

}
