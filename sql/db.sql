CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE categories (
    id TINYINT(255) PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(100)
);

CREATE TABLE posts ( 
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL CHECK (title <> ''),
    content TEXT NOT NULL CHECK (content <> ''),
    image VARCHAR(200),
    categoryId TINYINT(255),
    date Date NOT NULL,
    CONSTRAINT fk_posts_category 
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);

INSERT INTO categories (description) 
    VALUES
    ('programming'),('videogames'), ('social networks'), ('series'), ('random'),  ('other')
;

INSERT INTO posts(title, content, image, categoryId, date) 
    VALUES('Hello Alkemy', 'Hola pa, que haces?', 
        "https://cdn.generadormemes.com/media/created/n1kchrjzihqkjdefptelyersza565wijxfacfeymomvddbwfkli2qiqslma35ty.jpg",
        5, NOW()
    );

INSERT INTO posts(title, content, image, categoryId ,date) 
VALUES('C# is cool (pt1)', 'Googleando me encontré esto WTF xD', 
        "https://m.media-amazon.com/images/I/51GsWzw+boL.jpg", 1, NOW()
    );

INSERT INTO posts(title, content, image, categoryId, date) 
VALUES('C# is cool (pt2)', 'Googleando me encontré esto WTF xD', 
        "https://m.media-amazon.com/images/I/51KLmiCkOuL.jpg", 1, NOW()
    );


SELECT 
    posts.id, posts.title, posts.content, posts.image, posts.date, categories.description AS categoryId
     FROM posts INNER JOIN categories ON posts.categoryId = categories.id;

SELECT 
    posts.id, posts.title, posts.content, posts.image, posts.date, categories.description AS categoryId
     FROM posts INNER JOIN categories ON posts.categoryId = categories.id
WHERE posts.id = ?;