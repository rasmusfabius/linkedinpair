class Api {
    static AUTH = btoa('user13:6c#k#ANpA&k^s3t2');
    static BASE_URL = "https://strive-school-testing-apis.herokuapp.com/api";
    static BASE_HEADERS = {
        Authorization: 'basic ' + Api.AUTH,
        'Content-type': 'application/json'
    };

    static async fetch(endpoint, method = 'GET', body) {
        console.log(endpoint);
        let resp = await fetch(Api.BASE_URL + endpoint, {
            headers: Api.BASE_HEADERS,
            method,
            body
        });
        return await resp.json();
    }
}

export default Api;