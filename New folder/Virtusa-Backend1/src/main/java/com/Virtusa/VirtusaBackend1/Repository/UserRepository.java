package com.Virtusa.VirtusaBackend1.Repository;

import com.Virtusa.VirtusaBackend1.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    public User findByPassword(String password);
}
