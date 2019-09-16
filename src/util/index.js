import  Vue from "vue";
import __URL__ from '../../config/index'

const getEnv = () => {
    return process.env.NODE_ENV
}
const createUrl = request => {
    let url = request.url;
    let param = request.param;
  
    if (param) {
      url = !url.includes("?") && url + "?";
      for (let key of Object.keys(param)) {
        url = url + key + "=" + param[key] + "&";
      }
      if (url.endsWith("&")) {
        url = url.substring(0, url.length - 1);
      }
    }
    return url;
};

const fetchFun = (args)=>{
    const PROTOCOL = `${window.location.protocol}//`;
    let ENV = getEnv();
    let params = args.type.toUpperCase() === "GET" ? null : args.param;
    let url = args.type.toUpperCase() === "GET" ? createUrl(args) : args.isQuery ? createUrl(args) : args.url;
    let requestUrl = __URL__[ENV]["apiUrl"] + __URL__[ENV]["apiUrlFilter"] + url;
    let headers = {
        'Accept': 'application/json'
    }
    return fetch(requestUrl, {
        credentials: 'include', // 请求带上cookies，是每次请求保持会话一直
        method: args.type.toUpperCase(),
        follow: 1,
        timeout: 10000,
        headers: headers,
        body: params ? params: null
    }).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            return res;
        }
        const error = new Error(res.statusText);
        error.res = res;
        throw error;
    }).then((response) => {
        return response.json();
    });
}

export {
    getEnv,
    fetchFun
}