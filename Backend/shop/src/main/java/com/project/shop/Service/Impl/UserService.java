package com.project.shop.Service.Impl;

import com.project.shop.Entity.Role;
import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;
import com.project.shop.Repository.RoleRepository;
import com.project.shop.Repository.UserRepository;
import com.project.shop.Service.IUserService;
import com.project.shop.Utils.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;

    @Override
    public User createUser(UserDTO userDTO) {
        String phoneNumber = userDTO.getPhoneNumber();
        if(userRepository.findByPhoneNumber(phoneNumber) != null) {
            throw new RuntimeException("Phone number already exists");
        }
        User user = User.builder()
                .fullName(userDTO.getFullName())
                .email(userDTO.getEmail())
                .phoneNumber(phoneNumber)
                .gender(userDTO.getGender())
                .address(userDTO.getAddress())
                .birthDate(userDTO.getBirthDate())
                .build();
        String password = userDTO.getPassword();
        user.setPassword(passwordEncoder.encode(password));
        Role role = roleRepository.findByRoleName("user");
        user.setRole(role);
        return userRepository.save(user);
    }

    @Override
    public String loginUser(UserDTO userDTO) throws Exception{
        User user = userRepository.findByPhoneNumber(userDTO.getPhoneNumber());
        if(!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            throw new RuntimeException("Wrong password");
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                userDTO.getPhoneNumber(), userDTO.getPassword(), user.getAuthorities());
        authenticationManager.authenticate(authenticationToken);
        return jwtTokenUtil.generateToken(user);
    }
}
