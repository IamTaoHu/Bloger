function myFunction() { 
    var id = document.getElementById("top"); 
    id.innerHTML = "Welcome to the Forum"
    }
window.onload = myFunction;

let topicCount = 0;

function postFunction() {
    const message = document.getElementById("message").value;
    let target;

    if (topicCount === 0) {
        target = document.getElementById("topic");
    } else if (topicCount === 1) {
        target = document.getElementById("reply1");
    } else if (topicCount === 2) {
        target = document.getElementById("reply2");
    } else {
        document.getElementById("message").value = '';
    }

    
    target.innerText = message;
    topicCount++;
    document.getElementById("message").value = '';
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    topicCount = 0;
}
