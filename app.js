$(document).ready(function () {
    var button = $('button')
    var elecjugador = $('#yo');
    var eleccompu = $('#compu');
    var mensaje = $('#res');

    // $('#piedra').on('click', function () {

    //     $('#yo').replaceWith('<img src="./imagenes/piedra.png" alt="">');
    //     console.log(array[i]);
    //     var array = ['piedra', 'papel', 'tijera'];
    //     var i = parseInt(Math.random() * 3);
    //     if (array[i] = 'tijera') {
    //         $('#compu').replaceWith('<img src="./imagenes/tijera.png" alt="">');
    //     } else {
    //         $('#compu').replaceWith('<img src="./imagenes/papel.png" alt="">');
    //     }

    // });

    // $('#papel').on('click', function () {
    //     $('#yo').replaceWith('<img src="./imagenes/papel.png" alt="">');



    // });
    // $('#tijera').on('click', function () {
    //     $('#yo').replaceWith('<img src="./imagenes/tijera.png" alt="">');

    // });

    button.on('click', function (e) {
        /*Eleccion del Jugador*/
        var jugador = e.currentTarget.dataset.valor
        elecjugador.attr('src', `imagenes/${jugador}.png`)

        /* Eleccion de la Maquina*/
        var compu = eleccioncompu()
        eleccompu.attr('src', `imagenes/${compu}.png`)

        /*Resultado */
        var resultado = quiengano(jugador, compu)
        mensaje.html(`Tú <strong>${resultado}</strong> escogiendo <strong>${jugador}</strong> en contra de <strong>${compu}</strong>`)


        /*Funciones */
        function eleccioncompu() {
            var array = ['piedra', 'papel', 'tijera']
            var i = parseInt(Math.random() * 3)
            return array[i]
        }

        function quiengano(jugador, compu) {
                if (jugador === compu) {
                    return "Empatas"
                }

                if ((jugador === "papel" && compu === "piedra") || (jugador === "tijera" && compu === "papel") || (jugador === "piedra" && compu === "tijera")) {
                    return "Ganas"
                }
                else if ((jugador === "papel" && compu === "tijera") || (jugador === "tijera" && compu === "piedra") || (jugador === "piedra" && compu === "papel")) {
                    return "Pierdes"
                }
            

        }
    });




























});