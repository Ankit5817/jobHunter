const jwt = require('jsonwebtoken')

const SECRET_KEY = 'ankit sharma secret key'

const MAIL_KEY = 'mail secret key'

const tokenAuthenticated = (req, res, next) => {
    let token = req.body.token
    try{
        let tokenVal = jwt.verify(token, SECRET_KEY)
        next()
    } catch {
        res.send({msg: "invalid token", success: false})
    }
}

const tokenAuthenticateResetPass = (req, res, next) => {
    let token = req.params.token
    try{
        let tokenVal = jwt.verify(token, MAIL_KEY)
        next()
    } catch {
        res.send({msg: 'Invalid Token'})
    }
}

module.exports = { tokenAuthenticated, tokenAuthenticateResetPass}