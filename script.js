var expressions = document.querySelectorAll(".exp");
var object1 = document.getElementById("object1");
var object2 = document.getElementById("object2");

document.addEventListener("keydown", move);

function move(event) {
    if (event.keyCode == 37) {
        object1.style.left = (object1.offsetLeft - 1) + "px";
    }
    else if (event.keyCode == 38) {
        object1.style.top = (object1.offsetTop - 1) + "px";
    }
    else if (event.keyCode == 39) {
        object1.style.left = (object1.offsetLeft + 1) + "px";
    }
    else if (event.keyCode == 40) {
        object1.style.top = (object1.offsetTop + 1) + "px";
    }

    if (touching(object1, object2)) {
        object1.classList.add("highlighted");
        object2.classList.add("highlighted");
    }
    else {
        object1.classList.remove("highlighted");
        object2.classList.remove("highlighted");
    }
}

function touching(object1, object2) {
    var object1LeftSide = object1.offsetLeft;
    var object1RightSide = object1.offsetLeft + object1.offsetWidth;
    var object1TopSide = object1.offsetTop;
    var object1BottomSide = object1.offsetTop + object1.offsetHeight;

    var object2LeftSide = object2.offsetLeft;
    var object2RightSide = object2.offsetLeft + object2.offsetWidth;
    var object2TopSide = object2.offsetTop;
    var object2BottomSide = object2.offsetTop + object2.offsetHeight;

    var objectsTouchingHorizontally = object1RightSide >= object2LeftSide && object1LeftSide <= object2RightSide;
    var objectsTouchingVertically = object1BottomSide >= object2TopSide && object1TopSide <= object2BottomSide;

    for (var i = 0; i < expressions.length; i++) {
        expressions[i].classList.remove("highlighted");
    }

    if (objectsTouchingHorizontally) {
        expressions[0].classList.add("highlighted");
        expressions[7].classList.add("highlighted");
    }

    if (object1RightSide >= object2LeftSide) {
        expressions[1].classList.add("highlighted");
    }

    if (object1LeftSide <= object2RightSide) {
        expressions[2].classList.add("highlighted");
    }

    if (objectsTouchingVertically) {
        expressions[3].classList.add("highlighted");
        expressions[8].classList.add("highlighted");
    }

    if (object1BottomSide >= object2TopSide) {
        expressions[4].classList.add("highlighted");
    }

    if (object1TopSide <= object2BottomSide) {
        expressions[5].classList.add("highlighted");
    }

    if (objectsTouchingHorizontally && objectsTouchingVertically) {
        expressions[6].classList.add("highlighted");
    }

    return objectsTouchingHorizontally && objectsTouchingVertically;
}
