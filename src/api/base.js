// import 'whatwg-fetch';
class Base {
    request ({ path, data = {}, method = 'GET', requireLogin }) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        let settings = {
            method,
            headers,
            body: JSON.stringify(data),
            mode: 'cors'
        };

        let requestUrl = `${process.env.API}${path}`;

        return new Promise((resolve, reject) => {
            // fetch(requestUrl, settings).then((response) => {
            //     resolve(response.json());
            // }).catch((error) => {
            //     reject(error);
            // });
        });
    }
}

export default Base;