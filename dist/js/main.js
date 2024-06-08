function imgAnimation(elementId, direction, initialMargin, finalMargin) {
    window.addEventListener('scroll', function () {
        var elemento = document.getElementById(elementId);
        var scrollTop = window.scrollY;
        var newMargin;

        if (direction === '-') {
            newMargin = (scrollTop * 0.2) - initialMargin;
        } else if (direction === '+') {
            newMargin = initialMargin - (scrollTop * 0.2);
        }
        if (newMargin >= finalMargin) {
            elemento.style.marginTop = newMargin + 'px';
        } else {
            elemento.style.marginTop = finalMargin + 'px';
        }
    });
}

function startScroll(image) {
    image = image.querySelector("img");
    scrollInterval = setInterval(() => {
        image.style.transform = `translateY(-${image.clientHeight - 300}px)`;
    }, 50);
}

function stopScroll(image) {
    image = image.querySelector("img");
    clearInterval(scrollInterval);
    image.style.transform = "translateY(0px)";
}

// function redirect(id) {
//     window.location.href = ;
//     console.log(window.location.href);
// }

imgAnimation('img1', '-', 80, -80);
imgAnimation('img2', '+', 0, -80);
imgAnimation('img3', '-', 80, -80); 
