let videoTrailer = document.getElementsByClassName("video-trailer")[0];

console.log(videoTrailer.currentTime);

const mainContainer = document.getElementsByClassName("game-background-image")[0];




setInterval(()=>{
    if(videoTrailer.currentTime < 1 || videoTrailer.currentTime == undefined){
        mainContainer.classList.remove("video-running");
    }else{
        mainContainer.classList.add("video-running");
    }
    
},100)