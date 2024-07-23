Page({
  onLoad(query) {
    this.webViewContext = my.createWebViewContext('arus-tng');
  },
  arustng(e){
    if (e && e.detail && e.detail.name && e.detail.name === "TNG"){
      my.getAuthCode({
        scopes: 'BASE_USER_INFO',
        success: (res) => {
          this.webViewContext.postMessage({'authCode': res.authCode});
        },
      }); 
    }
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
