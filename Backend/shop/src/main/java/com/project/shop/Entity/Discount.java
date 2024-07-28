package com.project.shop.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Discounts")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Discount extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long discountID;

    @Column(unique = true, nullable = false)
    private String code;

    private String description;

    @Column(nullable = false)
    private Double discountAmount;

    @Column(nullable = false)
    private Boolean isPercentage;

    @Column(nullable = false)
    private java.sql.Date startDate;

    @Column(nullable = false)
    private java.sql.Date endDate;

    @Column(nullable = false)
    private Boolean active;
}
