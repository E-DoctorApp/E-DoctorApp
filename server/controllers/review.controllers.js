const { Review } = require("../database/index")

module.exports.addReview = async (req, res) => {
    try {
        const toPost = await Review.create(req.body)
        res.status(200).json(toPost)
    } catch (error) {
        throw Error(error)
    }
}

module.exports.getAllReview = async (req, res) => {
    try {
        const reviews = await Review.findAll({ where: { DoctorId: req.params.docId }, include: { all: true } })
        res.status(200).json(reviews)
    } catch (error) {
        throw Error(error)
    }
}


