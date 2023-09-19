<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Alura Tracker" />
    </h1>
    <button class="button" @click="alternarTema">
      {{ textoBotao }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <RouterLink to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </RouterLink>
        </li>
        <li class="last-li">
          <RouterLink to="/projetos" class="link">
            <i class="fas fa-project-diagram"></i>
            projetos
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoAlternarTema'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao() {
      return this.modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro'
    }
  },
  methods: {
    alternarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoAlternarTema', this.modoEscuroAtivo)
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

nav {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: none;
  padding: 1em;
}

.panel li {
  padding: 8px;
  border-bottom: solid 1px #DDDDDD;
  text-align: left;
}

.last-li {
  border-bottom: none !important;
}

.link {
  color: #0d3b66;
}

.link:hover {
  color: #114a80;
}

.link.router-link-active {
  color: #004b91;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
