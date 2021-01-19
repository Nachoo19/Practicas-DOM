const d = document;

export default function countDown(id,limitDate, finalMessage){
    const $countDown = d.getElementById(id);
    let $countDownDate = new Date (limitDate).getTime();
    
    let countDownTempo = setInterval(() => {
        let now =  new Date().getTime();
        const limitTime = $countDownDate - now,
        days = Math.floor(limitTime / (1000* 60 * 60 * 24)),
        hours = Math.floor(limitTime % (1000* 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes = Math.floor(limitTime % (1000* 60 * 60) / (1000 * 60)),
        seconds= Math.floor(limitTime % (1000* 60) / (1000));

    $countDown.innerHTML = `<h3>Faltan ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos.</h3>`;

        // console.log($countDownDate, now, limitTime)
        if (limitTime < 0){
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000);

    

    
}










































// const finalDate = new Date(limitDate).toLocaleString().split("/");
//     console.log(limitDate + "Ultima fecha");
//     let now = new Date().toLocaleString().split("/");
//     console.log(now + "Esta fecha")
    
//     let finalDate1 = Date.UTC(finalDate[2],finalDate[1]-1,finalDate[0]);
//     let now1 = Date.UTC(now[2],now[1]-1,now[0]);

//     let distance = new Date(now1-finalDate1);
//     let dias = Math.floor(distance / (1000 * 60 * 60 * 24));
//     console.log(dias)

//     setInterval(() => {
//         let now = new Date().toLocaleString();
//         id.innerHTML = `<h3>${distance}</h3>`
//     }, 1000);
    