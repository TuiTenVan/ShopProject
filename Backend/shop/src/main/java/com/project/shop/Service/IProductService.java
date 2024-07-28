package com.project.shop.Service;

import com.project.shop.Model.ProductDTO;

public interface IProductService {
//    void getAllProduct();
    ProductDTO getProductById(Long productId);
    void addProduct(ProductDTO productDTO);
    void updateProduct(Long productId, ProductDTO productDTO);
    void deleteProduct(Long productId);
}
