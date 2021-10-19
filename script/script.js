
// creat HTML element
function createTag(tag, append, classIndividual = null, idIndividual = null, textInfo = null) {
    let textTagUniversal = document.createElement(`${tag}`);
    classIndividual !== null && (textTagUniversal.className = classIndividual);
    idIndividual !== null && (textTagUniversal.id = idIndividual);
    textInfo !== null && (textTagUniversal.innerText = textInfo);
    return append.appendChild(textTagUniversal);
}

// creat img element
function createImgTag(append, classIndividual = null, idIndividual = null, srcIndividual = null, altIndividual = "photo") {
    let imgUniversal = document.createElement("img");
    classIndividual !== null && (imgUniversal.className = classIndividual);
    idIndividual !== null && (imgUniversal.id = idIndividual);
    imgUniversal.src = srcIndividual;
    imgUniversal.alt = altIndividual;
    return append.appendChild(imgUniversal);
}


// pop-up button "Ноты"

const popuupBtn1Context = ["Агава", "Абрикос", "Бадьян", "Виноград", "Ваниль", "Грейпфрут", "Дыня", "Земляника"];

// pop-up button "Группа"
const popuupBtn2Context = ["Агава", "Абрикос", "Бадьян", "Виноград", "Ваниль", "Грейпфрут", "Дыня", "Земляника"];

// home main saction-1 popups
const homeMainPopUp1 = document.querySelector("#home-main-pop-up1");
const homeMainPopUp2 = document.querySelector("#home-main-pop-up2");
const button1 = document.querySelector("#home-main__section1_filter-buttons1");
const button2 = document.querySelector("#home-main__section1_filter-buttons2");

// create form pop-up1
const btn1Form = createTag("form", homeMainPopUp1, "form-search");
const btn1FormInput = createTag("input", btn1Form);
btn1FormInput.placeholder = "Поиск";
btn1FormInput.type = "text";
const btn1FormButton = createTag("button", btn1Form);
btn1FormButton.type = "submit";
const btn1FormButtonImg = createTag("img", btn1FormButton);
btn1FormButtonImg.src = "./img/home/cearch.png";
btn1FormButtonImg.alt = "search";

// pop-up groupe checkbox + text  "Ноты"

// checkbox + text
let isChecked = false;

// template to create checkbox + text
function creatCheckboxText(append, info) {
    const checkbox = createTag("div", append, "pop-up__checkbox-text");
    const checkboxSquared = createTag("div", checkbox, "squared");
    const inputCheckbox = createTag("input", checkboxSquared, null, "squared");
    inputCheckbox.type = "checkbox";
    inputCheckbox.name = "check";
    inputCheckbox.checked = isChecked
    const inputLabel = createTag("label", checkboxSquared);
    inputLabel.for = "squared";
    const context = createTag("p", checkbox, "context", null, info)
}

// pop-up groupe checkbox + text  "Ноты"
const groupeCheckboxText1 = createTag("div", homeMainPopUp1, "pop-up__groupe-checkbox-text");

// create info pop-up  "Ноты"
popuupBtn1Context.map(info => {
    isChecked = !isChecked;
    creatCheckboxText(groupeCheckboxText1, info);
})

// pop-up groupe checkbox + text  "Группа"
const groupeCheckboxText2 = createTag("div", homeMainPopUp2, "pop-up__groupe-checkbox-text");

// create info pop-up  "Группа"
popuupBtn1Context.map(info => {
    isChecked = !isChecked;
    creatCheckboxText(groupeCheckboxText2, info);
})

// create pop-up buttons "Ноты"
const popupButtons1 = createTag("div", homeMainPopUp1, "pop-up__buttons");
const popupButtonsBtn11 = createTag("button", popupButtons1, "pop-up__buttons_button1", null, "Применить");
const popupButtonsBtn21 = createTag("button", popupButtons1, "pop-up__buttons_button2", null, "Сбросить");

// create pop-up buttons "Группа"
const popupButtons2 = createTag("div", homeMainPopUp2, "pop-up__buttons");
const popupButtonsBtn12 = createTag("button", popupButtons2, "pop-up__buttons_button1", null, "Применить");
const popupButtonsBtn22 = createTag("button", popupButtons2, "pop-up__buttons_button2", null, "Сбросить");

let isOpenOpenMainPopUp1 = false;
let isOpenOpenMainPopUp2 = false;


// pop-up button Ноты
function openMainPopUp1() {
    // debugger
    isOpenOpenMainPopUp1 = !isOpenOpenMainPopUp1;
    if (isOpenOpenMainPopUp1) {
        homeMainPopUp1.style.display = "block";
        button1.classList.add("button-corol-tr");
    } else {
        homeMainPopUp1.style.display = "none";
        button1.classList.remove("button-corol-tr");
    }

}

// pop-up button Группа
function openMainPopUp2() {
    isOpenOpenMainPopUp2 = !isOpenOpenMainPopUp2;
    if (isOpenOpenMainPopUp2) {
        homeMainPopUp2.style.display = "block";
        button2.classList.add("button-corol-tr");
    } else {
        homeMainPopUp2.style.display = "none";
        button2.classList.remove("button-corol-tr");
    }

}

// header menu burger
const menuBurgerSection = ["Парфюмерия", "Косметика", "Травы", "Масла", "Питание", "Акции", "Бренд", "Контакты", "Доставка", "FAQ", "Блог"];
const menuBurgerWrapp = document.querySelector(".header-mini__menu_wrapper");
const menuBurger = document.querySelector(".header-mini__menu");

let isOpenOpenMiniMenu = false;

menuBurgerSection.map((text) => {
    let burgerMenuDiv = document.createElement("div");
    let burgerMenuP = document.createElement("p");
    burgerMenuDiv.classList.add("header-mini__menu_saction");
    burgerMenuDiv.appendChild(burgerMenuP);
    burgerMenuP.classList.add("header-mini__menu_saction-text");
    menuBurger.appendChild(burgerMenuDiv);
    burgerMenuP.innerText = text;
})

const imgCloze = document.querySelector("#header-img-cloze");
const imgBurger = document.querySelector("#header-img-burger");

// pop-up mini menu
function openOpenMiniMenu() {
    isOpenOpenMiniMenu = !isOpenOpenMiniMenu;
    if (isOpenOpenMiniMenu) {
        menuBurgerWrapp.classList.add("_active");
        imgCloze.style.display = "block";
        imgBurger.style.display = "none";

    } else {
        menuBurgerWrapp.classList.remove("_active");
        imgCloze.style.display = "none";
        imgBurger.style.display = "block";
    }

}

// mini header search

const searchConteiner = document.querySelector("#form-search-wrapp")
const searchWrapp = document.querySelector(".header-mini__search_wrapper");
const form = document.querySelector(".form-search");
const formInput = document.querySelector("#header-input");
const formButtonImg = document.querySelector("#header-button-img");
const arrow = document.querySelector(".arrow");
form.appendChild(arrow);
let isOpenPopupSearch = false;

form.classList.add("form-search_mobile")
arrow.addEventListener('click', clozePopupSearch);

// open search pop-up
function openPopupSearch() {
    searchWrapp.appendChild(form);
    searchWrapp.style.width = "100%"
    isOpenPopupSearch = true;
    searchWrapp.classList.add("_active");
    formInput.placeholder = "Введите запрос";
    formButtonImg.src = "./img/home/header-mini/search-active.png";

}

// cloze search pop-up
function clozePopupSearch() {
    isOpenPopupSearch = false;
    searchWrapp.style.width = "0"
    searchWrapp.classList.remove("_active");
    formInput.placeholder = "Поиск";
    formButtonImg.src = "./img/home/cearch.png";
    searchWrapp.removeChild(form);
    searchConteiner.appendChild(form);
}

// Your goods

// popup Your goods product

const product = [
    {
        img: "./img/home/product photos/product_pop-up/product-1.png",
        text: "Духи аль Рехаб 3 мл",
        number: "2",
        price: "1390₽",
    },
    {
        img: "./img/home/product photos/product_pop-up/product-2.png",
        text: "Духи аль Рехаб Делайтфул 3 мл",
        number: "52",
        price: "21300₽",
    },
    {
        img: "./img/home/product photos/product_pop-up/product-1.png",
        text: "Духи аль Рехаб 3 мл",
        number: "2",
        price: "1390₽",
    },
    {
        img: "./img/home/product photos/product_pop-up/product-2.png",
        text: "Духи аль Рехаб Делайтфул 3 мл",
        number: "52",
        price: "21300₽",
    },

]

const WRAPPER = document.querySelector(".header__yourGoods_product-wrapp");

product.map(ind => {

    let productWrapp = createTag("div", WRAPPER, "header__yourGoods_product");
    let divImg = createTag("div", productWrapp);
    let img = createImgTag(divImg, null, null, ind.img, "foto");
    let divText = createTag("div", productWrapp, "header__yourGoods_product-text", null, ind.text);

    let divNumber = createTag("div", productWrapp, "header__yourGoods_product-number");
    let btn1 = createTag("div", divNumber, "btn", null, "-");
    let divNumberP = createTag("p", divNumber, null, null, ind.number);
    let btn2 = createTag("div", divNumber, "btn", null, "+");

    let divPrice = createTag("div", productWrapp, "header__yourGoods_product-price", null, ind.price);
    let pCloze = createTag("p", productWrapp, "header__yourGoods_product-cloze", null, "x");

})


//  pop-up Your goods 

const YourGoods = document.querySelector(".header__yourGoods_wrapper");
const shopcart = document.querySelector(".shopcart");

let isOpenYourGoods = false;

// open pop-up Your goods

function openPopUpYourGoods() {
    isOpenYourGoods = !isOpenYourGoods
    if (isOpenYourGoods) {
        YourGoods.classList.add("_active1");
        YourGoods.style.display = "block";
        shopcart.style.background = "linear-gradient(180deg, #FDB806 -61.02%, #FD8006 167.8%), #FD8006"
    }
    else {
        YourGoods.classList.remove("_active1");
        YourGoods.style.display = "none";
        shopcart.style.background = "linear-gradient(180deg, #B4B4B4 -61.02%, #9B9B9B 167.8%)"
    }

}


//  section1  Арабские духи: product

const productInfoSection1 = [
    {
        id: 1,
        miniImg: ["./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png"],
        sell: "-20%",
        maxImg: "./img/home/product photos/big-foto1.png",
        newPrice: "189₽",
        oldPrice: "279₽",
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 2,
        miniImg: null,
        sell: null,
        maxImg: "./img/home/product photos/big-foto2.png",
        newPrice: "189₽",
        oldPrice: null,
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 1,
        miniImg: ["./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png"],
        sell: "-20%",
        maxImg: "./img/home/product photos/big-foto1.png",
        newPrice: "189₽",
        oldPrice: "279₽",
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 2,
        miniImg: null,
        sell: null,
        maxImg: "./img/home/product photos/big-foto2.png",
        newPrice: "189₽",
        oldPrice: null,
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 1,
        miniImg: ["./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png"],
        sell: "-20%",
        maxImg: "./img/home/product photos/big-foto1.png",
        newPrice: "189₽",
        oldPrice: "279₽",
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 2,
        miniImg: null,
        sell: null,
        maxImg: "./img/home/product photos/big-foto2.png",
        newPrice: "189₽",
        oldPrice: null,
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },

]

// shablon product
function productShablon(prod, append) {
    const product = createTag("div", append, "home-main__section1_product");
    const miniPhoto = createTag("div", product, "product_mini-foto");
    if (prod.miniImg != null) {
        for (let i = 0; i < prod.miniImg.length; i++) {
            let img = createImgTag(miniPhoto, null, null, prod.miniImg[i], "mini img");
        }
    }

    const maxPhoto = createTag("div", product, "product_big-foto");

    if (prod.sell != null) {
        const sell = createTag("p", maxPhoto, "product_sell", null, "-20%");
    }

    const photo = createImgTag(maxPhoto, null, null, prod.maxImg, "product");

    // price
    const price = createTag("div", product, "product_price");
    const newPrice = createTag("span", price, "product_price-newPrice", null, prod.newPrice);
    const oldPrice = createTag("span", price, "product_price-oldPrice", null, prod.oldPrice);
    // icon
    const iconWrapp = createTag("div", product, "product_price icon");
    const iconCar = createImgTag(iconWrapp, null, null, "./img/home/product photos/car.png", "car");
    const iconGirl = createImgTag(iconWrapp, null, null, "./img/home/product photos/girl.png", "girl");
    const iconBoy = createImgTag(iconWrapp, null, null, "./img/home/product photos/boy.png", "boy");
    const iconGift = createImgTag(iconWrapp, null, null, "./img/home/product photos/gift.png", "gift");

    // product salesman
    const productSalesmanWrapp = createTag("div", product, "product_price");
    const productSalesman = createTag("p", productSalesmanWrapp, "product_price-salesman", null, prod.salesman);

    // product salesman mini
    const productSalesmanMiniWrapp = createTag("div", product, "product_price");
    const productSalesmanMini = createTag("p", productSalesmanMiniWrapp, "product_price-salesmanMini", null, prod.salesmanMini);

    //  stars   
    const starsWrapp = createTag("div", product, "product_price star");
    for (let i = 0; i <= 5; i++) {
        if (i <= prod.like) {
            const img = createImgTag(starsWrapp, null, null, "./img/home/product photos/star-yel.png", "star");
        } else {
            const img = createImgTag(starsWrapp, null, null, "./img/home/product photos/star-gr.png", "star");
        }
    }

}


//  product wrapper  
const productWrappS1 = document.querySelector(".home-main__section1_wrapper-product");

productInfoSection1.map(info => {
    productShablon(info, productWrappS1)
})

//  section2  Косметика: product

const productInfoSection2 = [
    {
        id: 1,
        miniImg: ["./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png"],
        sell: "-20%",
        maxImg: "./img/home/product photos/big-foto1.png",
        newPrice: "189₽",
        oldPrice: "279₽",
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 2,
        miniImg: null,
        sell: null,
        maxImg: "./img/home/product photos/big-foto2.png",
        newPrice: "189₽",
        oldPrice: null,
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 1,
        miniImg: ["./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png", "./img/home/product photos/mini-foto1.png", "./img/home/product photos/mini-foto2.png"],
        sell: "-20%",
        maxImg: "./img/home/product photos/big-foto1.png",
        newPrice: "189₽",
        oldPrice: "279₽",
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
    {
        id: 2,
        miniImg: null,
        sell: null,
        maxImg: "./img/home/product photos/big-foto2.png",
        newPrice: "189₽",
        oldPrice: null,
        salesman: "Аль Рехаб Делайтфул 6 м",
        salesmanMini: "Al-Rehab Perfumes, 6 мл",
        like: 4,
    },
]

//  product wrapper  
const productWrappS2 = document.querySelector("#section2_product");

productInfoSection2.map(info => {
    productShablon(info, productWrappS2)
})
