<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7.ps-lg-0
        .bg-color-2.br-tr.p-4.pt-5.h-100
          img.w-80x.d-none.d-lg-block.mb-3(src='@/assets/curso/temas/intro/2.svg', alt='')
          p.mb-0 La planeación técnica del proceso de corte articula la información del producto, las características del material, la configuración del trazo, la preparación del tendido y la selección de la tecnología requerida para obtener piezas conformes. Cada decisión debe responder a la orden de producción y a las restricciones relacionadas con talla, cantidad, lote, tono, orientación, ancho útil y comportamiento del tejido. La correspondencia entre estas variables permite controlar el consumo y conservar la integridad dimensional de los componentes que posteriormente ingresan al ensamble (Vilumsone-Nemes, 2015).
    
    p El proceso comienza con la definición del trazo y continúa con la preparación de los rollos, la selección del método de extendido, el cálculo de las capas y la configuración de los equipos. La ejecución exige mantener la alineación, la tensión y la estabilidad del tendido, así como reproducir los contornos, piquetes y perforaciones establecidos. La capacidad de corte depende de la altura procesable, la geometría de las piezas, las propiedades del material, la tecnología disponible y el tiempo requerido para alistar, cortar, verificar e identificar los grupos resultantes.
    p La precisión debe integrarse con las condiciones de calidad y seguridad. El control comprende la preparación del área, la revisión de máquinas y herramientas, el manejo de documentos vigentes, la trazabilidad de los materiales, la segregación de piezas no conformes y la prevención de los peligros asociados con cuchillas, partes móviles, instalaciones eléctricas y manipulación de cargas. La aplicación coordinada de estos criterios favorece la obtención de piezas completas, uniformes e identificadas, listas para su transferencia al proceso siguiente (International Labour Organization, 2013; International Organization for Standardization [ISO], 2010, 2018, 2026).
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
