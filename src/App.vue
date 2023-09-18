<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoAlternarTema="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
      <div class="listaTarefas">
        <ListaTarefa v-for="(tarefaAtual, index) in tarefas" :key="index" :tarefa="tarefaAtual" />
        <BoxTarefa v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </BoxTarefa>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import FormularioTarefa from './components/FormularioTarefa.vue'
import ListaTarefa from './components/ListaTarefa.vue'
import ITarefa from './interfaces/ITarefa'
import BoxTarefa from './components/BoxTarefa.vue'

export default defineComponent({
  name: 'App',
  components: { BarraLateral, FormularioTarefa, ListaTarefa, BoxTarefa },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style scoped>
.listaTarefas {
  padding: 1.5em;
}

main {
  --bg-primario: #FFF;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #161742;
  --texto-primario: #FFF;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>