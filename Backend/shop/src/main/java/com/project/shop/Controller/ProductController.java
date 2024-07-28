package com.project.shop.Controller;

import com.project.shop.Model.ProductDTO;
import com.project.shop.Service.IProductService;
import com.project.shop.Service.Impl.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ProductController {
    private final IProductService productService;
    private final CloudinaryService cloudinaryService;

    @GetMapping("/product/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        try{
            ProductDTO productDTO = productService.getProductById(id);
            return new ResponseEntity<>(productDTO, HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create-product")
    public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO) {
        try{
            productService.addProduct(productDTO);
            return ResponseEntity.ok().body(productDTO);
        }
        catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update-product/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody ProductDTO productDTO){
        try{
            productService.updateProduct(id, productDTO);
            return ResponseEntity.ok().body(productDTO);
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok().body("Delete Product Success");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @PostMapping("/upload/{productId}")
    public ResponseEntity<List<Map>> uploadImages(@RequestParam("images") MultipartFile[] files, @PathVariable("productId") Long productId) throws IOException {
        List<Map> result = cloudinaryService.uploadFiles(files, productId);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
