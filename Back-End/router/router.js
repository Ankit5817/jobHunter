const express = require('express')
const { userLogin, userLogout, resetPassword, sendMail, getJobs, AddUser, UpdateUser, DeleteUser, GetUser, filterJobs, GetWishlist, DeleteWishlist, UpdateWishlist, GetDatabse, applyForJob, checkAdmin, GetAppliedJobs, getAdminJobs, changeJobStatus, checkStatus } = require('../controller/controller')
const { tokenAuthenticated, tokenAuthenticateResetPass } = require('../verifyToken/verifyToken')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const router = express.Router()

router.use('/api-docs',swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument))

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
router.get('/applied/jobs/:email',GetAppliedJobs)
router.get('/admin/jobList',getAdminJobs)
router.post('/change/status', changeJobStatus)
router.post('/check/status', checkStatus)

module.exports = router