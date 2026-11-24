<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Planeación del trazo
      
      .bloque-texto-g.bg-color-3.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.bri.p-4
          p.mb-0 La planeación del trazo establece la distribución de las piezas que integran una prenda sobre un área equivalente al ancho útil del material. Su propósito consiste en obtener una configuración técnicamente viable para el corte, compatible con las cantidades requeridas y con el menor desperdicio posible. Esta labor parte de patrones aprobados; por consiguiente, no modifica su geometría, sus márgenes de costura ni sus referencias de ensamble.
      
      p Antes de disponer las piezas deben verificarse la referencia de la prenda, el rango de tallas, la proporción solicitada, el número de unidades, las características superficiales del material y las condiciones previstas para el extendido y el corte. La omisión de cualquiera de estos datos puede originar faltantes, piezas orientadas incorrectamente, incompatibilidad con el ancho disponible o consumos superiores a los calculados.
      p El trazo constituye, por tanto, una decisión técnica articulada con la orden de producción. Su resultado debe permitir identificar qué piezas se cortarán, cuántas veces aparecerá cada una, a qué talla pertenecen, cuál será su orientación y qué longitud de material demandará la configuración. En la industria de la confección, la eficiencia del trazo incide directamente en el aprovechamiento de la tela y en la generación de residuos durante el corte (Enes & Kipöz, 2020; Vilumsone-Nemes, 2015).
      
      .cajon.color-acento-contenido.bg-color-4.p-4.mb-4
        h4 Criterio técnico
        p.mb-0 El trazo organiza patrones previamente validados. No corresponde utilizarlo para corregir medidas, alterar contornos o compensar errores de patronaje. Cuando se detecta una inconsistencia dimensional o una pieza faltante, la documentación debe devolverse para su revisión antes de continuar con la planeación.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Información de entrada para planear el trazo
      
      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
        .row.justify-content-center(titulo="Referencia de la prenda")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] confirmar que los patrones correspondan al modelo indicado en la orden de producción.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] evita mezclar piezas pertenecientes a diseños o versiones diferentes.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/2.png', alt='')
        .row.justify-content-center(titulo="Tallas y proporción")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] determinar las tallas, cantidades y combinaciones requeridas.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] define el número de juegos que deben incorporarse y la relación entre tallas.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.png', alt='')
        .row.justify-content-center(titulo="Ancho útil del material")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] medir el ancho realmente aprovechable, sin incluir orillos defectuosos o zonas restringidas.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] establece el límite transversal dentro del cual deben ubicarse las piezas.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/4.png', alt='')
        .row.justify-content-center(titulo="Sentido del material")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] verificar dirección de hilo, pelo, brillo, estampado o comportamiento superficial.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] determina si las piezas admiten giro o requieren orientación única.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/5.png', alt='')
        .row.justify-content-center(titulo="Características del diseño")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] identificar asimetrías, piezas pares, cortes, empates y elementos visibles.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] condiciona la posición y la relación entre las piezas.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/6.png', alt='')
        .row.justify-content-center(titulo="Cantidad de capas")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] revisar la altura y composición previstas para el tendido.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] permite relacionar la cantidad trazada con las unidades obtenidas por corte.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/7.png', alt='')
        .row.justify-content-center(titulo="Tecnología disponible")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] confirmar si el trazo, el ploteo y el corte serán manuales, digitalizados o automatizados.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] determina el formato, la precisión y la forma de transferir la configuración.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/8.png', alt='')
        .row.justify-content-center(titulo="Restricciones del material")
          .col-11.col-lg-6
            .ul.lista-ul.fa-lista
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Verificación técnica:] registrar defectos, variaciones de tono, encogimiento previsto y zonas no utilizables.
              li 
                i.lista-ul__vineta
                span.mb-0 #[b Incidencia en el trazo:] reduce el riesgo de incorporar áreas que comprometan la conformidad del producto.
          .col-md-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/9.png', alt='')

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1  Métodos manuales y digitales
      
      img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t1/10.png', alt='')
      
      p La planeación del trazo puede realizarse mediante métodos manuales o digitales, según las características de la producción y los recursos disponibles. Ambos procedimientos permiten organizar las piezas patrón y requieren verificar las condiciones técnicas del material antes de aprobar su distribución.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Método manual
      
      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-right")
          .bg-color-6.p-4.mb-3
            p.mb-0 El trazo manual se realiza mediante la disposición física de las piezas patrón sobre papel, cartón, tela de prueba o una superficie que reproduzca el ancho útil del material. La ubicación puede efectuarse a escala para evaluar alternativas preliminares o a tamaño real cuando se requiere generar directamente la guía de corte. En ambos casos deben mantenerse la identificación de las piezas, la línea de hilo, el sentido autorizado y la cantidad correspondiente a cada talla.
          p La construcción comienza con la delimitación del ancho útil. Después se ubican las piezas de mayor área o de geometría más restrictiva, debido a que estas condicionan los espacios disponibles. Las piezas pequeñas se incorporan progresivamente en las áreas residuales, siempre que la distancia entre contornos permita efectuar el corte sin deteriorar los bordes. La proximidad entre piezas mejora el aprovechamiento, pero no debe impedir la maniobrabilidad del equipo ni eliminar separaciones exigidas por el método de corte.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/11.png', alt='')
      
      p La orientación tampoco puede decidirse únicamente por el espacio libre. Una pieza que se acomoda con facilidad después de girarla puede quedar atravesada con respecto a la dirección del hilo, invertida frente al diseño superficial o desarticulada de su pieza complementaria. La posición final debe responder simultáneamente a la geometría del patrón y al comportamiento del material.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/12.png', alt='')
        .col-lg-7
          p Cuando existen delanteros, mangas, bolsillos u otros elementos asimétricos, la disposición debe considerar el derecho y el revés de la tela, así como la forma prevista de extendido. Un tendido cara arriba exige que el trazo contenga las versiones derecha e izquierda requeridas. En cambio, un tendido cara con cara puede permitir que una misma geometría produzca piezas opuestas, siempre que la orden de corte y las condiciones del material autoricen esa configuración.
          p El método manual ofrece control directo sobre la ubicación, resulta aplicable en producciones reducidas y puede emplearse cuando no se dispone de infraestructura digital. No obstante, demanda tiempo, espacio físico y especial cuidado en la reproducción de contornos. También dificulta comparar numerosas combinaciones de tallas o conservar versiones sucesivas con el mismo grado de trazabilidad que proporciona un sistema informático.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Método digital
      
      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-right")
          .bg-color-6.p-4.mb-3
            p.mb-0 El trazo digital utiliza aplicaciones CAD para organizar las piezas dentro de un área definida por el ancho y la longitud disponible. Los patrones pueden proceder de una construcción digital o de una digitalización previa, pero deben encontrarse depurados, identificados y aprobados antes de ingresar al proceso de ubicación. Los sistemas especializados permiten registrar referencia, talla, cantidad, sentido de giro, restricciones de orientación y tolerancias entre piezas (Beazley & Bond, 2003).
          p La disposición puede realizarse de manera interactiva o automática. En la modalidad interactiva, la persona responsable desplaza y gira las piezas dentro del área de trabajo, mientras el sistema controla las restricciones configuradas y calcula los cambios en el aprovechamiento. En la modalidad automática, el programa ejecuta múltiples intentos de anidamiento mediante algoritmos de optimización. El resultado automático debe revisarse, porque una eficiencia numérica favorable no garantiza por sí sola la viabilidad del corte ni el cumplimiento de las condiciones particulares del material (Wong & Leung, 2009). 
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/13.png', alt='')
      
      p Los sistemas digitales facilitan la comparación entre combinaciones de tallas, anchos de tela y restricciones de colocación. También permiten almacenar versiones, recuperar trazos aprobados, generar reportes de consumo y transferir la información hacia equipos de ploteo o corte automatizado. La integración CAD/CAM reduce operaciones de transcripción; sin embargo, su confiabilidad depende de la calidad de los datos ingresados y de la correcta configuración de las reglas técnicas.
      p Una restricción asignada de manera incorrecta puede producir un trazo digitalmente válido, pero inaplicable en producción. Si una tela con pelo se configura como bidireccional, por ejemplo, el programa podría girar algunas piezas 180° para llenar espacios. La cifra de aprovechamiento aumentaría, aunque las diferencias de reflexión o tono afectarían la apariencia de la prenda terminada.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Comparación técnica de los métodos de trazo
      .tabla-a.color-primario
        table
          thead
            tr
              th Criterio
              th Método manual
              th Método digital
          tbody
            tr
              td Medio de trabajo
              td Emplea patrones físicos y una superficie que representa el ancho del material.
              td Utiliza patrones digitalizados o creados en un sistema CAD.
            tr
              td Ubicación de piezas
              td Depende de la manipulación directa y de la experiencia técnica de quien realiza el trazo.
              td Puede ejecutarse de manera interactiva, automática o mediante una combinación de ambas.
            tr
              td Control dimensional
              td Requiere instrumentos de medición y comprobaciones periódicas sobre el trazado.
              td Mantiene las dimensiones almacenadas en los archivos, siempre que los patrones estén correctamente configurados.
            tr
              td Comparación de alternativas
              td Exige reconstruir total o parcialmente cada configuración.
              td Permite ensayar diferentes anchos, proporciones y restricciones sin modificar los patrones originales.
            tr
              td Cálculo de aprovechamiento
              td Puede efectuarse mediante medición de áreas o estimaciones posteriores.
              td Se calcula de forma inmediata con base en las áreas registradas por el sistema.
            tr
              td Trazabilidad
              td Depende de la identificación física, el archivo de planos y los registros manuales.
              td Facilita almacenar versiones, parámetros, fechas y resultados asociados con cada trazo.
            tr
              td Aplicación productiva
              td Resulta funcional para muestras, contingencias, referencias sencillas o volúmenes reducidos.
              td Resulta conveniente para producciones repetitivas, múltiples tallas y análisis comparativos.
            tr
              td Limitación principal
              td Presenta mayor dependencia del tiempo disponible, la destreza y el espacio físico.
              td Requiere infraestructura tecnológica, datos confiables y validación técnica del resultado.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Secuencia técnica de planeación

      p Tanto el método manual como el digital deben conservar una secuencia verificable:

      PasosA.color-secundario.mb-5(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Confirmar la orden de producción
            p Revisar referencia, color, tallas, cantidades y fecha programada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/14.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/15.svg', alt='')
          .col-md-6
            h3 Validar el juego de patrones
            p Comprobar nomenclatura, talla, cantidad por prenda, piezas pares y restricciones de orientación.
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Definir el ancho útil
            p Utilizar la medida realmente disponible para el corte, descontando orillos o zonas que no puedan formar parte de las piezas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/16.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/17.svg', alt='')
          .col-md-6
            h3 Establecer la proporción de tallas
            p Determinar cuántas unidades de cada talla deben incorporarse en el trazo y relacionarlas con el número de capas proyectado.
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Configurar las restricciones
            p Registrar el sentido del material, los giros permitidos, los empates de diseño y las separaciones necesarias para el corte.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/19.svg', alt='')
          .col-md-6
            h3 Distribuir las piezas
            p Ubicar primero las geometrías más condicionantes y aprovechar los espacios residuales con piezas menores.
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Calcular el resultado
            p Determinar la longitud, el área ocupada, la eficiencia alcanzada y el consumo previsto.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/20.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t1/21.svg', alt='')
          .col-md-6
            h3 Verificar la configuración
            p Confirmar que no existan piezas superpuestas, faltantes, duplicadas u orientadas de forma incorrecta.
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Identificar y liberar el trazo
            p Registrar los datos necesarios para evitar que una versión no aprobada llegue al proceso de corte.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/22.svg', alt='')
     
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Eficiencia del trazo
      
      p La eficiencia expresa la proporción del área del trazo que está ocupada por las piezas. Puede calcularse mediante la siguiente relación:

      .row.justify-content-center.mb-5
        .col-lg-8
          img(src='@/assets/curso/temas/t1/23.svg', alt='')
      
      p El área total del trazo se obtiene multiplicando el ancho utilizado por la longitud de la configuración. El espacio no ocupado corresponde al residuo interno generado entre las piezas. Este indicador permite comparar alternativas elaboradas con iguales condiciones técnicas; no debe emplearse para validar configuraciones que incumplen el sentido del hilo, la orientación del material o las cantidades establecidas. La literatura especializada reconoce que la eficiencia está condicionada, entre otros factores, por la geometría de las piezas, el ancho disponible, la combinación de tallas y las características superficiales de la tela (Aus et al., 2021). 
      
      .subt-2.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/24.svg', alt='')
        .text.mx-1
          h4.mb-0.ms-2.me-4 Ejemplo de cálculo
      
      p Un trazo presenta 1,60 m de ancho y 6,00 m de longitud. Su superficie total equivale a 9,60 m². Si la suma del área de las piezas es de 8,16 m², la eficiencia obtenida es:

      .row.justify-content-center.mb-5
        .col-lg-8
          img(src='@/assets/curso/temas/t1/25.svg', alt='')
      
      p El 15 % restante representa el espacio interno no ocupado. Antes de aprobar el resultado debe comprobarse que la configuración incluya todas las piezas y respete las restricciones del material.
      p La mayor eficiencia porcentual no siempre representa el menor consumo por unidad. Dos trazos pueden arrojar valores similares, aunque presentar longitudes y cantidades de prendas diferentes. La evaluación debe relacionar eficiencia, longitud, proporción de tallas y número de unidades obtenidas. También conviene diferenciar el residuo interno del trazo de otras pérdidas producidas en el tendido, como los extremos de capa, los empalmes, los defectos evitados y los remanentes de rollo.

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2  Selección según prenda, material y proceso
      
      img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t1/26.png', alt='')

      p La elección entre trazo manual, interactivo o automático depende de las condiciones reales de producción. No existe un método universalmente adecuado: una configuración eficiente para una camiseta básica en tejido uniforme puede ser inviable para una chaqueta con cuadros, piezas asimétricas y exigencias de concordancia visual. La decisión debe integrar las características de la prenda, las propiedades del material y la tecnología prevista para transformar el trazo en piezas cortadas.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Selección según la prenda

      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-right")
          .bg-color-6.p-4.mb-3
            p.mb-0 La complejidad del producto se relaciona con el número de piezas, su forma, el rango de tallas y la existencia de elementos que deban coincidir visualmente. Las referencias con piezas grandes y regulares ofrecen menos alternativas de anidamiento, mientras que las piezas pequeñas permiten ocupar espacios residuales. No obstante, una cantidad elevada de componentes incrementa la posibilidad de omisiones y exige controles de identificación más rigurosos.
          p Las prendas simétricas requieren comprobar la correspondencia entre los lados derecho e izquierdo. En diseños asimétricos, cada pieza debe conservar su orientación específica; por ello, no resulta admisible voltear indiscriminadamente los patrones para aumentar la eficiencia. También deben tratarse con especial cuidado los bolsillos, tapas, cuellos, vistas, canesús y demás elementos cuya posición influya en la continuidad de rayas, cuadros o motivos.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/27.png', alt='')
      
      p La combinación de tallas modifica el comportamiento del trazo. Un marcador compuesto por una sola talla puede dejar espacios difíciles de ocupar; al incorporar tallas diferentes, las piezas pequeñas pueden ajustarse entre las de mayor dimensión. Sin embargo, la mezcla debe responder a la proporción de la orden y a la cantidad que realmente producirá el tendido. Una configuración eficiente carece de utilidad si genera excedentes en una talla y faltantes en otra.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Selección según el material
      
      .row.justify-content-center.mb-4
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          img(src='@/assets/curso/temas/t1/28.png', alt='')
        .col-lg-8(data-aos="fade-left")
          .bg-color-6.p-4.mb-3
            p.mb-0 El ancho constituye una condición básica de planeación, pero debe trabajarse con el valor útil y no únicamente con el ancho nominal declarado por el proveedor. Los orillos deformados, las variaciones laterales, los defectos o las zonas reservadas pueden reducir la superficie disponible. Si el ancho del trazo supera la medida útil, algunas piezas quedarían parcial o totalmente fuera del material aprovechable.
          p La superficie textil determina, además, los giros autorizados. En telas lisas y sin dirección visual puede admitirse la rotación de determinadas piezas, siempre que se respete la línea de hilo establecida. En materiales con pelo, brillo direccional, estampados orientados o variaciones perceptibles según el sentido, las piezas deben mantener una misma dirección. Esta restricción reduce las posibilidades de encaje y puede disminuir la eficiencia, pero evita diferencias de apariencia en la prenda terminada.

      p Los cuadros, las rayas y los motivos repetitivos exigen reservar posiciones para garantizar la correspondencia entre determinadas piezas. El empate puede requerirse en centros delanteros, costados, bolsillos, solapas o mangas, según la especificación del producto. En tales condiciones, la prioridad técnica no consiste en llenar cada espacio disponible, sino en conservar la continuidad visual definida para la referencia.
      p En tejido de punto deben considerarse la estabilidad dimensional, la elasticidad, la torsión, el estado abierto o tubular y la posible deformación producida durante la manipulación. Si el material presenta encogimiento previsto, cualquier compensación debe estar incorporada y aprobada en los patrones; no debe aplicarse mediante deformaciones improvisadas durante el trazo.

      .cajon.color-acento-contenido.bg-color-4.p-4.mb-4
        h4 Diferencia necesaria
        p.mb-0 El sentido de la pieza no equivale al sentido del diseño superficial. La línea de hilo relaciona el patrón con la estructura del material; la direccionalidad, en cambio, puede estar determinada por pelo, brillo, estampado o motivo. Ambas condiciones deben comprobarse antes de autorizar un giro.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Selección según el proceso
      
      .row.justify-content-center.mb-4
        .col-lg-8(data-aos="fade-right")
          .bg-color-6.p-4.mb-3
            p.mb-0 El volumen de producción influye en el nivel de automatización conveniente. Para una muestra, una reposición aislada o una referencia de baja repetición, el método manual puede resultar suficiente si asegura precisión y registro. Cuando existen numerosos estilos, combinaciones de tallas o cambios frecuentes de ancho, el sistema digital facilita la evaluación de alternativas y la conservación de configuraciones aprobadas.
          p La forma de extendido condiciona el contenido del trazo. Los tendidos cara arriba, cara con cara, escalonados o de sentido único no producen las mismas relaciones entre piezas derechas e izquierdas. Por esta razón, la planeación debe efectuarse con conocimiento de la disposición prevista para las capas. Cambiar el método de extendido después de aprobar el trazo puede modificar la cantidad y orientación de las piezas obtenidas.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          img(src='@/assets/curso/temas/t1/29.png', alt='')
      
      p También debe considerarse el sistema de corte. En un corte manual con máquina vertical o circular se necesita espacio suficiente para conducir el elemento cortante alrededor de los contornos. En sistemas automatizados, las separaciones, los puntos de entrada y la secuencia de corte pueden configurarse mediante parámetros específicos. La proximidad admisible entre piezas dependerá, por tanto, de la precisión del equipo, el tipo de material y los requisitos de seguridad del proceso.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Criterios para seleccionar el método de trazo
      
      .row.mb-4
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-5")
            .row.justify-content-center(titulo="Muestra o producción de pocas unidades")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo manual o digital interactivo.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] permite responder a cantidades reducidas sin requerir una programación extensa.
            .row.justify-content-center(titulo="Orden con varias tallas y proporciones complejas")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo digital interactivo o automático.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] facilita comparar combinaciones y controlar la cantidad asignada a cada talla.
            .row.justify-content-center(titulo="Prenda con piezas asimétricas")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo manual controlado o digital con restricciones de volteo.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] conserva la orientación correspondiente a cada lado de la prenda.
            .row.justify-content-center(titulo="Material liso y sin dirección superficial")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo manual o digital con giros técnicamente autorizados.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] ofrece mayor libertad de ubicación dentro de los límites de la línea de hilo.
            .row.justify-content-center(titulo="Material con pelo, brillo o estampado direccional")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo de sentido único.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] evita diferencias visuales entre piezas pertenecientes a una misma prenda.
            .row.justify-content-center(titulo="Tela de rayas o cuadros")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo controlado con puntos de correspondencia.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] mantiene la continuidad del diseño en las uniones especificadas.
            .row.justify-content-center(titulo="Producción repetitiva de alto volumen")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo digital con registro de versiones y salida compatible con el corte.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] favorece la repetibilidad, la trazabilidad y la comparación de consumos.
            .row.justify-content-center(titulo="Corte manual")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo con separaciones compatibles con el desplazamiento del equipo.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] reduce el riesgo de invadir los contornos de piezas adyacentes.
            .row.justify-content-center(titulo="Corte automatizado")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo digital configurado según los parámetros del equipo.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] permite transferir geometrías y condiciones de corte con menor transcripción de datos.
            .row.justify-content-center(titulo="Material con defectos localizados")
              .col-11.col-lg-12
                .ul.lista-ul.fa-lista
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Método técnicamente conveniente:] trazo ajustado al mapa de defectos o a las zonas restringidas.
                  li 
                    i.lista-ul__vineta
                    span.mb-0 #[b Justificación:] impide que áreas no conformes queden incorporadas en piezas visibles o funcionales.
        .col-lg-4
          img(src='@/assets/curso/temas/t1/30.png', alt='')
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3 Aplicación técnica de la selección
      
      img.d-none.d-lg-block.mb-4(src='@/assets/curso/temas/t1/31.png', alt='')

      p #[b Caso 1. Camiseta básica en tejido de punto liso.] La referencia contiene pocas piezas, el material no presenta un diseño superficial direccional y la orden incluye varias tallas. Puede emplearse un trazo digital multitalla, con control de la línea de hilo y del ancho útil. La combinación de tallas facilita ocupar espacios entre cuerpos, mangas y complementos, sin alterar la proporción solicitada.
      p #[b Caso 2. Camisa en tela de cuadros.] Aunque un sistema automático produzca una distribución compacta, la aprobación depende del empate visual en delanteros, bolsillos, canesúes y demás zonas especificadas. Las piezas pueden requerir posiciones fijas con respecto al módulo del cuadro; en consecuencia, la eficiencia esperada será menor que la de un material liso.
      p #[b Caso 3. Chaqueta en material con pelo.] Todas las piezas visibles deben conservar una dirección uniforme. El trazo se configura en un solo sentido y se bloquean los giros de 180°. La restricción aumenta la longitud, pero previene cambios aparentes de tono cuando la luz incide sobre la superficie.
      p #[b Caso 4. Reposición de pocas unidades.] Si se requieren dos prendas de una talla específica y no existe un trazo digital disponible, puede elaborarse una configuración manual a tamaño real. La decisión exige validar el juego de patrones, identificar cada pieza y registrar el consumo resultante para conservar la trazabilidad de la reposición.

      .cajon.color-acento-contenido.bg-color-4.p-4.mb-4
        h4 Control previo a la liberación
        p.mb-0 Un trazo se considera técnicamente conforme cuando contiene todas las piezas requeridas, respeta la proporción de tallas, permanece dentro del ancho útil, conserva las orientaciones autorizadas y puede ejecutarse con la tecnología de extendido y corte prevista. La eficiencia se evalúa después de comprobar estas condiciones, no antes.
      


      

      






  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
