<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Planeación técnica del proceso de corte aborda los procedimientos y criterios necesarios para planificar y ejecutar el corte de piezas en la industria de la confección, mediante la selección de métodos de trazo manuales y digitales, la preparación y el extendido de materiales, la organización de las capas y el uso adecuado de herramientas, maquinaria y tecnologías de corte. Asimismo, desarrolla los factores que determinan la capacidad productiva, los criterios para seleccionar los equipos según las características del material, la geometría de las piezas y los volúmenes de producción, así como las condiciones de alistamiento del área de trabajo. Finalmente, presenta las buenas prácticas de manufactura, la identificación y trazabilidad de los materiales, el control de calidad, la prevención de riesgos laborales y los procedimientos de verificación y liberación de las piezas cortadas, con el propósito de optimizar los recursos, garantizar la precisión del proceso y promover una operación segura y conforme con los requisitos técnicos establecidos.
    

    .row.justify-content-center
      .col-lg-11.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa jerárquico de la planeación técnica del proceso de corte, organizado en cuatro temas principales y once subtemas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
