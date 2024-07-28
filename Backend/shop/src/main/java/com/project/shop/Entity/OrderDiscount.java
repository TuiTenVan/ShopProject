package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "OrderDiscounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDiscount extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderDiscountID;

    @ManyToOne
    @JoinColumn(name = "orderID", nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "discountID", nullable = false)
    private Discount discount;

    @Column(nullable = false)
    private Double discountAmount;
}
