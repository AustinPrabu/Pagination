-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: customer_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `name` varchar(16) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `mobile` varchar(45) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `age` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('arun','arun@gmail.com','12345','2022-07-31 16:47:13','875868346784',1,'23'),('abhi','abhi@gmail.com','12345','2022-07-31 16:48:01','875866784',2,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:50:07','875866784',3,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',4,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',5,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',6,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',7,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',8,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',9,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',10,'23'),('bagya','bagya@gmail.com','12345','2022-07-31 16:56:13','875866784',11,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',12,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',13,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',14,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',15,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',16,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',17,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',18,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:32:14','875866784',19,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',20,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',21,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',22,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',23,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',24,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',25,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',26,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:14','875866784',27,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',28,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',29,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',30,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',31,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',32,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',33,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',34,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:35','875866784',35,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',36,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',37,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',38,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',39,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',40,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',41,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',42,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:36','875866784',43,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',44,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',45,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',46,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',47,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',48,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',49,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',50,'23'),('bagya','bagya@gmail.com','12345','2022-08-01 05:39:50','875866784',51,'23');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-01 11:22:34
