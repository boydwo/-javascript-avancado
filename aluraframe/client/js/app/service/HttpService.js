class HttpService {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                };
            };
            xhr.send();
        })
    }
}