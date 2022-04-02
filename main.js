
document.getElementById("myFonts").addEventListener("click", switchMyFonts);
document.getElementById("buyFonts").addEventListener("click", switchBuyFonts);
function switchMyFonts() {   
    document.getElementById("dummy-text").classList.remove("display-none");
    document.getElementById("buy-fonts").classList.add("display-none");
    
}
function switchBuyFonts() {   
    document.getElementById("buy-fonts").classList.remove("display-none");
    document.getElementById("dummy-text").classList.add("display-none");
    
}
