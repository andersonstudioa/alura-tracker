import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore } from "vuex";

interface Estado {
  projetos: IProjeto[];
}

//Para utilizar a Store nos componentes é necessário passar esta chave
export const key: InjectionKey<Store<Estado>> = Symbol();

//Store responsável por armazenar os dados no estado global
export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoProjeto: string) {
      const projeto = {
        id: Math.floor(Math.random() * 10000),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
    ALTERA_PROJETO(state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id == projeto.id);
      state.projetos[index] = projeto;
    },
  },
});

//Hook personalizado
export function useStoreCustom(): Store<Estado> {
  return useStore(key);
}
