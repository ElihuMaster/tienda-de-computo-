window.onload = iniciar;
let params = new URLSearchParams(location.search);
const codigoProducto = params.get("codigo")
const aquiPuntos = (data) => {
    return `<div id="listaPuntuacionCmr">
    <div class="fondo">
        <img src="./imagenes/puntosCmr.jpeg" alt="">
    <nav class="listaPuntos">
        <ul>
        
            <p class="p1">BIenvenido ahora podras conocer tus premios y promociones</p>
          
            <div class= "cajaLista">
            
            <div class="miParrafo">
            <p class= "parrafo">Estas a un paso de conocer los increibles premios que tenemos para ti</p>
            <p class= "parrafo2">Eres 1 de lo 50 primeros<a href="https://www.bancofalabella.pe/cmr-puntos"><button class="miBoton">ingresa aqui</button></a> y obten tu beneficio y mas!!!</p>
           
            </div>
            </div>
            <div class="miLista">
            <li>${data.lista6}</li>
            <li>${data.lista7}</li>
            <li>${data.lista8}</li>
            <li>${data.lista10}</li>
            <li>${data.lista11}</li>
            </div>
        </ul>
    </nav>
    </div>

    <a class="logo" href="./index.html" target="blank"><span>Computer</span><span>shop</span></a>
    <p class="p3">No seas parte de la grande cifra de perdidas humanas por esta pandemia tomemos conciencia. La familia COMPUTERSHOP Y CMR </p>
    
    <div id="covid">

    <h1>Estadisticas del COVID19</h1><br/>

    <b>Selecione Fecha</b> <input id="inputFecha" type="date"><br />
    <b>Selecione Pais</b>
    <select id="selectPais">
        <option value="Peru">Peru</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Spain">España</option>
        <option value="Venezuela">Venezuela</option>
        <option value="Colombia">Colombia</option>
        <option value="Italia">Italia</option>
        <option value="Germany">Alemania</option>
    </select><br />
    <button id="btnCargar">Cargar Estadisticas</button>
    <br />
    <div id="lista">
        <div>Confirmado:<span id="today_confirmed"></span></div>
        <div>Muertes:<span id="today_deaths"></span></div>
        <div>Pacientes hospitalizados con síntomas:<span id="today_hospitalised_patients_with_symptoms"></span></div>
        <div>Cuidados intensivos:<span  id="today_intensive_care"></span></div>
        <div>Nuevo confirmado:<span id="today_new_confirmed"></span></div>
        <div>Nuevas muertes:<span id="today_new_deaths"></span></div>
        <div>Nuevos pacientes hospitalizados con síntomas:<span id="today_new_hospitalised_patients_with_symptoms"></span></div>
        <div>Nuevos cuidados intensivos:<span id="today_new_intensive_care"></span></div>
        <div>Nuevos casos abiertos:<span id="today_new_open_cases"></span></div>
        <div>Nuevo recuperado:<span id="today_new_recovered"></span></div>
        <div>Nuevos total de pacientes hospitalizados:<span id="today_new_total_hospitalised_patients"></span></div>
        <div>Casos abiertos hoy:<span id="today_open_cases"></span></div>
        <div>Recuperado:<span id="today_recovered"></span></div>
        <div>Total de pacientes hospitalizados:<span id="today_total_hospitalised_patients"></span></div>
    </div>

</div>

            </div>`;
    };
    


    const muestraPagina = () => {
        const pagina = ListaProductos.filter(productos => productos.codigo);
            if(pagina.length > 0){
                const verProducto = document.getElementById("cmrPuntuacion");
                      verProducto.innerHTML = aquiPuntos(pagina[0]);
                   
            }
            
        };
        muestraPagina();
    
///estadisticas del covid19 usando api/////////////////////////////////////////////////////

    function iniciar() {
        let boton = document.getElementById("btnCargar");
                boton.addEventListener("click", clickBoton);
        }
        
        
    async function cargarUrl(url) {
            let response = await fetch(url);
            return response.json();
        }
        
    async function clickBoton() {
        
            let pais = document.getElementById("selectPais").value;
            let fecha = document.getElementById("inputFecha").value;
            
        
            let url = `https://api.covid19tracking.narrativa.com/api/${fecha}/country/${pais}`;
            let json = await cargarUrl(url);
            let estadisticas = json.dates[fecha].countries[pais];
            console.log(estadisticas);
        
            document.getElementById("today_confirmed").innerHTML = estadisticas.today_confirmed;
            document.getElementById("today_deaths").innerHTML = estadisticas.today_deaths;
            document.getElementById("today_hospitalised_patients_with_symptoms").innerHTML = estadisticas.today_hospitalised_patients_with_symptoms;
            document.getElementById("today_intensive_care").innerHTML = estadisticas.today_intensive_care;
            document.getElementById("today_new_confirmed").innerHTML = estadisticas.today_new_confirmed;
            document.getElementById("today_new_deaths").innerHTML = estadisticas.today_new_deaths;
            document.getElementById("today_new_hospitalised_patients_with_symptoms").innerHTML = estadisticas.today_new_hospitalised_patients_with_symptoms;
            document.getElementById("today_new_intensive_care").innerHTML = estadisticas.today_new_intensive_care;
            document.getElementById("today_new_open_cases").innerHTML = estadisticas.today_new_open_cases;
            document.getElementById("today_new_recovered").innerHTML = estadisticas.today_new_recovered;
            document.getElementById("today_new_total_hospitalised_patients").innerHTML = estadisticas.today_new_total_hospitalised_patients;
            document.getElementById("today_open_cases").innerHTML = estadisticas.today_open_cases;
            document.getElementById("today_recovered").innerHTML = estadisticas.today_recovered;
            document.getElementById("today_total_hospitalised_patients").innerHTML = estadisticas.today_total_hospitalised_patients;
        
        }
