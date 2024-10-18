const express = require('express');
const {join} = require('path');
const router = express.Router();




router.get('/', (req, res)=>{
  try {
    res.render('site/main');
  } catch (error) {
    console.log(error);
    res.render('errors/404');
  }
})


module.exports = router