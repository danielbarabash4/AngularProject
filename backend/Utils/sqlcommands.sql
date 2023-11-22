SELECT
    *
FROM
    songs create Song table == == == == == == == == == == == == 
    CREATE TABLE songs (
        id INT NOT NULL AUTO_INCREMENT,
        description VARCHAR(255) NOT NULL,
        img VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`));

Create Category table == == == == == == == == == == == == 
CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    PRIMARY KEY (`id`)
);

CRUD = > Create Read
Update
    Delete read == == == == == == == =
SELECT
    *
FROM
    songs
SELECT
    *
FROM
    songs
WHERE
    { condition } read specified columns == == == == == == == == == == == == == =
SELECT
    img as image,
    url as location
FROM
    songs count total columns == == == == == == == == == == ==
SELECT
    count(*)
FROM
    songs Create == == == == == == == == == == == == == =
INSERT INTO
    songs (description, img, title, url)
VALUES
    (
        Music video by Eminem performing
        When I \ m Gone.(C) 2005 Aftermath Entertainment / Interscope Records,
        https: / / i.ytimg.com / vi / 1wYNFfgrXTI / hq720.jpg ? sqp = - oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg == & rs = AOn4CLCp3_3BGi1SjEEMhPMQSjA7UkGgtg,
        When im gone,
        'https://www.youtube.com/watch?v=1wYNFfgrXTI&ab_channel=EminemVEVO'
    );

DELETE == == == == == == == == == == == =
DELETE FROM
    songs
WHERE
    [condition] = >
DELETE FROM
    songs
WHERE
    id = 1;

UPDATE
    == == == == == == == == == == == == ==
UPDATE
    songs
SET
    title = 'rap god'
WHERE
    (id = 2);

join to tables together by id
SELECT
    songs.*,
    name
FROM
    songs
    JOIN category ON songs.category = category.id choosing the name you want
SELECT
    songs.*,
    name as categoryName