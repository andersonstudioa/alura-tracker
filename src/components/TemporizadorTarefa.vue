<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTarefa :tempoEmSegundos="tempoEmSegundos" />
    <button class="button" @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <font-awesome-icon icon="fas fa-play"></font-awesome-icon>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <font-awesome-icon icon="fas fa-stop"></font-awesome-icon>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroTarefa from './CronometroTarefa.vue'

export default defineComponent({
  name: 'TemporizadorTarefa',
  emits: ['aoFinalizarTemporizador'],
  components: {
    CronometroTarefa
  },
  //metodo responsável pelas variáveis de estado
  data() {
    return {
      tempoEmSegundos: 0,
      cronometroId: 0,
      cronometroRodando: false
    };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true
      this.cronometroId = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false
      clearInterval(this.cronometroId)
      this.$emit('aoFinalizarTemporizador', this.tempoEmSegundos) //Comunicar ao formulário que a tarefa foi finalizada
      this.tempoEmSegundos = 0 //Liberar o cronômetro para uma próxima tarefa
    }
  }
});

</script>