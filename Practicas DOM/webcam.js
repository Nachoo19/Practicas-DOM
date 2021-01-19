const d = document, 
n = navigator;

export default function webCam (id){
    const $video = d.getElementById(id);

    if(n.mediaDevices.getUserMedia){
        // esta funcion de abajo es una promesa.
        n.mediaDevices.getUserMedia({video:true, audio:true})
        .then(stream =>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err)=> {
            $video.insertAdjacentHTML("beforebegin", `<p><mark>Sucedio el siguiente error: ${err}</mark></p>`);
            console.error(`Sucedio el siguiente error: ${err}`)});
    }
}