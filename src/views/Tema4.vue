<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Condiciones de operación
    
    .bloque-texto-g.bg-color-8.br-tr.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.bri.p-4
        p.mb-0 Las condiciones de operación reúnen los requisitos físicos, técnicos, documentales y preventivos necesarios para ejecutar el corte de forma controlada. Comprenden la preparación del área, el estado de las máquinas, la disponibilidad de herramientas, la identificación de los materiales, el cumplimiento de los procedimientos y la verificación de los riesgos asociados con cada tecnología.
    
    p La conformidad de las piezas no depende exclusivamente de la trayectoria de la cuchilla. Una mesa desnivelada, una iluminación insuficiente, una superficie contaminada, un equipo sin mantenimiento o un tendido identificado incorrectamente pueden afectar el resultado, aunque el corte se realice sobre la línea prevista. Por esta razón, el área debe liberarse antes de comenzar y conservarse bajo control durante toda la operación.
    p Las condiciones también deben permitir responder ante fallas, piezas no conformes, interrupciones y situaciones de emergencia. ISO 9001:2026 establece un marco para controlar los procesos, los recursos, la información documentada y las salidas no conformes, mientras que ISO 45001:2018 orienta la identificación de peligros y la gestión de los riesgos laborales. Ambos enfoques convergen en la necesidad de planear, ejecutar, verificar y mejorar las operaciones (International Organization for Standardization [ISO], 2018, 2026). 

    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Condición de inicio
      p.mb-0 Ninguna orden debe ingresar a corte mientras existan inconsistencias entre el material, el trazo, el tendido, la documentación o la configuración del equipo. La liberación previa evita que una desviación se reproduzca en todas las capas.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Alistamiento del área y los equipos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El alistamiento prepara el espacio y los recursos antes de ejecutar la orden. Su propósito consiste en asegurar que la mesa, la maquinaria, las herramientas, los servicios técnicos y la documentación sean compatibles con el material y con el método de corte seleccionado.
        p La revisión debe efectuarse antes de instalar o movilizar el tendido. Si el área contiene residuos de una orden anterior, herramientas no identificadas o documentos desactualizados, existe riesgo de contaminación, mezcla de referencias o empleo de parámetros incorrectos. La preparación debe incluir, por tanto, una liberación física y documental.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Preparación del área

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-color-6.p-4.mb-3
          p.mb-0 El área de corte debe mantener espacios definidos para tendidos pendientes, órdenes liberadas, piezas procesadas, materiales retenidos, residuos y herramientas. La delimitación reduce desplazamientos innecesarios y evita que productos de referencias diferentes ocupen la misma zona sin identificación.
        p La mesa debe estar limpia, estable y libre de irregularidades. Las uniones entre módulos no pueden formar desniveles que interfieran con la base de las máquinas portátiles o alteren la superficie del tendido. También debe comprobarse que sus dimensiones y capacidad de carga sean suficientes para la orden programada. La iluminación debe permitir observar líneas de corte, piquetes, defectos y diferencias del material. No basta con disponer de luz general; las sombras, reflejos o contrastes deficientes pueden dificultar el seguimiento del contorno. Cuando la operación genera partículas, vapores o residuos, se requieren los medios de ventilación, extracción y limpieza definidos para la tecnología empleada.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
    
    p Las vías de circulación y las salidas deben permanecer despejadas. Los cables, extensiones y equipos auxiliares no deben atravesar recorridos sin protección, porque pueden generar tropiezos, desconexiones o daños. Las condiciones locativas forman parte del control operativo y no deben revisarse únicamente después de un incidente.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Condiciones para liberar el área de corte

    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t4/4.jpg', alt='')

      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
        .h5.mb-2 Orden y limpieza
        p #[b Condición requerida:] la superficie debe permanecer libre de residuos, líquidos, objetos y materiales ajenos a la orden.
        p.mb-0 #[b Consecuencia de una condición deficiente:] puede generar contaminación, obstrucciones o pérdida de identificación.

      .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="2")
        .h5.mb-2 Estado de la mesa
        p #[b Condición requerida:] la estructura debe conservar estabilidad, nivelación y continuidad superficial.
        p.mb-0 #[b Consecuencia de una condición deficiente:] puede afectar el desplazamiento del equipo y la estabilidad del tendido.

      .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="3")
        .h5.mb-2 iluminación
        p #[b Condición requerida:] debe permitir observar contornos, marcas, defectos y referencias sin interferencias.
        p.mb-0 #[b Consecuencia de una condición deficiente:] incrementa el riesgo de desviación, omisión o interpretación incorrecta.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="4")
        .h5.mb-2 Circulación
        p #[b Condición requerida:] los pasillos y accesos deben permanecer despejados.
        p.mb-0 #[b Consecuencia de una condición deficiente:] dificulta la evacuación y aumenta la posibilidad de golpes o tropiezos.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="5")
        .h5.mb-2 Instalación eléctrica
        p #[b Condición requerida:] las conexiones deben corresponder con la carga, el equipo y las condiciones del área.
        p.mb-0 #[b Consecuencia de una condición deficiente:] puede producir interrupciones, recalentamiento, descarga o daño del equipo.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="6")
        .h5.mb-2 Ventilación o extracción
        p #[b Condición requerida:] debe responder a los residuos o emisiones generados por la tecnología utilizada.
        p.mb-0 #[b Consecuencia de una condición deficiente:] favorece la acumulación de partículas, vapores o calor.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="7")
        .h5.mb-2 Delimitación
        p #[b Condición requerida:] las órdenes liberadas, retenidas y terminadas deben ocupar zonas diferenciadas.
        p.mb-0 #[b Consecuencia de una condición deficiente:] facilita mezclas entre referencias, lotes, tallas o estados de calidad.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="8")
        .h5.mb-2 Gestión de residuos
        p #[b Condición requerida:] los recipientes deben estar identificados y ubicados sin interferir con la operación.
        p.mb-0 #[b Consecuencia de una condición deficiente:] genera acumulación, contaminación o clasificación incorrecta de sobrantes.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="9")
        .h5.mb-2 Señalización
        p #[b Condición requerida:] los peligros, restricciones y rutas deben encontrarse identificados.
        p.mb-0 #[b Consecuencia de una condición deficiente:] reduce la capacidad para reconocer condiciones y actuar oportunamente.
      
      .tarjeta.color-acento-botones.p-3(x="60%" y="60%" numero="10")
        .h5.mb-2 Medios de emergencia
        p #[b Condición requerida:] los dispositivos previstos deben permanecer accesibles y en condición operativa.
        p.mb-0 #[b Consecuencia de una condición deficiente:] retrasa la respuesta ante una situación no controlada.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Liberación de la orden anterior
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/5.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Antes de instalar un nuevo tendido se deben retirar los materiales, trazos, etiquetas, paquetes y registros correspondientes a la orden anterior. Esta actividad evita que una pieza residual se incorpore a otro lote o que se utilice por error una versión documental que ya no se encuentra vigente.
        p La liberación también comprende la conciliación de las cantidades procesadas. Las piezas conformes, las reposiciones, el material sobrante y los residuos deben quedar registrados y ubicados en su estado correspondiente. Cuando se detecta una diferencia, no resulta adecuado iniciar otra orden sin determinar el destino de los elementos pendientes.
    
    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Cambio de referencia
      p.mb-0 Cambiar de referencia no consiste únicamente en reemplazar el tendido. También exige retirar la información anterior, verificar herramientas, ajustar parámetros, limpiar superficies y confirmar que la nueva documentación corresponde con el producto programado. 
    
    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        .avatar
          figure
            img(src='@/assets/curso/temas/t4/6.svg', alt='').img250
          
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/t4/7.svg', alt='').img100
            .col
              h5 Fase operatAlistamiento de los equiposiva
              p El alistamiento de la máquina comienza con una inspección visual y funcional. Deben revisarse la cuchilla, la guarda, la base, los mandos, las conexiones, el sistema de afilado y los elementos de sujeción. En equipos automáticos se agregan la mesa, el sistema de vacío, el cabezal, los sensores, el archivo digital y los parámetros del programa.
              p El estado de la cuchilla tiene efecto directo sobre el borde y la precisión. Una hoja deteriorada incrementa la resistencia, puede desviarse y obliga a ejercer mayor presión durante la conducción. El reemplazo o afilado debe efectuarse de acuerdo con la condición observada y con las indicaciones del fabricante, sin esperar a que el defecto se reproduzca en una cantidad significativa de piezas.
              p Los mandos de inicio, parada y emergencia deben permanecer identificados y accesibles. Las guardas se ajustan a la altura de trabajo sin retirarlas ni anularlas. ISO 12100 establece que la reducción del riesgo debe considerar el diseño seguro, las medidas de protección y la información para el uso; los equipos no pueden depender exclusivamente de la atención de quien los opera (ISO, 2010).
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/temas/t4/8.svg', alt='').img100
            .col
              h5 Prueba inicial
              p La configuración debe verificarse mediante una prueba antes de procesar la totalidad del tendido. Esta comprobación permite revisar la estabilidad del material, la limpieza del borde, la maniobrabilidad de la herramienta y la correspondencia con el contorno.
              p En sistemas automatizados, la prueba también confirma escala, unidades, posición del origen, sentido del archivo, profundidad, velocidad y funcionamiento de los dispositivos complementarios. Una trayectoria digital incorrecta puede reproducirse de manera consistente en todas las capas; la precisión mecánica no corrige un dato equivocado.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Lista técnica para el alistamiento de equipos

    TabsC.color-primario
      .py-3.py-md-4(titulo="Estado físico del equipo")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t4/9.png', alt='')
          .col-md-7
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | Identificación del equipo
                p Debe coincidir con el recurso asignado a la orden y con su registro de mantenimiento.
              li 
                i.fas.fa-brain
                | Cuchilla o elemento cortante
                p Debe presentar montaje correcto, filo suficiente y compatibilidad con el material.
              li 
                i.fas.fa-brain
                | Guarda
                p Debe permanecer instalada, regulada y funcional.
              li 
                i.fas.fa-brain
                | Base y superficie de desplazamiento
                p Deben encontrarse limpias, estables y sin deformaciones.

      .py-3.py-md-4(titulo="Funcionamiento y seguridad")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t4/10.png', alt='')
          .col-md-7
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | Mandos
                p Deben responder correctamente al inicio, parada y detención de emergencia.
              li 
                i.fas.fa-brain
                | Alimentación eléctrica
                p Debe presentar conexiones íntegras y compatibles con el equipo.
              li 
                i.fas.fa-brain
                | Sistema de afilado
                p Debe funcionar sin generar interferencias ni residuos sobre el material.
              li 
                i.fas.fa-brain
                | Dispositivos de sujeción
                p Deben conservar el tendido sin marcarlo ni deformarlo.
      
      .py-3.py-md-4(titulo="Configuración y prueba")
        .row
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t4/11.png', alt='')
          .col-md-7
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | Sensores y controles
                p Deben responder a las funciones configuradas en los equipos que los incorporan.
              li 
                i.fas.fa-brain
                | Parámetros
                p Deben coincidir con el material, la altura y la geometría de la orden.
              li 
                i.fas.fa-brain
                | Archivo digital
                p Debe corresponder con la versión aprobada del trazo y con las unidades utilizadas.
              li 
                i.fas.fa-brain
                | Prueba inicial
                p Debe demostrar precisión, limpieza del borde y estabilidad antes de liberar el proceso.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Registro del alistamiento
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/12.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-2.br-tr.p-4.pt-5.h-100
          img.w-80x.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/t4/13.svg', alt='')
          p La revisión debe dejar evidencia cuando el procedimiento de la organización así lo establezca. El registro puede incluir fecha, turno, orden, equipo, cuchilla, parámetros, resultado de la prueba y novedades encontradas. Su finalidad no consiste en acumular formatos, sino en demostrar que las condiciones críticas fueron verificadas.
          p.mb-0 Cuando se detecta una anomalía, el equipo debe identificarse para impedir su utilización hasta que se evalúe y se autorice nuevamente. Una observación verbal no garantiza que otra persona reconozca la restricción; la condición requiere señalización y trazabilidad.
    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Buenas prácticas de manufactura
    
    .row.mb-4.bg-color-4
      .col-lg-7
        p En la confección, las buenas prácticas de manufactura pueden entenderse como el conjunto de procedimientos destinados a conservar el orden, la limpieza, la identificación, la trazabilidad, la uniformidad operativa y el control de los productos durante su transformación. No corresponden a la regulación sanitaria específica de sectores como el farmacéutico o el alimentario; se aplican como principios de organización y control adaptados al proceso productivo de prendas.
        p Estas prácticas permiten disminuir la variabilidad introducida por documentos incorrectos, materiales mezclados, herramientas deterioradas, residuos acumulados o decisiones no registradas. Su aplicación debe guardar proporción con el riesgo y la complejidad de cada operación.
      .col-lg-5
        img(src='@/assets/curso/temas/t4/14.svg', alt='')
    
    .row.mb-4
      .col-lg-3
        img(src='@/assets/curso/temas/t4/15.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Control documental")
            p La información utilizada debe corresponder con la versión vigente. La orden de corte, el trazo, la ficha técnica, el mapa de defectos y las instrucciones de identificación deben presentar datos coherentes. Cuando se sustituye un documento, la versión anterior debe retirarse de los puntos de uso para impedir su aplicación involuntaria.
            p Las modificaciones requieren autorización y trazabilidad. Cambiar la cantidad de capas, la ubicación de un empalme, la profundidad de un piquete o la versión del archivo sin registrar la decisión impide reconstruir las condiciones bajo las cuales se obtuvo el producto.
            p ISO 9001:2026 orienta el control de los procesos y de la información documentada para asegurar que las operaciones se ejecuten de manera consistente y que las salidas cumplan los requisitos establecidos (ISO, 2026). 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación y trazabilidad")
            p Las piezas deben conservar la relación con la orden, la referencia, la talla, el color, el lote y el tono. Esta identificación puede mantenerse mediante tiquetes, etiquetas, códigos, numeración o registros digitales, siempre que el método no dañe el material ni se pierda durante la transferencia.
            p La trazabilidad no se limita a conocer de qué rollo procede el tejido. También debe permitir establecer en qué tendido se cortó, cuál trazo se utilizó, qué cantidad de capas se procesó y qué novedades se presentaron. Cuando aparece una diferencia de tono o una desviación dimensional, esta información facilita delimitar el material afectado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Limpieza y control de contaminación")
            p La limpieza debe efectuarse con métodos compatibles con los materiales y los equipos. Los residuos textiles, el polvo, los lubricantes y las partículas metálicas pueden adherirse a las piezas o interferir con los mecanismos. No resulta adecuado utilizar aire comprimido sin evaluar si dispersa contaminantes hacia otras superficies o personas.
            p Los aceites y productos de mantenimiento deben permanecer identificados y separados del material. Después de intervenir una máquina se verifica que no existan excedentes, herramientas o paños sobre la mesa. El equipo solo puede retornar a operación cuando su condición haya sido comprobada.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Segregación de estados")
            p Las piezas conformes, retenidas, no conformes y pendientes de verificación deben permanecer separadas. La segregación puede ser física, visual o digital, pero debe impedir que una salida no liberada continúe hacia numeración, paqueteo o ensamble.
            p Los sobrantes aprovechables tampoco deben mezclarse con el desperdicio. Su clasificación permite determinar si pueden utilizarse para reposiciones, pruebas o aplicaciones autorizadas. Cuando un remanente conserva valor productivo, debe identificarse con la información necesaria para su recuperación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Herramientas y objetos personales")
            p Las herramientas deben ocupar posiciones definidas y revisarse al finalizar la orden. La pérdida de una cuchilla, aguja, tornillo u otro elemento metálico exige detener la liberación hasta verificar que no se encuentre entre las capas o las piezas.
            p Los objetos personales no deben permanecer sobre las mesas ni mezclarse con el producto. Esta restricción evita contaminación, daño del material y pérdida de elementos dentro de los paquetes.
    
    .mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 6.
        span Buenas prácticas aplicables al proceso de corte
      .tabla-a.color-primario
        table
          thead
            tr
              th Práctica
              th Aplicación operativa
              th Resultado esperado
          tbody
            tr
              th Utilización de documentos vigentes
              td Verificar código, versión y autorización antes de iniciar la orden.
              td Evita ejecutar el corte con información reemplazada o contradictoria.
            tr
              th Identificación del material
              td Mantener lote, tono, rollo y referencia durante todo el recorrido.
              td Permite rastrear el origen de las piezas y delimitar posibles desviaciones.
            tr
              th Separación de órdenes
              td Evitar que materiales y piezas de referencias diferentes compartan una zona sin control.
              td Reduce mezclas de tallas, colores, lotes o estados.
            tr
              th Limpieza programada
              td Retirar residuos y revisar superficies antes, durante y después de la operación.
              td Disminuye contaminación e interferencias con equipos o materiales.
            tr
              th Control de herramientas
              td Registrar, ubicar y verificar los elementos utilizados.
              td Reduce pérdidas y presencia de objetos extraños entre las piezas.
            tr
              th Mantenimiento planificado
              td Ejecutar inspecciones y actividades según las condiciones del equipo.
              td Favorece estabilidad, disponibilidad y calidad de corte.
            tr
              th Prueba de configuración
              td Validar material, herramienta y parámetros antes del corte completo.
              td Evita reproducir una condición incorrecta en todo el tendido.
            tr
              th Segregación de producto
              td Separar piezas conformes, retenidas, no conformes y pendientes.
              td Impide la liberación involuntaria de componentes sin verificar.
            tr
              th Gestión de sobrantes
              td Clasificar material aprovechable, reposiciones y desperdicio.
              td Conserva el valor de los remanentes y mejora el balance de materiales.
            tr
              th Registro de novedades
              td Documentar fallas, interrupciones, defectos y decisiones autorizadas.
              td Permite analizar las condiciones reales de ejecución.
            tr
              th Cierre de la orden
              td Conciliar cantidades, retirar documentos y liberar el área.
              td Evita pendientes ocultos y mezclas durante el cambio de referencia.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Prácticas antes, durante y después del corte
    
    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center.align-items-center(titulo="Paso 1")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/16.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p #[b Antes del corte,] corresponde verificar la documentación, liberar el área, revisar el equipo, confirmar el material y aprobar la prueba inicial. Ninguna discrepancia debe resolverse mediante suposiciones; cuando la información no coincide, se detiene el proceso hasta obtener una definición autorizada.    

        .row.justify-content-center.align-items-center(titulo="Paso 2")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/17.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p #[b Durante el corte,] se conserva la identificación, se controla la estabilidad del tendido y se revisa periódicamente la calidad del borde. Las capas superiores no constituyen la única referencia. Deben extraerse muestras intermedias e inferiores cuando el procedimiento o el nivel de riesgo lo requieran.

        .row.justify-content-center.align-items-center(titulo="Paso 3")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/18.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p #[b Después del corte,] se concilian las cantidades, se separan los estados de calidad, se registran las reposiciones y se retiran los residuos. La mesa y los equipos quedan preparados para la siguiente orden, sin documentos ni piezas pendientes.

    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Práctica no admisible
      p.mb-0 Una pieza defectuosa no debe reincorporarse al paquete para completar la cantidad registrada. Debe identificarse, segregarse y gestionarse como producto no conforme o como reposición, de acuerdo con el procedimiento establecido.      

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Manejo del producto no conforme
    
    .row.mb-4
      .col-lg-4
        img(src='@/assets/curso/temas/t4/19.png', alt='')
      .col-lg-8
        p Una pieza se considera no conforme cuando incumple un requisito dimensional, geométrico, superficial, cuantitativo o de identificación. Su tratamiento comienza con la contención: debe separarse para evitar que avance mientras se determina su disposición.
        p La decisión puede incluir reposición, reclasificación autorizada, reproceso cuando resulte técnicamente viable o rechazo. No todas las piezas pueden corregirse; agregar material, profundizar piquetes o recortar un contorno ya reducido suele ser imposible. La disposición debe sustentarse en el efecto que la desviación produce sobre el producto final.
        p.mb-0 La reposición debe mantener material, lote, tono, orientación y versión del patrón. Cuando no se dispone del mismo rollo, se requiere evaluar la compatibilidad antes de cortar una pieza sustituta.
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Calidad y seguridad en el corte
    
    p La calidad y la seguridad deben controlarse de manera simultánea. Aumentar la velocidad sin conservar las guardas o reducir la inspección para cumplir una cantidad no representa una mejora productiva. Del mismo modo, una operación segura que genera piezas fuera de tolerancia requiere ajustes antes de continuar.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Control de calidad
    
    p El control debe efectuarse en tres momentos: recepción del tendido, ejecución del corte y liberación de las piezas. Cada etapa responde a riesgos distintos. Antes del corte se revisan materiales y documentación; durante la operación se controla la trayectoria y el comportamiento del equipo; después se verifican dimensiones, bordes, marcas, cantidades e identificación.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Puntos de control de calidad en el corte
    
    .tarjeta.tarjeta--gris.p-4
      PasosB.color-primario
        .row(titulo="")
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t4/20.png', alt='')
          .col-md-7.mb-4.mb-md-0
            h3 Antes del corte
            h4 Correspondencia documental
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] la orden, el trazo, el material y el tendido deben pertenecer a la misma referencia y versión.
            h4 Número de capas
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] la cantidad debe coincidir con el programa y con el rendimiento previsto.
            h4 Orientación del tendido
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] las caras y direcciones deben corresponder con las restricciones del material.
            h4 Condición del equipo
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] la cuchilla, la guarda, los mandos y los dispositivos deben estar disponibles y funcionales.

        .row(titulo="")
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t4/21.png', alt='')
          .col-md-7.mb-4.mb-md-0
            h3 Durante el corte
            h4 Seguimiento del contorno
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] la trayectoria debe mantenerse sobre la línea y dentro de la tolerancia establecida.
            h4 Perpendicularidad
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] la herramienta debe conservar uniformidad entre las capas superiores e inferiores.
            h4 Calidad del borde
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] no deben presentarse desgarros, fusión, contaminación o deformación no autorizada. Piquetes y perforaciones
            h4 Piquetes y perforaciones
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] las marcas deben conservar posición, forma y profundidad definidas.

        .row(titulo="")
          .col-md-5
            figure
              img(src='@/assets/curso/temas/t4/22.png', alt='')
          .col-md-7.mb-4.mb-md-0
            h3 Después del corte
            h4 Dimensiones
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] las piezas deben coincidir con el patrón y con las tolerancias aplicables.
            h4 Uniformidad entre capas
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] las muestras superiores, intermedias e inferiores deben mantener correspondencia.
            h4 Cantidad
            ul.lista-ul--color
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] el número de piezas debe coincidir con las capas y con la composición del trazo. Identificación
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] cada grupo debe conservar talla, lote, tono, referencia y orden. 
              li 
                i.fas.fa-brain
                | #[b Criterio de verificación:] las piezas complementarias deben encontrarse completas y correctamente agrupadas.                      
          
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Verificación dimensional
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        .bg-color-6.p-4.mb-3
          p.mb-0 La comprobación debe utilizar instrumentos adecuados y patrones de referencia aprobados. No es suficiente superponer únicamente la primera pieza sobre el patrón, porque una desviación vertical puede aumentar hacia las capas inferiores.
        p El muestreo debe incluir posiciones representativas del tendido. Cuando se detecta una diferencia progresiva entre capas, se revisan la altura, la cuchilla, la presión lateral y la estabilidad del material. Si la desviación aparece en todas las capas por igual, también debe examinarse la escala del trazo o la trayectoria utilizada.
        p Las tolerancias no deben establecerse de manera general para todas las piezas. Su valor procede de la ficha técnica, del patrón, del sistema de calidad o de los requisitos acordados. Cuando la documentación no define una tolerancia, esta no debe inventarse durante la inspección.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/23.png', alt='')
    
    .row.mb-4.bg-color-9
      .col-lg-4
        img(src='@/assets/curso/temas/t4/24.svg', alt='')
      .col-lg-8
        .subt.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3 Calidad del borde
        p Un borde conforme presenta continuidad y conserva la estructura del material dentro de las condiciones aceptadas. El deshilachado, la fusión, las muescas involuntarias, la contaminación o el endurecimiento pueden afectar operaciones posteriores.
        p La inspección debe considerar el efecto funcional de la desviación. Un daño situado dentro del margen de costura no siempre resulta aceptable, pues puede debilitar la unión o propagarse durante la manipulación. La decisión requiere valorar la ubicación, la profundidad y el comportamiento del material.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Seguridad en la operación
    
    .row.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t4/25.png', alt='')
      .col-lg-7
        .row.mb-3
          .col-lg-2
            img(src='@/assets/curso/temas/t4/26.svg', alt='')
          .col-lg-10
            p El control de riesgos comienza con la identificación de los peligros asociados con el equipo y la tarea. Las cuchillas, partes móviles, conexiones eléctricas, manipulación de tendidos, movimientos repetitivos, ruido, polvo y posibles emisiones requieren medidas proporcionales a la exposición.
        p El Decreto 1072 de 2015 establece la gestión de los peligros y riesgos dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo. Por su parte, la Resolución 0312 de 2019 define estándares mínimos aplicables al sistema, incluidos aspectos de capacitación, identificación de peligros, mantenimiento y verificación de condiciones de trabajo (Presidencia de la República de Colombia, 2015; Ministerio del Trabajo, 2019). 
    
    p Las medidas deben seguir una jerarquía. Primero se busca eliminar el peligro cuando sea posible; después se aplican controles de ingeniería, medidas administrativas y, como complemento, elementos de protección personal. Depender exclusivamente del comportamiento individual o de un elemento de protección deja sin controlar la fuente del riesgo (ISO, 2018; International Labour Organization, 2013).

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Peligros y medidas de control en el área de corte
    
    .row.mb-4
      .col-lg-6
        img(src='@/assets/curso/temas/t4/27.png', alt='')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Contacto con cuchillas")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] conducción, ajuste, limpieza, cambio o afilado del elemento cortante.
              p.text-small #[b Medidas de control:] mantener guardas, aplicar procedimientos, aislar el equipo y utilizar los elementos definidos según la evaluación.
          .row(numero="2" titulo="Movimiento de partes mecánicas")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] acceso a correas, ruedas, cabezales o mecanismos durante la operación.
              p.text-small #[b Medidas de control:] conservar protecciones, impedir intervenciones en movimiento y verificar sistemas de parada.
          .row(numero="3" titulo="Energía eléctrica")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] cables deteriorados, conexiones inadecuadas, humedad o mantenimiento sin aislamiento.
              p.text-small #[b Medidas de control:] inspeccionar conexiones, retirar equipos defectuosos y aplicar el procedimiento de desconexión correspondiente.
          .row(numero="4" titulo="Manipulación de rollos y tendidos")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] levantamiento, empuje, arrastre o traslado de cargas voluminosas.
              p.text-small #[b Medidas de control:] utilizar ayudas mecánicas, planear recorridos y evitar cargas superiores a la capacidad definida.
          .row(numero="5" titulo="Movimiento repetitivo")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] conducción continua de equipos, sujeción y manipulación de piezas.
              p.text-small #[b Medidas de control:] organizar métodos, ajustar alturas, distribuir tareas y establecer pausas según la evaluación ergonómica.
          .row(numero="6" titulo="Posturas forzadas")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] alcances sobre mesas extensas, inclinación o desplazamiento prolongado.
              p.text-small #[b Medidas de control:] ajustar la disposición, emplear medios auxiliares y evitar alcances fuera de la zona de trabajo.
    
    .row.mb-4
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="7" titulo="Ruido y vibración")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] operación continua de máquinas portátiles, cuchillas banda o sistemas automáticos.
              p.text-small #[b Medidas de control:] evaluar la exposición, mantener equipos y aplicar controles técnicos y personales cuando correspondan.
          .row(numero="8" titulo="Polvo y fibras")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] acumulación o dispersión de residuos textiles durante el corte y la limpieza.
              p.text-small #[b Medidas de control:] implementar limpieza controlada, ventilación o extracción y evitar métodos que dispersen partículas.
          .row(numero="9" titulo="Emisiones térmicas")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] utilización de láser u otra tecnología que modifique térmicamente el material.
              p.text-small #[b MMedidas de control:] incorporar extracción, confinamiento y parámetros compatibles con la tecnología.
          .row(numero="10" titulo="Incendio")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] acumulación de residuos combustibles, fallas eléctricas o fuentes de calor.
              p.text-small #[b Medidas de control:] controlar residuos, conservar instalaciones y mantener accesibles los medios de respuesta definidos.
          .row(numero="11" titulo="Caídas al mismo nivel")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] cables, residuos, herramientas o materiales ubicados en zonas de circulación.
              p.text-small #[b Medidas de control:] mantener orden, canalizar conexiones y despejar pasillos.
          .row(numero="12" titulo="Proyección de fragmentos")
            .col-md-12.mb-4.mb-md-0
              p.text-small #[b Situación de exposición:] rotura de cuchillas, piezas o elementos del equipo.
              p.text-small #[b Medidas de control:] inspeccionar componentes, utilizar guardas y retirar equipos con vibraciones o daños.
      .col-lg-6
        img(src='@/assets/curso/temas/t4/28.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Parada y aislamiento del equipo
    
    p Cuando se presenta vibración anormal, pérdida de control, rotura de cuchilla, olor a recalentamiento, daño eléctrico o falla de una guarda, la máquina debe detenerse. No se debe continuar hasta agotar el tendido ni intentar compensar la anomalía mediante mayor fuerza o menor velocidad.
    p La detención ordinaria no siempre elimina todas las fuentes de energía. Para limpieza interna, cambio de elementos, desatasco o mantenimiento, se aplica el procedimiento de aislamiento definido por la organización y por el fabricante. Solo después de comprobar la condición segura puede iniciarse la intervención.
    p Para profundizar en la importancia de detener oportunamente los equipos de corte y aplicar los procedimientos de aislamiento establecidos, escuche el siguiente pódcast, en el que se abordan situaciones prácticas relacionadas con la seguridad durante la operación.

    .bg-color-3.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t4/29.png', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones.mb-3(
          texto="<b>Pódcast:</b> "
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.mb-0.px-lg-4 #[b ¿Seguir cortando o detenerse? Una decisión que protege]

    .cajon.color-acento-contenido.bg-color-4.p-4.mb-5(data-aos="fade")
      h4.mb-2 Criterio de detención
      p.mb-0 Un equipo debe retirarse de servicio cuando su condición pueda afectar la seguridad, la precisión o la integridad del material. La presión por cumplir una cantidad no justifica operar con guardas, mandos o elementos cortantes defectuosos.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/30.svg', alt='')          
            h2.text-center Elementos de protección personal
            p Los elementos de protección se seleccionan según los peligros identificados, la tecnología y la tarea. No existe una combinación universal aplicable a todos los equipos. El uso de guantes resistentes al corte, protección ocular, calzado u otros elementos debe sustentarse en la evaluación correspondiente y en las instrucciones del equipo.
            p En máquinas con partes móviles, cualquier elemento utilizado debe ser compatible con el riesgo de atrapamiento. La selección no puede efectuarse de forma aislada; requiere considerar las características del equipo, las protecciones instaladas y el método de trabajo.
          
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/t4/31.svg', alt='')          
            h2.text-center Elementos de protección personal
            p.text-white Una desviación de calidad y un incidente de seguridad requieren registros diferenciados, aunque puedan compartir una causa. Una cuchilla deteriorada puede generar bordes defectuosos y, al mismo tiempo, aumentar el esfuerzo y la exposición al peligro. El análisis debe considerar ambas consecuencias.
            p.text-white Cuando se identifica una pieza no conforme, se contiene el producto y se delimita la cantidad afectada. Si ocurre un incidente o una condición peligrosa, se protege el área, se detiene el equipo y se activa el procedimiento correspondiente. La reanudación solo procede después de verificar que la causa inmediata ha sido controlada.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3 Criterios para liberar el corte terminado
    
    .tarjeta.bg-fondo-2.p-4.mb-4(data-aos='fade')
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.col-11
            h3 Documentación y cantidades
            h4.mb-0 Correspondencia documental
            p.mb-0 La orden, el trazo y los registros deben presentar identificación y versión coherentes.
            h4.mb-0 Cantidad
            p.mb-0 Las piezas obtenidas, rechazadas y pendientes de reposición deben encontrarse conciliadas.
            h4.mb-0 Registro de novedades
            p.mb-0 Las desviaciones, reposiciones, interrupciones y decisiones deben quedar documentadas.
            h4.mb-0 Autorización de salida
            p.mb-0 La entrega al proceso siguiente debe realizarse después de completar la verificación.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/32.png', alt='')
        
        .row.justify-content-center
          .col-lg-5.col-11
            h3 Calidad e identificación de las piezas
            h4.mb-0 Dimensiones
            p.mb-0 Las verificaciones deben demostrar cumplimiento de las tolerancias establecidas.
            h4.mb-0 Bordes
            p.mb-0 Las piezas deben presentar una separación limpia y compatible con el material.
            h4.mb-0 Marcas
            p.mb-0 Los piquetes y las perforaciones deben mantener posición y profundidad autorizadas.
            h4.mb-0 Uniformidad
            p.mb-0 Las capas superiores, intermedias e inferiores deben conservar correspondencia.
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/33.png', alt='')
        
        .row.justify-content-center
          .col-lg-5.col-11
            h3 Producto, materiales y equipos
            h4.mb-0 Identificación
            p.mb-0 Los paquetes deben relacionarse con talla, lote, tono, referencia y orden.
            h4.mb-0 Producto no conforme
            p.mb-0 Las piezas retenidas deben permanecer separadas e identificadas.
            h4.mb-0 Sobrantes y residuos
            p.mb-0 Los materiales aprovechables y los desperdicios deben encontrarse clasificados.
            h4.mb-0 Condición del equipo
            p.mb-0 Las fallas detectadas deben registrarse y gestionarse antes de una nueva utilización. 
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/34.png', alt='')

    p La liberación concluye cuando las piezas cumplen los requisitos, las cantidades están conciliadas y los paquetes conservan su identificación. El traslado hacia el proceso siguiente debe realizarse mediante medios que impidan deformación, mezcla o pérdida de componentes. Una orden físicamente terminada no puede considerarse cerrada mientras existan reposiciones, piezas retenidas o diferencias sin registrar.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
