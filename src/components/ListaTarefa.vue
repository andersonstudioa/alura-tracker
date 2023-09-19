<template>
  <BoxTarefa>
    <div class="columns is-align-items-center">
      <div class="column is-8">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-2">
        <CronometroTarefa :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column has-text-right">
        <button class="button" @click="excluir">
          <span class="icon">
            <i class="fa-solid fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
  </BoxTarefa>
</template>

<script lang="ts">

import { PropType, defineComponent } from 'vue';
import CronometroTarefa from './CronometroTarefa.vue';
import ITarefa from '@/interfaces/ITarefa';
import BoxTarefa from './BoxTarefa.vue';

export default defineComponent({
  name: 'ListaTarefa',
  components: {
    CronometroTarefa,
    BoxTarefa
  },
  data() {
    return {
      tarefaAtual: this.tarefa
    }
  },
  emits: ['aoExcluir'],
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  },
  methods: {
    excluir() {
      this.$emit('aoExcluir', this.tarefaAtual.id)
    }
  }
})
</script>