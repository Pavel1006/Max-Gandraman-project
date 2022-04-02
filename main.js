//for switching font panels
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
// second exercise 

function parseUrl(str){
//constans
let resultObj = {}
const indexOfSearch = str.indexOf("?");
const strlength = str.length;
const indexOfHash = str.indexOf("#");
const indexOfPath = str.indexOf('/', 10)
const indexOfProtocol = str.indexOf('/')

//hash
if(indexOfHash==-1){
const hashObj = "This URL don't have hash";
}
else{
    if(indexOfSearch<indexOfHash){
    const hashObj = str.slice(indexOfHash,strlength)
    Object.assign(resultObj, {hash: hashObj});
}
    else{
        const hashObj = str.slice(indexOfHash,indexOfSearch)
        Object.assign(resultObj, {hash: hashObj});
    }
}
//search
if(indexOfSearch==-1){
    const searchObj = "This URL don't have search";
    }
    else{
        if(indexOfSearch>indexOfHash){
         const searchObj = str.slice(indexOfSearch,strlength)
        Object.assign(resultObj, {search: searchObj});
    }
        else{
            const searchObj = str.slice(indexOfSearch,indexOfHash)
            Object.assign(resultObj, {search: searchObj});
        }
    }
//pathname
if(indexOfPath==-1){
    const pathNameObj = "This URL don't have pathname";
    }
    else{
        if(indexOfSearch>indexOfHash){
         const pathNameObj = str.slice(indexOfPath,indexOfHash)
        Object.assign(resultObj, {pathname: pathNameObj});
    }
        else{
            const searchObj = str.slice(indexOfPath,indexOfSearch)
            Object.assign(resultObj, {pathname: pathNameObj});
        }
    }
    //protcol
const protocolObj =str.slice(0,indexOfProtocol-1) 
Object.assign(resultObj, {protocol: protocolObj});
//hostname
const hostNameObj =str.slice(indexOfProtocol+2,indexOfPath) 
Object.assign(resultObj, {hostname: hostNameObj});
//result
    return resultObj
}
let obj = parseUrl('https://mail.google.com/mail/u/1/#inbox?projector=1');

console.log(obj.search)
console.log(obj.hash)
console.log(obj.pathname)
console.log(obj.protocol)
console.log(obj.hostname)