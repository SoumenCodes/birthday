

function bdy(){
    
    var birthyear = prompt("Whats Your Birth Year ");
    if (birthyear<=0) {
        var txtAns = document.createTextNode('You have to enter your birthyear');
        document.getElementById('result')
        result.appendChild(txtAns);
        
    } else {
        
        var days = (2023 - birthyear) * 365;
        var txtAns = document.createTextNode('You are '+ days + ' days Old');
        document.getElementById('result')
        result.appendChild(txtAns);
        h1 = document.getElementsByTagName('h1')[0].style.display ="none";
        
    }
}