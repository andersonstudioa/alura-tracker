<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoAlternarTema="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'

export default defineComponent({
  name: 'App',
  components: { BarraLateral },
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    },

  }
});
</script>

<style scoped>
.listaTarefas {
  padding: 1.5em;
}

main {
  --bg-primario: #FFF;
  --texto-primario: #4e4e4e;
}

main.modo-escuro {
  --bg-primario: #072746;
  --texto-primario: #afafaf;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>