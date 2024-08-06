package com.project.shop.Service.Impl;

import com.cloudinary.Cloudinary;
import com.project.shop.Entity.Role;
import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;
import com.project.shop.Repository.RoleRepository;
import com.project.shop.Repository.UserRepository;
import com.project.shop.Service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public List<UserDTO> getAllUser() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOs = new ArrayList<>();
        for (User user : users) {
            if(user.isActive()){
                UserDTO userDTO = UserDTO.builder()
                        .userId(user.getUserID())
                        .fullName(user.getFullName())
                        .address(user.getAddress())
                        .email(user.getEmail())
                        .avatar(user.getAvatar())
                        .birthDate(user.getBirthDate())
                        .gender(user.getGender())
                        .phoneNumber(user.getPhoneNumber())
                        .active(user.isActive())
                        .build();
                Role role = roleRepository.findById(user.getRole().getRoleID()).orElse(null);
                assert role != null;
                if(role.getRoleName().equals("admin")){
                    userDTO.setRole("Admin");
                }
                else{
                    userDTO.setRole("Người dùng");
                }
                userDTOs.add(userDTO);
            }
        }
        return userDTOs;
    }


    @Override
    public User addUser(UserDTO userDTO) {
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
                .isActive(true)
                .build();
        String password = userDTO.getPassword();
        user.setPassword(passwordEncoder.encode(password));
        Role role = roleRepository.findByRoleName(userDTO.getRole());
        user.setRole(role);
        return userRepository.save(user);
    }

    @Override
    public void updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElse(null);
        if(user != null) {
            user.setFullName(userDTO.getFullName());
            user.setEmail(userDTO.getEmail());
            user.setAddress(userDTO.getAddress());
            user.setPhoneNumber(userDTO.getPhoneNumber());
            user.setBirthDate(userDTO.getBirthDate());
            user.setGender(userDTO.getGender());
            user.setAvatar(userDTO.getAvatar());
            user.setActive(true);
            Role role;
            if(userDTO.getRole().equals("admin")){
                role = roleRepository.findByRoleName("admin");
            }
            else {
                role = roleRepository.findByRoleName("user");
            }
            user.setRole(role);
            userRepository.save(user);
        }
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        assert user != null;
        user.setActive(false);
        userRepository.save(user);
    }

}
