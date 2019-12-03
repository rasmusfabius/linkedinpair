class Api {
    static AUTH = btoa('user13:6c#k#ANpA&k^s3t2');
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