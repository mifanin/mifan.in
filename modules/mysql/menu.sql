CREATE TABLE `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantid` varchar(32) NOT NULL DEFAULT '',
  `name` varchar(256) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT 1,
  `updatetime` datetime,
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
) ENGINE=innodb  DEFAULT CHARSET=utf8