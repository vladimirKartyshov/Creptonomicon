const API_KEY = '62f8a8af9dfc13f1b11d24d7afbe6c1449eb2ca41e025d20be437a754f4b8480'

export const loadTickers = (tickers) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(',')}&api_key=${API_KEY}`
  ).then((r) => r.json())
