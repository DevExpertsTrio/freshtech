const Express = require('express');
const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')

const router = Express.Router();

// router.use(authController.isLoggedIn);

router.get('/', authController.isLoggedIn, viewController.getOverview);
router.get('/tour/:tourSlug', authController.isLoggedIn, viewController.getProduct);
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);

module.exports = router;