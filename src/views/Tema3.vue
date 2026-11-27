<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 3
      h1 Ejecución del corte
    
    .bloque-texto-g.bg-color-3.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/1.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4.py-xl-5
        p.mb-0 La ejecución del corte transforma el tendido en piezas con geometría, dimensiones, cantidad e identificación correspondientes al trazo aprobado. La operación debe conservar los contornos, piquetes, perforaciones y demás referencias requeridas para las etapas posteriores, sin alterar la orientación ni la relación entre las capas.
    
    p La calidad no se determina únicamente por la coincidencia entre la capa superior y el trazo. También debe comprobarse la correspondencia vertical del corte, debido a que la flexión de la cuchilla, el desplazamiento de las capas o la altura excesiva pueden producir diferencias entre las piezas superiores, intermedias e inferiores. Un tendido aparentemente conforme puede generar componentes dimensionalmente distintos cuando la herramienta no permanece perpendicular a la mesa.
    p.mb-4 Antes de comenzar se requiere confirmar la liberación del tendido, el estado del trazo, la herramienta seleccionada, la altura admisible, las condiciones de sujeción y la disponibilidad de los medios de identificación. El corte no debe utilizarse para corregir defectos generados durante el extendido ni para modificar la geometría aprobada de los patrones (Vilumsone-Nemes, 2015).

    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Principio técnico
      p.mb-0 La finalidad del corte consiste en reproducir las formas del trazo en todas las capas del tendido. La velocidad de ejecución resulta secundaria cuando compromete la precisión, la integridad del material o la correspondencia entre las piezas obtenidas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Controles previos a la ejecución del corte
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5" data-aos="fade")
      .row.justify-content-center(titulo="Orden de corte")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] confirmar referencia, tallas, cantidades, material y prioridad.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] evita procesar un tendido que no corresponde con la programación autorizada.
        .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/2.png', alt='')
      .row.justify-content-center(titulo="Tendido")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] verificar longitud, ancho, número de capas, orientación y estabilidad.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] previene faltantes, piezas incompletas y desplazamientos entre capas.
        .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/3.png', alt='')
      .row.justify-content-center(titulo="Trazo")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] revisar versión, posición, fijación y correspondencia con el tendido.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] evita cortar geometrías desactualizadas o ubicadas fuera del material.
        .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/4.png', alt='')
      .row.justify-content-center(titulo="Altura")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] comprobar la compatibilidad entre el espesor del tendido y la capacidad del equipo.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] reduce la flexión de la cuchilla y la desviación entre capas.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
      .row.justify-content-center(titulo="Herramienta")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] revisar filo, montaje, limpieza y condición funcional.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] previene bordes irregulares, esfuerzo excesivo y pérdida de precisión.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
      .row.justify-content-center(titulo="Dispositivos de seguridad")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] verificar guardas, mandos, cables, parada y elementos de protección aplicables.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] disminuye la exposición a peligros mecánicos y eléctricos.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png', alt='')
      .row.justify-content-center(titulo="Orden de corte")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] confirmar su ubicación, forma, profundidad y cantidad.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] evita referencias incompletas o marcas visibles en el producto.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')
      .row.justify-content-center(titulo="Identificación")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] preparar los medios para numerar, separar y agrupar las piezas.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado"] conserva la trazabilidad después de retirar el trazo.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/9.png', alt='')
      .row.justify-content-center(titulo="Área de trabajo")
        .col-11.col-lg-6
          .ul.lista-ul.fa-lista
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Verificación técnica:] comprobar iluminación, orden, limpieza y circulación disponible.
            li 
              i.lista-ul__vineta
              span.mb-0 #[b Riesgo controlado:] reduce interferencias durante el desplazamiento de equipos y materiales.
        .col-md-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.png', alt='')
    

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Corte manual y asistido
      
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t3/11.png', alt='')
      
    p Los métodos de corte se diferencian por la fuente de movimiento de la herramienta, el grado de intervención requerido y la forma en que se controla la trayectoria. El corte manual depende del movimiento ejercido directamente sobre una herramienta sin motorización. El corte asistido incorpora energía eléctrica, neumática u otro mecanismo que acciona el elemento cortante, aunque la trayectoria puede continuar bajo control humano.
    p.mb-5 Los sistemas automatizados constituyen un nivel adicional de tecnificación. En ellos, la trayectoria procede de un archivo digital y el cabezal se desplaza mediante control numérico. Aunque reducen la conducción manual de la herramienta, requieren preparación del tendido, configuración de parámetros, supervisión y verificación del resultado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Corte manual
      
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-color-6.p-4.mb-3
          p.mb-0 El corte manual se realiza mediante tijeras, cizallas u otras herramientas accionadas directamente. Su aplicación resulta adecuada para muestras, materiales individuales, reposiciones, piezas auxiliares y tendidos de pocas capas. También permite intervenir zonas de acceso reducido cuando la herramienta es compatible con la geometría.
        p La precisión depende del filo, la estabilidad del material y el control de la trayectoria. La hoja inferior de la tijera debe desplazarse próxima a la superficie de apoyo para evitar levantar el material. Los movimientos deben conservar continuidad; los cierres parciales y repetidos pueden dejar irregularidades sobre el borde, especialmente en curvas amplias.
        p Cuando se cortan varias capas con tijera, la presión ejercida puede desplazar las superficies inferiores. Por esta razón, el método no debe seleccionarse únicamente porque la herramienta se encuentre disponible. Es necesario comprobar si la altura, la forma de las piezas y la estabilidad del material permiten obtener componentes equivalentes.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/12.png', alt='')
      
    p.mb-5 El corte manual ofrece flexibilidad y requiere menor preparación tecnológica, pero presenta una capacidad limitada frente a órdenes extensas. Su repetibilidad depende en mayor medida de la ejecución y puede disminuir cuando aumenta la longitud del recorrido, la complejidad del contorno o el número de capas.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Corte asistido con máquina portátil
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/13.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Las máquinas portátiles incorporan un motor que acciona una cuchilla recta o circular. El equipo se desplaza alrededor de los contornos mientras la persona responsable dirige la trayectoria. La energía motriz reduce el esfuerzo necesario para atravesar el tendido, pero no sustituye el control requerido para conservar la línea de corte.
        p La máquina de cuchilla recta admite tendidos de mayor altura y puede recorrer curvas, tramos rectos y cambios de dirección. Su versatilidad favorece el corte de componentes de diferentes tamaños. Sin embargo, la cuchilla puede flexionarse cuando se aplican giros forzados, se trabaja con una altura inadecuada o se utiliza un filo deficiente. Esa desviación modifica las dimensiones de las capas inferiores.
    
    p.mb-5 La máquina de cuchilla circular utiliza un disco giratorio. Resulta funcional para tendidos bajos, piezas amplias y trayectorias con curvas abiertas. El diámetro del disco limita la capacidad para resolver cambios cerrados, ángulos interiores o radios pequeños. Intentar forzar la herramienta en estas condiciones puede alejar el corte del contorno previsto.
      
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Corte asistido con máquina fija
    
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t3/14.png', alt='')
      
    p La máquina de cuchilla sinfín o cuchilla banda permanece instalada en una posición fija. El material, previamente dividido en bloques manejables, se conduce alrededor de la hoja. Este procedimiento permite trabajar contornos complejos y piezas pequeñas con precisión, siempre que el bloque conserve su alineación.
    p La división inicial debe dejar material suficiente alrededor de las piezas para manipular el bloque sin invadir los contornos. Durante el desplazamiento, todas las capas deben permanecer sujetas. Si el bloque se inclina o se abre, la trayectoria puede variar entre la parte superior y la inferior.
    p.mb-5 A diferencia de una máquina portátil, la cuchilla banda no recorre el tendido completo. El bloque se aproxima a una hoja de movimiento continuo, por lo que la posición de las manos, las guardas y los dispositivos de conducción adquieren especial relevancia. La OIT identifica las máquinas de cuchilla recta y cuchilla banda entre los equipos que requieren controles rigurosos en la industria de la confección (Hiba, 1998).

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Corte automatizado
      
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-color-6.p-4.mb-3
          p.mb-0 El corte automatizado utiliza un archivo digital para dirigir el cabezal sobre una mesa especializada. El material suele estabilizarse mediante vacío y cubrirse con una película que ayuda a mantener la compactación. Dependiendo del sistema, el cabezal puede integrar cuchilla reciprocante, perforador, marcador, cámara o dispositivos de identificación.
        p La configuración debe considerar el tipo de material, la altura, la velocidad, la aceleración, la frecuencia de la cuchilla y el orden de las trayectorias. Un parámetro excesivo puede desplazar materiales livianos, deformar estructuras elásticas o deteriorar las esquinas. Por ello, la automatización requiere relacionar los datos digitales con el comportamiento físico del tendido.
        p La principal ventaja reside en la repetibilidad de la trayectoria y en la integración con los archivos del trazo. También reduce la necesidad de guiar manualmente la cuchilla alrededor de cada pieza. No obstante, demanda inversión, mantenimiento, extracción de aire cuando corresponda, preparación tecnológica y personal con capacidad para configurar y supervisar el sistema.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/15.png', alt='')
    
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4.
        span Comparación de los métodos de corte
      .tabla-a.color-primario
        table
          thead
            tr
              th Método
              th Forma de ejecución
              th Aplicación técnica
              th Limitación principal
          tbody
            tr
              td.fw-bold Manual con tijera
              td La herramienta se acciona y se guía directamente.
              td Se utiliza en muestras, reposiciones, capas individuales y piezas de baja complejidad.
              td Presenta capacidad reducida y mayor dependencia de la destreza manual.
            tr
              td.fw-bold Portátil con cuchilla recta
              td Una cuchilla vertical motorizada atraviesa el tendido mientras el equipo recorre el contorno.
              td Se emplea en piezas grandes y medianas, trayectorias variadas y tendidos de altura compatible.
              td Puede presentar flexión de la cuchilla y desviación en curvas cerradas.
            tr
              td.fw-bold Portátil con cuchilla circular
              td Un disco motorizado corta el material mientras se desplaza sobre la mesa.
              td Resulta adecuado para tendidos bajos, líneas amplias y curvas abiertas.
              td Su geometría dificulta la ejecución de radios pequeños y ángulos interiores.
            tr
              td.fw-bold Fijo con cuchilla banda
              td El bloque de material se conduce alrededor de una hoja continua estacionaria.
              td Se utiliza en piezas pequeñas, contornos precisos y bloques previamente seccionados.
              td Exige trasladar y controlar el bloque cerca del elemento cortante.
            tr
              td.fw-bold Troquelado
              td Una matriz con la forma requerida presiona y separa el material.
              td Se aplica en componentes repetitivos, pequeños y de geometría estable.
              td Requiere un troquel específico y pierde flexibilidad ante cambios de diseño.
            tr
              td.fw-bold Automatizado con control numérico
              td El cabezal reproduce trayectorias definidas por un archivo digital.
              td Se emplea en producción repetitiva, trazos digitales y procesos integrados.
              td Exige inversión, configuración especializada y condiciones técnicas de soporte.
               
      
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Secuencia técnica del corte

    p La secuencia debe planearse de acuerdo con la geometría del trazo, la estabilidad del tendido y la herramienta utilizada. No existe un orden único aplicable a todas las configuraciones. La prioridad consiste en evitar que la separación de una zona reduzca el soporte requerido para cortar las piezas restantes.
    p En términos operativos, la ejecución comprende:

    PasosA.color-secundario.mb-5(tipo="n" data-aos="fade")
      .row.align-items-center
        .col-12.col-lg-10.mb-4.mb-md-0
          h3 Liberar el tendido
          p.mb-0 Confirmar que las capas, el material y el trazo cumplan las condiciones establecidas.
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/16.svg', alt='')
      .row.align-items-center
        .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t3/17.svg', alt='')
        .col-12.col-lg-10
          h3 Estabilizar la superficie
          p Fijar el trazo y el tendido mediante los medios compatibles con el material.
      .row.align-items-center
        .col-12.col-lg-10.mb-4.mb-md-0
          h3 Definir la trayectoria
          p.mb-0 Determinar los puntos de entrada, las zonas de división y el orden de los contornos.
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/18.svg', alt='')
      .row.align-items-center
        .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t3/19.svg', alt='')
        .col-12.col-lg-10
          h3 Separar bloques cuando corresponda
          p Dividir el tendido sin invadir las líneas de las piezas que serán perfiladas posteriormente.
      .row.align-items-center
        .col-12.col-lg-10.mb-4.mb-md-0
          h3 Cortar los contornos
          p.mb-0 Mantener la herramienta sobre la línea y conservar su perpendicularidad respecto de la mesa.
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/20.svg', alt='')
      .row.align-items-center
        .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t3/21.svg', alt='')
        .col-12.col-lg-10
          h3 Ejecutar referencias internas
          p Realizar piquetes, perforaciones u otras marcas con los dispositivos y dimensiones autorizados.
      .row.align-items-center
        .col-12.col-lg-10.mb-4.mb-md-0
          h3 Verificar las piezas
          p.mb-0 Comparar componentes superiores, intermedios e inferiores para detectar desviaciones.
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/22.svg', alt='')
      .row.align-items-center
        .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
          img(src='@/assets/curso/temas/t3/23.svg', alt='')
        .col-12.col-lg-10
          h3 Identificar los grupos
          p Numerar, separar y agrupar las piezas sin perder la relación entre talla, tono, lote y orden.
      .row.align-items-center
        .col-12.col-lg-10.mb-4.mb-md-0
          h3 Registrar el resultado
          p.mb-0 Documentar cantidades, defectos, reposiciones y novedades de la operación.
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/24.svg', alt='')
        
    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Control de trayectoria
      p.mb-0 Una curva cerrada no debe resolverse forzando lateralmente una cuchilla recta. Cuando el radio es incompatible con la herramienta, se requiere modificar el punto de entrada, dividir el bloque o utilizar un equipo con mayor capacidad para reproducir el contorno. 

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Piquetes y perforaciones 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/25.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Los piquetes transfieren referencias ubicadas sobre los bordes de las piezas. Se utilizan para orientar uniones, dobleces, correspondencias y posiciones definidas en la documentación técnica. Deben presentar profundidad y forma controladas: un piquete demasiado superficial puede desaparecer durante la manipulación; uno excesivo puede sobrepasar el margen de costura y debilitar una zona visible.
        p Las perforaciones trasladan puntos interiores mediante taladros, punzones u otros dispositivos. Su aplicación depende del material y de la especificación del producto. En tejidos sensibles, una perforación puede dejar una marca permanente; en otros casos se emplean métodos de señalización que no alteran la estructura de la pieza.
    
    .mb-4(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2.
        span Piquetes y perforaciones en piezas de confección
      figure
        img(src='@/assets/curso/temas/t3/26.svg', alt='Esquema de una pieza de confección con piquetes en los bordes, perforaciones interiores y flecha que indica la dirección del hilo de tela.')
    
    p Las referencias no deben agregarse por criterio individual. Su ubicación y función deben proceder del patrón, del trazo o de la documentación autorizada. La incorporación de marcas innecesarias aumenta el riesgo de daño y puede generar interpretaciones erróneas durante el ensamble.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Herramientas y maquinaria
      
    img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t3/27.png', alt='')

    p.mb-5 La selección de herramientas y maquinaria debe considerar la función específica que cumple cada recurso. Algunas herramientas separan los contornos; otras dividen bloques, ejecutan piquetes, transfieren marcas o estabilizan el material. Su disponibilidad no implica que puedan intercambiarse sin evaluar las consecuencias sobre la precisión y la calidad.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Tijeras y cizallas
    
    .bloque-texto-g.bg-color-3.br-tr.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/28.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 Las tijeras industriales deben presentar hojas alineadas, filo uniforme y dimensiones compatibles con el material. Las tijeras largas facilitan recorridos continuos en piezas amplias; las de menor tamaño permiten intervenir curvas o detalles, aunque disminuyen el avance por movimiento.
          br
          br
          | Una tijera con desgaste obliga a ejercer mayor presión y puede desplazar el material. El filo irregular desgarra las fibras en lugar de producir una separación limpia. Cuando una herramienta presenta holgura en el eje, las hojas dejan de coincidir y dificultan la continuidad del corte.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Máquina de cuchilla recta
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/29.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 La máquina de cuchilla recta está compuesta por una base, un motor, una hoja vertical reciprocante, un afilador y una guarda regulable. La base se desplaza entre la mesa y la capa inferior, mientras la cuchilla atraviesa el tendido.
          br
          br
          | La altura útil de la hoja no equivale automáticamente a la altura máxima recomendable del tendido. Debe conservarse un margen que permita operar la guarda y mantener el control de la cuchilla. Además, la capacidad disminuye cuando el material ofrece mayor resistencia, se comprime de forma desigual o exige curvas cerradas.
    
    p.mb-5 El afilado debe realizarse con la frecuencia necesaria para conservar un corte limpio. Una cuchilla sin filo incrementa la resistencia, favorece la flexión y puede generar bordes deshilachados. El afilado excesivo también reduce la vida útil de la hoja; por ello, la decisión debe basarse en la condición observada y en las recomendaciones del fabricante.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Máquina de cuchilla circular
    
    .bloque-texto-g.bg-color-3.br-tr.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/30.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 La cuchilla circular puede tener hoja redonda o poligonal, según el diseño del equipo. Su base compacta facilita el desplazamiento, pero el disco penetra el tendido siguiendo una trayectoria curva. Cuanto mayor es su diámetro, mayor puede ser la capacidad de altura, aunque se reduce la posibilidad de resolver radios pequeños.
          br
          br
          | Este equipo no debe seleccionarse para un contorno únicamente porque el tendido sea bajo. También es necesario comprobar la geometría de la pieza. Una línea recta larga o una curva abierta puede ejecutarse con estabilidad; una sucesión de entrantes estrechos requiere otra alternativa.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Máquina de cuchilla banda
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/31.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 La cuchilla banda utiliza una hoja continua que circula entre ruedas protegidas. La superficie de trabajo permite deslizar los bloques alrededor de la hoja. La guarda debe ajustarse a una altura próxima al bloque para reducir la porción expuesta sin interferir con el recorrido.
          br
          br
          | La precisión depende de que el bloque se mantenga compacto y perpendicular a la mesa. Los componentes muy pequeños pueden requerir plantillas rígidas o sistemas de sujeción que permitan dirigir el material sin acercar las manos al punto de corte. El equipo no debe operar con guardas retiradas, hojas deterioradas o sistemas de parada inactivos.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Prensas y troqueles
    
    .bloque-texto-g.bg-color-3.br-tr.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/32.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 El troquel presenta un borde cortante con la geometría del componente. Al aplicarse presión, separa simultáneamente una o varias capas. Su repetibilidad resulta favorable para piezas pequeñas y constantes, como refuerzos, apliques o componentes cuya forma se mantiene durante un volumen considerable de producción.
          br
          br
          | La conveniencia depende de la cantidad requerida y de la estabilidad del diseño. Si la pieza cambia con frecuencia, el costo y el tiempo de fabricar nuevos troqueles pueden superar la ventaja obtenida durante el corte. También debe verificarse la compatibilidad entre la presión, la altura del material y la resistencia del borde cortante.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Equipos de corte automatizado
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-tl.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/33.png')})`}"
      )
      .bloque-texto-g__texto.bri-tl.p-4.pt-5.ps-5
        p.mb-0 Los sistemas automatizados pueden incorporar cuchillas reciprocantes, discos, láser, ultrasonido u otras tecnologías. La selección depende del material y de las condiciones del producto. La cuchilla reciprocante se utiliza ampliamente porque produce separación mecánica sin aplicar calor directo; el láser realiza un corte sin contacto, pero puede generar efectos térmicos, emisiones o cambios de borde en determinados materiales.
          br
          br
          | LEl archivo digital debe coincidir con la versión aprobada del trazo. Antes de iniciar la producción se revisan la escala, las unidades, las capas de información, los piquetes y las trayectorias. Un error digital puede reproducirse con exactitud en todo el tendido; por ello, la precisión del equipo no sustituye la validación de los datos.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Herramientas y maquinaria para la ejecución del corte
    
    TabsC.color-primario.mb-5(data-aos="fade")
      .py-3.py-md-4(titulo="Herramientas de corte manual y portátil")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/34.png', alt='')
          .col-11.col-lg-6
            h5.mb-0 Tijera industrial
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] separar materiales en capas individuales o tendidos bajos.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] longitud de hoja, filo y facilidad para seguir el contorno.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] verificar alineación, limpieza, ajuste y condición del filo.
            h5.mb-0 Cuchilla recta
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] cortar tendidos de altura media o alta mediante desplazamiento portátil.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] altura útil, potencia, carrera de la hoja y maniobrabilidad.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] controlar perpendicularidad, afilado, guarda y flexión.
            h5.mb-0 Cuchilla circular
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] cortar tendidos bajos y trayectorias amplias.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] diámetro del disco, altura útil y radio de giro.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] evitar curvas incompatibles y verificar la protección del disco.
      .py-3.py-md-4(titulo="Equipos fijos y de separación")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/35.png', alt='')
          .col-11.col-lg-6
            h5.mb-0 Cuchilla banda
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] perfilar bloques y piezas de geometría compleja.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] altura libre, velocidad de hoja y espacio de maniobra.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] mantener compacto el bloque y ajustar la guarda.
            h5.mb-0 Cortadora de extremos
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] separar transversalmente las capas durante el extendido.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:]  ancho de recorrido y espesor admisible.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] conservar un corte recto sin desplazar las capas.
            h5.mb-0 Prensa troqueladora
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] cortar componentes mediante presión sobre una matriz.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] fuerza, área de trabajo y altura admisible.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerrido:] revisar estado del troquel, posicionamiento y protección del área de presión.
      .py-3.py-md-4(titulo="Equipos para referencias y marcas")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/36.png', alt='')
          .col-11.col-lg-6
            h5.mb-0 Taladro para tela
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] transferir referencias interiores a través del tendido.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] profundidad, diámetro y tipo de aguja o punzón.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] verificar que la marca no afecte una zona visible.
            h5.mb-0 Piqueteadora
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] realizar marcas controladas sobre los bordes.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] forma y profundidad del piquete.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] evitar que la marca sobrepase el margen autorizado.      
      .py-3.py-md-4(titulo="Automatización y sujeción")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/37.png', alt='')
          .col-11.col-lg-6
            h5.mb-0 Sistema automatizado
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] ejecutar trayectorias programadas mediante control numérico.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] área útil, altura, velocidad, aceleración y tecnología de corte.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] validar archivo, parámetros, vacío, secuencia y versión del trazo.
            h5.mb-0 Dispositivo de sujeción
            .ul.lista-ul.fa-lista
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Función principal:] mantener la posición del tendido o de los bloques.
              li.mb-0 
                i.lista-ul__vineta
                span.mb-0 #[b Capacidad técnica determinante:] presión y superficie de contacto.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Control requerido:] evitar marcas, contaminación o deformación del material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Condición de las herramientas
    
    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p La herramienta debe revisarse antes, durante y después de su utilización. Un borde defectuoso no siempre es consecuencia del material; también puede indicar pérdida de filo, acumulación de residuos, vibración, desajuste o selección incorrecta de la cuchilla.
        p El mantenimiento no debe limitarse a responder ante una falla. La limpieza, el cambio de hojas, la revisión de cables, el ajuste de guardas y la comprobación de los mandos deben programarse de acuerdo con el uso y con las indicaciones técnicas del fabricante. Las intervenciones que impliquen acceso a partes móviles requieren detener, aislar y asegurar el equipo según el procedimiento establecido.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/38.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Seguridad durante el corte
    
    .row.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/39.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Las cuchillas rectas, circulares y de banda exponen a peligros mecánicos que requieren guardas, procedimientos, capacitación y condiciones de operación controladas. ISO 12100 establece principios para identificar peligros, valorar riesgos y aplicar medidas de reducción durante el ciclo de vida de la maquinaria. La OIT también señala que el equipo debe ser adecuado para su finalidad, conservar sus protecciones y utilizarse bajo condiciones previamente definidas (ISO, 2010; International Labour Organization, 2013). 
        p Los elementos de protección no corrigen una práctica insegura ni reemplazan las guardas del equipo. La selección debe derivarse de los peligros identificados y de las condiciones reales de operación. Tampoco resulta admisible retirar dispositivos de seguridad para aumentar la velocidad o facilitar el paso de bloques.
    
    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4 Condición de operación
      p.mb-0 Si la guarda impide ejecutar el corte previsto, la respuesta técnica no consiste en retirarla. Debe revisarse la altura del tendido, la geometría del bloque, la configuración del equipo o la selección de otra tecnología.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Defectos asociados con la herramienta y la ejecución
    
    p.mb-4 Durante la ejecución del corte pueden presentarse defectos asociados con las condiciones de las herramientas y su utilización. La siguiente tabla relaciona estas irregularidades con sus manifestaciones y posibles causas técnicas.

    .mb-0(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 5.
        span Defectos del corte y posibles causas técnicas
      .tabla-a.color-primario
        table
          thead
            tr
              th Defecto
              th Manifestación
              th Posibles causas
          tbody
            tr
              td.fw-bold Borde deshilachado
              td Las fibras quedan sueltas o desgarradas sobre el contorno.
              td Puede originarse por pérdida de filo, velocidad inadecuada o incompatibilidad entre cuchilla y material.
            tr
              td.fw-bold Borde ondulado
              td La línea presenta variaciones repetitivas respecto del contorno.
              td Puede relacionarse con vibración, conducción irregular o falta de estabilidad del tendido.
            tr
              td.fw-bold Desviación vertical
              td Las piezas inferiores difieren de las superiores.
              td Puede producirse por flexión de la cuchilla, altura excesiva o presión lateral.
            tr
              td.fw-bold Esquina redondeada
              td Un ángulo definido aparece suavizado o incompleto.
              td Puede deberse al radio de la herramienta o a un cambio de dirección mal ejecutado.
            tr
              td.fw-bold Piquete excesivo
              td La marca supera la profundidad permitida.
              td Puede originarse por regulación incorrecta o intervención repetida.
            tr
              td.fw-bold Piquete insuficiente
              td La referencia no resulta visible o desaparece durante la manipulación.
              td Puede relacionarse con profundidad reducida o posición inexacta.
            tr
              td.fw-bold Perforación desplazada
              td La marca interior no coincide con la referencia del patrón.
              td Puede producirse por inclinación del taladro o desplazamiento de las capas.
            tr
              td.fw-bold Fusión del borde
              td Las capas quedan adheridas o endurecidas.
              td Puede relacionarse con fricción, velocidad, temperatura o tecnología térmica incompatible.
            tr
              td.fw-bold Contaminación
              td El material presenta residuos, aceite o marcas del equipo.
              td Puede originarse por limpieza insuficiente, lubricación excesiva o contacto con superficies contaminadas.
            tr
              td.fw-bold Piezas incompletas
              td Una parte del contorno queda fuera del material o sin cortar.
              td Puede deberse a capas cortas, desalineación, pérdida del trazo o trayectoria incompleta.
    

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Capacidades y criterios de selección
    
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/40.svg', alt='')
      .col-lg-8.ps-lg-0
        .bg-color-2.br-tr.p-4.p-xl-5.h-100
          .row.mb-3
            .col-lg-2
              img.w-80x.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t3/41.svg', alt='')
            .col-lg-10
              p La capacidad de corte expresa cuánto material puede procesarse bajo condiciones definidas. No debe reducirse a la altura máxima anunciada para una máquina, porque el resultado también depende de la longitud del tendido, la complejidad del trazo, el tipo de material, la tecnología utilizada, los tiempos de preparación y la calidad requerida.
          p.mb-0 Una máquina puede atravesar una altura determinada y, aun así, no ser capaz de reproducir con precisión todos los contornos. Por ejemplo, una cuchilla recta puede cortar numerosas capas en una pieza amplia, pero presentar limitaciones frente a radios pequeños. La capacidad útil corresponde a la condición en la cual el equipo mantiene la calidad exigida, no al límite físico en el que todavía logra separar el material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Capacidad por ciclo de corte
    
    .row.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Cuando el trazo contiene una combinación definida de prendas, la cantidad teórica obtenida en un ciclo puede calcularse así:
        h3 Unidades por ciclo = Prendas completas por capa x Número de capas
        p Si un trazo contiene cuatro prendas completas por capa y el tendido está formado por 50 capas:
        h3 4 x 50 = 200 prendas
        p.mb-0 El resultado representa una cantidad teórica. Las unidades realmente liberadas pueden disminuir cuando existen capas incompletas, piezas defectuosas, daños durante el corte o reposiciones pendientes.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/42.png', alt='')
    
    p.mb-4 Cuando el trazo contiene varias tallas, la cantidad debe calcularse por separado:

    .row.mb-4
      .col-lg-6
        .subt-2.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/24.svg', alt='')
          .text.mx-1
            h4.mb-0.ms-2.me-4 Fórmula de aplicación
        h3 Qᵢ = Mᵢ x C
        p Donde:
        ul.lista-ul--color.fa-lista.lista-lana
          li
            span.mb-0
            p.mb-0 Qᵢ corresponde a la cantidad obtenida de la talla i.
          li
            span.mb-0
            p.mb-0 Mᵢ representa la cantidad de prendas de la talla i incluida en el trazo.
          li
            span.mb-0
            p.mb-0 C corresponde al número de capas cortadas.
      .col-lg-6
        h5 Ejemplo de capacidad por talla
        p Un trazo contiene una prenda S, dos M y una L. Si se cortan 40 capas, el resultado teórico será:
        ul.lista-ul--color.fa-lista.lista-lana
          li
            span.mb-0
            p.mb-0 Talla S: 1 x 40 = 40 unidades.
          li
            span.mb-0
            p.mb-0 Talla M: 2 x 40 = 80 unidades.
          li
            span.mb-0
            p.mb-0 Talla L: 1 x 40 = 40 unidades.
        p El ciclo produce 160 prendas distribuidas según la proporción del trazo.
    
    img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/t3/43.png', alt='')

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Capacidad temporal
    
    p La capacidad por turno debe incorporar el tiempo requerido para preparar, cortar, verificar y evacuar los tendidos. Puede expresarse mediante la siguiente relación:
    h3 Capacidad por turno = Ciclos conformes por turno x Unidades obtenidas por ciclo
    p El número de ciclos no debe calcularse únicamente con el tiempo de desplazamiento de la cuchilla. También intervienen:
    h3 Tiempo del ciclo = Alistamiento + Posicionamiento + Corte + Marcación + Verificación + Evacuación
    p Si una jornada dispone de 420 minutos operativos y cada ciclo completo requiere 70 minutos, la capacidad teórica corresponde a seis ciclos:
    h3 420 / 70 = 6 ciclos
    p Si cada ciclo genera 120 prendas:
    h3 6 x 120 = 720 prendas por turno
    p.mb-5 La cifra solo es válida mientras se mantengan la referencia, la altura, la tecnología y las condiciones utilizadas en el cálculo. Un cambio de material o de complejidad puede modificar el tiempo, aunque el número de capas permanezca constante.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Variables de capacidad
    
    .row.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/44.png', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Altura del tendido")
            .col-md-12.mb-4.mb-md-0
              p Define el número de capas procesadas por ciclo, dentro del límite compatible con la precisión.
          .row(numero="2" titulo="Longitud del trazo")
            .col-md-12.mb-4.mb-md-0
              p Modifica el recorrido total y el tiempo requerido para completar el corte.
          .row(numero="3" titulo="Complejidad geométrica")
            .col-md-12.mb-4.mb-md-0
              p Incrementa los cambios de dirección, las entradas y el perfilado de piezas pequeñas.
          .row(numero="4" titulo="Número de piezas")
            .col-md-12.mb-4.mb-md-0
              p Aumenta la cantidad de contornos, piquetes y operaciones de identificación.
          .row(numero="5" titulo="Tipo de material")
            .col-md-12.mb-4.mb-md-0
              p Influye en la resistencia, compresibilidad, estabilidad, fricción y desplazamiento entre capas.
          .row(numero="6" titulo="Tecnología utilizada")
            .col-md-12.mb-4.mb-md-0
              p Determina la velocidad, la maniobrabilidad, el grado de automatización y las restricciones del proceso.
          .row(numero="7" titulo="Estado de la cuchilla")
            .col-md-12.mb-4.mb-md-0
              p Afecta el esfuerzo, la limpieza del borde y la continuidad del recorrido.
          .row(numero="8" titulo="Preparación del tendido")
            .col-md-12.mb-4.mb-md-0
              p Condiciona la estabilidad y la posibilidad de ejecutar el corte sin interrupciones correctivas.
          .row(numero="9" titulo="Experiencia técnica")
            .col-md-12.mb-4.mb-md-0
              p Influye en la conducción del equipo, la anticipación de trayectorias y el control de las piezas.
          .row(numero="10" titulo="Verificación de calidad")
            .col-md-12.mb-4.mb-md-0
              p Incorpora el tiempo necesario para revisar y liberar las piezas obtenidas.
          .row(numero="11" titulo="Cambios de referencia")
            .col-md-12.mb-4.mb-md-0
              p Agregan actividades de configuración, limpieza, preparación documental y ajuste.
          .row(numero="12" titulo="Disponibilidad del equipo")
            .col-md-12.mb-4.mb-md-0
              p Reduce la capacidad cuando existen fallas, mantenimiento o tiempos de espera.
    
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Criterios técnicos de selección
        p.mb-0 La herramienta se selecciona mediante la relación entre geometría, material, tendido, volumen y precisión. Elegir únicamente por velocidad puede incrementar el reproceso y las reposiciones; hacerlo solo por precisión puede generar una capacidad insuficiente para el volumen requerido.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/45.png', alt='')
    
    .row.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/46.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Geometría de las piezas
        p Las piezas grandes, con trayectorias amplias, pueden cortarse mediante cuchilla recta o circular, según la altura. Los componentes pequeños, los entrantes y las curvas cerradas requieren mayor maniobrabilidad. Cuando el bloque puede trasladarse con estabilidad, la cuchilla banda permite perfilar geometrías complejas.
        p.mb-0 Los troqueles resultan adecuados cuando la forma permanece constante y se repite en cantidades suficientes. Para referencias cambiantes, la fabricación de una matriz específica puede no ser técnicamente conveniente.
    
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Altura del tendido
        p La altura determina la longitud de cuchilla necesaria y la posibilidad de conservar perpendicularidad. Los tendidos bajos ofrecen mayor flexibilidad en la selección; los altos requieren equipos con capacidad suficiente y control de desviación.
        p.mb-0 La altura no debe aumentarse para reducir el número de ciclos si esta decisión deteriora la precisión. Una mayor cantidad de capas por corte deja de representar una ventaja cuando genera piezas dimensionalmente distintas o incrementa las reposiciones.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/47.png', alt='')
    
    .row.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/48.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Propiedades del material
        p Los materiales elásticos pueden deformarse por presión o arrastre; los resbaladizos favorecen el desplazamiento entre capas; los sintéticos pueden reaccionar al calor generado por fricción o por tecnologías térmicas. Los recubrimientos, espesores y acabados superficiales también modifican la respuesta frente a la herramienta. La prueba inicial debe comprobar el borde, la estabilidad dimensional y la separación entre capas. Cuando el material cambia, no debe asumirse que los parámetros anteriores continúan siendo válidos.
    
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Volumen y repetitividad
        p Las cantidades reducidas favorecen métodos flexibles con tiempos breves de preparación. En producciones extensas y repetitivas, la automatización o el troquelado pueden distribuir sus tiempos de configuración sobre un mayor número de unidades.
        p.mb-0 El volumen no constituye el único criterio. Una orden grande elaborada con material delicado puede continuar requiriendo velocidades moderadas o tendidos bajos. De forma inversa, una orden pequeña puede justificar un sistema automatizado cuando ya se dispone del archivo y la producción debe cumplir tolerancias estrictas.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/49.png', alt='')
    
    .row.mb-5
      .col-lg-6.d-none.d-lg-block(fade-right)
        img(src='@/assets/curso/temas/t3/50.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .subt.mb-4
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Precisión requerida
        p Los contornos funcionales, las piezas pequeñas y las referencias de ensamble pueden exigir mayor exactitud que los cortes preliminares de separación. La selección debe considerar la tolerancia permitida y el efecto que una desviación tendría sobre las operaciones posteriores.
        p.mb-0 La precisión incluye el contorno horizontal y la verticalidad. No basta con que la capa superior coincida con la línea si las capas inferiores presentan diferencias.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Matriz orientativa para seleccionar la tecnología de corte
    
    TabsC.color-primario.mb-5(data-aos="fade")
      .py-3.py-md-4(titulo="Cantidad y repetitividad")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/51.png', alt='')
          .col-lg-6.col-11
            h5.mb-2 Muestra o pieza única
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: tijera industrial o sistema automatizado de capa única.              
              li
                span.mb-0
                p.mb-0 Justificación técnica: permite procesar cantidades reducidas sin preparar tendidos elevados.
            h5.mb-2 Componentes pequeños de alta repetición
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: troquel y prensa compatible.
              li
                span.mb-0
                p.mb-0 Justificación técnica: proporciona repetibilidad cuando la geometría permanece estable.
            h5.mb-2 Producción digital repetitiva
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: sistema automatizado con control numérico.
              li
                span.mb-0
                p.mb-0 Justificación técnica: reproduce trayectorias programadas y conserva integración con el trazo.
      .py-3.py-md-4(titulo="Altura y geometría")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/52.png', alt='')
          .col-lg-6.col-11
            h5.mb-2 Tendido bajo con contornos amplios
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: cuchilla circular o recta de capacidad compatible.
              li
                span.mb-0
                p.mb-0 Justificación técnica: facilita recorridos continuos sin exigir una altura elevada.
            h5.mb-2 Tendido medio o alto con piezas grandes
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: cuchilla recta.
              li
                span.mb-0
                p.mb-0 Justificación técnica: ofrece capacidad vertical y movilidad alrededor del tendido.
            h5.mb-2 Piezas pequeñas y curvas complejas
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: cuchilla banda sobre bloques estabilizados.
              li
                span.mb-0
                p.mb-0 Justificación técnica: facilita el perfilado controlado de contornos de menor dimensión.
      .py-3.py-md-4(titulo="Propiedades del material")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/53.png', alt='')
          .col-lg-6.col-11
            h5.mb-2 Material elástico
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: equipo con estabilización y parámetros ajustables.
              li
                span.mb-0
                p.mb-0 Justificación técnica: reduce la deformación provocada por arrastre, presión o aceleración.
            h5.mb-2 Material sintético sensible al calor
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: corte mecánico o tecnología previamente validada.
              li
                span.mb-0
                p.mb-0 Justificación técnica: evita seleccionar un sistema térmico sin comprobar el comportamiento del borde.
            h5.mb-2 Material resbaladizo
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: tendido bajo, sujeción controlada y herramienta de trayectoria estable.
              li
                span.mb-0
                p.mb-0 Justificación técnica: disminuye el desplazamiento entre capas durante el corte.
      .py-3.py-md-4(titulo="Flexibilidad del diseño")
        .row.align-items-center.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/54.png', alt='')
          .col-lg-6.col-11
            h5.mb-2 Diseño con cambios frecuentes
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 Tecnología compatible: tecnología flexible sin herramienta específica permanente.
              li
                span.mb-0
                p.mb-0 Justificación técnica: evita depender de troqueles que pierden vigencia con cada modificación.
            h5.mb-2 Validación de la selección
            ul.lista-ul--color.fa-lista.lista-lana
              li.mb-0
                span.mb-0
                p.mb-0 La selección se valida mediante una prueba inicial ejecutada con las condiciones previstas de producción. La revisión debe incluir piezas superiores, intermedias e inferiores, debido a que las desviaciones verticales pueden no aparecer en la primera capa.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Criterios para validar una prueba de corte   

    .row.bgcompl-2.align-items-center.p-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          SlyderF(columnas="col-md-6 col-xl-4")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/55.svg' alt='')
              .tarjeta.bg-color-2
                .p-4                  
                  h4.text-center 1. Correspondencia del contorno
                  p.text-center Las piezas deben conservar la geometría del patrón dentro de la tolerancia establecida.        
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/56.svg' alt='')
              .tarjeta.bg-color-2
                .p-4 
                  h4.text-center 2. Uniformidad entre capas
                  p.text-center Las piezas superiores, intermedias e inferiores deben mantener dimensiones equivalentes.        
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/57.svg' alt='')
              .tarjeta.bg-color-2
                .p-4 
                  h4.text-center 3. Calidad del borde
                  p.text-center El material no debe presentar desgarro, fusión, contaminación o deshilachado superior al criterio autorizado.  
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/58.svg' alt='')
              .tarjeta.bg-color-2
                .p-4
                  h4.text-center 4. Precisión de piquetes
                  p.text-center Las marcas deben coincidir con la posición y profundidad definidas.
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/59.svg' alt='')
              .tarjeta.bg-color-2
                .p-4
                  h4.text-center 5. Precisión de perforaciones
                  p.text-center Las referencias interiores deben conservar ubicación, diámetro y profundidad autorizados.
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/60.svg' alt='')
              .tarjeta.bg-color-2
                .p-4 
                  h4.text-center 6. Integridad del material
                  p.text-center Las piezas no deben presentar estiramiento, desplazamiento, compresión permanente o daño superficial. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/61.svg' alt='')
              .tarjeta.bg-color-2
                .p-4  
                  h4.text-center 7. Cantidad
                  p.text-center El resultado debe corresponder con las capas y la proporción establecidas.  
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/62.svg' alt='')
              .tarjeta.bg-color-2
                .p-4 
                  h4.text-center 8. Identificación
                  p.text-center Las piezas deben conservar la relación con talla, lote, tono, referencia y orden. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/63.svg' alt='')
              .tarjeta.bg-color-2
                .p-4
                  h4.text-center 9. Seguridad operativa
                  p.text-center La ejecución debe realizarse con guardas, controles y procedimientos funcionales. 
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/64.svg' alt='')
              .tarjeta.bg-color-2
                .p-4 
                  h4.text-center 10. Tiempo del ciclo
                  p.text-center El registro debe incluir todas las actividades necesarias para obtener y liberar el corte.           
      
    .cajon.color-acento-contenido.bg-color-4.p-4(data-aos="fade")
      h4.mb-2 Decisión de capacidad
      p.mb-0 La máquina seleccionada debe procesar el volumen requerido dentro del tiempo disponible y mantener simultáneamente la precisión, la calidad del borde, la uniformidad entre capas y las condiciones de operación segura. Si alguno de estos requisitos se incumple, la capacidad declarada no representa una capacidad técnicamente aprovechable.
    
    

      
  
    
    





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
