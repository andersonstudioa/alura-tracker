<template>
  <section class="projetos">
    <h1 class="title">Lista de Projetos</h1>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <hr>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStoreCustom } from "../../store"

export default defineComponent({
  name: 'ListaProjetos',
  setup() {
    const store = useStoreCustom()
    return {
      projetos: computed(() => store.state.projetos)
    }
  }
})
</script>
<style scoped>
.projetos {
  padding: 1.5em;
}
</style>