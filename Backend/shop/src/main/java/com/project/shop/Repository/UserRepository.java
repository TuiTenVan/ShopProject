package com.project.shop.Repository;

import com.project.shop.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByPhoneNumber(String phoneNumber);
}
