const header = document.querySelector("header");
const sectionOne = document.querySelector(".main-content");

const sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver (function(
    entries, sectionOneObserver
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


//show navigation
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

