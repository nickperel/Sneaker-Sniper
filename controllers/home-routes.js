const router = require('express').Router();
const { type } = require('express/lib/response');
const { User, Brands, Types, Tags, Sneakers, SneakerTags } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('pages/welcome', {
    loggedIn: req.session.loggedIn,
  })
})
 
//get all brands
router.get('/allBrands', async (req, res) => {
    try {
      const allBrands = await Brands.findAll({

      });
  
      const brands = allBrands.map((brands) =>
      brands.get({ plain: true })
    );

    res.render('pages/homepage', {
        allBrands,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//get one brand
  router.get('/allBrands/:id', withAuth, async (req, res) => {
    try {
      const allBrands = await Brands.findByPk(req.params.id, {
        include: [
          {
            model: Sneakers,
            attributes: [
              'id',
              'sneaker_name',
              'price',
              'stock',
              'img',        
              'type_id',
            ],
          },
        ],
      });
       
        
   const newBrands = allBrands.get({ plain: true });
      //console.log('session is', req.session);
      res.render('pages/allBrands', { 
        newBrands, 
        username: req.session.username,
        loggedIn: req.session.loggedIn, 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
//get all sneakers

router.get('/allSneakers', withAuth, async (req, res) => {
    try {
      const allSneakers = await Sneakers.findAll({
       
      });
  
     
 // console.log('allSneakers' , allSneakers );
      res.render('pages/allSneakers', {
        allSneakers,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//get one sneaker
router.get('/allSneakers/:id', withAuth, async (req, res) => {
    try {
      const allSneakers = await Sneakers.findByPk(req.params.id, {
        include: [
          
          {
            model: Types,
            attributes: [
              
              'Type_name',
              
            ],
          },
          {
            model: Tags,
            attributes: [
              'id',
              'tag_name',
                
              ],
          },
          
        ],
      });
 
      const newSneaker = allSneakers.get({ plain: true });
      console.log('the sneaker you want is', newSneaker);
      
      res.render('pages/oneSneaker', { 
        newSneaker, 
        username: req.session.username,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/allBrands');
    return;
  }

  res.render('pages/login');
});

router.get('/signup', (req, res) => {

  res.render('pages/sign-up');
});

module.exports = router;