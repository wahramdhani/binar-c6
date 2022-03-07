const Biodata = require('../controller/biodataController.js').user_game_biodata;

module.exports = {
    async createBiodata(req, res) {
        try {
            const biodata = await Biodata.create({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                address: req.body.address,
                userId: req.body.userId
            })
            return res.status(200).json({
                status: 'success',
                data: {
                    biodata: biodata
                }
            })
        } catch (error){
            return res.status(400).json({
                status: 'failed',
                error: [error.message]
            })
        }
    },
    async updateBiodata(req, res) {
        try {
            const {
                firstName,
                lastName,
                address,
            } = req.body
            const userFind = await User.findOne({
                where: {
                    firstName: firstname,
                    lastName: lastname,
                    address: address
                }
            })
            if (userFind) {
                await User.update({
                    firstName: firstname,
                    lastName: lastname,
                    address: address
                },
                { where: {userId: userFind.id}
            })
            res.redirect('/')
            } else {
                res.status(400).json({
                    status: 'failed',
                    error: [error.message]
                })
            }
        } catch (error){
            return res.status(500).json ({
                status: 'failed',
                message: 'error'
            })
        }
    }
}