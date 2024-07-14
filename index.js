
let name = document.querySelector("#Sm");
let gola = document.querySelector("#follower");
let frame = document.querySelector("#frame");
let skillHeading= document.querySelector("#skill-heading");


function loader(){

tl = gsap.timeline();
 tl.from("#loader .box h1", {
    y: 180 + "%",
    duration: 0.6,
    delay: 0.5,
    opacity:0
  });
  tl.to("#loader .box h1", {
    y: -180 + "%",
    duration: 0.8,
    delay: 0.5,
    opacity:0
  });

  tl.to("#loader",{
    left:"-100%",
    display:"none",
    duration: 0.4,
  onComplete: function() {
    // Ensure circle animation starts right after loader animation
    gsap.to("#circle", {
      scale: 2,
      duration: 0.9, // Adjust the duration for quicker animation
      repeat: -1, // Repeat infinitely
      yoyo: true, // Return to initial state
      ease: "power1.inOut" // Smooth easing
    });






     }})

    }





    function pointer(){
      
window.addEventListener("mousemove",function(dets){
  gsap.to(gola,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.3,
        ease:Expo


  }

)}
)

frame.addEventListener("mousemove",function(){
  gsap.to(gola,{
    scale:4,
    ease:"power1.easeIn",
    
  })

})

frame.addEventListener("mouseleave",function(){
  gsap.to(gola,{
    scale:0.6
  })

})
    }


function scrollbox(){
  let speed =  gsap.to("#scroll",{
    y:108,
    duration:1,
    repeat:-1,
    delay:0.4,
    ease:"power1.easeIn"





})

speed.timeScale(0.5);

}

function  page2(){
var t2 = gsap.timeline({scrollTrigger:{
  trigger:"#page2",
  // markers:true,
  start:"50% 50%",
  end:"100% 80%",
  scrub:4,
  pin:true
}})
t2.to("#top",{
top:"-50%",
duration:1.5,
delay:0.8,
},'a')
t2.to("#bottom",{
  bottom:"-50%",
  duration:1.5,
delay:0.8,

  },'a')


  t2.to("#top h1",{
    top:"-60%"
    
    })
    t2.to("#bottom h1",{
      bottom:"-60%"
      })
    
    }

      
    function animationpage3(){

     let tl = gsap.timeline({
               
      scrollTrigger: {
        trigger: '#page3',
        start: '50% 50%', // Start when the top of the trigger hits the center of the viewport
        end: '200% 50%', // End when the bottom of the trigger hits the center of the viewport
        scrub: true,
        pin:true,
        // markers: true // Remove this in production
    }
  })

    tl.to("#html",{
        opacity:1,
        filter: "blur(0px)",

    })




  .to("#javascript",{
    opacity:1,
    filter: "blur(0px)",
    delay:-0.3
})

.to("#locomotive",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})


.to("#tailwindcss",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})

.to("#css",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})
.to("#react",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})
.to("#redux",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})



.to("#creative",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})

.to("#git",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})


.to("#gsap",{
  opacity:1,
  filter: "blur(0px)",
  delay:-0.3
})

 }





function skillAnim(){

  gsap.from("#skill-heading h2",{

    y:100,
    opacity:0,
    duration:0.4,
    delay:0.3,
    ease:"power",
    scrollTrigger:{
     trigger:"#page3",
     scroller:"body",
    //  markers:true,
     start:"top 50%",
     end:"30% 50%",
     scrub:true,
    }
 })

  skillHeading.addEventListener("mousemove",function(dets){
  gsap.to("#skill-heading h2",{

   y:"-5vw",
   duration:0.6,
  })
  })

  skillHeading.addEventListener("mouseleave",function(dets){
    gsap.to("#skill-heading h2",{
     y:0,
     duration:0.6,
    })
    })
}
























loader();
pointer();
scrollbox();
page2();
animationpage3();
skillAnim();








