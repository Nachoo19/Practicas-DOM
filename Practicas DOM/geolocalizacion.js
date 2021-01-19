const d = document,
n = navigator,
w = window;

export default function getGeolocation(id){
   const $id = d.getElementById(id),
   options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
   };

   const sucess = position => {
    let coords = position.coords;

    $id.innerHTML = `
    <p>Tu posicion actual es:</p>
    <ul>
    <li>Latitud: <b>${coords.latitude}</b></li>
    <li>Longitud: <b>${coords.longitude}</b></li>
    <li>Presicion: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.longitude},${coords.longitude},1z* target="_blank" rel="noopener">Ver en Google Maps</a>
    `
    // console.log(position); Posicion xd
   };

   const error = (err) => {
       $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`
    //    console.error(`Error: ${err.code}: ${err.message}`); tirar error en la consola. Lo comento por que molesta
   };

   n.geolocation.getCurrentPosition(sucess, error, options)


}