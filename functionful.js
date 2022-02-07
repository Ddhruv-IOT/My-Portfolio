window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("scroll-up").style.display = "block";
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.onload = function() {

    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    const burger = document.querySelector("#burger-menu");
    const ul = document.querySelector("nav ul");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
        ul.classList.toggle("show");
    });

    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link) =>
        link.addEventListener("click", () => {
            ul.classList.remove("show");
        })
    );

    const myTags2 = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV'
    ];

    const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
    ];

    var tagCloud = TagCloud('.content', myTags, {
        radius: 200,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 180,
        keep: true
    });

    var xxx = tagCloud;
    document.querySelector('.content').style.color = "lightblue";

    var tagCloud2 = TagCloud('.content2', myTags2, {
        radius: 45,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 90,
        keep: true
    });

    document.querySelector('.content2').style.color = "lightblue";


    var slideIndex = 0;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("icon-card");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        mt = setTimeout(showSlides, 2000);
    }

    var y11;

    function myFunction3d(x1) {
        if (x1.matches) {
            console.log(xxx.destroy())
            var tagCloudx = TagCloud('.content', myTags, {
                radius: 100,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 180,
                keep: true
            });

            document.querySelector('.content').style.color = "lightblue";
        } else {
            if (y11 == true) {
                var tagCloud = TagCloud('.content', myTags, {
                    radius: 200,
                    maxSpeed: 'fast',
                    initSpeed: 'fast',
                    direction: 180,
                    keep: true
                });

                document.querySelector('.content').style.color = "lightblue";
            }
        }
    }

    var y1;

    function myFunction(x) {
        if (x.matches) {
            showSlides(); // If media query matches 
            y1 = true;
        } else {
            if (y1 == true) {
                clearTimeout(mt)
                document.getElementsByClassName("icon-card")[0].style.display = "block"
                document.getElementsByClassName("icon-card")[1].style.display = "block"
                document.getElementsByClassName("icon-card")[2].style.display = "block"
                document.getElementsByClassName("icon-card")[3].style.display = "block"
            }
        }
    }

    var x = window.matchMedia("(max-width: 1000px)")
    myFunction(x)
    x.addListener(myFunction)

    var x1 = window.matchMedia("(max-width: 800px)")
    myFunction3d(x1)
    x1.addListener(myFunction3d)

}

function open()
{
 $(".c1").animate({width:20}, 2000);
 $(".c2").animate({width:20}, 2000);
 var videoPlayer = document.getElementById('vp');
 videoPlayer.play()
}

function close()
{
    var w1 = $(window).width();
 $(".c1").animate({width: ((w1/2)+10)}, 2000);
 $(".c2").animate({width: w1/2}, 2000);
 var videoPlayer = document.getElementById('vp');
 videoPlayer.pause()
}

open()

$(document).ready(function() {
    $('#btn').click(function() {
        // alert("Hello");
        open()
    });

    $('#c_btn').click(function() {
        // alert("Hello");
        close()
    });
});