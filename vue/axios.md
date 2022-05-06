# vue axios 二次封装

### 下载

    npm install axios

### 创建文件目录

    api.js
    request.js

### 引入

    import axios from "axios"

### 请求超时

```js
const service = axios.create({
  timeOut: 30000,
});
```

### 添加 request 拦截器

```js
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
```

### 添加 response 拦截器

```JS
    service.interceptors.response.use(
        response =>{
            let res = {}
            res.status = response.status;
            res.data = response.data;
        },
        error => {
            if (error && error.response) {
                switch (error.response.status) {
                    case 404:
                    // router.push({ name: "404" });
                    error.message = '请求出错(404)'
                    break;

                    case 500:
                    // router.push({ name: "500" });
                    error.message = '服务器错误(500)';
                    break;

                    default:
                    error.message = `连接出错(${error.response.status})!`;
                }
            }
            return Promise.reject(error);
        }
    )

```

### get 方法

```js
export function get(url, data = {}, token) {
  //默认配置
  let sendObject = {
    url: url,
    method: "get",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  sendObject.data = JSON.stringify(data);
  if (arguments.length === 3) {
    sendObject.headers["token"] = token;
  }
  return service(sendObject);
}
```

### post 方法

```js
//封装post请求
export function post(url, data = {}, token) {
  //默认配置
  let sendObject = {
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  };
  sendObject.data = JSON.stringify(data);
  if (arguments.length === 3) {
    sendObject.headers["token"] = token;
  }
  return service(sendObject);
}
```

### 导出

export { service };
