export const state = () => ({
  logout: {
    isActive: false
  }
})
export const mutations = {
  CHANGE_STATE(state, payload) {
    state[payload.key] = payload.body;
  }
};
