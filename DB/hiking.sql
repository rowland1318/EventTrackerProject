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
  `name` VARCHAR(100) NOT NULL,
  `length` DOUBLE NOT NULL,
  `date` DATE NOT NULL,
  `total_time` VARCHAR(45) NULL,
  `elevation_gain` DOUBLE NULL,
  `photo_url` VARCHAR(300) NULL,
  `trail_link` VARCHAR(300) NULL,
  `difficulty` VARCHAR(45) NULL,
  `description` VARCHAR(1000) NULL,
  `special_equipment` VARCHAR(200) NULL,
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
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (1, 'The Incline Trail', 3.7, '2020-01-18', '2:30:00', 1922, 'https://i.imgur.com/ry9HlSy.jpg', 'https://www.alltrails.com/trail/us/colorado/the-incline-trail', 'Hard', 'The Incline Trail is a 3.6 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail is primarily used for hiking, running, and nature trips and is best used from May until October.', 'N/A');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (2, 'Elk Falls Out and Back', 14, '2020-01-26', '6:00:00', 1936, 'https://i.imgur.com/XQjQiBb.jpg', 'https://www.hikingproject.com/trail/7022503/elk-falls-out-and-back', 'Moderate', 'Visitors looking for a route that allows exploration of many of Colorado\'s ecosystems need to look no further than this scenic route in Staunton State Park. Though this route is a bit on the long side, it\'s well worth the necessary effort.', 'N/A');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (3, 'Bear Peak Trail', 8.1, '2020-02-02', '5:30:00', 2847, 'https://i.imgur.com/0AvJ9YH.jpg', 'https://www.alltrails.com/trail/us/colorado/bear-peak-trail', 'Hard', 'The trail starts out very easy with well maintained walking trails. As you progress deeper and higher the terrain increases in difficulty; to the point of being slightly technical. The trail gets fairly challenging on the last mile or so before summit. Beautiful scenery from start to end. Vast meadows sprawling with wild flowers to forests with towering evergreens to rocky boulders of great size.', 'Microspikes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (4, 'The Incline Trail', 3.7, '2020-02-09', '2:06:05', 1922, 'https://i.imgur.com/8NYiMRT.jpg', 'https://www.alltrails.com/trail/us/colorado/the-incline-trail', 'Hard', 'The Incline Trail is a 3.6 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail is primarily used for hiking, running, and nature trips and is best used from May until October.', 'Microspikes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (5, 'The Incline Trail', 3.7, '2020-02-16', '2:06:05', 1922, 'https://i.imgur.com/RPCokBy.jpg', 'https://www.alltrails.com/trail/us/colorado/the-incline-trail', 'Hard', 'The Incline Trail is a 3.6 mile heavily trafficked loop trail located near Manitou Springs, Colorado that features beautiful wild flowers and is only recommended for very experienced adventurers. The trail is primarily used for hiking, running, and nature trips and is best used from May until October.', 'Microspikes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (6, 'Lake Agnes Trail', 2.1, '2020-02-22', '2:45:00', 429, 'https://i.imgur.com/0OfLruz.jpg', 'https://www.alltrails.com/trail/us/colorado/lake-agnes-loop-trail', 'Moderate', 'Lake Agnes Trail is a 2.1 mile heavily trafficked loop trail located near Walden, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until September. Dogs are also able to use this trail but must be kept on leash', 'Snowshoes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (7, 'Elk Falls Out and Back', 14, '2020-03-22', '6:30:00', 1936, 'https://i.imgur.com/X24xZyq.jpg', 'https://www.hikingproject.com/trail/7022503/elk-falls-out-and-back', 'Moderate', 'Visitors looking for a route that allows exploration of many of Colorado\'s ecosystems need to look no further than this scenic route in Staunton State Park. Though this route is a bit on the long side, it\'s well worth the necessary effort.', 'Microspikes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (8, 'Bear Peak Trail', 11.3, '2020-03-29', '6:51:41', 3287, 'https://i.imgur.com/FsqKPJp.jpg', 'https://www.alltrails.com/trail/us/colorado/bear-peak-trail', 'Hard', 'The trail starts out very easy with well maintained walking trails. As you progress deeper and higher the terrain increases in difficulty; to the point of being slightly technical. The trail gets fairly challenging on the last mile or so before summit. Beautiful scenery from start to end. Vast meadows sprawling with wild flowers to forests with towering evergreens to rocky boulders of great size.', 'Microspikes');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (9, 'Bergen Peak Trail', 11.8, '2020-04-04', '7:17:52', 2264, 'https://i.imgur.com/hstPQWw.jpg', 'https://www.alltrails.com/trail/us/colorado/bergen-peak-trail', 'Moderate', 'Bergen Peak Trail is a heavily trafficked out and back trail located near Evergreen, Colorado that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash', 'N/A');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (10, 'Green Mountain Loop', 8.1, '2020-04-11', '5:30:00', 2667, 'https://i.imgur.com/dULGWV1.jpg', 'https://www.alltrails.com/trail/us/colorado/green-mountain-loop', 'Moderate', 'Green Mountain Loop is a heavily trafficked loop trail located near Boulder, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking and running and is best used from March until November.', 'N/A');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (11, 'Herman Gulch Trail', 6.3, '2020-04-18', '3:44:00', 1755, 'https://i.imgur.com/7vs115b.jpg', 'https://www.alltrails.com/trail/us/colorado/herman-gulch-trail', 'Moderate', 'Herman Gulch Trail is a 6.3 mile heavily trafficked out and back trail located near Idaho Springs, Colorado that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from June until September. Dogs are also able to use this trail.', 'Snowshoes, Poles');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (12, 'Herman Gulch Trail', 6.3, '2020-04-19', '3:30:00', 1755, 'https://i.imgur.com/n9yjJCW.jpg', 'https://www.alltrails.com/trail/us/colorado/herman-gulch-trail', 'Moderate', 'Herman Gulch Trail is a 6.3 mile heavily trafficked out and back trail located near Idaho Springs, Colorado that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from June until September. Dogs are also able to use this trail.', 'Snowshoes, Poles');
INSERT INTO `hike` (`id`, `name`, `length`, `date`, `total_time`, `elevation_gain`, `photo_url`, `trail_link`, `difficulty`, `description`, `special_equipment`) VALUES (13, 'Devil\'s Playground Trail', 10.8, '2020-04-25', '5:16:58', 3438, 'https://i.imgur.com/pZe9y3v.jpg', 'https://www.alltrails.com/trail/us/colorado/devils-playground-from-the-crags', 'Hard', 'Devils Playground from the Crags is a heavily trafficked out and back trail 13er located near Divide, Colorado that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking, horses, and mountain biking and is best used from April until October. Dogs and horses are also able to use this trail.', 'Microspikes');

COMMIT;

