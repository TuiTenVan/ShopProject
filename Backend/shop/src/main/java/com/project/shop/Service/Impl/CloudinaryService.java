package com.project.shop.Service.Impl;

import com.cloudinary.Cloudinary;
import com.project.shop.Entity.Product;
import com.project.shop.Entity.ProductImage;
import com.project.shop.Repository.ProductImageRepository;
import com.project.shop.Repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CloudinaryService {
    private final Cloudinary cloudinary;
    private final ProductImageRepository productImageRepository;
    private final ProductRepository productRepository;

    public List<Map> uploadFiles(MultipartFile[] files, Long productId) {
        List<Map> uploadResults = new ArrayList<>();
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        for (MultipartFile file : files) {
            try {
                Map data = this.cloudinary.uploader().upload(file.getBytes(), Map.of());
                ProductImage productImage = new ProductImage();
                productImage.setImageURL(data.get("url").toString());
                productImage.setProduct(product);
                productImageRepository.save(productImage);
                uploadResults.add(data);
            } catch (IOException io) {
                throw new RuntimeException("Image upload fail", io);
            }
        }
        return uploadResults;
    }
}
