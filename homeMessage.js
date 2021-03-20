function startTime(){
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    hour = checkTime(hours)
    minute = checkTime(minutes);
    second = checkTime(seconds);
    
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + second;

    var time = setTimeout(startTime, 250);
}

function checkTime(i){
    if (i < 10) {i = "0" + i};
    return i;
}


var i = 0;
function typeWriter(){
    var today = new Date();
    
    var message = "Aku Sayang Shadicha di ";

    var morningMessage = "Pagi Hari, "
    var afternoonMessage = "Siang Hari, "
    var eveningMessage = "Sore Hari, "
    var nightMessage = "Malam Hari, "

    var hour = today.getHours();
    
    if(hour > 18)
        message += nightMessage;

    else if(hour > 14) 
        message += eveningMessage;

    else if(hour > 10)
        message += afternoonMessage;
        
    else 
        message += morningMessage;
    
    message += "SHASA DICHA 💙";
    
    var speed = 100
    if (i < message.length){
        document.getElementById('message').innerHTML += message.charAt(i)
        i++;
        setTimeout(typeWriter, speed);
    }
}
