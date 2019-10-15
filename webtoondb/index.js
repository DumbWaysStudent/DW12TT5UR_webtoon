const express = require('express');
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express();
const port = 5000

const AuthController = require('./controllers/auth')
const RegisterController = require('./controllers/register')
const WebtoonsController = require('./controllers/webtoon')

app.use(bodyParser.json())




app.group("/api/v1", (router) => {

    //login
    router.post('/login', AuthController.login)

    //register
    router.post('/register', RegisterController.register)

    //GET SEMUA WEBTOON
    router.get('/webtoon', WebtoonsController.index)

    //GET SEMUA WEBTOON FAVORITE
    router.get('/webtoon/favorite/', WebtoonsController.showFavorite)

    //SEARCH SEMUA WEBTOON BERDASARKAN TITLE
    router.get('/webtoon/title/:title', WebtoonsController.showTitle)
})

app.listen(port, ()=> console.log(`listen on port ${port}!`))