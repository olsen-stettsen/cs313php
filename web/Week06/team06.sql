CREATE TABLE topic (
    topic_id    serial          PRIMARY KEY,
    name        VARCHAR(255)    NOT NULL
);
INSERT INTO topic(name)
VALUES
 ('Faith'),
 ('Sacrifice'),
 ('Charity');

CREATE TABLE scriptures (
    scripture_id    serial          PRIMARY KEY,
    book            VARCHAR(50)     NOT NULL,
    chapter         int             NOT NULL,
    verse           int             NOT NULL,
    content         VARCHAR(1000)   NOT NULL
);
CREATE TABLE topic_to_scripture_lookup (
    topic_id        int             NOT NULL REFERENCES topic(topic_id),
    scripture_id    int             NOT NULL REFERENCES scriptures(scripture_id)
);
INSERT INTO scriptures (book, chapter, verse, content)
VALUES
('boooook', 55, 22, 'cooooooonttteeennnt');