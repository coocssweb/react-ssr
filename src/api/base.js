import 'whatwg-fetch';
class Base {
    request ({ path, data = {}, method = 'GET', requireLogin }) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        let settings = {
            method,
            headers,
            mode: 'cors'
        };

        let requestUrl = `${process.env.API}${path}`;

        return new Promise((resolve, reject) => {
            fetch(requestUrl, settings).then((response) => {
                return response.json();
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default Base;