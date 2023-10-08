console.log("Welcome!");
//init variables
let songindex = 0;
let audioelement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('myprogress');
let playgif = document.getElementById('playgif');
let songitems = Array.from(document.getElementsByClassName('picandtitle'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songname: "Tornado of Souls", filepath: "song/1.mp3", coverPath: "covers/a.jpg"},
    {songname: "One", filepath: "song/2.mp3", coverPath: "covers/b.jpg"},
    {songname: "Master of Puppets", filepath: "song/3.mp3", coverPath: "covers/c.jpg"},
    {songname: "Fade to Black", filepath: "song/4.mp3", coverPath: "covers/d.webp"},
    {songname: "Symbolic", filepath: "song/5.mp3", coverPath: "covers/e.jpg"},
    {songname: "Bite the Pain", filepath: "song/6.mp3", coverPath: "covers/f.jpg"},
    {songname: "Lazarus", filepath: "song/7.mp3", coverPath: "covers/g.jpg"},
    {songname: "The Audacity", filepath: "song/8.mp3", coverPath: "covers/h.jpg"},
]

songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].src=songs[i].songname;
})

//play/pause click button
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        playgif.style.opacity = 1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        playgif.style.opacity = 0;
    }
})

//Listen to events
audioelement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seek bar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioelement.currentTime = (progressbar.value*audioelement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src = `song/${songindex}.mp3`;
        masterSongName.innerText = songs[songindex-1].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=6){
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioelement.src = `song/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `song/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

function validateEmail(){
    var emailInput = document.getElementById("loginName");
    var email = emailInput.value.trim(); 
    var pwdInput = document.getElementById("loginPassword");
    var pwd = pwdInput.value.trim(); 
    var phnoInput = document.getElementById("phno");
    var mobno = phnoInput.value.trim(); 
    var filter = /^\d{10}$/;    
    
    if(email=="" || pwd=="" || mobno==""){
       alert("One or more fields are empty");
       return false; 
    }
    else{ 
    }


    if (email.endsWith("@gmail.com")) {
       window.location.href = "index.html"; 
    } else {
       alert("Please use a valid email ending with @gmail.com");
       return false; 
    }
    if (filter.test(mobno)) {
        return false;
    }
    else{
        alert("Enter valid mobile number");
        location.reload();
        return false; 

    }
}


