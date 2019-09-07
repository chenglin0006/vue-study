const fetchFun = (args)=>{
    let params = args.type.toUpperCase() === 'GET' ? null : args.param;
    let requestUrl = args.url;
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
    fetchFun
}