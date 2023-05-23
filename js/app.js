// * VARIABLES
const resultado = document.querySelector('#resultado');
const selectYear = document.querySelector('#year');



// * EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);
  llenarSelectYear();
});



// * FUNCIONES
// * Carga la lista de autos
const mostrarAutos = (autos) => {

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