package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Comments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comment extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentID;

    @ManyToOne
    @JoinColumn(name = "postID", nullable = false)
    private BlogPost post;

    @ManyToOne
    @JoinColumn(name = "userID", nullable = false)
    private User user;

    @Column(nullable = false)
    private String comment;

}
