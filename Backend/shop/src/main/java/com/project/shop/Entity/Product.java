package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "Products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productID;

    @Column(nullable = false)
    private String name;

    private String description;

    private String color;

    private String type;

    @Column(nullable = false)
    private Integer price;

    @ManyToOne
    @JoinColumn(name = "categoryID", nullable = false)
    private Category category;

    private Integer discountAmount;

    private Boolean isPercentage;

}
