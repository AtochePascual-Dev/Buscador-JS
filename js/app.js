// * VARIABLES
const selectMarca = document.querySelector('#marca');
const selectYear = document.querySelector('#year');
const selectMinimo = document.querySelector('#minimo');
const selectMaximo = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

// Generamos un objeto para la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  color: '',
  transmision: '',
};


// * EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos); // Lista los autos
  llenarSelectYear(); // Genera los años y muestra en el select HTML
  selectMarca.addEventListener('change', llenarObjetoBusqueda);
  selectYear.addEventListener('change', llenarObjetoBusqueda);
  selectMinimo.addEventListener('change', llenarObjetoBusqueda);
  selectMaximo.addEventListener('change', llenarObjetoBusqueda);
  selectPuertas.addEventListener('change', llenarObjetoBusqueda);
  selectTransmision.addEventListener('change', llenarObjetoBusqueda);
  selectColor.addEventListener('change', llenarObjetoBusqueda);
});



// * FUNCIONES
// * Carga la lista de autos
const mostrarAutos = (autos) => {

  // Limpiamos la list previa
  limpiarHTML();

  autos.forEach(auto => {
    const { marca, modelo, year, precio, puertas, color, transmision } = auto;

    // Creamos el utoHTML
    const autoHTML = document.createElement('P');
    autoHTML.textContent = `
    ${marca} ${modelo} - ${year} -  ${puertas} Puertas : ${puertas} - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
    `;

    resultado.appendChild(autoHTML);
  });
};



// * Limpia la lista de autos
const limpiarHTML = () => {
  while (resultado.firstChild) {
    resultado.firstChild.remove();
  };
};


// * Llena el select de años
const llenarSelectYear = () => {
  const max = new Date().getFullYear();
  const min = max - 12;

  for (let i = max; i > min; i--) {
    const optionHTML = document.createElement('OPTION');
    optionHTML.value = i;
    optionHTML.textContent = i;

    selectYear.appendChild(optionHTML);
  }
};



// * Llena el objeto de busqueda
const llenarObjetoBusqueda = (event) => {
  const tipo = event.target.id;
  const valor = event.target.value;

  datosBusqueda[tipo] = valor;

  filtrarAutos();
};



// * Filtrar autos
const filtrarAutos = () => {
  const autosFiltrados =
    autos.filter(filtrarMarca)
      .filter(filtrarYear)
      .filter(filtrarMinimo)
      .filter(filtrarMaximo)
      .filter(filtrarPuertas)
      .filter(filtrarTransmision)

  mostrarAutos(autosFiltrados);
};



// * Filtra por marca
const filtrarMarca = (auto) =>
  (datosBusqueda.marca)
    ? auto.marca === datosBusqueda.marca
    : auto;



// * Filtra por año
const filtrarYear = (auto) =>
  (datosBusqueda.year)
    ? auto.year === Number(datosBusqueda.year)
    : auto;



// * Filtra por precio minimo
const filtrarMinimo = (auto) =>
  (datosBusqueda.minimo)
    ? auto.precio >= Number(datosBusqueda.minimo)
    : auto;



// * Filtra por precio maximo
const filtrarMaximo = (auto) =>
  (datosBusqueda.maximo)
    ? auto.precio <= Number(datosBusqueda.maximo)
    : auto;



// * Filtra por precio puertas
const filtrarPuertas = (auto) =>
  (datosBusqueda.puertas)
    ? auto.puertas === Number(datosBusqueda.puertas)
    : auto;



// * Filtra por precio transmision
const filtrarTransmision = (auto) =>
  (datosBusqueda.transmision)
    ? auto.transmision === datosBusqueda.transmision
    : auto;