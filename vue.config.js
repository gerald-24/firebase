module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    host: 'cpu-15257',
    port: '4000', //name of port
    public: 'cpu-15257:4000',
    disableHostCheck: true,
    noInfo: true
  }
}
