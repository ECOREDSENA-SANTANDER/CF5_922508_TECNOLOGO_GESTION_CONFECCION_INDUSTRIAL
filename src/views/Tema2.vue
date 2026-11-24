<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Preparación y extendido
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 La preparación y el extendido convierten los rollos de material en una superposición ordenada de capas con longitud, anchura, orientación y cantidad definidas. El resultado de esta operación recibe el nombre de tendido y constituye la base física sobre la cual se posiciona el trazo y se ejecuta posteriormente el corte. Su conformidad influye en la precisión dimensional, el aprovechamiento del material y la correspondencia entre las cantidades programadas y las piezas obtenidas.
    
    p Antes de iniciar el extendido deben verificarse la orden de corte, la referencia, el lote, el tono, el ancho útil, la longitud disponible, el número de capas, el modo de disposición y las restricciones asociadas con el material. También se requiere confirmar que la mesa, los equipos y el área de trabajo estén preparados para recibir el tendido sin introducir contaminación, deformaciones o diferencias de alineación.
    p Una disposición incorrecta puede trasladar el mismo defecto a todas las piezas superpuestas. El exceso de tensión, por ejemplo, estira el material durante el extendido; cuando las piezas recuperan su dimensión después del corte, pueden quedar más pequeñas que el patrón. De igual manera, la mezcla de tonos, la desalineación de los bordes o la incorporación de capas incompletas comprometen la uniformidad del producto. Por esta razón, el extendido se considera una operación técnica y no una simple acumulación de tela sobre la mesa (Vilumsone-Nemes, 2015).

    .cajon.color-secundario.bg-color-7.p-4.mb-5
      h4 Principio técnico
      p.mb-0 Cada capa debe conservar las condiciones establecidas de longitud, orientación, alineación y tensión. La uniformidad del tendido no depende únicamente de su apariencia superficial, sino de la correspondencia entre todas las capas que lo integran.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Información requerida antes del extendido
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
      .row.justify-content-center(titulo="Orden de corte")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] confirmar referencia, color, talla, cantidad y prioridad de producción.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] determina qué material debe extenderse y cuántas unidades deben obtenerse.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png', alt='')
      .row.justify-content-center(titulo="Trazo aprobado")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] revisar longitud, ancho, combinación de tallas y número de prendas por capa.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] define las dimensiones del tendido y el rendimiento correspondiente a cada capa.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png', alt='')
      .row.justify-content-center(titulo="Identificación del rollo")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] verificar código, lote, tono, composición y longitud registrada.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] evita mezclar materiales que puedan presentar diferencias visuales o técnicas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/4.png', alt='')
      .row.justify-content-center(titulo="Ancho útil")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] comprobar la medida aprovechable a lo largo del rollo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] permite establecer si el material es compatible con el ancho del trazo.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')
      .row.justify-content-center(titulo="Sentido del material")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] identificar pelo, brillo, estampado, dirección del tejido o restricciones superficiales.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] define la orientación permitida para cada capa.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/6.png', alt='')
      .row.justify-content-center(titulo="Estado del material")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] revisar defectos, deformaciones, humedad, contaminación o irregularidades visibles.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] permite separar, señalar o gestionar las zonas que no deben incorporarse al corte.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')
      .row.justify-content-center(titulo="Número de capas")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] contrastar la cantidad prevista con el rendimiento del trazo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] determina el volumen de piezas que se obtendrá después del corte.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/8.png', alt='')
      .row.justify-content-center(titulo="Capacidad del equipo")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] verificar longitud de mesa, altura admisible y condiciones de operación.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Incidencia en el trazo:] evita configurar tendidos incompatibles con la infraestructura disponible.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/9.png', alt='')
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Métodos de extendido
      
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/10.png', alt='')
      
    p El método de extendido describe la forma en que el material se desenrolla, desplaza y deposita sobre la mesa. Puede ejecutarse manualmente, con equipos de asistencia mecánica o mediante sistemas automáticos. La selección depende del volumen de producción, la longitud del tendido, el peso y comportamiento del rollo, la frecuencia de los cambios y el grado de control requerido.
    p La elección tecnológica no elimina la necesidad de supervisión. Incluso en sistemas automatizados deben comprobarse la identificación del material, el ancho útil, la orientación de las caras, el conteo de capas y la correspondencia con el programa de corte. La automatización mejora el control de variables repetitivas, pero no corrige una orden mal configurada ni identifica por sí sola todas las particularidades del material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Extendido manual
    
    .row.justify-content-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/11.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg-color-6.p-4.mb-3
          p.mb-0 En el extendido manual, el rollo se coloca sobre un soporte y el material se desplaza a lo largo de la mesa mediante intervención directa. Al finalizar cada recorrido se alinea el borde, se controla la longitud y se corta o dobla el extremo, según el modo de disposición definido.
        p Este método permite observar de manera continua el material y resulta funcional para muestras, tendidos cortos, lotes reducidos, materiales delicados o referencias con requerimientos especiales. También puede emplearse cuando las características superficiales exigen ajustes que no están configurados en un equipo automático. Sin embargo, el manejo de rollos pesados o tendidos extensos incrementa la exigencia física y puede introducir diferencias de tensión entre capas.
    
    p La uniformidad depende de mantener una velocidad controlada y evitar que el material sea arrastrado o estirado. El rollo debe girar libremente sobre su soporte; no resulta adecuado halar la tela contra la resistencia del rollo, debido a que esta acción puede deformarla antes de depositarla. Asimismo, cada recorrido requiere comprobar los bordes y corregir la desviación sin generar pliegues.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Extendido asistido o semiautomático

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-color-6.p-4.mb-3
          p.mb-0 El extendido asistido incorpora carros manuales, portarrollos móviles, dispositivos de corte de extremos o mecanismos de alineación que reducen el esfuerzo requerido para transportar el material. El desplazamiento puede continuar bajo control directo, mientras algunas funciones se ejecutan mediante mecanismos auxiliares.
        p Esta alternativa permite mejorar la regularidad del recorrido y disminuir la manipulación del rollo. Resulta apropiada cuando el volumen supera la capacidad práctica del extendido completamente manual, pero no se dispone de un sistema programable o las órdenes presentan cambios frecuentes que requieren intervención continua.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/27.png', alt='')
    
    p El grado de asistencia varía entre equipos. Un carro puede limitarse a soportar y desenrollar el material; otro puede incorporar control de borde, conteo de capas y corte transversal. Por esta razón, la clasificación debe basarse en las funciones realmente disponibles y no únicamente en la denominación comercial del equipo.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Extendido automático
    
    .row.justify-content-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/13.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg-color-6.p-4.mb-3
          p.mb-0 Los sistemas automáticos desplazan el rollo mediante un carro motorizado y permiten configurar variables como longitud, número de capas, velocidad y forma de disposición. Según el modelo, pueden incluir control de tensión, alineación de borde, corte de extremos, detección de agotamiento del rollo y registro de la cantidad extendida.
        p Su aplicación resulta conveniente en producciones repetitivas, tendidos largos o situaciones en las que se requiere conservar condiciones homogéneas entre numerosas capas. La automatización también facilita la repetición de programas y el control de la velocidad; no obstante, el material debe ser compatible con el sistema de alimentación y con los parámetros configurados.
    p Los materiales elásticos, resbaladizos, muy livianos o con superficie sensible pueden exigir reducción de velocidad, mecanismos especiales de alimentación o intervención adicional. Por consiguiente, la productividad nominal del equipo no debe prevalecer sobre la estabilidad del tendido.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 2.
      span Comparación de los métodos de extendido
    .tabla-a.color-primario
      table
        thead
          tr
            th Criterio
            th Manual
            th Asistido o semiautomático
            th Automático
        tbody
          tr
            th Desplazamiento
            td Se ejecuta mediante intervención física directa.
            td Utiliza un carro o mecanismo auxiliar controlado durante el recorrido.
            td Se realiza mediante un sistema motorizado con parámetros programados.
          tr
            th Control de longitud
            td Se verifica mediante marcas, topes o instrumentos de medición.
            td Puede apoyarse en topes, contadores o dispositivos de corte.
            td Se configura y controla desde el sistema del equipo.
          tr
            th Alineación de bordes
            td Depende de la comprobación y corrección manual.
            td Puede contar con guías o mecanismos de asistencia.
            td Puede incorporar sensores y corrección automática de borde.
          tr
            th Conteo de capas
            td Se registra manualmente.
            td Puede efectuarse mediante contador mecánico o digital.
            td Se integra normalmente en el programa de extendido.
          tr
            th Aplicación habitual
            td Resulta apropiado para muestras, lotes pequeños o materiales que requieren manipulación particular.
            td Se utiliza en volúmenes intermedios y procesos con asistencia parcial.
            td Se aplica en tendidos repetitivos, extensos o de mayor volumen.
          tr
            th Ventaja principal
            td Facilita la observación directa y la adaptación durante el recorrido.
            td Reduce el esfuerzo físico y mejora la regularidad frente al método manual.
            td Favorece la repetibilidad, el control de parámetros y la trazabilidad.
          tr
            th Limitación principal
            td Presenta mayor variación asociada con la manipulación y la tensión aplicada.
            td Su desempeño depende de las funciones instaladas y de la intervención requerida.
            td Exige programación correcta, mantenimiento y compatibilidad con el material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Modos de disposición de las capas
    
    p El método de extendido debe diferenciarse del modo de disposición. El primero describe cómo se deposita el material; el segundo define la relación entre las caras y la dirección longitudinal de las capas. Un mismo equipo puede trabajar con diferentes modos, siempre que su configuración y las propiedades del material lo permitan.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/24.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Modos de disposición del material
    
    .row.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/t2/14.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cara arriba en un solo sentido")
            h4.mb-0 Configuración:
            p todas las capas conservan la misma cara visible y la misma dirección longitudinal.
            h4.mb-0 Aplicación técnica:
            p se emplea cuando el material presenta pelo, brillo, estampado orientado o diferencias perceptibles según el sentido.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cara arriba en sentidos opuestos")
            h4.mb-0 Configuración:
            p las capas conservan la misma cara visible, pero alternan su dirección longitudinal.
            h4.mb-0 Aplicación técnica:
            p solo puede utilizarse cuando el material admite inversión sin afectar la apariencia ni el comportamiento de las piezas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cara a cara")
            h4.mb-0 Configuración:
            p las caras visibles de dos capas consecutivas quedan enfrentadas.
            h4.mb-0 Aplicación técnica:
            p permite obtener pares opuestos cuando el trazo, el material y el sistema de corte autorizan esta configuración.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Zigzag")
            h4.mb-0 Configuración:
            p el material se extiende de ida y regreso, formando dobleces alternos en los extremos.
            h4.mb-0 Aplicación técnica:
            p reduce cortes entre recorridos, pero invierte la dirección de las capas y exige comprobar su compatibilidad con el material.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tubular")
            h4.mb-0 Configuración:
            p el material se conserva cerrado y cada capa contiene dos superficies superpuestas por la estructura del tubo.
            h4.mb-0 Aplicación técnica:
            p requiere controlar los dobleces laterales, la torsión y la correspondencia del ancho tubular con el trazo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Material doblado")
            h4.mb-0 Configuración:
            p el tejido se extiende conservando el doblez longitudinal recibido o preparado.
            h4.mb-0 Aplicación técnica:
            p se aplica únicamente cuando el trazo y la simetría de las piezas fueron definidos para esta presentación.
    
    p La disposición en un solo sentido requiere que el carro regrese sin depositar material o que cada capa sea cortada antes del retorno. Aunque este procedimiento demanda recorridos adicionales, conserva la orientación superficial. Por el contrario, el extendido en zigzag reduce desplazamientos sin carga, pero alterna el sentido longitudinal y forma dobleces en los extremos.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.
      span Orientación de las capas durante el extendido
    
    img(src='@/assets/curso/temas/t2/15.svg', alt='Esquema comparativo de capas textiles superpuestas en un mismo sentido y en sentidos opuestos, con flechas que indican su orientación.')

    .cajon.color-secundario.bg-color-7.p-4.mb-5
      h4 Verificación indispensable
      p.mb-0 El giro permitido en el trazo no autoriza automáticamente la inversión de las capas durante el extendido. Las restricciones del patrón y las del material deben comprobarse por separado. Un material puede admitir piezas giradas dentro del trazo y, al mismo tiempo, requerir que todas las capas conserven la misma cara.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Selección del método y del modo de extendido
    
    .row.mp-4
      .col-lg-5
        img(src='@/assets/curso/temas/t2/16.png', alt='')
      .col-lg-7
        p La selección debe considerar conjuntamente el material, la orden y la infraestructura. En materiales estables y de superficie uniforme puede emplearse una velocidad mayor y un modo bidireccional, siempre que la documentación lo autorice. Los tejidos con pelo, brillo o motivos orientados requieren un solo sentido, mientras que los materiales elásticos demandan especial control de tensión y alimentación.
        p También influye la cantidad programada. Los tendidos pequeños pueden ejecutarse manualmente sin comprometer el tiempo disponible; para órdenes extensas, la asistencia mecánica o automática favorece la regularidad. La decisión debe considerar, además, la longitud de la mesa, la capacidad de carga, el sistema de corte y la altura máxima admisible.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Criterios para seleccionar el extendido
    
    .row.mb-4
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          .row.justify-content-center(titulo="Material con pelo o brillo direccional")
            .col-11.col-lg-12
              p Extender todas las capas en un mismo sentido y conservar una orientación uniforme.
          .row.justify-content-center(titulo="Estampado con orientación definida")
            .col-11.col-lg-12
              p Mantener el sentido visual aprobado y evitar inversiones no autorizadas.
          .row.justify-content-center(titulo="Tela de cuadros o rayas")
            .col-11.col-lg-12
              p Controlar la alineación del diseño y evitar desplazamientos entre capas.
          .row.justify-content-center(titulo="Material elástico")
            .col-11.col-lg-12
              p Reducir la tensión de alimentación y respetar las condiciones de relajación establecidas.
          .row.justify-content-center(titulo="Tejido resbaladizo")
            .col-11.col-lg-12
              p Limitar la altura, estabilizar los bordes y verificar desplazamientos durante cada recorrido.
          .row.justify-content-center(titulo="Tejido tubular")
            .col-11.col-lg-12
              p Controlar dobleces, torsión, ancho y alineación de ambos lados del tubo.
          .row.justify-content-center(titulo="Orden de bajo volumen")
            .col-11.col-lg-12
              p Emplear un método manual o asistido compatible con la longitud y el peso del rollo.
          .row.justify-content-center(titulo="Producción repetitiva")
            .col-11.col-lg-12
              p Utilizar parámetros programables cuando la infraestructura y el material lo permitan.
          .row.justify-content-center(titulo="Rollo pesado")
            .col-11.col-lg-12
              p Incorporar dispositivos de carga, portarrollos o ayudas mecánicas para su manipulación.
          .row.justify-content-center(titulo="Presencia de defectos identificados")
            .col-11.col-lg-12
              p Detener, señalar, empalmar o excluir la zona de acuerdo con el procedimiento establecido.         
      .col-lg-4
        img(src='@/assets/curso/temas/t2/17.png', alt='')
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Preparación de capas
      
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/18.png', alt='')

    p La preparación de las capas comienza antes de depositar el material sobre la mesa. Comprende la verificación documental, la identificación de los rollos, la separación por lotes o tonos, la estabilización del material cuando corresponda y el cálculo de la cantidad requerida. Estas actividades previenen que el tendido reúna materiales incompatibles o genere cantidades diferentes de las programadas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Identificación y segregación del material
    
    .row.mb-4
      .col-lg-7
        p Los rollos deben conservar su identificación durante el alistamiento y el extendido. La etiqueta o el registro asociado debe permitir reconocer la referencia, el lote, el tono, el ancho y la longitud disponible. Cuando existen diferencias de tonalidad, los rollos no deben mezclarse sin una autorización técnica que asegure la uniformidad del producto.
        p La segregación resulta especialmente importante cuando las piezas de una misma prenda podrían cortarse en capas correspondientes a tonos distintos. Un delantero proveniente de un rollo y una manga procedente de otro pueden presentar una diferencia visual aunque ambos materiales compartan el mismo código comercial. La preparación debe mantener la relación entre lote, tendido, paquete y orden de producción.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/19.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Relajación y estabilización
    
    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t2/20.png', alt='')
      .col-lg-7
        p Algunos materiales acumulan tensión durante el tejido, el acabado, el enrollado o el transporte. Cuando la especificación técnica lo requiere, deben desenrollarse o disponerse en condiciones controladas antes del extendido para permitir su estabilización. Esta práctica es particularmente relevante en tejidos de punto y materiales con elasticidad, aunque su necesidad debe confirmarse para cada referencia.
        p No existe un tiempo universal de relajación aplicable a todos los textiles. La duración y el método dependen de la composición, la estructura, el acabado, el estado del rollo y las recomendaciones técnicas disponibles. Asignar un periodo arbitrario puede resultar insuficiente o introducir demoras sin fundamento. Por ello, la condición utilizada debe documentarse y mantenerse para producciones comparables.
    
    .cajon.color-secundario.bg-color-7.p-4.mb-5
      h4 Criterio de preparación
      p.mb-0 La relajación no corrige un patrón ni compensa una especificación dimensional incorrecta. Su finalidad consiste en permitir que el material alcance la condición prevista antes de ser extendido y cortado.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Cálculo del número de capas
    
    p La cantidad de capas se determina mediante la relación entre las unidades requeridas y el rendimiento del trazo. Cuando cada capa produce la misma combinación de tallas, puede emplearse la siguiente expresión:
    p.mb-0 #[b Ecuación:] cálculo del número de capas
    p Número de capas = Unidades requeridas ÷ Unidades por capa
    p El cálculo debe verificarse para todas las tallas. Si el cociente no coincide, la orden no puede resolverse mediante un único tendido sin generar excedentes o faltantes; será necesario utilizar trazos adicionales, modificar la proporción o dividir la orden.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/24.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Ejemplo de cálculo
    
    .row.mb-4
      .col-lg-8
        p Una orden requiere 60 unidades en talla S, 120 en talla M y 60 en talla L. El trazo contiene una prenda S, dos M y una L:
        p #[b Ecuaciones:] cálculo del número de capas por talla
        p.mb-0 #[b Talla S:] 60 ÷ 1 = 60 capas
        p.mb-0 #[b Talla M:] 120 ÷ 2 = 60 capas
        p.mb-0 #[b Talla L:] 60 ÷ 1 = 60 capas
        p La proporción coincide para las tres tallas; por tanto, un tendido de 60 capas genera las cantidades requeridas.
        p Si la orden solicitara 60 unidades S, 100 M y 60 L, el mismo trazo no produciría una correspondencia exacta: 60 capas generarían 120 unidades M. En ese caso no debe aceptarse automáticamente la sobreproducción. La programación requiere otra combinación de trazos que atienda las cantidades sin alterar injustificadamente la orden.
      .col-lg-4
        img(src='@/assets/curso/temas/t2/21.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Construcción del tendido
    
    .row.justify-content-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/22.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg-color-6.p-4.mb-3
          p.mb-0 La primera capa debe ubicarse sobre una superficie limpia, uniforme y libre de elementos que puedan marcarla. Su longitud se ajusta al trazo y a las tolerancias operativas definidas. Las capas siguientes se superponen manteniendo los bordes dentro de los límites establecidos y evitando pliegues, ondas o desplazamientos.
        p La tensión debe controlarse durante cada recorrido. Una capa extendida con exceso de tensión puede contraerse después del corte; una capa demasiado floja puede formar ondas y alterar la posición de las piezas. El objetivo no consiste en estirar el material para que alcance la longitud marcada, sino en depositarlo en una condición estable.
    p Los extremos requieren uniformidad suficiente para que el trazo quede contenido en todas las capas. Cuando se utiliza extendido zigzag, los dobleces deben permanecer fuera del área efectiva del patrón o gestionarse mediante la holgura prevista. En el extendido con corte de extremos, cada capa debe cubrir la longitud requerida sin producir excedentes innecesarios.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Controles durante la preparación de las capas
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
      .row.justify-content-center(titulo="Número de capas")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] debe coincidir con la orden y con el rendimiento del trazo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] genera faltantes, excedentes o diferencias entre tallas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/23.png', alt='')
      .row.justify-content-center(titulo="Longitud")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] cada capa debe cubrir completamente el área definida para el trazo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] produce piezas incompletas en las capas más cortas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/24.png', alt='')
      .row.justify-content-center(titulo="Ancho")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] el material debe cubrir el ancho utilizado por el trazo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] deja contornos fuera de la superficie disponible.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/25.png', alt='')
      .row.justify-content-center(titulo="Alineación")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] los bordes deben permanecer dentro de la tolerancia establecida.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] desplaza piezas próximas al límite lateral.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/26.png', alt='')
      .row.justify-content-center(titulo="Tensión")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] el material debe depositarse sin estiramiento ni flojedad excesiva.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] origina contracción posterior, ondas o variación dimensional.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/27.png', alt='')
      .row.justify-content-center(titulo="Cara y sentido")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] cada capa debe conservar la disposición definida.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] produce diferencias de tono, brillo, estampado o dirección.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/28.png', alt='')
      .row.justify-content-center(titulo="lote y tono")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] las capas deben responder a la segregación autorizada.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] ntroduce diferencias visuales entre piezas de una misma prenda.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/29.png', alt='')
      .row.justify-content-center(titulo="Altura")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] debe ser compatible con el material y con el sistema de corte.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] favorece desplazamientos o pérdida de perpendicularidad durante el corte.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/30.png', alt='')
      .row.justify-content-center(titulo="Defectos")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] las zonas identificadas deben tratarse mediante el procedimiento establecido.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] incorpora irregularidades del material en las piezas cortadas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/31.png', alt='')
      .row.justify-content-center(titulo="Estabilidad")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Condición requerida:] las capas deben permanecer planas y sin desplazamiento.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo asociado con una preparación deficiente:] reduce la correspondencia entre el trazo y las capas inferiores.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/32.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Control de empalmes y defectos
    
    .row.mb-4
      .col-lg-4
        img(src='@/assets/curso/temas/t2/33.png', alt='')
      .col-lg-8
        p Cuando un rollo termina antes de completar una capa o se encuentra una zona no utilizable, puede requerirse un empalme. Su posición debe definirse de manera que la discontinuidad no atraviese piezas del trazo. Para ello se identifican zonas de empalme compatibles con los espacios existentes entre conjuntos de piezas o con las áreas establecidas en el procedimiento de corte.
        p El material incorporado después del empalme debe pertenecer al lote o tono autorizado. La superposición ha de cubrir la zona necesaria sin aumentar de forma injustificada el consumo. Un empalme insuficiente puede dejar piezas incompletas; uno excesivo incrementa el desperdicio y modifica la altura local del tendido.
        p Los defectos no deben tratarse todos de la misma manera. Una irregularidad localizada fuera del área ocupada por las piezas puede permanecer sin afectar el producto. En cambio, un defecto situado dentro de un panel visible requiere exclusión, reposición o reubicación autorizada. La decisión debe quedar registrada para mantener la relación entre material utilizado y piezas obtenidas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Altura del tendido
    
    .row.mb-4
      .col-lg-8
        p La altura admisible depende del tipo de material, su compresibilidad, la estabilidad entre capas y la capacidad del sistema de corte. Los tejidos resbaladizos o deformables pueden requerir tendidos más bajos que los materiales estables. Aumentar el número de capas mejora el volumen procesado por recorrido de corte, pero también incrementa el riesgo de desplazamiento y variación entre las capas superiores e inferiores.
        p No debe establecerse una altura única para todos los materiales. La decisión debe considerar la capacidad técnica del equipo, las recomendaciones de operación y los resultados de calidad obtenidos con condiciones comparables. La Organización Internacional del Trabajo recomienda definir y comunicar la profundidad máxima de tendido correspondiente a cada material para prevenir pérdidas de precisión y desperdicio (Vilumsone-Nemes, 2015). 
      .col-lg-4
        img(src='@/assets/curso/temas/t2/34.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Irregularidades frecuentes
    
    p Las irregularidades del tendido y sus efectos probables se presentan a continuación.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/24.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Irregularidades del tendido y efectos probables
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
      .row.justify-content-center(titulo="Desalineación lateral")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] algunas capas se desplazan con respecto al borde de referencia.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] las piezas próximas al límite pueden quedar incompletas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/35.png', alt='')
      .row.justify-content-center(titulo="Tensión excesiva")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] el material se estira durante el recorrido.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] las piezas pueden contraerse después del corte.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/36.png', alt='')
      .row.justify-content-center(titulo="Tensión insuficiente")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] la capa se deposita con ondas o acumulación superficial.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] los contornos pueden deformarse o desplazarse.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/37.png', alt='')
      .row.justify-content-center(titulo="Pliegue interno")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] una parte de la capa queda doblada y cubierta por las siguientes.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] se producen piezas incompletas o deformadas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/38.png', alt='')
      .row.justify-content-center(titulo="Variación de longitud")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] algunas capas no alcanzan el extremo definido.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:]  las piezas ubicadas al final del trazo quedan incompletas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/39.png', alt='')
      .row.justify-content-center(titulo="Mezcla de tonos")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] se incorporan capas de lotes incompatibles sin separación.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] la prenda puede presentar diferencias visuales entre sus partes.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/40.png', alt='')
      .row.justify-content-center(titulo="Orientación incorrecta")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] una o más capas se extienden en un sentido no autorizado.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] aparecen variaciones de brillo, pelo o lectura del estampado.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/41.png', alt='')
      .row.justify-content-center(titulo="Exceso de altura")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] el tendido supera la condición estable para el material o el equipo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] aumentan el desplazamiento y la desviación del corte.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/42.png', alt='')
      .row.justify-content-center(titulo="Conteo incorrecto")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] el número real de capas difiere del registrado.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] se generan faltantes o excedentes en las cantidades cortadas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/43.png', alt='')
      .row.justify-content-center(titulo="Empalme mal ubicado")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Descripción técnica:] la unión entre segmentos atraviesa el área de una pieza.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Efecto probable:] se obtienen componentes incompletos o con discontinuidades.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/44.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Maquinaria y equipos
    
    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t2/45.png', alt='')
      .col-lg-7
        p La maquinaria de extendido comprende los sistemas utilizados para soportar, transportar, desenrollar, alinear y depositar el material. Los equipos auxiliares complementan estas funciones mediante el control de los extremos, la medición, la sujeción y la manipulación de los rollos.
        p La selección debe responder a la anchura del material, el peso del rollo, la longitud del tendido, el modo de disposición y la frecuencia de producción. También debe verificarse la compatibilidad entre la mesa, el carro extendedor y el sistema de corte. Una máquina con mayor velocidad nominal no resulta conveniente si introduce tensión, dificulta el tratamiento de defectos o no admite la presentación del material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Mesas de extendido
    
    .row.mb-4
      .col-lg-7
        p La mesa proporciona la superficie de soporte para las capas. Debe presentar continuidad, limpieza, estabilidad y dimensiones suficientes para contener el tendido. Las uniones entre módulos no deben formar desniveles que marquen el material o interfieran con el desplazamiento del equipo.
        p El ancho debe permitir ubicar el material y conservar un margen operativo sin obligar a que los bordes queden suspendidos. La longitud se relaciona con los trazos previstos y con la organización del área. Algunas mesas incorporan sistemas de aire que disminuyen la fricción y facilitan el movimiento de tendidos pesados hacia la estación de corte.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/46.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Portarrollos y dispositivos de alimentación
    
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t2/47.png', alt='')
    
    p Los portarrollos sostienen el material y permiten su rotación durante el desenrollado. Su capacidad debe corresponder con el diámetro, el ancho y el peso de los rollos utilizados. Una rotación irregular puede producir tirones y variaciones de tensión.
    p Los sistemas de alimentación positiva controlan el suministro del material para reducir el estiramiento. Esta función resulta relevante en tejidos elásticos o estructuras susceptibles de deformarse. En equipos automáticos, la velocidad de alimentación debe coordinarse con el desplazamiento del carro.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Carros extendedores
    
    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t2/48.png', alt='')
      .col-lg-7
        p El carro extendedor transporta el rollo a lo largo de la mesa. Puede ser manual, asistido o motorizado. Los modelos programables permiten controlar recorridos, velocidad, longitud y conteo de capas; algunos integran sensores de borde y mecanismos para corregir desviaciones durante el desplazamiento.
        p La configuración debe ajustarse al material. Una aceleración brusca puede desplazar capas livianas o estirar tejidos elásticos. Del mismo modo, un sistema de alimentación inadecuado puede introducir tensión incluso cuando la velocidad general parece estable.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Cortadores de extremos y sistemas de sujeción
    
    .row.mb-4
      .col-lg-7
        p El cortador de extremos separa cada capa al finalizar el recorrido cuando el modo de extendido exige caras y direcciones uniformes. El corte debe ser transversal y cubrir el ancho sin arrastrar el material. Su posición debe permitir que todas las capas alcancen la longitud requerida.
        p Las pinzas, pesas, topes y dispositivos de sujeción estabilizan el tendido durante su preparación y traslado. Deben utilizarse sin dañar la superficie ni comprimir de forma desigual las capas. Su función no consiste en corregir una tensión inadecuada, sino en conservar la posición alcanzada.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/49.png', alt='')
    
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 3.
      span Maquinaria y equipos utilizados en el extendido
    .tabla-a.color-primario
      table
        thead
          tr
            th Maquinaria o equipo
            th Función técnica
            th Criterio de selección
        tbody
          tr
            th Mesa de extendido
            td Proporciona la superficie para construir y conservar el tendido.
            td Debe responder al ancho, la longitud, la carga y el sistema de corte.
          tr
            th Portarrollos fijo
            td Sostiene el rollo y permite su desenrollado desde una posición determinada.
            td Debe ser compatible con el peso, el diámetro y el ancho del material.
          tr
            th Carro extendedor manual
            td Transporta el rollo mediante desplazamiento controlado por intervención directa.
            td Resulta adecuado para tendidos cortos, lotes reducidos o materiales de manejo particular.
          tr
            th Carro asistido
            td Reduce el esfuerzo de desplazamiento e incorpora funciones mecánicas complementarias.
            td Se selecciona según el volumen, el peso del rollo y las funciones requeridas.
          tr
            th Extendedora automática
            td Ejecuta recorridos programados y controla parámetros del extendido.
            td Requiere compatibilidad con el material, la mesa y el sistema de producción.
          tr
            th Sistema de alimentación
            td Regula la salida del material desde el rollo.
            td Debe evitar tirones y tensión, especialmente en estructuras elásticas.
          tr
            th Control de borde
            td Detecta y corrige desviaciones laterales.
            td Resulta pertinente cuando se requieren alineación repetitiva y tolerancias reducidas.
          tr
            th Cortador de extremos
            td Separa transversalmente las capas al finalizar el recorrido.
            td Debe cubrir el ancho del material y producir un corte estable.
          tr
            th Contador de capas
            td Registra el número de recorridos o capas depositadas.
            td Debe permitir contrastar el valor programado con el conteo físico.
          tr
            th Pinzas y pesas
            td Conservan la posición del tendido durante la preparación o el corte.
            td Deben sujetar sin marcar, contaminar o deformar el material.
          tr
            th Dispositivo de carga
            td Eleva y posiciona rollos sobre el equipo.
            td Se selecciona según el peso de la carga y las condiciones de manipulación.
          tr
            th Instrumentos de medición
            td Verifican ancho, longitud y ubicación de referencias.
            td Deben conservar legibilidad y condiciones adecuadas de uso.
      
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Alistamiento de la maquinaria
    
    p Antes de iniciar el extendido deben comprobarse las condiciones del equipo y su correspondencia con la orden. El alistamiento comprende:

    PasosA.color-secundario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Inspeccionar la mesa
          p Verificar limpieza, estabilidad, continuidad superficial y ausencia de objetos que puedan afectar el material.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/50.svg', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/t2/51.svg', alt='')
        .col-md-6
          h3 Revisar el portarrollos
          p Confirmar su capacidad, ajuste, libre rotación y correcta posición.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Comprobar los dispositivos de alimentación
          p Validar que suministren el material sin frenado irregular ni tensión excesiva.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/52.svg', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/t2/53.svg', alt='')
        .col-md-6
          h3 Configurar los parámetros
          p Ingresar longitud, número de capas, velocidad, sentido y modo de extendido.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Verificar sensores y controles
          p Comprobar el funcionamiento del alineador de borde, contador, parada y mandos disponibles.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/54.svg', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/t2/55.svg', alt='')
        .col-md-6
          h3 Revisar el cortador de extremos
          p Confirmar su estado, recorrido y capacidad para trabajar con el ancho y el material previstos.
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Realizar una prueba inicial
          p Extender una capa y comprobar longitud, ancho, tensión, alineación y orientación antes de continuar.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t2/56.svg', alt='')
      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/t2/57.svg', alt='')
        .col-md-6
          h3 Registrar la configuración
          p Relacionar los parámetros utilizados con la orden, el material y el equipo.

    .cajon.color-secundario.bg-color-7.p-4.mb-5
      h4 Punto de liberación
      p.mb-0 El extendido continuo solo debe comenzar después de aprobar la primera capa. Esta verificación permite detectar errores de longitud, orientación, tensión o alineación antes de que se reproduzcan en todo el tendido.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Operación segura de los equipos
    
    .row.mb-4
      .col-lg-7
        p El uso de maquinaria requiere que los controles, las zonas móviles, los sistemas de corte y los dispositivos de parada permanezcan en condiciones funcionales. Las intervenciones de limpieza, ajuste o mantenimiento deben efectuarse conforme con los procedimientos establecidos y con las instrucciones del fabricante. La evaluación de peligros y la reducción del riesgo forman parte de los principios generales aplicables al diseño y utilización de maquinaria (ISO, 2010; International Labour Organization, 2013). 
        p La manipulación de rollos debe realizarse con medios compatibles con su peso y dimensiones. Cuando la carga excede la capacidad de manejo seguro, se requieren ayudas mecánicas como elevadores, carros o dispositivos de izaje. El rollo no debe almacenarse en una posición inestable ni trasladarse mediante procedimientos que comprometan el material, el equipo o la integridad de las personas.
      .col-lg-5
        img(src='@/assets/curso/temas/t2/58.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Registro técnico del extendido
    
    p La trazabilidad exige documentar las condiciones bajo las cuales se preparó el tendido. El registro permite relacionar las piezas cortadas con los rollos utilizados y facilita la revisión de diferencias de cantidad, tono o comportamiento dimensional.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/24.svg', alt='')
      .text.mx-1
        h4.mb-0.ms-2.me-4 Datos mínimos del registro de extendido
    
    TabsC.color-primario
      .py-3.py-md-4(titulo="Identificación de la producción")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/59.png', alt='')
          .col-md-6
            h4 Orden de producción:
            p debe identificar el documento que autoriza la preparación del material.
            h4 Referencia:
            p debe registrar el código y la descripción del producto.
            h4 Material:
            p debe indicar la referencia, composición o denominación técnica utilizada.
            h4 Color, lote y tono:
            p debe conservar la identificación correspondiente a los rollos extendidos.
      .py-3.py-md-4(titulo="Identificación del material y del trazo")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/60.png', alt='')
          .col-md-6
            h4 Ancho útil:
            p debe registrar la medida verificada para el tendido.
            h4 Número de rollo:
            p debe permitir rastrear el origen de las capas incorporadas.
            h4 Trazo:
            p debe identificar la versión, longitud y combinación de tallas utilizada.
      .py-3.py-md-4(titulo="Condiciones del extendido")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/61.png', alt='')
          .col-md-6
            h4 Modo de extendido:
            p debe indicar la relación entre caras y direcciones de las capas.
            h4 Número de capas:
            p debe registrar la cantidad programada y la cantidad realmente extendida.
            h4 Empalmes:
            p debe identificar su cantidad y ubicación dentro del tendido.
            h4 Defectos gestionados:
            p debe describir las zonas excluidas, señaladas o repuestas.
      .py-3.py-md-4(titulo="Identificación y verificación de la operación")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/62.png', alt='')
          .col-md-6
            h4 Equipo utilizado:
            p debe identificar la máquina o dispositivo empleado.
            h4 Fecha y turno:
            p debe ubicar temporalmente la ejecución del extendido.
            h4 Responsable y verificación:
            p debe identificar quién ejecutó y quién liberó el tendido.

    p La liberación final debe confirmar que el tendido contiene el número correcto de capas, permanece dentro de las dimensiones establecidas y conserva la identificación de los materiales utilizados. Solo después de esta comprobación puede trasladarse al corte sin perder la correspondencia con el trazo y la orden de producción.
    
    





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
