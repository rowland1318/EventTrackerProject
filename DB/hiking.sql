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
-- Table `hikes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hikes` ;

CREATE TABLE IF NOT EXISTS `hikes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `distance` DOUBLE NULL,
  `time` DATETIME NULL,
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
-- Data for table `hikes`
-- -----------------------------------------------------
START TRANSACTION;
USE `hikingdb`;
INSERT INTO `hikes` (`id`, `name`, `distance`, `time`) VALUES (1, 'Frog', NULL, NULL);

COMMIT;
