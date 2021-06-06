import axios from "axios";


class MonedeClient {

    constructor() {
        this.restClient = new MonedeRESTClient()
        this.coins = []
    }

    async getTopCoins() {
        this.coins = await this.restClient.reqTopCoins()
        console.log("Asdasdasdasd", this.coins)
        return this.coins
    }

    async getCoinMarket(symbol) {
        return await this.restClient.reqCoinMarket(symbol);
    }

    async getCoinHistory(symbol, timeframe) {
        return await this.restClient.reqCoinHistory(symbol, timeframe);
    }

    async getLatestExample() {
        return await this.restClient.reqLatestExample();
    }
}


class MonedeRESTClient {
    MONEDE_ENDPOINT = process.env.REACT_APP_MONEDE_BACKEND + '/api/v1'

    constructor() {
        this.coins = []
    }

    async reqTopCoins() {
        if (this.coins.length === 0) {
            return axios.get(this.MONEDE_ENDPOINT + '/top').then(response => response.data)
        }
        return this.coins
    }

    async reqCoinMarket(symbol) {
        return axios.get(
            this.MONEDE_ENDPOINT + '/market',
            {
                params: {
                    symbol: symbol,
                }
            }
        ).then(response => response.data)
    }

    async reqCoinHistory(symbol, timeframe) {
        return axios.get(
            this.MONEDE_ENDPOINT + '/history',
            {
                params: {
                    symbol: symbol,
                    timeframe: timeframe
                }
            }
        ).then(response => response.data)
    }

    async reqLatestExample() {
        return axios.get(
            this.MONEDE_ENDPOINT + '/latest'
        ).then(response => response.data)
    }
}

export default MonedeClient
