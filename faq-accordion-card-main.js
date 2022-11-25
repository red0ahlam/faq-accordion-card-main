
const accordion_trigger = document.querySelectorAll(".accordion-trigger");
const answer = document.querySelectorAll(".answer");
const icon = document.querySelectorAll('.accordion-icon');

function display(Event) {
    var x = Event.target;
    for (let i = 0; i < accordion_trigger.length; i++) {
        if (accordion_trigger[i] === x) {
            if (answer[i].style.maxHeight) {
                answer[i].style.maxHeight = null;
                answer[i].ariaExpanded = "false";
                icon[i].style.transform = "rotate(0deg)";

            } else {
                answer[i].style.maxHeight = answer[i].scrollHeight + "px";
                answer[i].ariaExpanded = "true";
                icon[i].style.transform = "rotate(180deg)";
            }
        }
    }
}

for (let i = 0; i < accordion_trigger.length; i++) {
    accordion_trigger[i].addEventListener("click", display);
}


