const models = require('../models')
const DetailEpisode = models.detail_episodes
const DetailWebtoon = models.detail_webtoons

//GET SEMUA DETAIL EPISODE TERTENTU
// exports.showEpisodes = (req, res) => {
//     DetailWebtoon.findOne({
//         where: {webtoon_id: req.params.webtoon_id, webtoon_id: req.params.webtoon_id}
//     }).then(() => {
//         DetailEpisode.findAll({
//             where: {episode_id: req.params.episode_id}
//         }).then(images => res.send(images));
//     });
// }

//GET SEMUA DETAIL EPISODE TERTENTU
// exports.showEpisodes = (req, res) => {
//     DetailEpisode.findAll({
//          include: [{
//              model : DetailWebtoon,
//              as : "DetailWebtoon"
//          }],
//         where:{episode_id: req.params.webtoon_id},
//     }).then(result=> res.send(result))
// }


//Get Semua Detail Episode Tertentu
// exports.showEpisodes = (req, res)=>{
//     const webtoonId = req.params.id_webtoon
//     const episodeId = req.params.id_episode

    // DetailEpisode.findAll({
    //     where: { episode_id: episodeId },
    //     attributes: ['id', 'page', 'image'],
    //         include: [{
    //             model: DetailWebtoon,
    //             as: 'episodeId',
    //             attributes: ['id', 'title', 'webtoon_id'],
    //         }]

    // }).then(data => {
    //     res.send(data);
    // });


    //Get Semua Detail Episode Tertentu
exports.showEpisodes = (req, res)=>{
    const webtoonId = req.params.id_webtoon
    const episodeId = req.params.id_episode
    DetailWebtoon.findOne({
        where: {webtoon_id: webtoonId}
    })
    .then((webtoon) => {
        DetailEpisode.findAll({
            where: { episode_id: episodeId},
            attributes: ['id', 'page', 'image'],
            include: [{
                model: DetailWebtoon,
                as: 'episodeId',
            }]
        })
        .then(episodes => res.send(episodes))
    })
};