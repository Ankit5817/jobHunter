const express = require('express')
const { userLogin, userLogout, resetPassword, sendMail, getJobs, AddUser, UpdateUser, DeleteUser, GetUser, filterJobs, GetWishlist, DeleteWishlist, UpdateWishlist, GetDatabse, applyForJob, checkAdmin } = require('../controller/controller')
const { tokenAuthenticated, tokenAuthenticateResetPass } = require('../verifyToken/verifyToken')


const router = express.Router()

router.post('/login', userLogin)
router.post('/logout', userLogout)
router.post('/forgotPass', sendMail)
router.post(`/reset/password/:email/:token`, tokenAuthenticateResetPass, resetPassword)
// router.get('/jobs/:page', getJobs)
router.post('/jobs/:page', filterJobs)
router.get('/getUser/:email', GetUser);
router.post('/addUser', AddUser);
router.delete('/deleteUser/:email', DeleteUser);
router.post('/updateUser/:email', UpdateUser);
router.post('/profile/page', tokenAuthenticated, (req, res) => { res.send({ msg: "valid token", success: true }) })
router.get('/getwishlist/:email', GetWishlist);
router.post('/updateWishlist/:email', UpdateWishlist);
router.post('/deleteWishlist/:email', DeleteWishlist);

router.get('/getall/adminData', GetDatabse);
router.post('/apply/:email', applyForJob);

router.post('/check/admin',checkAdmin)

module.exports = router