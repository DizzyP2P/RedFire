App({
    onLaunch() {
      console.log('App launched');
    },
    globalData: {
      scenicSpots: [
        {
          id: 1,
          latitude: 23.099994,
          longitude: 113.324520,
          name: '景点1',
          description: '这是景点1的详细描述。',
          image: '/resources/spot1.jpg'
        },
        {
          id: 2,
          latitude: 23.10229,
          longitude: 113.334521,
          name: '景点2',
          description: '这是景点2的详细描述。',
          image: '/resources/spot2.jpg'
        },
        // 更多景点
      ]
    }
  })