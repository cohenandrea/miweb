
   function calcularReserva() {
      // Variables
      const precioPorNoche = 30;  // Precio por noche en dólares
      const cantidadNoches = parseInt(document.getElementById('cantidadNoches').value);

      let descuento = 0;  // Inicializar el descuento en 0

      // Calcular el descuento según la cantidad de noches
      if (cantidadNoches === 7) {
        descuento = 0.05;  // 5% de descuento para 7 noches
      } else if (cantidadNoches === 14) {
        descuento = 0.10;  // 10% de descuento para 14 noches
      } else if (cantidadNoches === 21) {
        descuento = 0.15;  // 15% de descuento para 21 noches
      }

      // Cálculo del precio total sin descuento
      const precioTotalSinDescuento = precioPorNoche * cantidadNoches;

      // Cálculo del descuento
      const descuentoAplicado = precioTotalSinDescuento * descuento;

      // Cálculo del precio total con descuento
      const precioTotalConDescuento = precioTotalSinDescuento - descuentoAplicado;

      // Mostrar el resultado en la página
      document.getElementById('resultado').innerHTML = `
        <p>Precio total sin descuento: $${precioTotalSinDescuento}</p>
        <p>Descuento aplicado: $${descuentoAplicado}</p>
        <p>Precio total con descuento: $${precioTotalConDescuento}</p>
      `;
    }
  
  

