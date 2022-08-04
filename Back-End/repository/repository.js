const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const main = require('../sendMail/sendMail')
const userModel = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');

const SECRET_KEY = 'ankit sharma secret key'

const MAIL_KEY = 'mail secret key'

const userLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        let user = await userModel.findOne({ email: email })

        if (!user) {
            reject({ msg: "invalid email", success: false })
        }
        if (user) {
            if (!bcrypt.compareSync(password, user.password)) {
                reject({ msg: "invalid password", success: false })
            } else {
                let token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '2h' })
                resolve({ msg: "login successfull", success: true, token: token, email: user.email })
            }
        }
    })
}

const userLogout = () => {
    return new Promise((resolve, reject) => {
        resolve({ msg: 'clear cookie' })
    })
}

const sendMail = (email, hostname) => {
    return new Promise(async (resolve, reject) => {
        let user = await userModel.findOne({ email: email })
        if (!user) {
            reject({ message: "Invalid email id", success: false })
        }

        if (user) {
            let token = jwt.sign({ id: user._id, email: user.email }, MAIL_KEY, { expiresIn: '30m' })

            let link = `http://${hostname}:3000/reset/password/${user.email}/${token}`

            let bool = await main(link, user.email)

            if (bool.msg) {
                resolve({ message: "Link has been sent to your email id", success: true, url: bool.msg.url })
            } else {
                reject({ message: "Link coud not be sent to your email id", success: false })
            }
        }
    })
}

const resetPassword = (email, pass) => {
    return new Promise(async (resolve, reject) => {
        let user = await userModel.findOne({ email: email })
        if (user) {
            let password = await bcrypt.hashSync(pass, 10)

            await userModel.updateOne({ email: user.email }, { password: password })

            resolve({ msg: "password updated successfully", success: true })
        } else {
            reject({ msg: "user not available", success: false })
        }
    })
}

//............................................................

function GetUser(email) {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: email }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function AddUser(user) {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: user.values.email }, (err, data) => {
            if (data) {
                resolve('already exist');
            }
            else if (!data) {
                let newuser = new userModel({
                    _id: uuidv4(),
                    firstName: user.values.firstname,
                    lastName: user.values.lastname,
                    email: user.values.email,
                    password: bcrypt.hashSync(user.values.password, 10),
                });
                newuser.save((err) => {
                    if (!err) {
                        resolve('created successfully');
                    }
                    else {
                        reject(err);
                    }
                })
            }
            else {
                reject(err);
            }
        });
    });
}

function UpdateUser(email, user) {
    return new Promise((resolve, reject) => {
        userModel.findOneAndUpdate({ email: email }, user, { new: true }, (err, data) => {
            if (data !== null) {
                resolve({ success: true });
            }

            else {
                reject({ success: false });
            }

        })
    });
}

function DeleteUser(email) {
    return new Promise((resolve, reject) => {
        userModel.deleteOne({ email: email }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}
// ..................................................
function GetWishlist(email) {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: email }, (err, data) => {
            if (!err) {
                resolve(data.wishlist);
            } else {
                reject(err);
            }
        });
    });
}

function GetAppliedJobs(email) {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: email }, (err, data) => {
            if (!err) {
                resolve(data.appliedJobs);
            } else {
                reject(err);
            }
        });
    });
}

function UpdateWishlist(email, jobId) {
    return new Promise((resolve, reject) => {
        userModel.findOneAndUpdate({ email: email },
            {
                $push: {
                    wishlist: jobId
                }
            },
            (err, data) => {
                if (data !== null) {
                    resolve({ msg: "added to wishlist", success: true });
                }

                else {
                    reject({ msg: "cannot be added to wishlist", success: false });
                }

            })
    });
}

function DeleteWishlist(email, jobId) {
    return new Promise((resolve, reject) => {
        userModel.findOneAndUpdate({ email: email },
            {
                $pull: {
                    wishlist: jobId
                }
            },
            (err, data) => {
                if (!err) {
                    resolve({ msg: "job removed from wishlist", success: true });
                } else {
                    reject({ msg: "job can't be removed from wishlist", success: false });
                }
            });
    });
}

module.exports = { userLogin, userLogout, resetPassword, sendMail, AddUser, UpdateUser, DeleteUser, GetUser, DeleteWishlist, GetWishlist, UpdateWishlist, GetAppliedJobs }