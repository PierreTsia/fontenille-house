export default {
  state: {
    format: 'l'
  },

  getters: {
    isMobile: state => state.format === 's',
    isTablet: state => state.format === 'm',
    isDesktop: state => state.format === 'l',
    isWideScreen: state => state.format === 'xl'
  },

  mutations: {
    setFormat(state, format) {
      state.format = format
    }
  }
}
