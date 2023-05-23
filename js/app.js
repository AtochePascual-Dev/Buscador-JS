// * VARIABLES
const resultado = document.querySelector('#resultado');



// * EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);
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