SET NAMES UTF8;
DROP DATABASE IF EXISTS waimai;
CREATE DATABASE waimai CHARSET=UTF8;
USE waimai;

-- 用户表
CREATE TABLE user(
    userId INT PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(50),
    userPwd VARCHAR(50),
    phone VARCHAR(16),
    gender INT 
);

-- 订单表
CREATE TABLE orders(
  oId INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  mid INT,
  cid INT,
  date VARCHAR(32),
  time VARCHAR(32),
  roomid SMALLINT,
  price INT,
  choiceSeat VARCHAR(512),
  showSeat VARCHAR(512),
  productList VARCHAR(512)
);

-- 商品表
CREATE TABLE foods(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  typeName VARCHAR(12),
  fName VARCHAR(12),
  price decimal(3,1),
  fpic VARCHAR(64)
);

--购物车表
CREATE TABLE cart(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  fid INT,
  typeName VARCHAR(12),
  fName VARCHAR(12),
  price decimal(3,1),
  fpic VARCHAR(64)
);


-- 插入用户表
INSERT INTO user VALUES
(NULL, 'dingding', '123456', '13501234567','1'),
(NULL, 'dangdang', '123456', '13501234568', '1'),
(NULL, 'doudou', '123456', '13501234569', '1'),
(NULL, 'tom123', '123456', '13501234567', '1'),
(NULL, 'jerry123', '123456', '13501234568','1'),
(NULL, 'join123', '123456', '13501234569', '1');
-- 插入商品表

INSERT INTO foods VALUES(NULL,'港式烧饭','五宝叉烧饭',29.9,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','蜜汁叉烧饭',33.0,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','烧味双拼饭',38,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','五宝饭',39,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','明炉烧鸭饭',33,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','清远白切鸡',35,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','脆皮烧肉饭',33,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','烧味四宝饭',35,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式烧饭','八宝饭饭',48,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式汤面','烧味汤面',33,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式汤面','牛腩面',39,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式汤面','新记车载面',30,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式汤面','鲜虾云吞面',39,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式汤面','排骨面',39,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式饮品','原味冰镇奶茶',19,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式饮品','港式柠檬茶',13,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg'),(NULL,'港式饮品','红豆鲜奶',16,'/product/0a4119cb535d22c6a6f64cd1c22bbbee519489.jpg');


-- INSERT INTO carousel VALUES(null,"carousel/header.jpg");
-- INSERT INTO carousel VALUES(null,"carousel/header2.jpg");
-- INSERT INTO carousel VALUES(null,"carousel/header3.jpg")






