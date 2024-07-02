Page({
  onLoad(query) {
    this.webViewContext = my.createWebViewContext('arus-tng');
  },
  arustng(e){
    // my.getAuthCode({
    //   scopes: 'BASE_USER_INFO',
    //   success: (res) => {
    //     my.alert({
    //       content: JSON.stringify(res),
    //     });
    //     this.webViewContext.postMessage({'authCode': '1'});
    //   },
    // }); 
  },
  onReady() {
    // Page loading is complete
   },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'Arus Oil',
      desc: 'Recycling Used Cooking Oil Made Easy',
      path: 'pages/index/index',
    };
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
});
