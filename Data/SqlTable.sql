use shop;

-- Bảng vai trò (Role)
CREATE TABLE Roles (
    RoleID INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(50) UNIQUE NOT NULL
);

-- Bảng người dùng (Users)
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    RoleID INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);

-- Bảng danh mục sản phẩm (Categories)
CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Description TEXT
);

-- Bảng sản phẩm (Products)
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10, 2) NOT NULL,
    CategoryID INT,
    DiscountAmount DECIMAL(10, 2),
    IsPercentage BOOLEAN,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

-- Bảng hình ảnh sản phẩm (ProductImages)
CREATE TABLE ProductImages (
    ImageID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    ImageURL VARCHAR(255) NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng đơn hàng (Orders)
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Bảng chi tiết đơn hàng (OrderItems)
CREATE TABLE OrderItems (
    OrderItemID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    DiscountAmount DECIMAL(10, 2),
    IsPercentage BOOLEAN,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng giảm giá (Discounts)
CREATE TABLE Discounts (
    DiscountID INT AUTO_INCREMENT PRIMARY KEY,
    Code VARCHAR(50) UNIQUE NOT NULL,
    Description TEXT,
    DiscountAmount DECIMAL(10, 2) NOT NULL,
    IsPercentage BOOLEAN NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Active BOOLEAN DEFAULT TRUE
);

-- Bảng giảm giá đơn hàng (OrderDiscounts)
CREATE TABLE OrderDiscounts (
    OrderDiscountID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    DiscountID INT,
    DiscountAmount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (DiscountID) REFERENCES Discounts(DiscountID)
);

-- Bảng bài viết blog (BlogPosts)
CREATE TABLE BlogPosts (
    PostID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Content TEXT NOT NULL,
    AuthorID INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (AuthorID) REFERENCES Users(UserID)
);

-- Bảng bình luận (Comments)
CREATE TABLE Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    PostID INT,
    UserID INT,
    Comment TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PostID) REFERENCES BlogPosts(PostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
