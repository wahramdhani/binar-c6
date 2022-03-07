const User = require('../models/').user;

module.exports = {
    all(req, res) {
        return User.findAll()
        .then(data => {
            res.status(200).json({
                status: 'success',
                data: {
                    user: data
                }
            })
        })
        .catch(err => {
            res.status(400).json({
                status: "failed",
                error: [err.message]
            })
        })
    },
    async CreateUser(req, res) {
        try {
            const user = await User.create({
                username: req.body.username,
                password: req.body.password
            });
            return res.status(200).json({
                status: 'success',
                data: {
                    users: user
                }
            })
        }
            catch (error) {
                res.status(400).json({
                    status: 'failed',
                    errors: [error.message]
                })
            }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.params.id
                }
            })
            if(!user){
                return res.status(400).json({
                    status: 'failed',
                    message: `userId ${req.params} not found`
                })
            } else {
                await User.destroy({
                    where: {
                        id: user.id
                    }
                })
                return res.status(200).json({
                    status: 'success',
                    message: 'delete user succesful'
                })
            }
            } catch (error) {
                return res.status(401).json ({
                    status: 'failed',
                    message: 'error'
                })
            }
        
    },
    login(req, res) {
        User.findOne({
            where: {
                email: req.body.username
            }
        })
        .then(users => {
            if(!users)
            return res.status(400).json({
                status: 'login failed',
                errors: ["wrong email"]
            })
        const passwordCorrect = req.body.password
        if(!passwordCorect) {
            return res.status(400).json ({
                status: 'failed',
                errors: ["wrong password"]
            })
        } else {
            res.status(200).redirect("/")
        }
        })
        .catch(err =>
            res.status(400).json({
                status: 'failed',
                error: [error.message]
            }))
    }
}