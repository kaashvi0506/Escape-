function startGame(){

    localStorage.setItem(
        "score",
        0
    );

    location.href=
        "game.html";
}

if(
document.getElementById(
    "score"
)){

    const cores=
    document.querySelectorAll(
        ".core"
    );

    cores.forEach(core=>{

        core.style.left=
            Math.random()*80
            +"%";

        core.style.top=
            Math.random()*70
            +"%";
    });

    let score=0;

    let timer=60;

    function update(){

        document
        .getElementById(
            "timer"
        ).innerHTML=
            timer;

        timer--;

        if(timer<0){

            location.href=
                "gameover.html";
        }
    }

    setInterval(
        update,
        1000
    );

    window.collect=
    function(element){

        element.style.display=
            "none";

        score++;

        document
        .getElementById(
            "score"
        ).innerHTML=
            score;

        if(score===3){

            location.href=
                "victory.html";
        }
    };
}
