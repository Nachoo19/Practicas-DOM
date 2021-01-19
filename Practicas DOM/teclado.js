const d = document;
let x = 0;
let y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall =  $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();
    // console.log(e.keyCode);
    // console.log(limitsBall);
    // console.log(limitsStage);

    // const move = (direction) =>{
    //     $ball.style.transform = `translate(${x *10}px,${y *10}px)`;
    // }

    switch(e.keyCode){

        case 37:
            // move("left");
            if(limitsBall.left > limitsStage.left) x--;
            break;

       case 38:
            // move("up");
            if(limitsBall.top > limitsStage.top) {
            e.preventDefault();
            y--;
        }

            break;

        case 39:
            // move("right");
            if(limitsBall.right < limitsStage.right) x++;
            break;

        case 40:
            // move("down");
            if(limitsBall.bottom < limitsStage.bottom) {
            e.preventDefault();
            y++;
}
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x *10}px,${y *10}px)`;


}
export function shortcts(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // // Esto es muy importante y esta piola
    // if(e.key === "a" && e.altKey){
    //     alert("Hola papito lindo");
    // }
    // if(e.key === "c" && e.altKey){
    //     confirm("Hola papito lindo CONFIRMADO");
    // }
    // if(e.key === "p" && e.altKey){
    //     prompt("Hola papito lindo AVISADO");
    // }

   

}