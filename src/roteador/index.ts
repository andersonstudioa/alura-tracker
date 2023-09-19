import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasView from "../views/Tarefas.vue";
import ListaProjetos from "../views/projetos/Lista.vue";
import FormularioProjetos from "../views/projetos/Formulario.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: TarefasView,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: ListaProjetos,
  },
  {
    path: "/projetos/novo",
    name: "Novo projeto",
    component: FormularioProjetos,
  },
  {
    path: "/projetos/:id",
    name: "Editar projeto",
    component: FormularioProjetos,
    props: true,
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
