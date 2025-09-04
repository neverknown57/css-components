
function func() {
    let val = 1;
    return (x = 0) => {

        $(`.c${val}`).toggleClass('active');
        $(`.d${val}`).toggleClass('dot--fill');

        val += x;
        if (val < 1) val = 3;
        if (val > 3) val = 1;
        $(`.d${val}`).toggleClass('dot--fill');
        $(`.c${val}`).toggleClass('active');
        gsap.from('.active', {
            // writing out the transform string 🔥
            // transform: "translate(-50%,-50%)"
            duration: 0.5,
            xPercent: 50,
            // yPercent: 50,
        });
        // $('nav').css('background', 'green');
        // console.log(`c${val}`)
        // console.log($(`.c${val}`).html());
    }
}
const iterator = func();
$(".left").click(() => {
    iterator(-1);
    // alert('left button pressed')
})
$(".right").click(() => {
    iterator(1);
    // alert('left button pressed')
})

$(".container").click(function () {
    const k = $(this).children('div.hidden-text')
    $(k).toggleClass('open');
    // console.log($(k).text())
    // .toggleClass('open')
    // console.log(k);
})


//GSAP Animation;
gsap.registerPlugin(SplitText)
SplitText.create("div h1", {
    type: "words, chars",
    onSplit(self) { // runs every time it splits
        gsap.from(self.chars, {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
        });
    }
});