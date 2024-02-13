document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    }
});

async function loadPage(el) {
    try {
        const href = el.getAttribute('href');

        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Error');

        const html = response.text();

        loadPage(html);

    } catch (error) {
        console.error(error)
    }
    // fetch(href)
    // .then(response => {
    //     return response.text()
    // })
    // .then(html => loadResult(html))
    // .catch(er => console.error(er))

}

function loadResult(response) {
    const result = document.querySelector('.result');

    result.innerHTML = response;
}
