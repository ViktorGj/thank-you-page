
const array =["king", "henry", "died", "while", "drinking", "chocolate", "milk"];

const state = {
  options: array.reduce( (current, item) => {
      current[item] = null;
      return current;
    }, {})
};

console.log( state );

const svgs = [
    './assets/images/card-images/approve-invoice.svg',
    './assets/images/card-images/flight.svg',
    './assets/images/card-images/laptop.svg',
    './assets/images/card-images/mail.svg',
    './assets/images/card-images/passport.svg',
    './assets/images/card-images/recycle.svg',
]

const userAction = async () => {
    const response = await fetch('https://test-api.acc.tcc.rocks/api/content');
    const data = await response.json().then(data => data)
    return data
}

const container = document.getElementById('cards');

userAction().then(data => {
    data.map(x => {})
    data.forEach((result, idx) => {
        // Create card element
        const card = document.createElement('div');
        card.classList = 'card';
        const content = `
        <div class="card">
        <span class="notify-badge">${idx + 1}</span>
        <div class="card-img">
            <img src="${svgs[idx]}">
        </div>
        <p class="card-text">${result}</p>
        </div>

  `;
        container.innerHTML += content;
    })
})



