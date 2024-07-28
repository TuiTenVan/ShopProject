package com.project.shop.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private String phoneNumber;
    private String email;
    private String password;
    private String fullName;
    private String address;
    private String gender;
    private String birthDate;
}
