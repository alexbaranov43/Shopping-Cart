function bounceX() {
    //storing number of items, cart total, and item images as variables
    const numOfItems = $('.mini-cart-container').attr('data-quantity');
    const cartTotal = $('.order-value').html();
    const itemImg = Array.from(document.querySelectorAll('.mini-cart-image'))
        .map(img => img.firstElementChild.firstElementChild.src);

    function overlay() {
        //creating a modal containing the cart
        const backDrop = document.createElement('div');
        const shoppingCart = document.createElement('div');
        const imgDiv = document.createElement('div');
        const costDiv = document.createElement('div');
        costDiv.innerHTML = `Estimated Total: ${cartTotal}`;
        const itemCountDiv = document.createElement('div');
        itemCountDiv.innerHTML = `Cart Qty: ${numOfItems}`;

        backDrop.append(shoppingCart);
        shoppingCart.append(itemCountDiv);
        shoppingCart.append(costDiv);
        itemImg.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            imgDiv.appendChild(img);
        });

        shoppingCart.append(imgDiv);
        //stylizing the modal
        function styleModal() {
            //whole screen black blurr of page
            backDrop.style.zIndex = '1000';
            backDrop.style.height = '100%';
            backDrop.style.width = '100%';
            backDrop.style.position = 'fixed';
            backDrop.style.top = '0';
            backDrop.style.backgroundColor = 'rgba(0,0,0, 0.85)';

            //sizing of the overlay
            shoppingCart.style.backgroundColor = 'white';
            shoppingCart.style.margin = '10% auto';
            shoppingCart.style.width = '55%';
            shoppingCart.style.textAlign = 'center';
            shoppingCart.style.fontSize = '18px';

            //styling of overlay contents
            const cartDivs = shoppingCart.childNodes
            cartDivs.forEach(content => {
                content.style.display = 'block';
                content.style.padding = '3%'
            })
        }

        //creating functional buttons within overlay
        function createButtons() {
            function cartButton() {
                const button = document.createElement('button');
                button.style.margin = '5%';
                button.className = 'checkout-button show-for-large'
                return button;
            }

            //take user to checkout page
            const cartRedirect = cartButton();
            cartRedirect.innerHTML = 'Checkout';
            const checkout = $('.minicart-link').attr('href');
            cartRedirect.addEventListener('click', () => window.location.href = checkout);
            //take user back to main page
            const closeModal = cartButton();
            closeModal.innerHTML = 'Back To Shopping';
            closeModal.addEventListener('click', () => backDrop.style.display = 'none');

            return [cartRedirect, closeModal];
        }

        styleModal();
        const buttons = createButtons();
        buttons.forEach(button => shoppingCart.append(button))
        document.body.append(backDrop);
        document.documentElement.append(backDrop)

        return backDrop;
    }
    //returns overlay every time user reaches bottom
    const modal = overlay();
    document.addEventListener('scroll', showOverlay);

    //takes user to the top of the page and shows the overlay
    function showOverlay() {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0
            return modal.style.display = 'block';
        }
    }
};
bounceX()











