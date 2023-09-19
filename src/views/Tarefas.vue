<template>
  <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
  <div class="listaTarefas">
    <ListaTarefa v-for="(tarefaAtual, index) in tarefas" :key="index" :tarefa="tarefaAtual" @aoExcluir="excluirTarefa" />
    <BoxTarefa v-if="listaEstaVazia">
      Você não está muito produtivo hoje :(
    </BoxTarefa>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import FormularioTarefa from '../components/FormularioTarefa.vue'
import ListaTarefa from '../components/ListaTarefa.vue'
import ITarefa from '../interfaces/ITarefa'
import BoxTarefa from '../components/BoxTarefa.vue'

export default defineComponent({
  name: 'TarefasView',
  components: { FormularioTarefa, ListaTarefa, BoxTarefa },
  data() {
    return {
      tarefas: [] as ITarefa[]
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
    excluirTarefa(id: number) {
      const index = this.tarefas.findIndex(item => item.id === id)
      this.tarefas.splice(index, 1)
    }
  }
});
</script>

<style scoped>
.listaTarefas {
  padding: 1.5em;
}
</style>