console.log("Abhinav Mishra portfolio");

const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");


window.onload =()=>{
   filterItem.onclick =(selectedItem)=>{
    if(selectedItem.target.classList.contains("item")){
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");

        let filterName = selectedItem.target.getAttribute("data-name");

        filterImg.forEach((image)=>{
            let filterimages = image.getAttribute("data-name");
            if((filterimages == filterName) || (filterName == "all")) {
                image.classList.remove("hide");
                image.classList.add("show")
            }
            else {
                image.classList.add("hide");
                image.classList.remove("show");
            }


        })
    }
    
   }
}


// Scrolling animation 

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeme");
        } else {
            reveals[i].classList.remove("activeme");
        }
    }
}
window.addEventListener("scroll", reveal);