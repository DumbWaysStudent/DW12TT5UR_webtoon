const models = require('../models')
const Webtoon = models.webtoons
const users = models.users
const Sequelize = require('sequelize')
const Op = Sequelize.Op


//TAB FOR YOU SCREEN
//mengambil semua data
exports.index = (req, res) => {
    Webtoon.findAll().then(item=>res.send(item));
}

//mengambil semua webtoon favorite
exports.showFavorite = (req, res) => {
    Webtoon.findAll({where:{isFavorite: 1}}).then(result=> res.send(result))
}

//mengambil webtoon berdasarkan title
exports.showTitle = (req, res) => {
    Webtoon.findAll({where:{title: req.params.title}}).then(result=> res.send(result))
}


//19. mengambil webtoon berdasarkan title
exports.searchTitle = (req, res) => {
    if (req.query.title) {
        Webtoon.findAll({
            where: {title: {[Op.like]: `%${req.query.title}%`}},
            include: [{
                model: users,
                as: 'userID',
                attributes: ['name'],
            },
        ],
        }).then(result=>res.send(result))
        } else {
            Webtoon.findAll({
            include: [
            {
                model: users,
                as: 'userID',
                attributes: ['name'],
            },
            ],
            }).then(result=>res.send(result))
        }
    };


    //TAB PROFILE SCREEN
    //GET SEMUA MY WEBTOON CREATION
    exports.showMyCreation = (req, res) => {
        Webtoon.findAll({where:{createdBy: req.params.user_id}}).then(result=> res.send(result))
    }

    //CREATE MY WEBTOON
    exports.storeMyWebtoon = (req, res) => {
        Webtoon.create(req.body).then(result=> res.send(result))
    }