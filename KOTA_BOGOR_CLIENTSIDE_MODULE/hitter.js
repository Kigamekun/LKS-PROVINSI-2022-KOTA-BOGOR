document.getElementById("main-game").style.visibility = "hidden";
document.getElementById("start-game").style.visibility = "visible";



function startGame() {

    var x = document.getElementById("myAudio");

        x.play();
  

    const startGames = true;
    document.getElementById("main-game").style.visibility = "visible";
    document.getElementById("start-game").style.visibility = "hidden";
    document.getElementById("start-game").style.position = "absolute";
    document.getElementById("me").innerHTML = document.getElementById("name-player").value;
    document.getElementById("button-start").click();
    setupGame();
    var arr = [];
    var collection = document.getElementsByClassName('ply');


    for (let i = 0; i < collection.length; i++) {
        arr.push(collection[i].getBoundingClientRect());
    }



    var arr = [];
    var element = [];
    var collection = document.getElementsByClassName('ply');


    for (let i = 0; i < collection.length; i++) {
        arr.push(collection[i].getBoundingClientRect());
        element.push(collection[i]);

    }


    hps = 12;
    var getCollision = {};
    intvals = 0;

    setInterval(() => {

        if (hps === 0) {

            startGame = false;
            document.getElementById("main-game").style.visibility = "hidden";
            var result = confirm("GAME OVER !");
            if (result == true) {
                location.reload();
            } else {
                doc = "Close.";
            }

        }


        if (intvals == 8) {
            getCollision = {};
            intvals = 0;
        }


        if (checkCollision(arr[0])) {

            var el = element[0].className;
            arrel = el.split(" ");

            var el = document.getElementById('hp-' + el.replace(' ', '-'));
            try {


                if (getCollision[0] === undefined) {
                    el.removeChild(el.lastChild);
                    hps -= 1;
                    getCollision[0] = true;
                    if (el.childElementCount === 0) {
                        document.getElementsByClassName(arrel[1])[0].style.visibility = "hidden";
                    }
                }
            } catch (error) {

            }


        } else if (checkCollision(arr[1])) {
            var el = element[1].className;
            arrel = el.split(" ");

            var el = document.getElementById('hp-' + el.replace(' ', '-'));
            try {
                if (getCollision[1] === undefined) {
                    el.removeChild(el.lastChild);
                    hps -= 1;
                    getCollision[1] = true;
                    if (el.childElementCount === 0) {
                        document.getElementsByClassName(arrel[1])[0].style.visibility = "hidden";
                    }
                }

            } catch (error) {

            }


        } else if (checkCollision(arr[2])) {
            var el = element[2].className;
            arrel = el.split(" ");

            var el = document.getElementById('hp-' + el.replace(' ', '-'));
            try {
                if (getCollision[2] === undefined) {
                    el.removeChild(el.lastChild);
                    hps -= 1;
                    getCollision[2] = true;
                    if (el.childElementCount === 0) {
                        document.getElementsByClassName(arrel[1])[0].style.visibility = "hidden";
                    }
                }

            } catch (error) {

            }


        } else if (checkCollision(arr[3])) {
            var el = element[3].className;
            arrel = el.split(" ");

            var el = document.getElementById('hp-' + el.replace(' ', '-'));
            try {
                if (getCollision[3] === undefined) {
                    el.removeChild(el.lastChild);
                    hps -= 1;
                    getCollision[3] = true;
                    if (el.childElementCount === 0) {
                        document.getElementsByClassName(arrel[1])[0].style.visibility = "hidden";
                    }
                }
            } catch (error) {

            }


        }

        intvals += 1;
    }, 1000);


}



document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:

            break;
        case 38:

            break;
        case 39:

            break;
        case 40:
            hitBall();
            break;
    }
});


function hitBall() {
    document.getElementById('botme').src = './assets/img/bot0-hit.png';
    if (checkCollision(document.getElementById('botme').getBoundingClientRect())) {
        document.getElementById('planet').style.animation = 'spin-left 8s linear infinite';
    }
    setTimeout(() => {
        document.getElementById('botme').src = './assets/img/player.png';
    }, 1000);
}

function checkCollision(ply) {

    var ball = document.getElementById('ball').getBoundingClientRect();
    return ((ball.right >= ply.left &&
        ball.left <= ply.right) &&
        (ball.bottom >= ply.top &&
            ball.top <= ply.bottom));

}

document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        document.getElementById("botme").style.transform = 'rotate(60deg) translateY(150px)';
        document.getElementById("botme").classList.add("guard");
        setTimeout(() => {
            document.getElementById("botme").style.transform = 'rotate(60deg)';
            document.getElementById("botme").classList.remove("guard");
        }, 2000);

    }
}



function setupGame() {
    const collection = document.getElementsByClassName("hp");
    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i]);
        collection[i].innerHTML = `<img src="assets/img/heart.png" alt="" style="width:20px;height:20px" srcset=""><img src="assets/img/heart.png" alt="" style="width:20px;height:20px" srcset=""><img src="assets/img/heart.png" alt="" style="width:20px;height:20px" srcset="">`;
    }
}



// create objects
window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}