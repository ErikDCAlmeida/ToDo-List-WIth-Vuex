<template>
  <div>
    <h2>YOUR TO-DO LIST</h2>
    <p>
      Criada para aprendizado de Vuex. Não há a real necessidade de utilizar
      Vuex para esse projeto, mas estou utilizando como forma de aprendizado.
    </p>
    <h2>Criador:</h2>
    <div class="links">
      <a href="https://github.com/ErikDCAlmeida" target="_blank">
        <h2>GitHub</h2>
      </a>
      <a href="https://www.linkedin.com/in/erikdcalmeida/" target="_blank">
        <h2>LinkedIn</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>

<style scoped>
.links {
  display: flex;
}
a {
  text-decoration: none;
  color: #0000ff;
  margin: 0px 20px;
}
</style>
