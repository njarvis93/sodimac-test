const shortStringUrl = url => {
    let hash = getRandom();
    if(url !== "")
        localStorage.setItem(hash, btoa(url));
    return url!== "" ? hash:"Error: Empty URL";
}
const initialUrl = hash =>{
    let encoded = localStorage.getItem(hash);
    console.log(encoded);
    if(encoded !== null){
        return atob(encoded);
    }else{
        return "Shortened url is invalid"
    }
}
const getRandom = ()=>{
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }   
    return text;
}

document.getElementById('change-url').addEventListener('click', () => {
    document.getElementById('url-text').innerHTML = ""
    let url = document.getElementById("url-received").value;
    document.getElementById("url-received").value  = ""; 
    document.getElementById('url-text').innerHTML = "Result: "+`${shortStringUrl(url)}`;
    document.getElementById("actions").setAttribute("style","display:block");
    document.getElementById("short-section").setAttribute("style","display:none");
})
document.getElementById('decode-btn').addEventListener('click', ()=>{
    document.getElementById('url-text').innerHTML = ""
    let hash = document.getElementById('url-encoded').value;
    document.getElementById('url-encoded').value = "";
    document.getElementById('url-text').innerHTML = "Result: "+`${initialUrl(hash)}`;
    document.getElementById("actions").setAttribute("style","display:block");
    document.getElementById("decoded-section").setAttribute("style","display:none");
})

document.getElementById('back').addEventListener('click', ()=>{
    document.getElementById('url-text').innerHTML = ""
    document.getElementById("actions").setAttribute("style", "display:none");
    document.getElementById("short-section").setAttribute("style","display:block");
});

document.getElementById('search-hash').addEventListener('click', ()=>{
    document.getElementById('url-text').innerHTML = ""
    document.getElementById("actions").setAttribute("style", "display:none");
    document.getElementById("decoded-section").setAttribute("style","display:block");
})