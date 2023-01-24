window.onload = () => {
    let resultLog = '';
    let result = document.querySelector('.result')
    let hostInput = document.querySelector('.host')
    let buttonRun = document.querySelector('.run')
    buttonRun.addEventListener('click', (e) => {
        let domain = window.location.origin.substr(0, window.location.origin.length-5);
        let port = 5000;
        //console.log(`${domain}:${port}/api/ping`)
        let sendData = JSON.stringify({"host": hostInput.value})
        let url = `${domain}:${port}/api/ping/`;
        let fd = new FormData();
        let headers2 = new Headers({

            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(sendData).length            
        })
        fd.append('arg', sendData);
        console.log(url, headers2);
        fetch(url, 
        {
            method:'post',
            mode: 'cors',
            headers: headers2,
            body: sendData,
        }).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                return Promise.reject('server');
            }
        }).then(data => {
            result.value = data.ok;
        }).catch(err=> {
            console.log(err);
        })
    })
}