package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "OrderItems")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemID;

    @ManyToOne
    @JoinColumn(name = "orderID", nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "productID", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double price;

    private Double discountAmount;

    private Boolean isPercentage;
}
