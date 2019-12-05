class Api {
    // static USER = "user27";
    // static PASSWORD = "ZGDWyFCA8umbgpvZ";
    static USER = "user13";
    static PASSWORD = "6c#k#ANpA&k^s3t2";
    static AUTH = btoa(Api.USER + ':' + Api.PASSWORD);
    static BASE_URL = "https://striveschool.herokuapp.com/api";
    static BASE_HEADERS = {
        Authorization: 'basic ' + Api.AUTH,
        'Content-type': 'application/json'
    };

    static async fetch(endpoint, method = 'GET', body) {
        console.log(endpoint);
        try {
            let resp = await fetch(Api.BASE_URL + endpoint, {
                headers: Api.BASE_HEADERS,
                method,
                body
            });
            return await resp.json();
        } catch (e) {
            console.error(e);
            return null;
        }

    }
}

export default Api;