const ISP = require('../models/serviceProvidersModel');

// gets all Success stories
exports.getISPList = (req, callback) => {
    ISP.find().exec().then(ispList => {
        callback(null, ispList);
    }).catch(err => callback(err));
}

// adds a new SuccessStory
exports.registerISP = (req, callback) => {
    var ispDetails = {
        name: req.body.name,
        email:req.body.email,
        lowest_price:req.body.lowest_price,
        rating:req.body.rating,
        max_speed:req.body.max_speed,
        description:req.body.description,
        contact_no:req.body.contact_no,
        image:req.body.image,
        url:req.body.url
    }
    let isp = new ISP(ispDetails);
    isp.save().then(data => {
        callback(null, data);
    })
    .catch(err => {
        callback(err);
    });
}