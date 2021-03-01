const express = require('express');
const Cart = require('../cart');
const router = express.Router();

/* GET home page. */

router.route('/')
  .get((req, res, next) => {
    res.render('layout', { title: 'Shop', partials: { content: 'index' }, items: global.items });
  })
  .post((req, res, next) => {
    // const cart = req.session.cart || new Cart();
    console.log('res.locals.cart:', res.locals.cart);
    //3 - req.session.cart for some reason isnt a Cart its just an sessionObject. Has items but not Cart prototype... recreate Cart, passing in old items
    const cart = new Cart(req.session.cart ? req.session.cart.items : {});

    //console.log('before add', cart);
    cart.addItem(req.body.id, +req.body.count);
    //console.log('after add', cart);

    req.session.cart = cart;

    // 1 - added - we never ended the request so session cookie wasnt sent back
    res.redirect('/');
  })
router.route('/cart')
  .get((req, res, next) => {
    const cart = new Cart(req.session.cart ? req.session.cart.items : {});

    req.session.cart = cart;

    let grandTotalPrice = 0;
    const itemsInCart = [];

    function getItemsInCart() {
      let sessionObj = cart.getItems();
      for (const sessionId in sessionObj) {
        global.items.forEach(item => { //if items were in database, would do a sql query insted
          if (item.id === +sessionId) {
            item.amount = sessionObj[sessionId];
            item.totalPrice = +((item.amount * item.price).toFixed(2));
            itemsInCart.push(item);
            grandTotalPrice += item.totalPrice;
          }
        });
      }
    }
    getItemsInCart();

    res.render('layout',
      {
        title: 'Shopping Cart',
        partials: { content: 'veiwCart' },
        items: itemsInCart,
        grandTotal: grandTotalPrice.toFixed(2)
      });
  })

module.exports = router;
