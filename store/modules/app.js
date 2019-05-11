export default {
  state: {
    format: 'l',
    houseDetailMenu: 'outside'
  },

  getters: {
    isMobile: state => state.format === 's',
    isTablet: state => state.format === 'm',
    isDesktop: state => state.format === 'l',
    isWideScreen: state => state.format === 'xl',
    houseDetailsActiveMenu: state => state.houseDetailMenu
  },

  mutations: {
    setFormat(state, format) {
      state.format = format
    },
    setHouseDetailsMenu(state, option) {
      state.houseDetailMenu = option
    }
  }
}
