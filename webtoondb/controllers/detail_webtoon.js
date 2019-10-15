const models = require('../models')
const DetailWebtoon = models.detail_webtoons

//GET SEMUA EPISODE WEBTOON TERTENTU
exports.showEpisode = (req, res) => {
    DetailWebtoon.findAll({where:{webtoon_id: req.params.id}}).then(result=> res.send(result))
}