CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurantid` NOT NULL DEFAULT '',
  `name` varchar(256) NOT NULL DEFAULT '',
  `geo` varchar(64),
  `locationid` varchar(64),
  `cover` varchar(32),
  `phone1` varchar(32),
  `phone2` varchar(32),
  `status` int(11) NOT NULL DEFAULT 1,
  `createtime` datetime,
  `updatetime` datetime,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=innodb  DEFAULT CHARSET=utf8