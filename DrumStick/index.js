window.addEventListener('keydown',function(e){

    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(key);
    if(!audio) return;
    audio.currenTime=0;
    audio.play();
    key.classList.add("playing");  

});

function transitionendfunc(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove("playing");
}
let keys=document.querySelectorAll(".key");
keys.forEach(element=>{element.addEventListener('transitionend',transitionendfunc)});
