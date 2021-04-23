// uniapp 封装uni.request 请求

const TEMP_URL = "http://localhost:3000"

/*
	Shuoming:
		params:
			url : api
			method:get,post,put,delete,connect,head,options,trace
				  :GET,POST,PUT,DELETE,CONNECT,HEAD,OPTIONS,TRACE
			data:
				get/post
				两种表现形式：
					最终发送给服务器的数据是 String 类型，如果传入的 data 不是 String 类型，会被转换成 String。转换规则如下：
						对于 GET 方法，会将数据转换为 query string。例如 { name: 'name', age: 18 } 转换后的结果是 name=name&age=18。
						对于 POST 方法且 header['content-type'] 为 application/json 的数据，会进行 JSON 序列化。
						对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换为 query string。
*/ 

function apiRequest(url,method,data) {
	return new Promise((resolve,reject)=> {
		uni.showLoading({
			title: '加载中',
			mask: true
		})
		uni.request({
			url:TEMP_URL+url,
			method:method,
			data:data,
			success:(res)=> { 
				console.log(res,'---------------');	
				resolve(res.data);
				uni.hideLoading()
			},
			fail:(err)=> {
				console.log(err,'+++++++++++++++');
				resolve(err);
				uni.hideLoading()
			},
			complete: (cp) => {
				console.log(cp,'请求完成');
				uni.hideLoading()
			}
		})
	})
}

export default apiRequest