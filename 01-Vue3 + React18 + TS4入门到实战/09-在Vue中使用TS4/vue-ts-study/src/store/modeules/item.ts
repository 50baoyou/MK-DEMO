import { MyRootState, ItemState } from '../interfaces';
import type { Module } from 'vuex';

const item: Module<ItemState, MyRootState> = {
    namespaced: true,
    state: {
        id: 'item-000',
        count: 0,
    },
    getters: {
        getItemId(state) {
            return state.id;
        },
        getItemCount(state) {
            return state.count * 2;
        },
    },
};

export default item;
