CREATE DATABASE blog_db;


CREATE TABLE posts ( 
                        id INT NOT NULL AUTO_INCREMENT primary key,
                        title VARCHAR(100),
                        content VARCHAR(200),
                        image VARCHAR(200),
                        category VARCHAR(100),
                        date Date 
                    );

