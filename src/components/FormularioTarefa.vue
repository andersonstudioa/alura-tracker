<template>
  <div class="box">
    <div class="columns">
      <div class="column is-6" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" />
      </div>
      <div class="column is-6">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ tempoDecorrido }}</strong>
          </section>
          <button class="button" @click="iniciar">
            <span class="icon">
              <font-awesome-icon icon="fas fa-play"></font-awesome-icon>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span class="icon">
              <font-awesome-icon icon="fas fa-stop"></font-awesome-icon>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormularioTarefa',
  //metodo responsável pelas variáveis de estado
  data () {
    return {
      tempoEmSegundos: 0,
      cronometroId: 0
    }
  },
  //declara funções
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11,8)
    }
  },
  methods: {
    iniciar () {
      this.cronometroId = setInterval(() => {
        this.tempoEmSegundos += 1
      }, 1000);
    },
    finalizar () {
      alert(this.cronometroId);
      clearInterval(this.cronometroId);
    }
  }
});

</script>