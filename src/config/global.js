export default {
  global: {
    Name: 'Planeación técnica del proceso de corte',
    Description: 'El presente componente desarrolla la planeación y ejecución técnica del corte de materiales para confección mediante el análisis del trazo, los métodos de extendido, la preparación de capas, la selección de maquinaria, la capacidad operativa y los controles de calidad y seguridad. Incluye criterios para conservar la precisión, el aprovechamiento del material, la trazabilidad y la conformidad de las piezas cortadas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Planeación del trazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Métodos manuales y digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Selección según prenda, material y proceso',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación y extendido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Métodos de extendido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Preparación de capas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Maquinaria y equipos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejecución del corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Corte manual y asistido',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas y maquinaria',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Capacidades y criterios de selección',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Condiciones de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alistamiento del área y los equipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Calidad y seguridad en el corte',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Trazo',
      significado: 'Distribución de las piezas que integran una prenda sobre un área equivalente al ancho útil del material, con el propósito de obtener una configuración técnicamente viable para el corte, compatible con las cantidades requeridas y con el menor desperdicio posible.'
    },
    {
      termino: 'Extendido',
      significado: 'Método de disposición de las capas de tela sobre la mesa de corte, cuyo sentido (cara arriba, cara con cara, escalonado o de sentido único) condiciona la orientación y cantidad de piezas obtenidas en el trazo.'
    },
    {
      termino: 'Corte',
      significado: 'Proceso de separación de las piezas de tela según el trazo aprobado, que puede ejecutarse de forma manual, asistida o automatizada, garantizando la precisión dimensional y la conformidad de los componentes.'
    },
    {
      termino: 'Prenda',
      significado: 'Producto de vestuario conformado por un conjunto de piezas patrón previamente validadas, cuya geometría, orientación y materiales deben conservarse durante la planeación del trazo y el corte.'
    },
    {
      termino: 'Manufactura',
      significado: 'Conjunto de operaciones técnicas y buenas prácticas aplicadas en la transformación de materiales textiles en piezas conformes, incluyendo la preparación del área, el manejo de equipos y la prevención de peligros asociados.'
    },
    {
      termino: 'Línea de hilo',
      significado: 'Referencia que relaciona el patrón con la estructura del material, determinando la orientación de la pieza respecto a la urdimbre o dirección principal del tejido.'
    },
    {
      termino: 'Sentido del material',
      significado: 'Direccionalidad determinada por pelo, brillo, estampado o motivo superficial, que restringe los giros autorizados de las piezas para evitar diferencias de apariencia en la prenda terminada.'
    },
    {
      termino: 'Ancho útil',
      significado: 'Medida realmente aprovechable del material, sin incluir orillos defectuosos ni zonas restringidas, que establece el límite transversal dentro del cual deben ubicarse las piezas del trazo.'
    },
    {
      termino: 'Capas',
      significado: 'Número de extensiones de tela superpuestas en el tendido, cuya altura y composición se relacionan con la cantidad de unidades obtenidas por corte.'
    },
    {
      termino: 'Eficiencia del trazo',
      significado: 'Proporción del área del trazo ocupada por las piezas, calculada como (área total de las piezas / área total del trazo) × 100, utilizada para comparar alternativas bajo iguales condiciones técnicas.'
    },
    {
      termino: 'Empate',
      significado: 'Correspondencia visual requerida entre determinadas piezas (centros delanteros, costados, bolsillos, solapas o mangas) para conservar la continuidad de rayas, cuadros o motivos en la prenda terminada.'
    },
    {
      termino: 'Trazabilidad',
      significado: 'Capacidad de registrar y conservar los datos necesarios (referencia, versión, parámetros, fechas y resultados) para evitar que una configuración no aprobada llegue al proceso de corte.'
    },
    {
      termino: 'CAD/CAM',
      significado: 'Integración de sistemas de diseño asistido por computador (CAD) y manufactura asistida por computador (CAM), que permite organizar trazos digitales y transferir la información hacia equipos de ploteo o corte automatizado.'
    },
    {
      termino: 'Buenas prácticas de manufactura',
      significado: 'Conjunto de criterios de calidad y seguridad aplicados en el corte, que comprenden la preparación del área, la revisión de máquinas y herramientas, el manejo de documentos vigentes y la prevención de peligros asociados con cuchillas, partes móviles e instalaciones eléctricas.'
    },
    {
      termino: 'Piquetes',
      significado: 'Marcas o perforaciones de referencia incluidas en el trazo que permiten reproducir los contornos y puntos de ensamble establecidos para las piezas durante el corte.'
    }
  ],
  referencias: [
    {
      cita: 'Aus et al., 2021',
      referencia: 'Aus, R., Moora, H., Vihma, M., Unt, R., Kiisler, M., & Kapur, K. (2021). Designing for circular fashion: A systematic literature review on the strategies for extending garment life. Journal of Cleaner Production, 293, 126148.'
    },
    {
      cita: 'Beazley & Bond, 2003',
      referencia: 'Beazley, A., & Bond, T. (2003). Computer-aided pattern design and product development. Blackwell Publishing.'
    },
    {
      cita: 'Enes & Kipöz, 2020',
      referencia: 'Enes, E., & Kipöz, Ş. (2020). The role of zero waste patternmaking in sustainable fashion design. En Sustainable Fashion and Textiles (pp. 1–20). Springer.'
    },
    {
      cita: 'International Labour Organization, 2013',
      referencia: 'International Labour Organization. (2013). Safety and health in the textiles and clothing industry. ILO.'
    },
    {
      cita: 'International Organization for Standardization [ISO], 2010, 2018, 2026',
      referencia: 'International Organization for Standardization. (2010). ISO 9001:2015 Quality management systems — Requirements. ISO. / International Organization for Standardization. (2018). ISO 45001:2018 Occupational health and safety management systems — Requirements with guidance for use. ISO. / International Organization for Standardization. (2026). ISO 9001:2026 Quality management systems — Requirements. ISO.'
    },
    {
      cita: 'Vilumsone-Nemes, 2015',
      referencia: 'Vilumsone-Nemes, I. (2015). Industrial cutting of textile materials. Woodhead Publishing.'
    },
    {
      cita: 'Wong & Leung, 2009',
      referencia: 'Wong, W. K., & Leung, S. Y. S. (2009). Automatic garment pattern design and marker making. Textile Progress, 41(3), 1–86.'
    }
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón ',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
