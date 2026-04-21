document.addEventListener("DOMContentLoaded", () => {
    const btnCalcular = document.getElementById('btnCalcularCredito');
    const btnReiniciar = document.getElementById('btnReiniciar');

    // --- SECCIÓN DE VALIDACIONES ---
    // Aplica a todos los inputs: solo números y máximo 5 cifras
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 5) {
                this.value = this.value.slice(0, 5);
            }
        });
    });

    // --- LÓGICA DE CÁLCULO ---
    btnCalcular.onclick = function() {
        // Captura de Ingresos
        const ingresos = Number(document.getElementById('txtIngresos').value) || 0;

        // Captura detallada de Gastos (Egresos)
        const arriendo = Number(document.getElementById('txtArriendo').value) || 0;
        const alimentacion = Number(document.getElementById('txtAlimentacion').value) || 0;
        const varios = Number(document.getElementById('txtVarios').value) || 0;

        // Suma total de Egresos
        const egresos = arriendo + alimentacion + varios;

        // Captura de datos del préstamo
        const monto = Number(document.getElementById('txtMonto').value) || 0;
        const plazoAnios = Number(document.getElementById('txtPlazo').value) || 0;
        const tasa = Number(document.getElementById('txtTasaInteres').value) || 0;

        // --- CÁLCULOS FINANCIEROS ---
        const disponible = ingresos - egresos;
        const capacidadPago = disponible * 0.4;
        const interesTotal = monto * (tasa / 100) * plazoAnios;
        const totalPrestamo = monto + interesTotal;
        
        // Cuota mensual (Evitamos división por cero)
        const cuotaMensual = (plazoAnios > 0) ? totalPrestamo / (plazoAnios * 12) : 0;

        // --- RENDERIZADO DE RESULTADOS ---
        document.getElementById('spnDisponible').innerText = "$" + disponible.toLocaleString();
        document.getElementById('spnCapacidadPago').innerText = "$" + capacidadPago.toLocaleString();
        document.getElementById('spnInteresPagar').innerText = "$" + interesTotal.toLocaleString();
        document.getElementById('spnTotalPrestamo').innerText = "$" + totalPrestamo.toLocaleString();
        document.getElementById('spnCuotaMensual').innerText = "$" + cuotaMensual.toFixed(2);

        // --- LÓGICA DE ESTADO (SEMÁFORO) ---
        const estado = document.getElementById('spnEstadoCredito');
        
        if (monto <= 0) {
            estado.innerText = "ESPERANDO MONTO...";
            estado.style.color = "#808b4e"; 
        } else if (cuotaMensual > capacidadPago || disponible <= 0) {
            estado.innerText = "DENEGADO (Riesgo alto)";
            estado.style.color = "#ff4444"; 
        } else {
            estado.innerText = "APROBADO ✅";
            estado.style.color = "#00c851"; 
        }
    };

    btnReiniciar.onclick = () => location.reload();
});