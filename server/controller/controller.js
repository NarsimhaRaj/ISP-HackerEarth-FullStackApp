const service = require('../Services/service');
const { validationResult } = require('express-validator');

exports.getISPList = (req, res) => {

   var response = {};
   service.getISPList(req, (err, data) => {
      if (!err){
         response.data = data;
         response.message = "Data Retrived successfully";
         res.status(200).send(response);
      }
      else{
         response.errors = err;
         response.message = "error occured while storing data";
         res.status(404).send(response);
      }
   })
};

exports.registerISP = (req, res) => {
   
   var response = {};
   const errors = validationResult(req);
   
   if (errors.isEmpty()) {
      service.registerISP(req, (err, data) => {
         if (!err){
            response.data = data;
            response.message = "Data Retrived successfully";
            res.status(200).send(response);
         }
         else{
            response.errors = err;
            response.message = "error occured while storing data";
            res.status(404).send(response);
         }
      })
   }
   else {
      response.errors = errors.array();
      response.message = "Validation error";
      res.status(422).send(response);
   }
}

