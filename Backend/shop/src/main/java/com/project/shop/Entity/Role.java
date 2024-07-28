package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roleID;

    @Column(unique = true, nullable = false)
    private String roleName;
}
