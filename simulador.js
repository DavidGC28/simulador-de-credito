const btnCalcular = document.getElementById('btnCalcularCredito');
const btnReiniciar = document.getElementById('btnReiniciar');

btnCalcular.onclick = function() {
    
   
    
    const ingresos = Number(document.getElementById('txtIngresos').value);
    const egresos = Number(document.getElementById('txtEgresos').value);
    const monto = Number(document.getElementById('txtMonto').value);
    const plazoAnios = Number(document.getElementById('txtPlazo').value);
    const tasa = Number(document.getElementById('txtTasaInteres').value);

    
    const disponible = ingresos - egresos;
  
    const capacidadPago = disponible * 0.4;

    const interesTotal = monto * (tasa / 100) * plazoAnios;
    const totalPrestamo = monto + interesTotal;
    const cuotaMensual = totalPrestamo / (plazoAnios * 12);

   
    document.getElementById('spnDisponible').innerText = "$" + disponible.toLocaleString();
    document.getElementById('spnCapacidadPago').innerText = "$" + capacidadPago.toLocaleString();
    document.getElementById('spnInteresPagar').innerText = "$" + interesTotal.toLocaleString();
    document.getElementById('spnTotalPrestamo').innerText = "$" + totalPrestamo.toLocaleString();
    document.getElementById('spnCuotaMensual').innerText = "$" + cuotaMensual.toFixed(2);

    
    const estado = document.getElementById('spnEstadoCredito');
    
    if (cuotaMensual > capacidadPago) {
        estado.innerText = "DENEGADO (Cuota supera capacidad)";
        estado.style.color = "#ff4444"; 
    } else if (monto <= 0) {
        estado.innerText = "MONTO INVÁLIDO";
        estado.style.color = "#ffbb33"; 
    } else {
        estado.innerText = "APROBADO ✅";
        estado.style.color = "#00c851"; 
};


btnReiniciar.onclick = function() {
   
    location.reload();
};

}