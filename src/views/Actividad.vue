<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planeación técnica del proceso de corte',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la planeación del trazo, extendido y corte mediante criterios de calidad, capacidad y seguridad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de la planeación del trazo en confección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modificar los patrones para corregir sus dimensiones originales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribuir piezas aprobadas respetando las restricciones y aprovechando el material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar los márgenes de costura para facilitar el corte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir nuevas medidas corporales para cada talla requerida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué información debe verificarse antes de iniciar la distribución de patrones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La referencia, las tallas, el ancho útil y el sentido del material.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color del mobiliario, la iluminación y los descansos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de etiquetas, los empaques y los despachos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El orden de planchado, las agujas y los acabados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué corresponde realizar si el juego de patrones presenta una pieza faltante?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Duplicar otra pieza semejante para completar el juego.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el número de prendas previsto en la orden.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar el trazo para compensar el componente ausente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender la liberación y solicitar la revisión documental.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué ventaja ofrece el trazo digital frente al método manual?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina la necesidad de comprobar los patrones y tallas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autoriza cualquier giro para aprovechar toda la superficie.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite comparar configuraciones y conservar versiones registradas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituye los controles de material durante el extendido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cómo debe configurarse un trazo para un material con pelo direccional?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Con piezas giradas libremente para reducir la longitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Con todas las piezas orientadas en un sentido autorizado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Con piezas alternadas para equilibrar las capas cortadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Con orientaciones variables según el espacio disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué expresa la eficiencia geométrica de un trazo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El porcentaje del área del trazo ocupada por las piezas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de operarios que participan en la operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de rollos almacenados para la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La velocidad máxima que alcanza el equipo de corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué condición define el ancho útil considerado durante el trazo?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La medida nominal consignada en la etiqueta del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La distancia máxima entre los extremos de la mesa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La anchura completa incluyendo orillos y zonas dañadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El ancho aprovechable, excluidos los orillos y las zonas restringidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe priorizarse al trazar una camisa elaborada en tela de cuadros?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rotación libre de piezas para alcanzar mayor eficiencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La reducción de todas las separaciones entre contornos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La coincidencia del motivo en las uniones especificadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La colocación de todos los componentes por tamaño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito técnico del extendido de materiales?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acumular tela sin controlar la orientación de sus caras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formar capas alineadas, estables y compatibles con el trazo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar la geometría de los patrones durante la preparación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Separar definitivamente las piezas antes de realizar el corte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué caracteriza el modo de extendido cara a cara?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las superficies visibles de dos capas consecutivas quedan enfrentadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Todas las capas conservan la cara visible hacia arriba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los extremos se doblan alternadamente en cada recorrido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El material permanece cerrado con dos superficies tubulares.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué procedimiento corresponde a la relajación de un tejido elástico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar siempre un periodo fijo de veinticuatro horas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estirar cada capa hasta completar la longitud requerida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la tensión del rollo para corregir el ancho.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Respetar las condiciones específicas de estabilización documentadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuántas capas requiere una orden de 80 prendas si el trazo incluye dos prendas completas por capa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Veinte capas distribuidas según el color del material.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ochenta capas para reproducir cada pieza del trazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuarenta capas, según el rendimiento del trazo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ciento sesenta capas considerando las dos prendas completas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué efecto puede ocasionar una tensión excesiva durante el extendido?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La recuperación del tejido y la contracción posterior al corte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La mejora permanente de la estabilidad de las capas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El aumento uniforme del ancho útil sin deformaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de las restricciones de sentido del material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe hacerse cuando un empalme atraviesa el área de una pieza?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantenerlo si permite consumir completamente el rollo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Excluirlo o reubicarlo conforme al procedimiento establecido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ocultarlo bajo las capas superiores del mismo tendido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la velocidad de corte para evitar desplazamientos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué verificación permite autorizar el extendido continuo de un lote?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La disponibilidad de paquetes para la operación de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número total de rollos registrados en inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La confirmación de la primera capa en longitud, tensión y alineación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La inspección del producto terminado de la orden anterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué equipo es apropiado para perfilar piezas pequeñas con curvas complejas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cortadora circular sobre tendidos altos y compactos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una tijera larga sobre paquetes de numerosas capas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una prensa sin troquel adaptado a las piezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una cuchilla banda con bloques previamente estabilizados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué puede provocar diferencias entre las piezas superiores e inferiores del tendido?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El etiquetado anticipado de los paquetes terminados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La flexión de la cuchilla o una altura excesiva del tendido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El registro correcto de la cantidad de capas cortadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La correspondencia entre la orden y el trazo aprobado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué debe verificarse al ejecutar piquetes en piezas cortadas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Su posición y profundidad según las referencias autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su profundidad máxima sin considerar el margen de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Su repetición adicional para aumentar la visibilidad exterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Su ejecución indistinta sobre cualquier borde de la pieza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué componentes forman parte del tiempo completo de un ciclo de corte?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el desplazamiento efectivo de la cuchilla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo los tiempos de ensamble y empaque de prendas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente el transporte de rollos hacia la mesa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alistamiento, posicionamiento, corte, marcación, verificación y evacuación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué corresponde hacer si la guarda de seguridad dificulta un corte previsto?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Retirarla temporalmente para completar la pieza seleccionada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la protección del equipo mientras dura el corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar la configuración, altura o tecnología antes de continuar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar la velocidad para disminuir el tiempo de exposición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '<em>¡Excelente! Ha superado la actividad.</em>',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>