package com.project.shop.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {
    private String productName;
    private String description;
    private Integer discountAmount;
    private Integer price;
    private Long categoryId;
    private String type;
    private String color;
}
