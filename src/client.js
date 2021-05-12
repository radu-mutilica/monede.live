const axios = require('axios');


class MonedeClient {

    constructor() {
        this.restClient = new MonedeRESTClient()
        this.coins = []
    }
    async requestCoins() {
        this.coins = await this.restClient.requestCoins()
        return this.coins
    }
}


class MonedeRESTClient {
    COINS_API = process.env.REACT_APP_MONEDE_BACKEND + '/api/v1/coins'

    constructor() {
        this.coins = []
    }
    async requestCoins() {
        /* Returns all mountpoints visible to the user. */
        if (this.coins.length === 0) {
            return axios.get(this.COINS_API).then(response => response.data)
        }
        return this.coins
    }
}

export default MonedeClient
