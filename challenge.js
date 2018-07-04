function bounceX() {
    //storing number of items, cart total, and item images as variables
    const numOfItems = $('.mini-cart-container').attr('data-quantity');
    const cartTotal = $('.order-value').html();
    const itemImg = $('.mini-cart-image').map(img => $('.mini-cart-image').children().children().attr('src')).toArray()



    //trigger overlay at bottom scroll
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > document.body.scrollTop * 0.9 || document.documentElement.scrollTop > document.documentElement.scrollTop * 0.9) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
        }
    }
    //return to top


};











