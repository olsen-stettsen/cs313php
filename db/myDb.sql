CREATE TABLE account_table (
    user_id         serial          PRIMARY KEY,
    username        VARCHAR (255)   UNIQUE NOT NULL,
    user_password   VARCHAR (255)   NOT NULL,
    email           VARCHAR (255)   NOT NULL,
    created_on      TIMESTAMP       NOT NULL,
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
CREATE TABLE temp_table (
    post_id      serial          PRIMARY KEY,
    user_id      serial          NOT NULL,
    user_name    VARCHAR(255)    NOT NULL,
    post_text    VARCHAR (500)   NOT NULL,
    media_link   VARCHAR(500)  
);
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Steve', 'Hey Everybody!');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Jim', 'I like cake!');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Sally', 'We all do Jim.');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Jim', 'I like me you dont');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Steve', 'Thats not true! I like cake more!');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Sally', 'Lets agree we all like cake equally');
INSERT INTO temp_table (user_name, post_text)
  VALUES ('Jim', 'Oops! I meant not like me you dont');