<template>
  <section class="projetos">
    <h1 class="title">Cadastrar projeto</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto"
          placeholder="Digite o nome do projeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
    <hr>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useStoreCustom } from "@/store"

export default defineComponent({
  name: 'FormularioProjetos',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      console.log(projeto)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: ''
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit('ALTERA_PROJETO', {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      }
      this.nomeDoProjeto = ''
      this.$router.push('/projetos')
    }
  },
  setup() {
    const store = useStoreCustom()
    return {
      store
    }
  }
})
</script>
<style scoped>
.projetos {
  padding: 1.5em;
}
</style>