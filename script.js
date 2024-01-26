


var counter = document.querySelector(".line-part1 h5");
var count = 0;
setInterval(()=>{
    if(count < 100){
        count++;
        counter.textContent=count
    }
},35)

var tl = gsap.timeline();

tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.6,

})

tl.to(".line h2",{
    opacity:1,
})
tl.to(".loader",{
    opacity:0,
    duration:0.5,
    delay:2.8,
})

tl.from(".page1",{
    y:1200,
    opacity:0,
    duration:0.5,
})

tl.to(".loader",{
    display:"none"
})