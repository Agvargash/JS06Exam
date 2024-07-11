
//datos basicos
const url = 'https://mindicador.cl/api/'
const clp = document.getElementById('cantidad')
const cambio = document.getElementById('cambio')
const boton = document.getElementById('btn')
let respuestas =  document.getElementById('respuesta')
let respuestaGrafica =  document.getElementById('grafica')
//llamado api simple
async function getData(){try {
    let response = await fetch(url);
    let data = await response.json();
    return data
} catch (error) {
    console.log(error);
}}
//llamado api graficos
async function getDataGrafico(moneda){try {
    let response = await fetch(url+moneda);
    let data = await response.json()
    return data.serie}
    catch(error){
    console.log(error);
    }
}
//funcion para calcular
async function calcular() {
    let base = clp.value
    let moneda = cambio.value
    datos = await getData() 
    let conversion = await datos[moneda].valor
    return (base/conversion).toFixed(2)
}

/* Render de gráfico */
async function renderGrafica() {
    const data = await getDataGrafico(cambio.value);
    const config = {
    type: "line",
    data
    };
    const myChart = document.getElementById("myChart");
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
}

boton.addEventListener('click', async ()=>{
    //respuesta instantanea
    let alerta = await calcular(); 
    respuestas.innerHTML = alerta

    
    //generacion de datos para gráfico
    /* let ejes = await getDataGrafico(cambio.value)

    const labels = ejes.map((val) => {
    return ejes.valor});

    const ejesx = ejes.map((fecha) => {
    return ejes.fecha;})

    const datasets = [
    {
    label: "ejes",
    borderColor: "rgb(255, 99, 132)",
    ejesx}];
    return { ejesy, datasets };
    renderGrafica();}) */
    })

