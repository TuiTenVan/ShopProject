package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "ProductImages")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductImage extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageID;

    @ManyToOne
    @JoinColumn(name = "productID", nullable = false)
    private Product product;

    @Column(nullable = false)
    private String imageURL;
}
