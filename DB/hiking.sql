-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hikingdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hikingdb` ;

-- -----------------------------------------------------
-- Schema hikingdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hikingdb` DEFAULT CHARACTER SET utf8 ;
USE `hikingdb` ;

-- -----------------------------------------------------
-- Table `hike`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hike` ;

CREATE TABLE IF NOT EXISTS `hike` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `length` DOUBLE NOT NULL,
  `date` DATE NOT NULL,
  `total_time` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS hiker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'hiker'@'localhost' IDENTIFIED BY 'hiker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'hiker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `hike`
-- -----------------------------------------------------
START TRANSACTION;
USE `hikingdb`;
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`) VALUES (1, 'Bergen Peak', 11.8, '2020-04-04', '7:17');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`) VALUES (2, 'Bear Peak', 11.3, '2020-03-29', '6:51');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`) VALUES (3, 'Manitou Springs Incline', 3.7, '2020-02-09', '2:06');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`) VALUES (4, 'Elk Falls', 12.3, '2020-03-22', '7:10');

COMMIT;

