package com.project.shop.Service;

import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;

public interface IAuthService {
    User createUser(UserDTO userDTO);
    String loginUser(UserDTO userDTO) throws Exception;
}
