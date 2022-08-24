console.log("Gym Landing Page...!!");

let countDownDate = new Date("Aug 01,2022 15:22:33").getTime();  // expiry date

// console.log(countDownDate);

let x = setInterval(function () {
    let now = new Date().getTime();
    // console.log(now);
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("offer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (distance < 0) {
        clearInterval(x);
        // console.log(x);
        document.getElementById("offer").innerHTML = "EXPIRED";
    }
}, 1000);