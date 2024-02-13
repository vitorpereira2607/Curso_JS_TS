const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); //  (Get, url, if is synchronous or not)
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        loadPage(el);
    }
});

function loadPage(el) {
    const href = el.getAttribute('href');

    request({
        method: 'GET',
        url: href,
        success(response){
            loadResult(response)
        },
        error(errorText){
            console.log(errorText)
        }
    })
}

function loadResult(response) {
    const result = document.querySelector('.result');

    result.innerHTML = response;
}
