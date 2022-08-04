

var chai=require('chai');
// var mongoose=require('mongoose');

var chaiHttp=require('chai-http');
var server=require('../server');
chai.should();
chai.use(chaiHttp);


describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should get all",(done)=>{
            chai.request(server).get("/api/getUser/:email")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})

describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should not get all",(done)=>{
            chai.request(server).get("/api/getUser/:emai")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})
// .......................................................................................

describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should delete user",(done)=>{
            chai.request(server).delete("/api/deleteUser/:email")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})


describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should not delete user",(done)=>{
            chai.request(server).delete("/api/deleteUser/:emai")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})
// ........................................................................................

describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should delete from wishlist",(done)=>{
            chai.request(server).post("/api/deleteWishlist/:email")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})

describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should not delete from wishlist",(done)=>{
            chai.request(server).post("/api/deleteWishlist/:emai")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})
// .........................................................................................

describe('User Api',()=>{

    describe('get api tasks',()=>{
        it("it should get all admin data",(done)=>{
            chai.request(server).get("/api/getall/adminData")
            .end((err,response)=>{
                    response.should.have.status(200);
            done();
                    
            })
        })
    })
})

