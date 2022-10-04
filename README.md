# public-blog-app

Backend technology Used : Node Js, Express Js, Passport, MongoDb(database)

<--------api routes ----------->
http://localhost:8000/api/users/register (request type post)  ==>> it will create an user
http://localhost:8000/api/users/login  (request type post) ==>> it will sign in the user and send the token

http://localhost:8000/api/article/create  (request type post) ==>> it will create new article
http://localhost:8000/api/article/all-articles (request type get) ==>> it will fetch all the articles
http://localhost:8000/api/article/update/:id ( request type post) ==>> it will update any post
http://localhost:8000/api/article/destroy/:id (request type delete) ==>> it will delete the post