document.addEventListener("DOMContentLoaded", function(){
    if(window.location.href.includes('index.html')){
        smoothScroll();
        fixNav();
    }
    if(window.location.href.includes('index.html') || window.location.href.includes('product.html')){
        hamburgerMenu();
    }
});



function fixNav() {
    if (window.location.href.includes("index.html")) {
        let nav = document.querySelector('.nav-index');
        let barLogo = document.querySelector('.brand')
        let header = document.querySelector('.header');
        let navOffsetTop = nav.offsetTop;
    
        function fixNav() {
            if (window.scrollY >= navOffsetTop && !nav.classList.contains('fix') && !barLogo.classList.contains('fix')) {
            header.style.paddingTop = '98.22px';
            nav.classList.add('fix');
            barLogo.classList.add('fix')
        } else if ((window.scrollY < navOffsetTop || window.scrollY === 0) && nav.classList.contains('fix')  && barLogo.classList.contains('fix')) {
            header.style.paddingTop = '0';
            nav.classList.remove('fix');
            barLogo.classList.remove('fix')
            }
        }
    
        window.addEventListener('scroll', fixNav);
    }
}
function smoothScroll(){
    const links = document.querySelectorAll(".nav a");
    const links2 = document.querySelectorAll('.shoes-menu a')
    links.forEach(link =>{
        link.addEventListener("click", function(e){
            e.preventDefault();

            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
    links2.forEach(link =>{
        link.addEventListener("click", function(e){
            e.preventDefault();

            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
}
function hamburgerMenu(){
    let hamButton = document.querySelector('.menu-ham')
    let linksContainer = document.querySelector('.enlaces')
    hamButton.addEventListener('click', ()=>{
        linksContainer.classList.toggle('open-menu')
        if (window.innerWidth >= 768) {
            linksContainer.classList.remove('open-menu')
        }
    })
}


if(window.location.href.includes("index.html") || window.location.href.includes("product.html") ){
    document.querySelector('.cart-title').style.borderBottom = 'none';
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.querySelector('.cart-title').style.borderBottom = '1px solid rgba(0, 0, 0, 0.185)';
            }, 500);
        });

        const containerEnlaces = document.querySelector(".container-enlaces");
        const textos = document.querySelectorAll('.opac');
        const slideDown =  document.querySelector('.slide-down');
        const shoes = document.querySelector(".shoes-menu");
        const brand = document.querySelector(".brand-menu");
        const lct = document.querySelector(".location-menu");

        if (window.innerWidth > 1024) {
            
            containerEnlaces.addEventListener('mouseover', (e) => {
                    if(e.target.matches(".opcion")){
                        slideDown.style.height = '13rem'
                        slideDown.style.width = '100%';
                        textos.forEach((i)=>{
                            i.style.opacity = '1'
                        })
                    }
                    if (e.target.matches('.shs')) {
                        shoes.style.height = 'auto';
                        shoes.style.width = 'auto';
                        shoes.style.visibility = 'visible';
                
                        brand.style.height = '0rem';
                        brand.style.width = '0rem';
                        brand.style.visibility = 'hidden';
                
                        lct.style.height = '0rem';
                        lct.style.width = '0rem';
                        lct.style.visibility = 'hidden';
                
                        slideDown.style.height = '13rem'
                        slideDown.style.width = '100%';
                        textos.forEach((i)=>{
                            i.style.opacity = '1'
                        })
                    }
                    if (e.target.matches('.br')) {
                        brand.style.height = 'auto';
                        brand.style.width = 'auto';
                        brand.style.visibility = 'visible';
                
                        shoes.style.height = '0rem';
                        shoes.style.width = '0rem';
                        shoes.style.visibility = 'hidden';
                
                        lct.style.height = '0rem';
                        lct.style.width = '0rem';
                        lct.style.visibility = 'hidden';
                
                        slideDown.style.height = '13rem'
                        slideDown.style.width = '100%';
                        textos.forEach((i)=>{
                            i.style.opacity = '1'
                        })
                    }
                    if (e.target.matches('.lct')) {
                        lct.style.height = 'auto';
                        lct.style.width = 'auto';
                        lct.style.visibility = 'visible';
                
                        shoes.style.height = '0rem';
                        shoes.style.width = '0rem';
                        shoes.style.visibility = 'hidden';
                
                        brand.style.height = '0rem';
                        brand.style.width = '0rem';
                        brand.style.visibility = 'hidden';
                
                        slideDown.style.height = '13rem'
                        slideDown.style.width = '100%';
                        textos.forEach((i)=>{
                            i.style.opacity = '1'
                        })
                    }
                });
                const menus = [shoes,brand,lct];
                menus.forEach(e=>{
                    e.addEventListener('mouseleave', () => {
                        e.style.height = '0rem';
                        e.style.width = '0rem';
                        e.style.visibility = 'hidden';
                        slideDown.style.height = '0rem'
                        slideDown.style.width = '0rem';
                        textos.forEach((i)=>{
                            i.style.opacity = '0';
                        })
                    });
                })
        }
        
        const body = document.querySelector("body");
        const divCart = document.querySelector(".divCart");
        const items = document.querySelectorAll(".item");
        const bounceAnimation = document.querySelector(".bounce");
        const titleSlider = document.querySelectorAll(".title");
        const closeButton = document.querySelector(".close");
        const cart = document.querySelector(".cart");
        const divOverlay = document.querySelector(".overlay");
        
        const cerrado = [closeButton, divOverlay];
        cerrado.forEach(e=>{
            e.addEventListener("click", () => {
                divCart.classList.remove("abierto");
                divCart.classList.add("cerrado");
                divOverlay.classList.remove("showOverlay");
                body.classList.remove('no-scroll')
                if(window.location.href.includes("index.html")){
                    bounceAnimation.style.animationPlayState = 'running'
                }
                items.forEach(e=>{
                    e.style.visibility = 'hidden';
                })
            });
        
        })
        
        cart.addEventListener("click", () => {
            divCart.style.height = "100vh";
            divCart.classList.remove("cerrado");
            divCart.classList.add("abierto");
            divOverlay.classList.add("showOverlay");
            body.classList.add('no-scroll');
            if(window.location.href.includes("index.html")){
                bounceAnimation.style.animationPlayState = 'paused'
            }
            items.forEach(e=>{
                e.style.visibility = 'visible';
            })
        });
}




if(window.location.href.includes("product.html")){

    const button1 = document.querySelector(".button-faq1");
    const button2 = document.querySelector(".button-faq2");
    
    const buttonContainer1 = document.querySelector(".button-container1");
    const buttonContainer2 = document.querySelector(".button-container2");
    
    const arrow1 = document.querySelector(".arrow1");
    const arrow2 = document.querySelector(".arrow2");
    
    
    button1.addEventListener('click', function() {
        buttonContainer1.classList.toggle("active");
        if(buttonContainer1.classList.contains('active')){
            arrow1.src = 'build/img/up-arrow.svg';
        } else {
            arrow1.src = 'build/img/down-arrow.svg';
        }
    });
    button2.addEventListener('click', function() {
        buttonContainer2.classList.toggle("active");
        if(buttonContainer2.classList.contains('active')){
            arrow2.src = 'build/img/up-arrow.svg';
        } else {
            arrow2.src = 'build/img/down-arrow.svg';
        }
    });
    
    const sizes = document.querySelectorAll(".size");
    let activeSize = null;
    let prevSize = null;
    
    sizes.forEach(size => {
        size.addEventListener("click", () => {
            if (activeSize !== size) {
            if (prevSize) {
                prevSize.classList.remove("size-active");
            }
            activeSize = size;
            prevSize = activeSize;
            activeSize.classList.add("size-active");
            } else {
            activeSize.classList.remove("size-active");
            activeSize = null;
            prevSize = null;
            }
        });
    });
    
    
    
    const addToCartBtn = document.querySelector(".button-addToCart");
    const divErrorContainer = document.querySelector(".product-titles")
    let errorCreated = false;
    
    addToCartBtn.addEventListener("click", () => {
        if (!activeSize) {
            if(!errorCreated){
                error = document.createElement('P');
                error.textContent = 'You have to select a size';
                error.classList.add('error');
                divErrorContainer.appendChild(error);
                errorCreated = true;
                return;
            } else {
            }
        } else {
            errorCreated = false;
            if(errorCreated){
                divErrorContainer.removeChild(error);
            }

            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let str = 'cartEmpty';
            let name = urlParams.get('name');
            let price = urlParams.get('price')
            let img = urlParams.get('img1')
            if(window.location.href.includes("product.html?str")){
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString);

                let namep1 = urlParams.get('namep1');
                let pricep1 = urlParams.get('pricep1')
                let imgp1 = urlParams.get('imgp1')
                window.location.href = `index.html?pricep1=${pricep1}&cartE=${str}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}`
            } else if(window.location.href.includes("product.html?pricep2")){
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString);
                let namep1 = urlParams.get('namep1');
                let pricep1 = urlParams.get('pricep1')
                let imgp1 = urlParams.get('imgp1')

                let namep2 = urlParams.get('namep2');
                let pricep2 = urlParams.get('pricep2')
                let imgp2 = urlParams.get('imgp2')

                window.location.href = 
                `index.html?pricep2=${pricep2}&namep2=${namep2}&imgp2=${imgp2}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}&pricep1=${pricep1}&cartE=${str}`
            } else if(window.location.href.includes("product.html?pricep3")){
                let queryString = window.location.search;
                let urlParams = new URLSearchParams(queryString);
                let namep1 = urlParams.get('namep1');
                let pricep1 = urlParams.get('pricep1')
                let imgp1 = urlParams.get('imgp1')
                
                let namep2 = urlParams.get('namep2');
                let pricep2 = urlParams.get('pricep2');
                let imgp2 = urlParams.get('imgp2');
                
                let namep3 = urlParams.get('namep3');
                let pricep3 = urlParams.get('pricep3');
                let imgp3 = urlParams.get('imgp3');
                
                window.location.href = 
                `index.html?pricep3=${pricep3}&namep3=${namep3}&imgp3=${imgp3}&pricep2=${pricep2}&namep2=${namep2}&imgp2=${imgp2}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}&pricep1=${pricep1}&cartE=${str}`
            }   else {
                window.location.href = `index.html?cartE=${str}&name=${name}&price=${price}&img=${img}`;
            }
        }
        
    });
}

let ln = 1;
function createProduct(str, price,name,img, clas, trash, productPriceClas){
    document.getElementById('cart-empty').classList.add(str);
    document.getElementById('cart-empty-title').classList.add(str);
    document.getElementById('cart-empty-title').textContent = '';
    let cartContent = document.querySelector('.cart-content');
    let cartProduct = document.createElement('DIV');
    let cartImg = document.createElement('IMG');
    let cartName = document.createElement('H2');
    let cartTrash = document.createElement('IMG');
    let cartNameTrashContainer = document.createElement('DIV');
    let cartPrice = document.createElement('P');
    let cartSum = document.createElement('DIV');
    let cartMore = document.createElement('P');
    let cartLess = document.createElement('P');
    let cartNum = document.createElement('P');
    let cartPriceSumContainer = document.createElement('DIV');
    cartTrash.src = 'build/img/trash.svg';
    cartTrash.setAttribute = ("alt", "Trash Button");
    cartTrash.classList.add(trash);
    cartNameTrashContainer.classList.add('name-trash-container')
    cartMore.textContent = '+';
    cartLess.textContent = '-';
    cartNum.textContent= '1';
    cartSum.appendChild(cartLess);
    cartSum.appendChild(cartNum);
    cartSum.appendChild(cartMore);
    cartLess.classList.add('ls');
    cartMore.classList.add('lm');
    cartNum.classList.add('ln')
    cartImg.src = img;
    cartPrice.textContent = price;
    cartPrice.classList.add(productPriceClas)
    cartName.textContent = name;
    let cartWords = document.createElement('DIV');
    cartWords.classList.add('cart-words')
    cartPriceSumContainer.appendChild(cartSum);
    cartPriceSumContainer.appendChild(cartPrice);
    cartNameTrashContainer.appendChild(cartName);
    cartNameTrashContainer.appendChild(cartTrash);
    cartSum.classList.add('sum')
    cartPriceSumContainer.classList.add('price-container')
    cartWords.appendChild(cartNameTrashContainer);
    cartWords.appendChild(cartPriceSumContainer);
    let data = [cartImg,cartWords];
    data.forEach(e=>{
        cartProduct.appendChild(e);
    })
    cartProduct.classList.add('cart-product')
    cartProduct.classList.add(clas)
    cartProduct.classList.add('dissapear')

    cartContent.style.marginBottom = '0';
    
    document.querySelector('.cart-title').style.borderBottom = 'none';
    window.addEventListener('load', function() {
        setTimeout(function() {
            cartProduct.classList.remove('dissapear')
            document.querySelector('.cart-title').style.borderBottom = '1px solid rgba(0, 0, 0, 0.185)';
        }, 500);
    });
    
    cartContent.appendChild(cartProduct)
    document.querySelector('.cart-helper').classList.add('no-center')


    cartMore.addEventListener('click', ()=>{
        newNum =parseInt(cartNum.textContent);
        newNum+=1;
        cartNum.textContent = newNum;
        newPrice = price.split(' ');
        newPrice.splice(0,1);
        newPrice = newPrice.toString().replace('.', '')
        newPrice = newPrice * newNum;
        newPrice = newPrice.toLocaleString('es-ES')
        cartPrice.textContent = '$ ' + newPrice;
        if(parseInt(cartNum.textContent) === 6){
            cartNum.textContent = 1;
            cartPrice.textContent = price;
        }
        ln = newNum;
    })
    cartLess.addEventListener('click', ()=>{
        newNum =parseInt(cartNum.textContent);
        newNum-=1;
        cartNum.textContent = newNum;
        newPrice = price.split(' ');
        newPrice.splice(0,1);
        newPrice = newPrice.toString().replace('.', '')
        newPrice = newPrice * newNum;
        newPrice = newPrice.toLocaleString('es-ES')
        cartPrice.textContent = '$ ' + newPrice;

        ln = newNum;
    })
}
let newPrice; 
function createPurchase(totalPrice, subTotal){
    let cartContainer = document.querySelector('.cart-helper');
    let cartPurchaseContainer = document.createElement('DIV');
    let cartSubTotal = document.createElement('P');
    let cartSubTotalTitle = document.createElement('H2')
    let cartSubTotalContainer = document.createElement('DIV')
    let cartTotalPrice = document.createElement('P');
    let cartTotalPriceTitle = document.createElement('H2');
    let cartTotalPriceContainer = document.createElement('DIV')
    let cartPurchaseButton = document.createElement('BUTTON');
    
    let product1 = document.querySelector('.product1');
    let cartContent = document.querySelector('.cart-content');
    let closeButton = document.querySelector(".close");
    let cart = document.querySelector(".cart");
    let divOverlay = document.querySelector(".overlay");
    let cerrado = [closeButton, divOverlay];

    cartSubTotalTitle.textContent = 'Subtotal';
    cartSubTotal.textContent =  subTotal;
    cartSubTotal.classList.add('sub')
    cartSubTotalContainer.classList.add('sub-total');
    cartSubTotalContainer.appendChild(cartSubTotalTitle);
    cartSubTotalContainer.appendChild(cartSubTotal);
    
    cartTotalPriceTitle.textContent = 'Total';
    cartTotalPrice.textContent =  totalPrice;
    cartTotalPrice.classList.add('total');
    cartTotalPriceContainer.classList.add('total-price');
    cartTotalPriceContainer.appendChild(cartTotalPriceTitle);
    cartTotalPriceContainer.appendChild(cartTotalPrice);
    
    cartPurchaseButton.textContent = 'Buy';
    cartPurchaseButton.classList.add('buy-button');
    
    data = [cartSubTotalContainer,cartTotalPriceContainer,cartPurchaseButton]
    data.forEach(e=>{
        cartPurchaseContainer.appendChild(e);
    })
    cartPurchaseContainer.classList.add('cart-purchase-container');
    cartContainer.appendChild(cartPurchaseContainer);
    
    let ls = document.querySelector('.ls');
    let ln = document.querySelector('.ln');
    let lm = document.querySelector('.lm');
    lm.addEventListener('click', ()=>{
        newPrice = '$ ' + (parseInt(totalPrice.split(' ').splice(1,2).toString().replace('.', '')) * parseInt(ln.textContent)).toLocaleString('es-ES');
        cartTotalPrice.textContent = newPrice;
        cartSubTotal.textContent = newPrice;
    })
    ls.addEventListener('click', ()=>{
        newPrice = '$ ' + (parseInt(totalPrice.split(' ').splice(1,2).toString().replace('.', '')) * parseInt(ln.textContent)).toLocaleString('es-ES');
        cartTotalPrice.textContent = newPrice;
        cartSubTotal.textContent = newPrice;
        if(parseInt(ln.textContent) === 0){
            cartContent.removeChild(product1)
            window.location.href = `index.html`;
        }
    })

    document.querySelector('.cart-purchase-container').classList.add('dissapear');
    document.querySelector('.sub-total').classList.add('dissapear');
    document.querySelector('.total-price').classList.add('dissapear');
    document.querySelector('.buy-button').classList.add('dissapear');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.cart-purchase-container').classList.remove('dissapear');
            document.querySelector('.sub-total').classList.remove('dissapear');
            document.querySelector('.total-price').classList.remove('dissapear');
        }, 500);
    });
    cart.addEventListener('click', ()=>{
        document.querySelector('.buy-button').classList.remove('dissapear');
    })
    cerrado.forEach(e=>{
        e.addEventListener('click', ()=>{
            document.querySelector('.buy-button').classList.add('dissapear');
        })
    })
}
function createPurchase1(totalPrice, subTotal){
    let cartContainer = document.querySelector('.cart-helper');
    let cartPurchaseContainer = document.createElement('DIV');
    let cartSubTotal = document.createElement('P');
    let cartSubTotalTitle = document.createElement('H2')
    let cartSubTotalContainer = document.createElement('DIV')
    let cartTotalPrice = document.createElement('P');
    let cartTotalPriceTitle = document.createElement('H2');
    let cartTotalPriceContainer = document.createElement('DIV')
    let cartPurchaseButton = document.createElement('BUTTON');
    let closeButton = document.querySelector(".close");
    let cart = document.querySelector(".cart");
    let divOverlay = document.querySelector(".overlay");
    let cerrado = [closeButton, divOverlay];

    cartSubTotalTitle.textContent = 'Subtotal';
    cartSubTotal.textContent =  subTotal;
    cartSubTotal.classList.add('sub')
    cartSubTotalContainer.classList.add('sub-total');
    cartSubTotalContainer.appendChild(cartSubTotalTitle);
    cartSubTotalContainer.appendChild(cartSubTotal);
    
    cartTotalPriceTitle.textContent = 'Total';
    cartTotalPrice.textContent =  totalPrice;
    cartTotalPrice.classList.add('total');
    cartTotalPriceContainer.classList.add('total-price');
    cartTotalPriceContainer.appendChild(cartTotalPriceTitle);
    cartTotalPriceContainer.appendChild(cartTotalPrice);
    
    cartPurchaseButton.textContent = 'Buy';
    cartPurchaseButton.classList.add('buy-button');
    
    data = [cartSubTotalContainer,cartTotalPriceContainer,cartPurchaseButton]
    data.forEach(e=>{
        cartPurchaseContainer.appendChild(e);
    })
    cartPurchaseContainer.classList.add('cart-purchase-container');
    cartContainer.appendChild(cartPurchaseContainer);

    document.querySelector('.cart-purchase-container').classList.add('dissapear');
    document.querySelector('.buy-button').classList.add('dissapear');

    window.addEventListener('load', function() {
        setTimeout(function() {
            document.querySelector('.cart-purchase-container').classList.remove('dissapear');
        }, 500);
    });
    cart.addEventListener('click', ()=>{
        document.querySelector('.buy-button').classList.remove('dissapear');
    })
    cerrado.forEach(e=>{
        e.addEventListener('click', ()=>{
            document.querySelector('.buy-button').classList.add('dissapear');
        })
    })

    cartPurchaseButton.addEventListener('click', ()=>{

    })
}

let numCalculated = 0;
let a;
let b;
let c;
let d;
let lnNum;
let lnNum1;
let lnNum2;
let lnNum3;
let lnCounter;
let productsInCart;


function calculatePrice(price1, price2){
    price1 = parseInt(price1.split(' ').splice(1,2).toString().replace('.', ''));
    price2 = parseInt(price2.split(' ').splice(1,2).toString().replace('.', ''));

    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let cartContent = document.querySelector('.cart-content');
    lnCounter = 2;
    let ls = document.querySelector('.product1 .ls');
    let ln = document.querySelector('.product1 .ln');
    let lm = document.querySelector('.product1 .lm');

    let ls1 = document.querySelector('.product2 .ls')
    let ln1 = document.querySelector('.product2 .ln')
    let lm1 = document.querySelector('.product2 .lm')
    

    a = price1;
    b = price2;
    lm.addEventListener('click', ()=>{
        a = (price1*parseInt((ln.textContent)));
        numCalculated =  "$ " + (a + b).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum = parseInt((ln.textContent))
    })
    lm1.addEventListener('click', ()=>{
        b = (price2*parseInt((ln1.textContent)));
        numCalculated =  "$ " + (a + b).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum1 = parseInt((ln1.textContent))
    })
    ls.addEventListener('click', ()=>{
        a = ln.textContent * price1
        numCalculated =  "$ " + (a + b).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum = parseInt((ln.textContent))
        if(parseInt(ln.textContent) === 0){
            cartContent.removeChild(product1)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls1.addEventListener('click', ()=>{
        b = ln1.textContent * price2
        numCalculated =  "$ " + (a + b).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum1 = parseInt((ln1.textContent))
        if(parseInt(ln1.textContent) === 0){
            cartContent.removeChild(product2)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })

}
function calculatePrice2(price1, price2, price3){
    price1 = parseInt(price1.split(' ').splice(1,2).toString().replace('.', ''));
    price2 = parseInt(price2.split(' ').splice(1,2).toString().replace('.', ''));
    price3 = parseInt(price3.split(' ').splice(1,2).toString().replace('.', ''));

    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let product3 = document.querySelector('.product3');
    let cartContent = document.querySelector('.cart-content');
    lnCounter = 3;

    let ls = document.querySelector('.product1 .ls');
    let ln = document.querySelector('.product1 .ln');
    let lm = document.querySelector('.product1 .lm');

    let ls1 = document.querySelector('.product2 .ls')
    let ln1 = document.querySelector('.product2 .ln')
    let lm1 = document.querySelector('.product2 .lm')
    
    let ls2 = document.querySelector('.product3 .ls')
    let ln2 = document.querySelector('.product3 .ln')
    let lm2 = document.querySelector('.product3 .lm')
    a = price1;
    b = price2;
    c = price3;
    lm.addEventListener('click', ()=>{
        a = (price1*parseInt((ln.textContent)));
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum = ln.textContent;
    })
    lm1.addEventListener('click', ()=>{
        b = (price2*parseInt((ln1.textContent)));
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum1 = ln1.textContent;
    })
    lm2.addEventListener('click', ()=>{
        c = (price3*parseInt((ln2.textContent)));
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum2 = ln2.textContent;
    })
    ls.addEventListener('click', ()=>{
        a = ln.textContent * price1
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln.textContent) === 0){
            cartContent.removeChild(product1)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls1.addEventListener('click', ()=>{
        b = ln1.textContent * price2
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln1.textContent) === 0){
            cartContent.removeChild(product2)
            productsInCart-=1;
            lnCounter-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls2.addEventListener('click', ()=>{
        c = ln2.textContent * price3
        numCalculated =  "$ " + (a + b + c).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln2.textContent) === 0){
            cartContent.removeChild(product3)
            productsInCart-=1;
            lnCounter-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
}
function calculatePrice3(price1, price2, price3, price4){
    price1 = parseInt(price1.split(' ').splice(1,2).toString().replace('.', ''));
    price2 = parseInt(price2.split(' ').splice(1,2).toString().replace('.', ''));
    price3 = parseInt(price3.split(' ').splice(1,2).toString().replace('.', ''));
    price4 = parseInt(price4.split(' ').splice(1,2).toString().replace('.', ''));

    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let product3 = document.querySelector('.product3');
    let product4 = document.querySelector('.product4');
    let cartContent = document.querySelector('.cart-content');
    lnCounter = 4;

    let ls = document.querySelector('.product1 .ls');
    let ln = document.querySelector('.product1 .ln');
    let lm = document.querySelector('.product1 .lm');

    let ls1 = document.querySelector('.product2 .ls')
    let ln1 = document.querySelector('.product2 .ln')
    let lm1 = document.querySelector('.product2 .lm')
    
    let ls2 = document.querySelector('.product3 .ls')
    let ln2 = document.querySelector('.product3 .ln')
    let lm2 = document.querySelector('.product3 .lm')

    let ls3 = document.querySelector('.product4 .ls')
    let ln3 = document.querySelector('.product4 .ln')
    let lm3 = document.querySelector('.product4 .lm')
    a = price1;
    b = price2;
    c = price3;
    d = price4;
    lm.addEventListener('click', ()=>{
        a = (price1*parseInt((ln.textContent)));
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum = parseInt((ln.textContent))
    })
    lm1.addEventListener('click', ()=>{
        b = (price2*parseInt((ln1.textContent)));
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum1 = parseInt((ln1.textContent))
    })
    lm2.addEventListener('click', ()=>{
        c = (price3*parseInt((ln2.textContent)));
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum2 = parseInt((ln2.textContent))
    })
    lm3.addEventListener('click', ()=>{
        d = (price4*parseInt((ln3.textContent)));
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        lnNum3 = parseInt((ln3.textContent))
    })

    ls.addEventListener('click', ()=>{
        a = ln.textContent * price1
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln.textContent) === 0){
            cartContent.removeChild(product1)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls1.addEventListener('click', ()=>{
        b = ln1.textContent * price2
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln1.textContent) === 0){
            cartContent.removeChild(product2)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls2.addEventListener('click', ()=>{
        c = ln2.textContent * price3
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln2.textContent) === 0){
            cartContent.removeChild(product3)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
    ls3.addEventListener('click', ()=>{
        d = ln3.textContent * price4
        numCalculated =  "$ " + (a + b + c + d).toLocaleString('es-ES');
        document.querySelector('.total').textContent = numCalculated;
        document.querySelector('.sub').textContent = numCalculated;
        if(parseInt(ln3.textContent) === 0){
            cartContent.removeChild(product4)
            lnCounter-=1;
            productsInCart-=1;
        } 
        if(lnCounter === 0 || productsInCart === 0){
            window.location.href = `index.html`;
        }
    })
}
function deletePurchase1(){
    let trash1 = document.querySelector('.trash1');
    let product1 = document.querySelector('.product1');
    let cartContent = document.querySelector('.cart-content');
    let purchaseContainer = document.querySelector('.cart-purchase-container');
    trash1.addEventListener('click', ()=>{
        cartContent.removeChild(product1);
        cartContent.classList.add('cart-center');
        purchaseContainer.classList.add('dissapear');
        document.getElementById('cart-empty').classList.remove('cartEmpty');
        document.getElementById('cart-empty-title').classList.remove('cartEmpty');
        document.getElementById('cart-empty-title').textContent = 'Your cart is empty';
        document.querySelector('.cart-helper').classList.add('empty');
        document.querySelector('.cart-helper').classList.remove('no-center');
        window.location.href = `index.html`;
    })
}
function deletePurchase2(){
    let trash1 = document.querySelector('.trash1');
    let trash2 = document.querySelector('.trash2');
    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let cartContent = document.querySelector('.cart-content');
    let purchaseContainer = document.querySelector('.cart-purchase-container');
    productsInCart = 2;
    let trashs = [trash1, trash2];
    let sub = document.querySelector('.sub');
    let total = document.querySelector('.total');


    trash1.addEventListener('click', ()=>{
        cartContent.removeChild(product1);  
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - a;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal

    })
    trash2.addEventListener('click', ()=>{
        cartContent.removeChild(product2);
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - b;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trashs.forEach(t=>{
        t.addEventListener('click',()=>{
            if(productsInCart === 0){
                cartContent.classList.add('cart-center');
                purchaseContainer.classList.add('dissapear');
                document.getElementById('cart-empty').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').textContent = 'Your cart is empty';
                document.querySelector('.cart-helper').classList.add('empty');
                document.querySelector('.cart-helper').classList.remove('no-center');
                window.location.href = `index.html`;
            }
        })
    })
}
function deletePurchase3(){
    let trash1 = document.querySelector('.trash1');
    let trash2 = document.querySelector('.trash2');
    let trash3 = document.querySelector('.trash3');
    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let product3 = document.querySelector('.product3');
    let cartContent = document.querySelector('.cart-content');
    let purchaseContainer = document.querySelector('.cart-purchase-container');

    let sub = document.querySelector('.sub')
    let total = document.querySelector('.total')

    productsInCart = 3;
    trash1.addEventListener('click', ()=>{
        cartContent.removeChild(product1);
        productsInCart-=1
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - a;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trash2.addEventListener('click', ()=>{
        cartContent.removeChild(product2);
        productsInCart-=1
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - b;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trash3.addEventListener('click', ()=>{
        cartContent.removeChild(product3);
        productsInCart-=1
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - c;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    let trashs = [trash1, trash2, trash3];
    trashs.forEach(t=>{
        t.addEventListener('click',()=>{
            if(productsInCart === 0){
                cartContent.classList.add('cart-center');
                purchaseContainer.classList.add('dissapear');
                document.getElementById('cart-empty').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').textContent = 'Your cart is empty';
                document.querySelector('.cart-helper').classList.add('empty');
                document.querySelector('.cart-helper').classList.remove('no-center');
                window.location.href = `index.html`;
            }
        })
    })
}
function deletePurchase4(){
    let trash1 = document.querySelector('.trash1');
    let trash2 = document.querySelector('.trash2');
    let trash3 = document.querySelector('.trash3');
    let trash4 = document.querySelector('.trash4');
    let product1 = document.querySelector('.product1');
    let product2 = document.querySelector('.product2');
    let product3 = document.querySelector('.product3');
    let product4 = document.querySelector('.product4');
    let cartContent = document.querySelector('.cart-content');
    let purchaseContainer = document.querySelector('.cart-purchase-container');
    productsInCart = 4;
    let trashs = [trash1, trash2, trash3, trash4];

    let sub = document.querySelector('.sub')
    let total = document.querySelector('.total')

    trash1.addEventListener('click', ()=>{
        cartContent.removeChild(product1);
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - a;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trash2.addEventListener('click', ()=>{
        cartContent.removeChild(product2);
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - b;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trash3.addEventListener('click', ()=>{
        cartContent.removeChild(product3);
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - c;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trash4.addEventListener('click', ()=>{
        cartContent.removeChild(product4);
        productsInCart-=1;
        newTotal = parseInt(total.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        newTotal = newTotal - d;
        newTotal = '$ ' + newTotal.toLocaleString('es-ES');
        total.textContent = newTotal;
        sub.textContent = newTotal
    })
    trashs.forEach(t=>{
        t.addEventListener('click',()=>{
            if(productsInCart === 0){
                cartContent.classList.add('cart-center');
                purchaseContainer.classList.add('dissapear');
                document.getElementById('cart-empty').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').classList.remove('cartEmpty');
                document.getElementById('cart-empty-title').textContent = 'Your cart is empty';
                document.querySelector('.cart-helper').classList.add('empty');
                document.querySelector('.cart-helper').classList.remove('no-center');
                window.location.href = `index.html`;
            }
        })
    })
}

function trasladeBuy1(price,name,img){
    buyButton = document.querySelector('.buy-button');
    buyButton.addEventListener('click', ()=>{
        if(newPrice === undefined){
            window.location.href = `buy.html?name=${name}&price=${price}&img=${img}&q=${ln}`;
            
        } else {
            window.location.href = `buy.html?name=${name}&price=${newPrice}&img=${img}&q=${ln}`;
        }
    })

}
function trasladeBuy2(price,name,img,price2,name2,img2){
    buyButton = document.querySelector('.buy-button');

    buyButton.addEventListener('click', ()=>{
        
        if(lnNum === undefined && lnNum1 === undefined){
            window.location.href = `buy.html?price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum === undefined) {
            window.location.href = `buy.html?price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum1 === undefined){
            window.location.href = `buy.html?price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else {
            window.location.href = `buy.html?price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        }
    })

}
function trasladeBuy3(price,name,img,price2,name2,img2,price3,name3,img3){
    buyButton = document.querySelector('.buy-button');

    buyButton.addEventListener('click', ()=>{
        if(lnNum === undefined && lnNum1 === undefined && lnNum2 === undefined){
            window.location.href = `buy.html?img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum === undefined && lnNum1 === undefined) {
            window.location.href = `buy.html?img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${1}`;
        } else if(lnNum1 === undefined && lnNum2 === undefined){
            window.location.href = `buy.html?img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum2 === undefined && lnNum === undefined){
            window.location.href = `buy.html?img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum2 === undefined) {
            window.location.href = `buy.html?img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum1 === undefined){
            window.location.href = `buy.html?img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum === undefined){
            window.location.href = `buy.html?img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else {
            window.location.href = `buy.html?img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        }
    })

}
function trasladeBuy4(price,name,img,price2,name2,img2,price3,name3,img3,price4,name4,img4){
    buyButton = document.querySelector('.buy-button');

    buyButton.addEventListener('click', ()=>{
        if(lnNum === undefined && lnNum1 === undefined && lnNum2 === undefined && lnNum3 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum === undefined && lnNum1 === undefined && lnNum3 === undefined) {
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${1}`;
        } else if(lnNum1 === undefined && lnNum2 === undefined && lnNum3 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum2 === undefined && lnNum === undefined && lnNum1 === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${1}`;
        } else if(lnNum3 === undefined && lnNum === undefined && lnNum2 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum2 === undefined && lnNum1 === undefined) {
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum1 === undefined && lnNum === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum2 === undefined && lnNum === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${price2}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum === undefined && lnNum3 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum3 === undefined && lnNum2 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum3 === undefined && lnNum1 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${price}&name2=${name}&img2=${img}&q2=${1}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum1 === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${price2}&img=${img2}&q=${1}`;
        } else if(lnNum2 === undefined){
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${price3}&name3=${name3}&q3=${1}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else if(lnNum3 === undefined){
            window.location.href = `buy.html?q4=${1}&price4=${price4}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        } else {
            window.location.href = `buy.html?q4=${lnNum3}&price4=${d}&name4=${name4}&img4=${img4}&img3=${img3}&price3=${c}&name3=${name3}&q3=${lnNum2}&price2=${a}&name2=${name}&img2=${img}&q2=${lnNum}&name=${name2}&price=${b}&img=${img2}&q=${lnNum1}`;
        }
    })
}


const logoLink = document.querySelector('.logo-link');
if(window.location.href.includes("index.html?cartE")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let str = urlParams.get('cartE');
    createProduct(str, price, name, img, 'product1', 'trash1', 'product-price1');
    createPurchase(price,price);
    deletePurchase1()
    logoLink.addEventListener('click', (e)=>{
        e.preventDefault();

        window.location.href = `index.html?cartE=${str}&name=${name}&price=${price}&img=${img}`;
    })
    trasladeBuy1(price,name,img);

}
if(window.location.href.includes("index.html?pricep1")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let str = urlParams.get('cartE');
    let name = urlParams.get('name');
    let price = urlParams.get('price');
    let img = urlParams.get('img');
    createProduct(str, price, name, img, 'product1', 'trash1', 'product-price1')
    let namep1 = urlParams.get('namep1');
    let pricep1 = urlParams.get('pricep1');
    let imgp1 = urlParams.get('imgp1');
    createProduct(str,pricep1,namep1,imgp1, 'product2', 'trash2', 'product-price2');

    let priceCalc1 = price.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc2 = pricep1.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc = parseInt(priceCalc1) + parseInt(priceCalc2);
    priceCalc = priceCalc.toLocaleString('es-ES');
    totalPrice = '$ ' + priceCalc;
    calculatePrice(price,pricep1);
    createPurchase1(totalPrice, totalPrice);
    deletePurchase2(namep1,pricep1,imgp1, name, price, img );
    trasladeBuy2(price,name,img,pricep1,namep1,imgp1);


    logoLink.addEventListener('click', (e)=>{
        e.preventDefault();

        window.location.href = `index.html?pricep1=${pricep1}&cartE=${str}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}`
    })

}
if(window.location.href.includes("index.html?pricep2")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let str = urlParams.get('cartE');

    let name = urlParams.get('name');
    let price = urlParams.get('price');
    let img = urlParams.get('img');
    createProduct(str, price, name, img, 'product1', 'trash1', 'product-price1');

    let name1 = urlParams.get('namep1');
    let price1 = urlParams.get('pricep1');
    let img1 = urlParams.get('imgp1');
    createProduct(str, price1, name1, img1, 'product2', 'trash2', 'product-price2');

    let namep2 = urlParams.get('namep2');
    let pricep2 = urlParams.get('pricep2');
    let imgp2 = urlParams.get('imgp2');
    createProduct(str,pricep2,namep2,imgp2, 'product3', 'trash3', 'product-price3');

    let priceCalc1 = price.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc2 = price1.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc3 = pricep2.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc = parseInt(priceCalc1) + parseInt(priceCalc2) + parseInt(priceCalc3);
    priceCalc = priceCalc.toLocaleString('es-ES');
    totalPrice = '$ ' + priceCalc;
    calculatePrice2(price,price1, pricep2);
    createPurchase1(totalPrice,totalPrice);
    deletePurchase3();
    trasladeBuy3(price,name,img,price1,name1,img1,pricep2,namep2,imgp2)

    logoLink.addEventListener('click', (e)=>{
        e.preventDefault();

        window.location.href =  `index.html?pricep2=${pricep2}&namep2=${namep2}&imgp2=${imgp2}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}&pricep1=${pricep1}&cartE=${str}`
    })

}
if(window.location.href.includes("index.html?pricep3")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let str = urlParams.get('cartE');

    let name = urlParams.get('name');
    let price = urlParams.get('price')
    let img = urlParams.get('img')
    createProduct(str, price, name, img, 'product1', 'trash1', 'product-price1')

    let name1 = urlParams.get('namep1');
    let price1 = urlParams.get('pricep1');
    let img1 = urlParams.get('imgp1');
    createProduct(str, price1, name1, img1, 'product2', 'trash2', 'product-price2')

    let namep2 = urlParams.get('namep2');
    let pricep2 = urlParams.get('pricep2')
    let imgp2 = urlParams.get('imgp2')
    createProduct(str,pricep2,namep2,imgp2, 'product3', 'trash3', 'product-price3');
    
    let namep3 = urlParams.get('namep3');
    let pricep3 = urlParams.get('pricep3')
    let imgp3 = urlParams.get('imgp3')
    createProduct(str,pricep3,namep3,imgp3, 'product4', 'trash4', 'product-price4');

    let priceCalc1 = price.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc2 = price1.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc3 = pricep2.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc4 = pricep3.split(' ').splice(1,2).toString().replace('.', '');
    let priceCalc = parseInt(priceCalc1) + parseInt(priceCalc2) + parseInt(priceCalc3) + parseInt(priceCalc4);
    priceCalc = priceCalc.toLocaleString('es-ES');
    totalPrice = '$ ' + priceCalc;

    calculatePrice3(price,price1,pricep2,pricep3);
    createPurchase1(totalPrice,totalPrice);
    deletePurchase4();
    trasladeBuy4(price,name,img,price1,name1,img1,pricep2,namep2,imgp2,pricep3,namep3,imgp3)

    logoLink.addEventListener('click', (e)=>{
        e.preventDefault();

        window.location.href = `index.html?pricep3=${pricep3}&namep3=${namep3}&imgp3=${imgp3}&pricep2=${pricep2}&namep2=${namep2}&imgp2=${imgp2}&name=${name}&price=${price}&img=${img}&imgp1=${imgp1}&namep1=${namep1}&pricep1=${pricep1}&cartE=${str}`
    })
}



const productShoes = document.querySelectorAll(".product-a");
let divMaxCreated = false;
productShoes.forEach(shoe=>{
    shoe.addEventListener("click", e=>{
        e.preventDefault();
        
        const img1 = shoe.getAttribute('data-img1');
        const img2 = shoe.getAttribute('data-img2');
        const img3 = shoe.getAttribute('data-img3');
        const img4 = shoe.getAttribute('data-img4');
        const img5 = shoe.getAttribute('data-img5');
        const img6 = shoe.getAttribute('data-img6');
        const img7 = shoe.getAttribute('data-img7');
        const img8 = shoe.getAttribute('data-img8');
        const name = shoe.getAttribute('data-title');
        const price = shoe.getAttribute('data-price');
        
        
        if(window.location.href.includes("index.html?cartE")){
            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let str = 'cartEmpty';
            let namep1 = urlParams.get('name');
            let pricep1 = urlParams.get('price')
            let imgp1 = urlParams.get('img')
            let url = `product.html?str=${str}&img1=${img1}&img2=${img2}&img3=${img3}&img4=${img4}&img5=${img5}&img6=${img6}&img7=${img7}&img8=${img8}&name=${name}&price=${price}&namep1=${namep1}&pricep1=${pricep1}&imgp1=${imgp1}`
            window.location.href = url ; 
        } else if(window.location.href.includes("index.html?pricep1")){
            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let str = urlParams.get('cartE');
            let namep1 = urlParams.get('name');
            let pricep1 = urlParams.get('price')
            let imgp1 = urlParams.get('img')

            let namep2 = urlParams.get('namep1');
            let pricep2 = urlParams.get('pricep1')
            let imgp2 = urlParams.get('imgp1')

            let url = `product.html?pricep2=${pricep2}&str=${str}&img1=${img1}&img2=${img2}&img3=${img3}&img4=${img4}&img5=${img5}&img6=${img6}&img7=${img7}&img8=${img8}&name=${name}&price=${price}&namep1=${namep1}&pricep1=${pricep1}&imgp1=${imgp1}&imgp2=${imgp2}&namep2=${namep2}`
            window.location.href = url ; 
        } else if(window.location.href.includes("index.html?pricep2")){
            let queryString = window.location.search;
            let urlParams = new URLSearchParams(queryString);
            let str = urlParams.get('cartE');
            let namep1 = urlParams.get('name');
            let pricep1 = urlParams.get('price')
            let imgp1 = urlParams.get('img')

            let namep2 = urlParams.get('namep1');
            let pricep2 = urlParams.get('pricep1')
            let imgp2 = urlParams.get('imgp1')

            let namep3 = urlParams.get('namep2');
            let pricep3 = urlParams.get('pricep2')
            let imgp3 = urlParams.get('imgp2')

            let url = `product.html?pricep3=${pricep3}&namep3=${namep3}&imgp3=${imgp3}&pricep2=${pricep2}&str=${str}&img1=${img1}&img2=${img2}&img3=${img3}&img4=${img4}&img5=${img5}&img6=${img6}&img7=${img7}&img8=${img8}&name=${name}&price=${price}&namep1=${namep1}&pricep1=${pricep1}&imgp1=${imgp1}&imgp2=${imgp2}&namep2=${namep2}`
            window.location.href = url ; 

        } else if(window.location.href.includes("index.html?pricep3")){
            if(!divMaxCreated){
                divMaxCart = document.createElement('DIV');
                divMaxCartText = document.createElement('P');
                divMaxCartText.textContent = 'X'
                divMaxCart.appendChild(divMaxCartText);
                divMaxCart.classList.add('max-cart')
                body.appendChild(divMaxCart)
                setTimeout(function() {
                    body.removeChild(divMaxCart)
                }, 7000);


                divMaxCreated = true;
            }


        } else {
            window.location.href = `product.html?img1=${img1}&img2=${img2}&img3=${img3}&img4=${img4}&img5=${img5}&img6=${img6}&img7=${img7}&img8=${img8}&name=${name}&price=${price}`;
        }
    })
})

if(window.location.href.includes("product.html")){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    let img1 = urlParams.get('img1');
    let img2 = urlParams.get('img2');
    let img3 = urlParams.get('img3');
    let img4 = urlParams.get('img4');
    let img5 = urlParams.get('img5');
    let img6 = urlParams.get('img6');
    let img7 = urlParams.get('img7');
    let img8 = urlParams.get('img8');
    let name = urlParams.get('name');
    let price = urlParams.get('price');
    document.querySelector('.img1').src = img1;
    document.querySelector('.img2').src = img2;
    document.querySelector('.img3').src = img3;
    document.querySelector('.img4').src = img4;
    document.querySelector('.img5').src = img5;
    document.querySelector('.img6').src = img6;
    document.querySelector('.img7').src = img7;
    document.querySelector('.img8').src = img8;
    document.querySelector('.name').textContent = name;
    document.querySelector('.price').textContent = price;


    if(window.location.href.includes('product.html?str')){
        let str = urlParams.get('str');
        let namep1 = urlParams.get('namep1');
        let pricep1 = urlParams.get('pricep1');
        let imgp1 = urlParams.get('imgp1');
        createProduct(str,pricep1,namep1,imgp1);
    } else if(window.location.href.includes('product.html?pricep2')){
        let str = urlParams.get('str');

        let namep1 = urlParams.get('namep1');
        let pricep1 = urlParams.get('pricep1');
        let imgp1 = urlParams.get('imgp1');
        createProduct(str,pricep1,namep1,imgp1);

        let namep2 = urlParams.get('namep2');
        let pricep2 = urlParams.get('pricep2')
        let imgp2 = urlParams.get('imgp2')
        createProduct(str,pricep2,namep2,imgp2);
    } else if(window.location.href.includes('product.html?pricep3')){
        let str = urlParams.get('str');

        let namep1 = urlParams.get('namep1');
        let pricep1 = urlParams.get('pricep1');
        let imgp1 = urlParams.get('imgp1');
        createProduct(str,pricep1,namep1,imgp1);

        let namep2 = urlParams.get('namep2');
        let pricep2 = urlParams.get('pricep2')
        let imgp2 = urlParams.get('imgp2')
        createProduct(str,pricep2,namep2,imgp2);

        let namep3 = urlParams.get('namep3');
        let pricep3 = urlParams.get('pricep3')
        let imgp3 = urlParams.get('imgp3')
        createProduct(str,pricep3,namep3,imgp3);
    }
}

function createProductRow(name, price, img, quan, productNum, pPriceNum){
    let tableMain = document.querySelector('.products-buy');
    
    let tBody = document.querySelector('.body')
    
    let div = document.createElement('DIV');
    
    let tdImg = document.createElement('DIV');
    
    let tdDiv = document.createElement('DIV');
    let tdPrice = document.createElement('DIV');
    let tdQuanty = document.createElement('DIV');
    let tdSub = document.createElement('DIV');
    
    let pName = document.createElement('P');
    let pPrice = document.createElement('P');
    let pQuanty = document.createElement('P');
    let pSub = document.createElement('P');
    
    let pIMG = document.createElement('IMG')
    


    if(isNaN(price)){
        pSub.textContent= price;
        pPrice.textContent = price;
    } else {
        newP = '$ ' + numeral(price).format('0,0').replace(',','.')
        pSub.textContent= newP;
        pPrice.textContent = newP;
    }


    pName.textContent = name;
    pIMG.src = img;
    pQuanty.textContent = quan;
    
    pName.classList.add('p-name')
    pPrice.classList.add(pPriceNum)
    pIMG.classList.add('p-img');
    pQuanty.classList.add('p-quanty')
    
    tdPrice.appendChild(pPrice);
    tdQuanty.appendChild(pQuanty);
    tdImg.appendChild(pIMG);
    tdImg.appendChild(pName);
    tdSub.appendChild(pSub);
    
    tdPrice.classList.add('td-price');
    tdQuanty.classList.add('td-quanty');
    tdImg.classList.add('td-img');
    tdSub.classList.add('td-sub');
    
    
    tdDiv.appendChild(tdPrice);
    tdDiv.appendChild(tdQuanty);
    tdDiv.appendChild(tdSub);
    
    tdDiv.classList.add('div-pqs')
    
    tds = [tdImg, tdDiv];
    tds.forEach(e=>{
        div.appendChild(e);
    })
    
    div.classList.add(productNum);
    
    tBody.appendChild(div);
    


    
}
function putTotalndSub(...args){
    
    
    if(args.length === 1){
        let p1 = args[0];
        if(isNaN(args[0])){
            p1 = parseInt(args[0].split(' ').splice(1,2).toString().replace('.', ''));
            totalNum = '$ ' + numeral((parseInt(p1))).format('0,0').replace(',','.');
        }
    }
    if(args.length === 2){
        let p1 = args[0];
        let p2 = args[1];
        if(isNaN(args[0])){
            p1 = parseInt(args[0].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if (isNaN(args[1])){
            p2 = parseInt(args[1].split(' ').splice(1,2).toString().replace('.', ''));
        }
        totalNum = '$ ' + numeral((parseInt(p1) + parseInt(p2))).format('0,0').replace(',','.');
    }
    if(args.length === 3){
        let p1 = args[0];
        let p2 = args[1];
        let p3 = args[2];
        if(isNaN(args[0])){
            p1 = parseInt(args[0].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if (isNaN(args[1])){
            p2 = parseInt(args[1].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if(isNaN(args[2])){
            p3 = parseInt(args[2].split(' ').splice(1,2).toString().replace('.', ''));
        }
        totalNum = '$ ' + numeral((parseInt(p1) + parseInt(p2) + parseInt(p3))).format('0,0').replace(',','.');
    }
    if(args.length === 4){
        let p1 = args[0];
        let p2 = args[1];
        let p3 = args[2];
        let p4 = args[3];
        if(isNaN(args[0])){
            p1 = parseInt(args[0].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if (isNaN(args[1])){
            p2 = parseInt(args[1].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if(isNaN(args[2])){
            p3 = parseInt(args[2].split(' ').splice(1,2).toString().replace('.', ''));
        }
        if(isNaN(args[3])){
            p4 = parseInt(args[3].split(' ').splice(1,2).toString().replace('.', ''));
        }
        totalNum = '$ ' + numeral((parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4))).format('0,0').replace(',','.');
    }

    if(window.location.href.includes("buy.html")){
        signSub = document.querySelector('.sign-sub').textContent = totalNum;
        signTotal = document.querySelector('.sign-total').textContent = totalNum;
    }
    if(window.location.href.includes("finalize.html")){
        let shipPrice = document.querySelector('.ship-price');
        subP = document.querySelector('.sub-p').textContent = totalNum;
        shipPrice = parseInt(shipPrice.textContent.split(' ').splice(1,2).toString().replace('.', ''));
        totalNum = '$ ' + numeral((parseInt(totalNum.split(' ').splice(1,2).toString().replace('.', '')) + shipPrice)).format('0,0').replace(',','.');
        totalP = document.querySelector('.total-p').textContent = totalNum;

    }
}

if(window.location.href.includes("buy.html?name")){
    let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let price = urlParams.get('price');
let name = urlParams.get('name');
let img = urlParams.get('img');
let quan = urlParams.get('q');

createProductRow(name, price, img ,quan, 'product-row1', 'p-price1');
putTotalndSub(price);
finalizePurchase();
}
if(window.location.href.includes("buy.html?price2")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    createProductRow(name, price, img ,quan, 'product-row1', 'p-price1');
    
    let price2 = urlParams.get('price2');
    let name2 = urlParams.get('name2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    createProductRow(name2, price2, img2 ,quan2, 'product-row2', 'p-price2');
    
    putTotalndSub(price, price2);
    finalizePurchase();
}
if(window.location.href.includes("buy.html?img3")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    
    
    
    
    let price2 = urlParams.get('price2');
    let name2 = urlParams.get('name2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    createProductRow(name2, price2, img2 ,quan2, 'product-row2', 'p-price2');

    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    createProductRow(name, price, img ,quan, 'product-row1', 'p-price1');
    
    let price3 = urlParams.get('price3');
    let name3 = urlParams.get('name3');
    let img3 = urlParams.get('img3');
    let quan3 = urlParams.get('q3');
    createProductRow(name3,price3,img3,quan3, 'product-row3', 'p-price3');


    putTotalndSub(price, price2, price3);
    finalizePurchase()
}
if(window.location.href.includes("buy.html?q4")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    
    
    
    
    let price2 = urlParams.get('price2');
    let name2 = urlParams.get('name2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    createProductRow(name2, price2, img2 ,quan2, 'product-row2', 'p-price2');

    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    createProductRow(name, price, img ,quan, 'product-row1', 'p-price1');
    
    let price3 = urlParams.get('price3');
    let name3 = urlParams.get('name3');
    let img3 = urlParams.get('img3');
    let quan3 = urlParams.get('q3');
    createProductRow(name3,price3,img3,quan3, 'product-row3', 'p-price3');

    let price4 = urlParams.get('price4');
    let name4 = urlParams.get('name4');
    let img4 = urlParams.get('img4');
    let quan4 = urlParams.get('q4');
    createProductRow(name4,price4,img4,quan4, 'product-row4', 'p-price4');


    putTotalndSub(price, price2, price3, price4);
    finalizePurchase()

}

function finalizePurchase(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    finalizeButton = document.querySelector('.finalize-purchase');
    finalizeButton.addEventListener('click',()=>{
        if(window.location.href.includes("buy.html?name")){
            let price = urlParams.get('price');
            let name = urlParams.get('name');
            let img = urlParams.get('img');
            let quan = urlParams.get('q');

            window.location.href = `finalize.html?name=${name}&price=${price}&img=${img}&q=${quan}`;
        }
        if(window.location.href.includes("buy.html?price2")){
            let price = urlParams.get('price');
            let name = urlParams.get('name');
            let img = urlParams.get('img');
            let quan = urlParams.get('q');

            let price2 = urlParams.get('price2');
            let name2 = urlParams.get('name2');
            let img2 = urlParams.get('img2');
            let quan2 = urlParams.get('q2');

            window.location.href = `finalize.html?price2=${price2}&name2=${name2}&img2=${img2}&q2=${quan2}&name=${name}&price=${price}&img=${img}&q=${quan}`;
        }
        if(window.location.href.includes("buy.html?img3")){
            let price = urlParams.get('price');
            let name = urlParams.get('name');
            let img = urlParams.get('img');
            let quan = urlParams.get('q');

            let price2 = urlParams.get('price2');
            let name2 = urlParams.get('name2');
            let img2 = urlParams.get('img2');
            let quan2 = urlParams.get('q2');

            let price3 = urlParams.get('price3');
            let name3 = urlParams.get('name3');
            let img3 = urlParams.get('img3');
            let quan3 = urlParams.get('q3');

            window.location.href = `finalize.html?img3=${img3}&price3=${price3}&name3=${name3}&q3=${quan3}&price2=${price2}&name2=${name2}&img2=${img2}&q2=${quan2}&name=${name}&price=${price}&img=${img}&q=${quan}`;
        }
        if(window.location.href.includes("buy.html?q4")){
            let price = urlParams.get('price');
            let name = urlParams.get('name');
            let img = urlParams.get('img');
            let quan = urlParams.get('q');

            let price2 = urlParams.get('price2');
            let name2 = urlParams.get('name2');
            let img2 = urlParams.get('img2');
            let quan2 = urlParams.get('q2');

            let price3 = urlParams.get('price3');
            let name3 = urlParams.get('name3');
            let img3 = urlParams.get('img3');
            let quan3 = urlParams.get('q3');
            
            let price4 = urlParams.get('price4');
            let name4 = urlParams.get('name4');
            let img4 = urlParams.get('img4');
            let quan4 = urlParams.get('q4');

            window.location.href = `finalize.html?q4=${quan4}&price4=${price4}&name4=${name4}&img4=${img4}&q3=${quan3}&price3=${price3}&name3=${name3}&img3=${img3}&price2=${price2}&name2=${name2}&img2=${img2}&q2=${quan2}&name=${name}&price=${price}&img=${img}&q=${quan}`;
        }
    })
}
function summaryProduct(price, name, img, quanty){
    let containerSum = document.querySelector('.sign-helper');
    let productSum = document.createElement('DIV');
    productSum.classList.add('product-sum');
    containerSum.appendChild(productSum);

    let imgSum = document.createElement('IMG');
    imgSum.classList.add('img-sum');
    imgSum.src = img;
    let priceSum = document.createElement('P');
    priceSum.classList.add('price-sum');
    priceSum.textContent = price;
    let nameSum = document.createElement('P');
    nameSum.classList.add('name-sum');
    nameSum.textContent = name;
    let quanSum = document.createElement('P');
    quanSum.classList.add('quanty-sum')
    quanSum.textContent = quanty;

    let divPriceQuan = document.createElement('DIV');
    divPriceQuan.classList.add('div-pricequan')
    divPriceQuan.appendChild(quanSum);
    divPriceQuan.appendChild(priceSum);
    let divSumInfo = document.createElement('DIV');
    divSumInfo.classList.add('div-info');
    divSumInfo.appendChild(nameSum)
    divSumInfo.appendChild(divPriceQuan)

    productSum.appendChild(imgSum);
    productSum.appendChild(divSumInfo);
}

if(window.location.href.includes("finalize.html?name")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let name = urlParams.get('name');
    let price = urlParams.get('price');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');

    console.log("name:", name);
    console.log("price:", price);
    console.log("img:", img);
    console.log("quan:", quan);

    summaryProduct(price,name,img,quan)
    putTotalndSub(price)
    formulary();
}   
if(window.location.href.includes("finalize.html?price2")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let name = urlParams.get('name');
    let price = urlParams.get('price');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    summaryProduct(price,name,img,quan)

    let name2 = urlParams.get('name2');
    let price2 = urlParams.get('price2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    summaryProduct(price2,name2,img2,quan2);

    putTotalndSub(price,price2);
    formulary();

}
if(window.location.href.includes("finalize.html?img3")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    summaryProduct(price,name,img,quan)

    let price2 = urlParams.get('price2');
    let name2 = urlParams.get('name2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    summaryProduct(price2,name2,img2,quan2)

    let price3 = urlParams.get('price3');
    let name3 = urlParams.get('name3');
    let img3 = urlParams.get('img3');
    let quan3 = urlParams.get('q3');
    summaryProduct(price3,name3,img3,quan3)

    putTotalndSub(price,price2,price3);
    formulary();

}       
if(window.location.href.includes("finalize.html?q4")){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);

    let price = urlParams.get('price');
    let name = urlParams.get('name');
    let img = urlParams.get('img');
    let quan = urlParams.get('q');
    summaryProduct(price,name,img,quan);

    let price2 = urlParams.get('price2');
    let name2 = urlParams.get('name2');
    let img2 = urlParams.get('img2');
    let quan2 = urlParams.get('q2');
    summaryProduct(price2,name2,img2,quan2);

    let price3 = urlParams.get('price3');
    let name3 = urlParams.get('name3');
    let img3 = urlParams.get('img3');
    let quan3 = urlParams.get('q3');
    summaryProduct(price3,name3,img3,quan3);
    
    let price4 = urlParams.get('price4');
    let name4 = urlParams.get('name4');
    let img4 = urlParams.get('img4');
    let quan4 = urlParams.get('q4');
    summaryProduct(price4,name4,img4,quan4);

    putTotalndSub(price,price2,price3,price4);
    formulary();
}

function formulary(){
    let email = document.querySelector('.email');
    let emailOpt = document.querySelector('.emailOpt')
    let emailOption = document.querySelector('.email-option');

    let personal = document.querySelector('.personal-option');
    let personalOpt = document.querySelector('.personalOpt');

    let destination = document.querySelector('.destination-option');
    let destinationOpt = document.querySelector('.destinationOpt')

    let payment = document.querySelector('.payment-option');
    let paymentOpt = document.querySelector('.paymentOpt');



    let back = document.querySelector('.act');

    let contButton = document.querySelector('.continue');
    let contButton2 = document.querySelector('.continue2');
    let contButton3 = document.querySelector('.continue3');
    let contButton4 = document.querySelector('.continue4');

    let emailInput = document.querySelector('.email-input');

    let inputContainer = document.querySelector('.input-container');

    let inputNamePersonal = document.querySelector('.personal-name');
    let inputSurNamePersonal = document.querySelector('.personal-surname');
    let inputDniPersonal = document.querySelector('.personal-dni');
    let inputPhonePersonal = document.querySelector('.personal-phone');

    let inputStateDestination = document.querySelector('.destination-state');
    let inputStreetDestination = document.querySelector('.destination-street');
    let inputNeighDestination = document.querySelector('.destination-neigh');
    let inputNumberDestination = document.querySelector('.destination-number');

    let inputCardNumPayment = document.querySelector('.payment-number');
    let inputCardNSPayment = document.querySelector('.payment-ns');
    let inputCardCodePayment = document.querySelector('.payment-code');
    let inputCardOwnerID = document.querySelector('.payment-dni');

    
    let errorContainerPersonal = document.querySelector('.error-container-personal');
    let errorContainerEmail = document.querySelector('.error-container-email');
    let errorContainerDestination = document.querySelector('.error-container-destination');
    let errorContainerPayment = document.querySelector('.error-container-payment');
    

    let down = document.getElementById('email-down');
    let personalDown = document.getElementById('personal-down');
    let destinationDown = document.getElementById('destination-down');
    let paymentDown = document.getElementById('payment-down');

    let touched = true
    email.addEventListener('click',()=>{
        if(touched){
            back.style.backgroundColor = 'white';
            emailOpt.classList.remove('hidden');
            emailOpt.style.opacity = 1;
            if(emailOpt.classList.contains('hidden')){
                down.src = 'build/img/down-arrow.svg';
                emailOpt.style.opacity = 0;
                back.style.backgroundColor = '#F5F5F5';
            } else {
                down.src = 'build/img/up-arrow.svg'
            };
            touched = false
        }
    })

    let createdError = false;
    contButton.addEventListener('click',()=>{
        if(emailInput.value === ''){
            if(!createdError){
                error = document.createElement('DIV');
                errorText = document.createElement('P');
                errorText.textContent = 'Enter a valid email';
                error.appendChild(errorText);
                error.classList.add('error');
                errorContainerEmail.appendChild(error);
                createdError = true;
            }
        }
        if(emailInput.value.length > 14 && createdError){
            errorContainerEmail.removeChild(error);
            emailOption.classList.remove('act');
            personal.classList.add('act')
            emailOpt.classList.add('hidden');
            down.src = 'build/img/down-arrow.svg';
            emailOpt.style.opacity = 0;
            personal.style.backgroundColor = 'white';
            personalOpt.classList.remove('hidden')
            
            personalDown.src = 'build/img/up-arrow.svg';
            
            personalOpt.style.opacity = 1;
        } else if (emailInput.value.length > 14){
            emailOption.classList.remove('act');
            personal.classList.add('act')
            personalOpt.classList.remove('hidden')
            personalDown.src = 'build/img/up-arrow.svg';
            personal.style.backgroundColor = 'white';
            
            emailOpt.classList.add('hidden');
            down.src = 'build/img/down-arrow.svg';
            emailOpt.style.opacity = 0;

            personalOpt.style.opacity = 1;
        }

        
    })

    let createdError1 = false;
    contButton2.addEventListener('click',()=>{
        if(inputNamePersonal.value === '' || inputSurNamePersonal.value === '' || inputDniPersonal.value === '' || inputPhonePersonal.value === ''){
            if(!createdError1){
                error = document.createElement('DIV');
                errorText = document.createElement('P');
                errorText.textContent = 'Fill all the fields';
                error.appendChild(errorText);
                error.classList.add('error');
                errorContainerPersonal.appendChild(error);
                createdError1 = true;
            }
        }
        if(inputNamePersonal.value.length >2 && inputSurNamePersonal.value.length >2 && inputDniPersonal.value.length >5 && inputPhonePersonal.value.length >3 && createdError1){
            errorContainerPersonal.removeChild(error);
            personal.classList.remove('act');
            personalOpt.classList.add('hidden')
            personalDown.src = 'build/img/down-arrow.svg';
            destinationOpt.style.opacity = 1;
            destination.style.backgroundColor = 'white';
            destinationDown.src ='build/img/up-arrow.svg';
            
            
            destination.classList.add('act');
            destinationOpt.classList.remove('hidden');
        } else if(inputNamePersonal.value.length >2 && inputSurNamePersonal.value.length >2 && inputDniPersonal.value.length >5 && inputPhonePersonal.value.length >3){
            personal.classList.remove('act');
            personalOpt.classList.add('hidden')
            personalDown.src = 'build/img/down-arrow.svg';
            destinationOpt.style.opacity = 1;
            destination.style.backgroundColor = 'white';
            destinationDown.src ='build/img/up-arrow.svg';

            destination.classList.add('act');
            destinationOpt.classList.remove('hidden');
        }
    })

    let createdError2 = false;
    contButton3.addEventListener('click', ()=>{
        if(inputStateDestination.value === '' || inputStreetDestination.value === '' || inputNeighDestination.value === '' || inputNumberDestination === ''){
            if(!createdError2){
                error = document.createElement('DIV');
                errorText = document.createElement('P');
                errorText.textContent = 'Fill all the fields';
                error.appendChild(errorText);
                error.classList.add('error');
                errorContainerDestination.appendChild(error);
                createdError2 = true;
            }
        }
        if(inputStateDestination.value.length >2 && inputStreetDestination.value.length >2 && inputNeighDestination.value.length >2 && inputNumberDestination.value.length >2 && createdError2){
            errorContainerDestination.removeChild(error);
            destinationDown.src = 'build/img/down-arrow.svg';
            destination.classList.remove('act');
            destinationOpt.classList.add('hidden');
            
            payment.classList.add('act');
            paymentOpt.classList.remove('hidden')
            paymentDown.src = 'build/img/up-arrow.svg';
            payment.style.backgroundColor = 'white';
            paymentOpt.style.opacity = 1;


        } else if(inputStateDestination.value.length >2 && inputStreetDestination.value.length >2 && inputNeighDestination.value.length >2 && inputNumberDestination.value.length >2){
            destinationDown.src = 'build/img/down-arrow.svg';
            destination.classList.remove('act');
            destinationOpt.classList.add('hidden');

            payment.classList.add('act');
            paymentOpt.classList.remove('hidden');
            paymentDown.src = 'build/img/up-arrow.svg';
            payment.style.backgroundColor = 'white';
            paymentOpt.style.opacity = 1;
        }
    })

    let createdError3 = false;
    contButton4.addEventListener('click',()=>{
        if(inputCardCodePayment.value === '' || inputCardNSPayment.value === '' || inputCardNumPayment.value === '' || inputCardOwnerID.value === ''){
            if(!createdError3){
                error = document.createElement('DIV');
                errorText = document.createElement('P');
                errorText.textContent = 'Fill all the fields';
                error.appendChild(errorText);
                error.classList.add('error');
                errorContainerPayment.appendChild(error);
                createdError3 = true;
            }
        }
        if(inputCardCodePayment.value.length === 3 && inputCardNSPayment.value.length > 5 && inputCardNumPayment.value.length >= 13 && inputCardOwnerID.value.length >= 8 && createdError3){
            window.location.href = 'index.html';
        } else if(inputCardCodePayment.value.length === 3 && inputCardNSPayment.value.length > 5 && inputCardNumPayment.value.length >= 9 && inputCardOwnerID.value.length >= 8){
            window.location.href = 'index.html';
        }
    })
}