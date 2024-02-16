import { createStore, useStore as baseUseStore } from 'vuex';

import type { Store } from 'vuex';
import type { InjectionKey } from 'vue';
import type { MyRootState, ItemState } from './interfaces';

import item from './modeules/item';

type Modules = {
    item: ItemState;
};

export const key: InjectionKey<Store<MyRootState & Modules>> = Symbol();

export default createStore<MyRootState>({
    state: {
        name: 'root',
        age: 0,
        info: {
            tag: '0000',
            address: '*',
        },
    },
    getters: {
        getRootName(state) {
            return state.name;
        },
        getRootInfo(state) {
            return state.info;
        },
    },
    mutations: {},
    actions: {},
    modules: {
        item,
    },
});

export function useStore() {
    return baseUseStore(key);
}
