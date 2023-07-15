$(document).ready(function(){
//hero-slider
$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots:false,
    smartSpeed:1000,
    navText:["<i class='bx bxs-skip-previous-circle' ></i>","<i class='bx bxs-skip-next-circle'></i>"],
    responsive:{
        0:{
            
        },
        600:{
           
        },
        1000:{
            
        }
    }
})

});

//=================== Read & and Read Less=====================

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

// // =============carousel-item==================

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center:true,
    nav:true,
    navText:["<i class='bx bxs-rewind-circle'></i>","<i class='bx bxs-fast-forward-circle' ></i>"],

    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:3,
           
        },
        1000:{
            items:3,
            
        }
    }
})
});
