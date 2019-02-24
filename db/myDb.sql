CREATE TABLE account_table (
    user_id         serial          PRIMARY KEY,
    username        VARCHAR (255)   UNIQUE NOT NULL,
    user_password   VARCHAR (255)   NOT NULL,
    email           VARCHAR (255)   NOT NULL,
    created_on      TIMESTAMP,
    last_login      TIMESTAMP
);
CREATE TABLE post_table (
    post_id      serial          PRIMARY KEY,
    user_id      int             NOT NULL REFERENCES account_table(user_id),
    post_text    VARCHAR (500)   NOT NULL,
    media_link   VARCHAR(500)    
);
CREATE TABLE reply_table (
    reply_id        serial          PRIMARY KEY,
    user_id         int             NOT NULL REFERENCES account_table(user_id),
    post_id         int             NOT NULL REFERENCES post_table(post_id),
    repley_text     VARCHAR (500)   NOT NULL,
    media_link      VARCHAR(500) 
);
INSERT INTO account_table (username, user_password, email) VALUES ('steve', '1234', 'steve@bob.com');