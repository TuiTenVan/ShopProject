package com.project.shop.Response;

import com.fasterxml.jackson.annotation.JsonProperty;

import com.project.shop.Entity.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterResponse {

    @JsonProperty("user")
    private User user;
}
