const GoodCustomer = () => {
    const score = window.localStorage.getItem('mostRecentScore');
    // const message = condition ? '...' : '....'
    const message = score > 300 ? 'Wow Perfect: Looks like you have everything you need' : 'Hold Up: We recommend you have some tech knowledge and have been in the Industry for a while';

    document.querySelector('#finalScore').innerText = message;

    if (
        score === 500
    ) {

    }
};

GoodCustomer();