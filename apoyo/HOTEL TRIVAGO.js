function mostrar()
{
		var reserva;
		var huesped;
		var cantPersonas;
		var diasEstadia;
		var formaDePago;
		var maxCantPersonas;
		var contadorDeReservas;
		var maxCantPersonasHuesped;
		var maximoDeDias;
		var maximoDeDiasCantidadDePersonas;
		var contadorEfectivo;
		var contadorTarjeta;
		var contadorQr;
		var acumuladorDias;
		var promedio;
		var formaDePagoMasUtilizada;

		 	contadorEfectivo = 0;
			contadorTarjeta = 0;
		 	contadorQr = 0;
		 	contadorDeReservas = 0;
		 	acumuladorDias = 0;

			reserva = confirm ("ingresar una reserva");
			
			while (reserva){
			huesped = prompt("Ingrese nombre del huesped");
			cantPersonas = parseInt(prompt("Cuantas personas ingresan?"));
			diasEstadia = parseInt(prompt("Cuantos dias se quedan?"));
			formaDePago = prompt("Que forma de pago va a utilizar?").toLowerCase();
			
							
							while (isNaN(cantPersonas) || cantPersonas < 0) {
						cantPersonas = parseInt(prompt("ERROR! ingrese cantidad de personas valida"));
						}

						while (!isNaN(formaDePago) || formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "qr") {
							formaDePago = prompt("ERROR! Por favor, ingrese un metodo de pago valido").toLowerCase();
						}

						if(contadorDeReservas == 0 || maxCantPersonas < cantPersonas) {
							maxCantPersonas = cantPersonas;
							maxCantPersonasHuesped = huesped; 

						}

						if(contadorDeReservas == 0 || maximoDeDias < diasEstadia) {
							maximoDeDias = diasEstadia;
							maximoDeDiasCantidadDePersonas = cantPersonas;
						}  // cantidad de personas que se quedaron mas dias;


						switch(formaDePago)
						{
							case "qr":
							contadorQr ++;
									break;

							case "efectivo":
							contadorEfectivo++;
									break;
							case "tarjeta":
							contadorTarjeta++;
									break;
						}
						
						acumuladorDias = acumuladorDias + diasEstadia;
						contadorDeReservas++;
						reserva = confirm("Desea ingresar una reserva?");

						}//fin del while

						promedio = acumuladorDias / contadorDeReservas;
						if(contadorQr > contadorEfectivo && contadorQr > contadorTarjeta)
						{
						formaDePagoMasUtilizada = "Qr";
						}
							else
						{
							if(contadorTarjeta > contadorEfectivo) 
							{
								formaDePagoMasUtilizada = "tarjeta";
							}
							else
							{
								formaDePagoMasUtilizada ="efectivo";
							}
						} 
 document.write(`El huesped que mas personas ingreso fue ${maxCantPersonasHuesped} con ${maxCantPersonas}. <br> Las personas que se quedaron mas dias fueron ${maximoDeDiasCantidadDePersonas}. <br>  La forma mas utilizada fue ${formaDePagoMasUtilizada}. <br> El promedio de cantidad de dias por reserva es ${promedio} . <br>` );


							}
		
			

		