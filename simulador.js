const btnCalcular = document.getElementById('btnCalcularCredito');
const btnReiniciar = document.getElementById('btnReiniciar');

btnCalcular.onclick = function() {
    
   
    // Usamos Number() para convertir el texto en números operables
    const ingresos = Number(document.getElementById('txtIngresos').value);
    const egresos = Number(document.getElementById('txtEgresos').value);
    const monto = Number(document.getElementById('txtMonto').value);
    const plazoAnios = Number(document.getElementById('txtPlazo').value);
    const tasa = Number(document.getElementById('txtTasaInteres').value);

    // PASO B: Operaciones matemáticas
    const disponible = ingresos - egresos;}