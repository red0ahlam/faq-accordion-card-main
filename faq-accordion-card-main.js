
const accordion_trigger = document.querySelectorAll(".accordion-trigger");
const answer = document.querySelectorAll(".answer");
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const title = document.querySelectorAll('.title');
const icon = document.querySelectorAll('.accordion-icon');

function display(Event) {
    var x = Event.target;
    for (let i = 0; i < accordion_trigger.length; i++) {
        if (accordion_trigger[i] === x) {
            if (answer[i].style.maxHeight) {
                answer[i].style.maxHeight = null;
                answer[i].ariaExpanded = "false";
                icon[i].style.transform = "rotate(0deg)";
                // title[i].style.fontFamily = rs.getPropertyValue('--ff-body');

            } else {
                answer[i].style.maxHeight = answer[i].scrollHeight + "px";
                answer[i].ariaExpanded = "true";
                icon[i].style.transform = "rotate(180deg)";
                // title[i].style.fontFamily = rs.getPropertyValue('--ff-heading');
            }
        }
    }
}

// function focus(Event) {
//     var x = Event.target;
//     for (let i = 0; i < title.length; i++) {
//         if (accordion_trigger[i] === x) {
//             title[i].style.fontFamily = rs.getPropertyValue('--ff-heading');
//             console.log("hi")
//         }
//     }
// }

// function blur(Event) {
//     var x = Event.target;
//     for (let i = 0; i < title.length; i++) {
//         if (accordion_trigger[i] === x) {
//             title[i].style.fontFamily = rs.getPropertyValue('--ff-body');
//             console.log("hi")
//         }
//     }
// }

for (let i = 0; i < accordion_trigger.length; i++) {
    accordion_trigger[i].addEventListener("click", display);
    // accordion_trigger[i].addEventListener("focus", focus);
    // accordion_trigger[i].addEventListener("blur", blur);
}


