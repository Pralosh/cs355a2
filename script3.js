const slides = document.getElementsByClassName("active");
const len = slides.length;
let currentIndex = 3;

function changeSlide(x) {
    
    if(x == 2) {
        let i = 0;
        while(i < len) {
            slides[i].style.zIndex = "0";
            i++;
        }

        if(currentIndex == len) {
            currentIndex = 0;
            console.log("current index" + currentIndex);
            changeSlide(2);
        }
        else if(currentIndex < len) {
            slides[currentIndex].style.zIndex = "1";
            currentIndex++;
            console.log("current index" + currentIndex);
        }
    }

    if(x == 1) {
        let i = 0;
        while(i < len) {
            slides[i].style.zIndex = "0";
            i++;
        }
        
        if(currentIndex == 0) {
            //slides[currentIndex].style.zIndex = "1";
            currentIndex = len;
            console.log("current index" + currentIndex);
            changeSlide(1);
        }
        else if(currentIndex > 0) {
            currentIndex--;
            console.log("current index" + currentIndex);
            slides[currentIndex].style.zIndex = "1";
        }
    }
}