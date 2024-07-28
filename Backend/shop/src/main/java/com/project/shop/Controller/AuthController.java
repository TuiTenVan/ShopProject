package com.project.shop.Controller;

import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;
import com.project.shop.Response.LoginResponse;
import com.project.shop.Response.RegisterResponse;
import com.project.shop.Service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.Map;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final IUserService userService;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> createUser(@RequestBody UserDTO userDTO){
        RegisterResponse registerResponse = new RegisterResponse();
        try {
            User user = userService.createUser(userDTO);
            registerResponse.setUser(user);
            return ResponseEntity.ok(registerResponse);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(registerResponse);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserDTO userDTO){
        LoginResponse loginResponse = new LoginResponse();
        try {
            String token = userService.loginUser(userDTO);
            return ResponseEntity.ok(loginResponse.builder()
                            .token(token)
                    .build());
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(loginResponse);
        }
    }
}
