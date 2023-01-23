window.onload = () => {
    let resultLog = '';
    let result = document.querySelector('.result')
    let buttonRun = document.querySelector('.run')
    buttonRun.addEventListener('click', (e) => {
        let domain = window.location.origin.substr(0, window.location.origin.length-5);
        let port = 5000;
        //console.log(`${domain}:${port}/api/ping`)
        let sendData = JSON.stringify({"foo": "bar"})
        let url = `${domain}:${port}/api/ping/`;
        let fd = new FormData();
        fd.append('arg', sendData);
        console.log(url);
        fetch(url, 
        {
            method:'post',
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: fd,
        }).then(resp => {
            if (resp.status === 200) {
                return resp.json;
            } else {
                return Promise.reject('server');
            }
        }).then(data => {
            console.log(data);
        }).catch(err=> {
            console.log(err)
        })


        resultLog += 'hello\n';
        result.value = resultLog;
    })
}