const express = require('express');
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express();
const port = 5000

const AuthController = require('./controllers/auth')
const RegisterController = require('./controllers/register')
const WebtoonsController = require('./controllers/webtoon')
const DetailWebtoonsController = require('./controllers/detail_webtoon')
const DetailEpisodesController = require('./controllers/detail_episode')

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

    //GET SEMUA EPISODE WEBTOON TERTENTU
    router.get('/webtoon/:id/episodes', DetailWebtoonsController.showEpisode)

    //GET SEMUA DETAIL EPISODE TERTENTU
    router.get('/webtoon/:id_webtoon/episode/:id_episode', DetailEpisodesController.showEpisodes)
})

app.listen(port, ()=> console.log(`listen on port ${port}!`))