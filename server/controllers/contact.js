let express = require('express');
let router = express.Router();

// create a reference to the model
let Contact = require('../models/contact')

// create a reference to the model
let Feedback = require('../models/feedback')

/* GET contact us page. */
module.exports.displayContactPage = (req, res, next) => {
  res.render('contact-me', { title: 'Contact',
  displayName: req.user ? req.user.displayName : '' });
};

/* POST from contact us page. */
module.exports.processContactInformation = (req, res, next) => {
  Feedback.firstName = req.body.userFirstName;
  Feedback.lastName = req.body.userLastName;
  Feedback.number = req.body.userContactNumber;
  Feedback.email = req.body.userEmailId;
  Feedback.message = req.body.userMessage;
  res.redirect('/home');
};

/* GET router for the Contact list page */
module.exports.displayContactList = (req, res, next) => {
  Contact.find((err, contactList) => {
      if(err){
      return console.error(err);
      }else{
           console.log(contactList);
           if(typeof req.user == 'undefined'){    //if user is not logedin then redirect to home page not allowing user to asscess restriced part of application
                res.redirect('/');
           }
           else{
            res.render('contact/list', 
            {
                title: 'Contact List', 
                contactList: contactList, 
                displayName: req.user ? req.user.displayName : ''
            });
           }
      }
  }).sort({name:1});     // to Sort by name 
};

/* GET router for the ADD Contact page - CREATE */
module.exports.displayAddContact =  (req, res, next) => {
    if(typeof req.user == 'undefined'){    //if user is not logedin then redirect to home page not allowing user to asscess restriced part of application
        res.redirect('/');
   }
   else{
  res.render('contact/add', {title: 'Add Contact', 
  displayName: req.user ? req.user.displayName : ''});
   }
};

/* POST router for the ADD Contact page - CREATE */
module.exports.processContactCreation =  (req, res, next) => {
  let newContact = Contact ({
      name: req.body.name,
      number: req.body.contactNumber,
      email: req.body.emailId
  });
  Contact.create(newContact, (err) =>{
      if(err) {
          console.log(err);
          res.end(err);
      } else {
          // refresh Contactlist
          res.redirect('/contact/list');
      }
  });
};

/* GET router for the EDIT Contact page - UPDATE */
module.exports.displayEditContact =  (req, res, next) => {
  let id = req.params.id;
  Contact.findById(id, (err, contactToEdit) =>{
      if(err) {
          console.log(err);
          res.end(err);
      } else {
          // show the edit view
          if(typeof req.user == 'undefined'){    //if user is not logedin then redirect to home page not allowing user to asscess restriced part of application
            res.redirect('/');
       }
       else{
          res.render('contact/edit', {title: 'Edit Contact', contact:{
            _id:id,
            contactToEdit
          } , 
          displayName: req.user ? req.user.displayName : ''})
       }
       }
  });
};

/* POST router for the EDIT Contact page - UPDATE */
module.exports.processContactUpdate = (req, res, next) => {
  let id = req.params.id;
  let updatedContact = Contact ({
      _id: id,
      name: req.body.name,
      number: req.body.contactNumber,
      email: req.body.emailId
  });

  Contact.updateOne({_id: id}, updatedContact, (err) => {
      if(err){
          console.log(err);
          res.end(err); 
      } else {
          // refresh Contactlist
          res.redirect('/contact/list');
      }
  });
};


/* GET router for the DELETE Contact page - DELETE */
module.exports.performContactDeletion =  (req, res, next) => {
  let id = req.params.id;
  Contact.remove({_id: id}, (err) =>{
      if(err) {
          console.log(err);
          res.end(err);
      } else {
          // refresh Contact list
          if(typeof req.user == 'undefined'){    //if user is not logedin then redirect to home page not allowing user to asscess restriced part of application
            res.redirect('/');
       }
       else{
          res.redirect('/contact/list');
      }
    }
  });
};


