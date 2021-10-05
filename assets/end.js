const GoodCustomer = () => {
    const score = window.localStorage.getItem('mostRecentScore');
    // const message = condition ? '...' : '....'
    const message = score > 300 ? 'You are a good match!' : 'hmmm...';

    document.querySelector('#finalScore').innerText = message;

    if (
        score === 500
    ) {

    }
}

GoodCustomer();