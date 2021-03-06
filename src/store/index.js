import { createStore } from 'vuex';

import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

import authModule from './modules/auth/index.js';
import carryModule from './modules/carry/index.js';
import postcodeModule from './modules/postcode/index.js';

const store = createStore({
    state() {
        return {
            isLoaded: false,
        }
    },
    getters,
    mutations,
    actions,
    modules: {
        auth: authModule,
        carry: carryModule,
        postcode: postcodeModule,
    },
});

export default store;