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
    {songname: "Bite the Pain", filepath: "song/6.mp3", coverPath: "covers/f.jpg"}
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