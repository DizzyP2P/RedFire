const app = getApp();

Page({
  data: {
    spot: null
  },

  onLoad(options) {
    const spotId = parseInt(options.id);
    const spot = app.globalData.scenicSpots.find(s => s.id === spotId);
    if (spot) {
      this.setData({ spot });
    }
  }
})