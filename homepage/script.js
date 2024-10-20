console.log('hii');
let aditya = document.querySelector(".aditya").textContent;
// document.addEventListener("click",() => {
//     if(aditya.includes("Aditya")){     
//         document.querySelector(".aditya").innerHTML="solar";
//     }
// });

// document.addEventListener("click",() => {
//     if(aditya.includes("SolarNode")){     
//         document.querySelector(".aditya").textContent=document.querySelector(".aditya").innerHTML.replace(document.querySelector(".aditya").innerHTML,"Aditya");
//     }
// });


// function to change the web developer
let currentText = document.querySelector(".developer");
const texts = ["Front-end Developer", "Engineer", "Web Developer"]


function changeText() {
    let index = 0;
    function updateText() {
        if (index < texts.length) {
            currentText.innerHTML = texts[index];
            console.log(currentText);
            index++;
            setTimeout(updateText, 1000);
        }
    }
    updateText();
}


// Setting interval in web developer 
changeText();


// Function to create hacking text effect

