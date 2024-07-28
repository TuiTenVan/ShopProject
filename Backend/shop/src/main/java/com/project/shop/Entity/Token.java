package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Tokens")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Token extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tokenID;

    @ManyToOne
    @JoinColumn(name = "userID", nullable = false)
    private User user;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private java.util.Date expiresAt;
}
