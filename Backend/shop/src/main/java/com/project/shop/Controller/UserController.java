package com.project.shop.Controller;

import com.project.shop.Entity.User;
import com.project.shop.Model.UserDTO;
import com.project.shop.Service.IUserService;
import com.project.shop.Service.Impl.CloudinaryService;
import com.sun.tools.jconsole.JConsoleContext;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final IUserService userService;
    private final CloudinaryService cloudinaryService;

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<UserDTO>> getAllUser() {
        try {
            List<UserDTO> users = userService.getAllUser();
            return ResponseEntity.ok(users);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/create-user")
    public ResponseEntity<?> addUser(@RequestBody UserDTO userDTO) {
        try {
            User user = userService.addUser(userDTO);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/{userId}/uploadAvatar")
    public Map uploadAvatar(@RequestParam("avatar") MultipartFile file, @PathVariable Long userId) {
        return cloudinaryService.updateAvatar(file, userId);
    }

//    @PostMapping("/deleteAvatar")
//    public ResponseEntity<String> deleteAvatar(@RequestBody AvatarDeleteRequest request) {
//        try {
//            userService.deleteAvatar(request.getAvatarUrl());
//            return ResponseEntity.ok("Avatar deleted successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete avatar");
//        }
//    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        try{
            userService.updateUser(id, userDTO);
            return ResponseEntity.ok().build();
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        try{
            userService.deleteUser(id);
            return ResponseEntity.ok().build();
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
