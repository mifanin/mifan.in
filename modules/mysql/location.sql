CREATE TABLE `locations` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`locationid` varchar(32) NOT NULL DEFAULT '',
	`name` varchar(32) NOT NULL DEFAULT '',
	`displayname` varchar(64) NOT NULL DEFAULT '',
	primary key (`id`),
	key `locationid` (`locationid`),
	key `name` (`name`)
) ENGINE=innodb  DEFAULT CHARSET=utf8