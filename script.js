function loadingAnimation(){
    var counter = document.querySelector(".line-part1 h5");
    var count = 0;
    setInterval(() => {
        if (count < 100) {
            count++;
            counter.textContent = count
        }
    }, 35)

    var tl = gsap.timeline();

    // tl.from(".line h1", {
    //     y: 150,
    //     stagger: 0.2,
    //     duration: 0.6,

    // })

    // tl.to(".line h2", {
    //     opacity: 1,
    // })
    // tl.to(".loader", {
    //     opacity: 0,
    //     duration: 0.5,
    //     delay: 2.8,
    // })

    // tl.from(".page1", {
    //     y: 1200,
    //     opacity: 0,
    //     duration: 0.5,
    // })

    // tl.to(".loader", {
    //     display: "none"
    // })

    tl.from("#hero1 h1, #hero2 h1,#hero3 h2,#hero4 h1",{
        y:120,
        stagger:0.1
    })
    tl.to("#hero3 h2",{
        y:0,
        stagger:0.1
    })
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", (dets) => {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y,
            easeIn: "power5"
        })
    })

    Shery.makeMagnet(".nav-part2 h4 ,.nav svg", {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.2,
    });

}

cursorAnimation();

