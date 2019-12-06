class Api {
    // static USER = "user27";
    // static PASSWORD = "ZGDWyFCA8umbgpvZ";
    static USER = "user13";
    static PASSWORD = "6c#k#ANpA&k^s3t2";
    static AUTH = btoa(Api.USER + ':' + Api.PASSWORD);
    static BASE_URL = "https://striveschool.herokuapp.com/api";
    static BASE_HEADERS = {
        Authorization: 'basic ' + Api.AUTH
    };

    static async fetch(endpoint, method = 'GET', body, contentType = 'application/json') {
        console.log(endpoint);
        if (contentType) Api.BASE_HEADERS["Content-type"] = contentType;
        try {
            let resp = await fetch(Api.BASE_URL + endpoint, {
                headers: Api.BASE_HEADERS,
                // mode: 'no-cors',
                method,
                body
            });
            return await resp.json();
        } catch (e) {
            console.error(e);
            return null;
        }

    }

    static request(endpoint, method = 'GET', body) {
        var request = new XMLHttpRequest();
        request.open(method, Api.BASE_URL + endpoint, true);
        request.setRequestHeader("Authorization", "basic " + Api.AUTH);
        request.send(body);
    }
}

export default Api;