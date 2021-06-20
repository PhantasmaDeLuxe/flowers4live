



    let menuParents = document.querySelectorAll('.menu-page__parent');

    for (let index = 0; index < menuParents.length; index++) {
        const menuParent = menuParents[index];
        menuParent.addEventListener("mouseenter", function() {
            menuParent.classList.add('_active');
        });
        menuParent.addEventListener("mouseleave", function() {
            menuParent.classList.remove('_active');
        });
    }




const menuBurger = document.querySelector('.menu-page__burger');
const pageBurger = document.querySelector('.menu-page__icon');
const menuPageBody = document.querySelector('.menu-page__body');

menuBurger.addEventListener("click", function() {
    pageBurger.classList.toggle('menu-page__icon-active');
    menuPageBody.classList.toggle('_active');

});

/* Выпадающий список поиск на странице */

let searchSelect = document.querySelector('.search-page__title');
let categiriesSearch = document.querySelector('.categories-search');

searchSelect.addEventListener("click", function() {
    searchSelect.classList.toggle('_active');
    categiriesSearch.classList.toggle('_active')

});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');


for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener("change", function() {
        
        checkboxCategory.classList.toggle('_active');

        let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

        if (checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('_categories');
            let searchQuantity = searchSelect.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('_categories');
        }
        
    })
}

if (document.querySelector('.swiper-container')) {
    let mainslider = new Swiper('.swiper-container', {
        //loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        initialSlide: 0,
      
        // If we need pagination
        pagination: {
          el: '.mainslider__dotts',
          clickable: true,
        },
      })
    
      let mainsliderImages = document.querySelectorAll('.mainslider__image')
      let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet')
    
      for (let index = 0; index < mainsliderImages.length; index++) {
          const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src')
          mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')"
       
      }
     
}

/*******************        */
 if (document.querySelector('.products-slider-container')) {
    let productsSlider = new Swiper('.products-slider-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
         
        pagination: {
          el: '.products-slider__info',
          type: 'fraction',
        },
         
       navigation: {
           nextEl: '.products-slider__arrow_next',
           prevEl: '.products-slider__arrow_prev',
       },
     })
    
 }
 
/**************************** */

if (document.querySelector('.brands-slider')) {
let brendsSlider = new Swiper('.brands-slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 5,
    spaceBetween: 0,
    //autoHeight: true,
    speed: 800,
    loop: true,
   // arrows 
   navigation: {
       nextEl: '.brands-slider__arrow_next',
       prevEl: '.brands-slider__arrow_prev',
   },
   breakpoints: {
        320: {
            slidesPerView: 1,
            autoHeight: true,
        },
        480: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4, 
        },
        992: {
            slidesPerView: 5, 
        }
    },
 })
}
 
 /******Слайдер в карточке товара *************/
 if (document.querySelector('.images-product__subslider')) {
    let imagesSubSlider = new Swiper('.images-product__subslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 800,
        //loop: true,
     })
    
     let imagesMainSlider = new Swiper('.images-product__mainslider', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: imagesSubSlider
        },
        speed: 800,
        //loop: true,
        
     })
 }
 
 
 


/***********************Развернуть окно с фильтрами по клику на "Фильтр" */
if (document.querySelector('.filter__title')) {
    const filterTitle = document.querySelector('.filter__title')

    filterTitle.addEventListener("click", function(e) {
        filterTitle.classList.toggle('_active')
        filterTitle.nextElementSibling.classList.toggle('_active')
    })
    
}



/********************* Развернуть окно с фильтром по клику на заголовок со спойлером *********************/

let sectionFilterTitles = document.querySelectorAll('.section-filter__title')

for (let index = 0; index < sectionFilterTitles.length; index++) {
    const sectionFilterTitle = sectionFilterTitles[index];

    if (sectionFilterTitle.classList.contains('_spoller') ) {
        sectionFilterTitle.onclick = function() {
            sectionFilterTitle.classList.toggle('_active')
            sectionFilterTitle.nextElementSibling.classList.toggle('_active')
        }  
    }

}


 /* **********ТАБЫ ************* */

 const tabsItems = document.querySelectorAll('._tabs-item')
 const tabsBlocks = document.querySelectorAll('._tabs-block')

 tabsItems.forEach(onTabClick) 

 function onTabClick(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let currentLink = item;
        let tabId = currentLink.getAttribute('data-tab');
        let currentTab =  document.querySelector(tabId);

        if( ! currentLink.classList.contains('_active')) {
            tabsItems.forEach(function(item) {
                item.classList.remove('_active')
            })
            tabsBlocks.forEach(function(item) {
                item.classList.remove('_active')
            })
    
            currentLink.classList.add('_active')
            currentTab.classList.add('_active')
        } 
    })   
}

 

/**************** Количество товара **************/

let quantityButtons = document.querySelectorAll('.quantity__button')
if (quantityButtons.length > 0) {
    for (let index = 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function(e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button_plus')) {
                value++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        })
    }
}

/******************   noUIslider **************/
 /****    https://refreshless.com/nouislider/slider-options/#section-start ************/


 if (document.querySelector('.price-filter__slider')) {
    const priceSlider = document.querySelector('.price-filter__slider');

    noUiSlider.create(priceSlider, {
        start: [0, 200000],
        tooltips: [wNumb({decimals: 0}), wNumb({decimals: 0})],
        connect: true,
        
        range: {
            'min': 0,
            'max': 200000
        },
      
    });
    
    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);
    
    function setPriceValues() {
        let priceStartValue;
        let priceEndValue;
        if (priceStart.value != '') {
             priceStartValue = priceStart.value;
        }
        if (priceEnd.value != '') {
            priceEndValue = priceEnd.value;
        }
        priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }
    
 }
 
 
 