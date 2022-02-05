const router = require('express').Router();
const { Brands, Types} = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

//get all brands
router.get('/', async (req, res) => {
    try {
      const allBrands = await Brands.findAll({
        
    });
  
    
  console.log('allBrands' , allBrands );
      res.render('homepage', {
       allBrands,
      loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/allBrands/:id', async (req, res) => {
    try {
      const allBrands = await Brands.findByPk(req.params.id);
        
         
      
      console.log('the brand you want is', allBrands);
      console.log('session is', req.session);
      res.render('allBrands', { allBrands , username: req.session.username });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
 




router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;