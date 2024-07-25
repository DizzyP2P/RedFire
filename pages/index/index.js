const scenicSpots = [
    {
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: '景点1'
    },
    {
      id: 2,
      latitude: 23.10229,
      longitude: 113.334521,
      name: '景点2'
    },
    {
        id: 3,
        latitude: 24.10229,
        longitude: 113.334521,
        name: '景点3'
    },
    // 添加更多景点
  ];
Page({
    data: {
      markers: []
    },
  
    onLoad() {
      this.loadMarkers();
    },
  
    loadMarkers() {
      const markers = scenicSpots.map(spot => ({
        id: spot.id,
        latitude: spot.latitude,
        longitude: spot.longitude,
        width: 20,
        height: 20
      }));
  
      this.setData({ markers });
    },
  
    markertap(event) {
        const markerId = event.markerId;
        wx.navigateTo({
          url: `/pages/detail/detail?id=${markerId}`
        });
      },
    navigateToAbout: function () {
        this.pageRouter.navigateTo({
          url: '../about/about'
        })
      }
  });