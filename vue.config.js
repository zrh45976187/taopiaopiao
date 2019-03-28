

const request = require('superagent');
var bodyParser = require('body-parser');



module.exports = {
    configureWebpack: {
          devServer: {
			  proxy:{
				  "/api2":{
				  	  target:"https://m.weibo.cn/",
				  	  pathRewrite:{"^/api2":""},
				  	  changeOrigin:true
				  },
				  "/api":{
					  target:"https://api-m.mtime.cn/",
					  pathRewrite:{"^/api":""},
					  changeOrigin:true
				  },
				  "/ajax":{
				  	  target:"http://m.maoyan.com/",
				  	  pathRewrite:{"^/ajax":""},
				  	  changeOrigin:true
				  }

			  }
      }
}
}
