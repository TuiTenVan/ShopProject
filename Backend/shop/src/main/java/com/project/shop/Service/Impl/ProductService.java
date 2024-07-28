package com.project.shop.Service.Impl;

import com.project.shop.Entity.Category;
import com.project.shop.Entity.Product;
import com.project.shop.Model.ProductDTO;
import com.project.shop.Repository.CategoryRepository;
import com.project.shop.Repository.ProductRepository;
import com.project.shop.Service.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public ProductDTO getProductById(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Not found product with id: " + productId)
        );
        Category category = categoryRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Not found category!")
        );
        return ProductDTO.builder()
                .productName(product.getName())
                .color(product.getColor())
                .type(product.getType())
                .description(product.getDescription())
                .price(product.getPrice())
                .discountAmount(product.getDiscountAmount())
                .build();
    }

    @Override
    @Transactional
    public void addProduct(ProductDTO productDTO) {
        Category category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(
                () -> new RuntimeException("Category not found"));
        Product product = Product.builder()
                .name(productDTO.getProductName())
                .description(productDTO.getDescription())
                .price(productDTO.getPrice())
                .discountAmount(productDTO.getDiscountAmount())
                .category(category)
                .build();
        productRepository.save(product);
    }

    @Override
    @Transactional
    public void updateProduct(Long productId, ProductDTO productDTO) {
        Product product = productRepository.findById(productId).orElseThrow(null);
        if(product != null) {
            Category category = categoryRepository.findById(productDTO.getCategoryId()).orElseThrow(
                    () -> new RuntimeException("Category not found")
            );
            product.setCategory(category);
            product.setName(productDTO.getProductName());
            product.setDescription(productDTO.getDescription());
            product.setPrice(productDTO.getPrice());
            product.setDiscountAmount(productDTO.getDiscountAmount());
            product.setColor(productDTO.getColor());
            product.setType(productDTO.getType());
            productRepository.save(product);
        }
    }

    @Override
    @Transactional
    public void deleteProduct(Long productId) {
        Product product = productRepository.findById(productId).orElseThrow(
                () -> new RuntimeException("Product not found")
        );
        productRepository.delete(product);
    }

}
