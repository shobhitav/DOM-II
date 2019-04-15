// 1. mouseover 
chngText = document.querySelector(".form-button")
chngText.addEventListener("mouseover", function (event) {
    chngText.innerHTML = "Thank You";
})
chngText.addEventListener("mouseout", function (event) {
    chngText.innerHTML = "Submit";
})

// 2. keydown
keyDown = document.querySelector(".first-name")
keyDown.addEventListener("keydown", function (event) {
    console.log(`${event.code} was pressed.`);
})

// 3. wheel
chngText = document.querySelector(".form-button")
chngText.addEventListener("wheel", function (event) {
    console.log(`Wheel event fired:${event}`);
})

// 4. drag / drop
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

// 5. load
window.addEventListener('load', (event) => {
    console.log('Page is fully loaded');
});

// 6. focus
var focusListener = function (event) {
    event.target.style.background = 'lightblue';
};
document.querySelector('.first-name').addEventListener('focus', focusListener);
document.querySelector('.last-name').addEventListener('focus', focusListener);

// 7. resize
window.addEventListener("resize", function (event) {
    console.log("Window is being resized");
});

// 8. scroll
window.addEventListener('scroll', function (event) {
    if (window.scrollY < 200) {
        document.body.style.backgroundColor = 'white';
    } else if (window.scrollY < 400) {
        document.body.style.backgroundColor = 'yellow';
    } else if (window.scrollY < 800) {
        document.body.style.backgroundColor = 'beige';
    } else {
        document.body.style.backgroundColor = 'lightgreen';
    }
});

// 9. select
textFields = document.querySelectorAll("input");
textFields.forEach(textField => textField.addEventListener('select', function (event) {
    event.target.style.color = "red";
}));

// 10. dblclick
firstNameLabel = document.getElementById("firstnameid");
firstNameLabel.addEventListener('dblclick', function (event) {
    alert(`Please provide your first name.`);
})

lastNameLabel = document.getElementById("lastnameid");
lastNameLabel.addEventListener('dblclick', function (event) {
    alert(`Please provide your last name.`);
})

// 11. click event on sign me up button and  Stop propagation
myBtns = document.querySelectorAll(".btn");
myBtns.forEach(btn => {
    btn.addEventListener('click', function (event) {

        btn.innerHTML = 'Coming Soon ...  ';
        event.target.style.color = "gray"
        event.stopPropagation();
        console.log(`Button was clicked !`)
    })
});
destination = document.querySelectorAll(".destination")

destination.forEach(textField => textField.addEventListener('click', function (event) {
    event.target.style.display = "none";
    console.log("Event is propagated !!!");
}));


// 12. blur
textFields = document.querySelectorAll("input");
textFields.forEach(textField => textField.addEventListener('blur', function (event) {
    event.target.style.color = "black";
    event.target.style.background = 'white';
}));



// Prevent Default
homeNavLink = document.querySelectorAll(".nav-link")[0];
homeNavLink.addEventListener('click', function (event) {
    console.log(`Home link disabled.`)
    event.preventDefault();
})