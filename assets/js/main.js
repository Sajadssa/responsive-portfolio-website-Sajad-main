/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
// alert('hi my firend');
//?......
//love uou
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link, we remove the show menu classic
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.ClassName;
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    } else {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tab.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

// animation text


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalButtons = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((modalButton, i) => {
    modalButton.addEventListener("click", () => {
        modal(i);
    });
});
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
const swiper = new Swiper('.swiper', {
    loop: true, // creates a infinite loop of slides
    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {// activate paginations
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // keyboard and mousewheel navigation
    keyboard: true,
    mousewheel: true,

    // for other than sliding effect

    // effect: 'creative',
    // creativeEffect: {
    //  prev: {
    //      // will set `translateZ(-400px)` on previous slides
    //      translate: [0, 0, -400],
    //  },
    //  next: {
    //      // will set `translateX(100%)` on next slides
    //      translate: ['100%', 0, 0],
    //  },
    // },
    // effect: 'coverflow',
});



/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";
const html5 = document.querySelector('.uil-html5');
const css = document.querySelector('.uil-css3-simple');
const js = document.querySelector('.uil-java-script');
const react = document.querySelector('.uil-react');
 

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
    
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
       
       
        
    );
    themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
       
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    html5.style.color="red";
    html5.style.fontWeight="bold";
    css.style.color="blue";
    js.style.color="orange";
    react.style.color="rgba(0,89,78,.5)";

    
  


});


//play audio
function play() {
    let audio = document.getElementById("audio");
    audio.play();
}
// }var audioElement= document.getElementById("audio-player")
function toggleSound() {
    var audioElem = document.getElementById("audio");
    if (audioElem.paused) audioElem.play();
    else audioElem.pause();
}
//theme dark offsetTop //perfere theme//determines if the user has a set theme
// const userPrefersDark =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches;

// const userPrefersLight =
//     window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: light)").matches;

// if (userPrefersDark) {
//     console.log("User prefers a dark interface");
// }
//testimonial


//DEFINE ARRAY 

const reviews = [
    {
        id: 1,
        name: "sajad aseedi",
        job: "web designer",
        img: "https://avatars.githubusercontent.com/u/55943862?v=4",
        text: "with extensive knowledge and years of experience,working in web technologies and 'Ui/ Ux' design, delivering quality work.Fluent in designing and implementing databases",

    }
    ,
    {
        id: 2,
        name: "sara jones",
        job: "video creator",
        img: "https://themarketingcrowd.ie/wp-content/uploads/2017/01/Round-Profile-Pic.png",
        text: "The best client for a testimonial video is a person that is as great for your business as your business is for them. This person should fit perfectly into your ideal client persona, and if you don’t have one"
    },
    {
        id: 3,
        name: "kate hamilton",
        job: "bloger",
        img: "https://uploads-ssl.webflow.com/624b3c6529144e0e11858765/627ee40636db9a7b2917c405_so.png",
        text: "hat’s the problem we help solve. We have created the vidwheel Creator Network,  a community where entrepreneurs and consultants representing all industries can come together to master"
    },
    {
        id: 4,
        name: "cheerful man",
        job: "project manager",
        img: "https://thumbs.dreamstime.com/b/cheerful-man-29173421.jpg",
        text: "you had to create an engaging, professional video for your business today, could you pull it off? If you’re like many consultants and other business professionals"
    },


];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const random = document.querySelector('.random');

//set starting item

let currentItem = 0;
//lrad initial item
window.addEventListener('DOMContentLoaded', function () {

    showPerson();

});

//show person based on item

function showPerson() {

    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {

    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});
prevBtn.addEventListener("click", function () {

    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show random prson
random.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();

})




