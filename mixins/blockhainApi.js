const blockchainApi = {
  data() {
    return {
      blockchainApiUrl: "https://hackathon.lsp.team/hk",
    };
  },
  methods: {
    async getWalletBalance(publicKey) {
      const response = await fetch(
        `${this.blockchainApiUrl}/v1/wallets/${publicKey}/balance`
      );
      const balanceObject = await response.json();

      return balanceObject;
    },
  },
};

export default blockchainApi;
