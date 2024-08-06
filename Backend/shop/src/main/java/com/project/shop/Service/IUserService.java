package com.project.shop.Service;

import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IUserService {
    List<UserDTO> getAllUser();
//    User addUser(UserDTO user);
    User addUser(UserDTO userDTO);
    void updateUser(Long id, UserDTO user);
    void deleteUser(Long userId);
//    String saveAvatar(MultipartFile file) throws IOException;
}
