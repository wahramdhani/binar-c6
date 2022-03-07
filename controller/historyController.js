const History = require('../models/user_game_history').user_game_history;

module.exports = {
    async createHistory(req, res) {
        try {
            const history = await History.create({
                result: req.body.result,
                timePlay: req.body.lastname,
                userId: req.body.userId
            })
            return res.status(200).json({
                status: 'success',
                data: {
                    history: history
                }
            })
        } catch (error){
            return res.status(400).json({
                status: 'failed',
                error: [error.message]
            })
        }
    },
    
}