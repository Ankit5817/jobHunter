const repo = require('../repository/repository')
const axios = require('axios')
const adminModel = require('../models/adminModel')
const secretModel = require('../models/secretModel')

const userLogin = (req, res) => {
    repo.userLogin(req.body.email, req.body.password).then(data => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
}

const userLogout = (req, res) => {
    repo.userLogout().then(() => {
        res.clearCookie('token')
        res.redirect('/login/page')
    })
}

const sendMail = (req, res) => {
    repo.sendMail(req.body.email, req.hostname).then((data) => {
        res.send(data)
    }).catch((data) => {
        res.send(data)
    })
}

const resetPassword = (req, res) => {
    repo.resetPassword(req.params.email, req.body.password).then(data => {
        res.send(data)
    }).catch(data => {
        res.send(data)
    })
}

const getJobs = (req, res) => {
    let dataToFront = []
    axios.get(`https://www.themuse.com/api/public/jobs?page=${req.params.page}&descending=true&api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then(response => {
        response.data.results.map(item => {
            if (item.company.name && item.refs.landing_page && item.locations && item.publication_date && item.categories[0] && item.contents) {
                let data = {
                    companyName: item.company.name,
                    applyLink: item.refs.landing_page,
                    location: item.locations,
                    publishDate: item.publication_date,
                    position: item.categories[0].name,
                    description: item.contents,
                    id: item.id
                }
                dataToFront.push(data)
            }
        })
        res.send(dataToFront)
    })
}

const filterJobs = async (req, res) => {
    let dataToFront = []
    if (req.body.category === "none" && req.body.location === "none") {
        // console.log('category-none location-none')
        axios.get(`https://www.themuse.com/api/public/jobs?page=${req.params.page}&descending=default&api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then(response => {
            response.data.results.map(item => {
                if (item.company.name && item.refs.landing_page && item.locations && item.publication_date && item.categories[0] && item.contents) {
                    let data = {
                        companyName: item.company.name,
                        applyLink: item.refs.landing_page,
                        location: item.locations,
                        publishDate: item.publication_date,
                        position: item.categories[0].name,
                        description: item.contents,
                        id: item.id
                    }
                    dataToFront.push(data)
                }
            })
            res.send(dataToFront)
        })
    } else if (req.body.category != "none" && req.body.location === "none") {
        // console.log('category-NOTnone location-none')
        axios.get(`https://www.themuse.com/api/public/jobs?category=${req.body.category}&page=${req.params.page}&descending=true&api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then(response => {
            response.data.results.map(item => {
                if (item.company.name && item.refs.landing_page && item.locations && item.publication_date && item.categories[0] && item.contents) {
                    let data = {
                        companyName: item.company.name,
                        applyLink: item.refs.landing_page,
                        location: item.locations,
                        publishDate: item.publication_date,
                        position: item.categories[0].name,
                        description: item.contents,
                        id: item.id
                    }
                    dataToFront.push(data)
                }
            })
            res.send(dataToFront)
        })
        // Abou%20el%20Hassan%2C%20Algeria
    } else if (req.body.category !== "none" && req.body.location !== "none") {
        // console.log('category-NOTnone location-NOTnone')
        let str = req.body.location
        str = await str.split(' ').join('%20');
        str = await str.split(',').join('%2C');
        axios.get(`https://www.themuse.com/api/public/jobs?category=${req.body.category}&location=${str}&page=${req.params.page}&descending=default&api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then(async (response) => {
            await response.data.results.map(item => {
                if (item.company.name && item.refs.landing_page && item.locations && item.publication_date && item.categories[0] && item.contents) {
                    let data = {
                        companyName: item.company.name,
                        applyLink: item.refs.landing_page,
                        location: item.locations,
                        publishDate: item.publication_date,
                        position: item.categories[0].name,
                        description: item.contents,
                        id: item.id
                    }
                    dataToFront.push(data)
                }
            })
            res.send(dataToFront)
        })
    } else {
        axios.get(`https://www.themuse.com/api/public/jobs?page=${req.params.page}&descending=default&api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then(async (response) => {
            await response.data.results.map(item => {
                if (item.company.name && item.refs.landing_page && item.locations && item.publication_date && item.categories[0] && item.contents) {
                    let data = {
                        companyName: item.company.name,
                        applyLink: item.refs.landing_page,
                        location: item.locations,
                        publishDate: item.publication_date,
                        position: item.categories[0].name,
                        description: item.contents,
                        id: item.id
                    }
                    dataToFront.push(data)
                }
            })
            res.send(dataToFront)
        })
    }
}

//........................................................

function GetUser(req, res) {
    repo.GetUser(req.params.email).then(data => {
        res.status(200).send(data);
    });
}

function AddUser(req, res) {
    repo.AddUser(req.body).then(data => {

        res.status(201).send(data);
    });
}

function UpdateUser(req, res) {
    repo.UpdateUser(req.params.email, req.body).then(data => {
        res.status(200).send(data);
    });
}

function DeleteUser(req, res) {
    repo.DeleteUser(req.params.email).then(data => {
        res.status(200).send(data);
    });
}
// ..........................................................

function GetWishlist(req, res) {
    repo.GetWishlist(req.params.email).then(async (data) => {
        toFront = []
        for (let i = 0; i < data.length; i++) {
            axios.get(`https://www.themuse.com/api/public/jobs/${data[i]}?api_key=c57511fb0081531403e8c0d584fba04d66dfc65899320596258c6366f15932e6`).then((response) => {
                let obj = {
                    companyName: response.data.company.name,
                    applyLink: response.data.refs.landing_page,
                    location: response.data.locations,
                    publishDate: response.data.publication_date,
                    position: response.data.categories[0].name,
                    description: response.data.contents,
                    id: response.data.id
                }
                toFront.push(obj)
            })
        }
        setTimeout(() => {
            res.status(200).send(toFront)
        }, 2000);

    });
}

function UpdateWishlist(req, res) {
    repo.UpdateWishlist(req.params.email, req.body.jobId).then(data => {
        res.status(200).send(data);
    });
}

function DeleteWishlist(req, res) {
    repo.DeleteWishlist(req.params.email, req.body.jobId).then(data => {
        res.status(200).send(data);
    });
}

const GetDatabse = async (req, res) => {
    try {
        const data = await adminModel.find({});
        res.status(200).send({ data, sucess: true });
    } catch (error) {
        console.log(error);
        res.status(401).send({ msg: error, success: false });
    }
};

const applyForJob = async (req, res) => {
    const data = await adminModel.findOne({ jobId: req.body.jobId });
    if (!data) {
        const entry = new adminModel({
            jobId: req.body.jobId,
            userId: req.params.email
        })
        entry.save((error) => {
            if (!error) {
                res.status(200).send({success: true, msg: "entry created succesfully" });
            } else {
                res.status(400).send({success: false, msg: "error" });
            }
        }

        )
    } else {
        await adminModel.findOneAndUpdate({ jobId: req.body.jobId }, { $push: { userId: [req.params.email] } });
        // console.log(req.body.user_id);
        res.status(200).send({success: true, msg: "user Updated to array" });


    }
}

const checkAdmin = (req, res) => {
    secretModel.findOne({ userName: req.body.userName, password: req.body.password }, (err, data) => {
        if (data) {
            res.status(200).send({ success: true })
        } else {
            res.status(404).send({ success: false })
        }
    })
}

module.exports = { userLogin, userLogout, resetPassword, sendMail, getJobs, AddUser, UpdateUser, DeleteUser, GetUser, filterJobs, GetWishlist, DeleteWishlist, UpdateWishlist, GetDatabse, applyForJob, checkAdmin }