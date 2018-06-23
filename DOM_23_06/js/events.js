// ------------------------------------------------ events ---------------------------------------

var action = document.getElementById("action-click");
action.onclick = function(e) { //e - event
    e.preventDefault(); //block default link event
    action.classList.add("decor-link");
}

var header = document.getElementById("main-header");
header.addEventListener('mouseenter', function(e) {
    document.body.classList.toggle('move');
})

header.addEventListener('mouseleave', function(e){
    document.body.classList.toggle('move');
})

// ---------------------------- stopPropagation -----------------------------

document.getElementById("event-div").addEventListener('click', function(e){
    console.log("Div clicked");
})
document.getElementById("btn").addEventListener('click', function(e){
    e.stopPropagation();
    console.log("Button clicked");
})