/**Magnetic ui component Onmousemove */
(function () {
    /**UI image animate */
    document.addEventListener("mousemove", function (e) {
        let img1, img2, img3, img4, img5, img6, posX, posY;

        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");
        img5 = document.getElementById("img5");
        img6 = document.getElementById("img6");

        posX = e.clientX;
        posY = e.clientY;
        // console.log(posX, posY);

        if (posX > 0) {
            img1.style.transform = `translateX(-${posX / 90}px) translateY(-${posY / 50}px)`;
            img2.style.transform = `translateX(-${posX / 40}px) translateY(-${posY / 40}px)`;
            img3.style.transform = `translateX(-${posX / 50}px) translateY(-${posY / 20}px)`;
            img4.style.transform = `translateX(-${posX / 30}px) translateY(-${posY / 20}px)`;
            img5.style.transform = `translateX(-${posX / 50}px) translateY(-${posY / 12}px)`;
            img6.style.transform = `translateX(-${posX / 50}px) translateY(-${posY / 12}px)`;
        }
    });
})();


/**Navbar */
function toggleNavar() {
    let slideNav;

    slideNav = document.getElementById("slideNav");
    slideNav.classList.toggle("show-slide");
}


/**Slider */
jQuery(document).ready(function ($) {
    $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        responsive: {
            600: {
                items: 4
            }
        }
    });
});


/**btnScrollDown */
function btnScrollDown() {
    const header = document.getElementsByTagName("header");
    let headerH;

    headerH = header[0].clientHeight;
    // console.log(headerH);
    window.scrollTo(0, headerH);
}


/**Scroll top btn show hide on scroll and then onclick function */
(function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", function (e) {
        // console.log(window.scrollY);
        if (window.scrollY > 1080) {
            scrollTopBtn.classList.remove("d-none");
        } else {
            scrollTopBtn.classList.add("d-none");
        }
    });

    scrollTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    });

})();


/**Dot box */
window.addEventListener("scroll", e => {
    e.preventDefault();
    let dotBox1 = document.getElementById("dotBox1");

    let scrollToptoBottom = window.scrollY;
    if (scrollToptoBottom < 992) {
        console.log(window.scrollY);
        dotBox1.style.transform = `translateY(${scrollToptoBottom / 6}px)`;
    }
})
