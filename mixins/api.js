const api = {
  data() {
    return {
      baseUrl:
        "https://a0df-2a00-1370-817a-1177-51f6-d277-878a-8613.eu.ngrok.io/", // todo
    };
  },
  methods: {
    async get(path) {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "ngrok-skip-browser-warning": true,
        },
      });

      return await response.json();
    },
    async post(path, payload) {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "ngrok-skip-browser-warning": true,
        },
        body: JSON.stringify(payload),
      });

      return await response.json();
    },

    async getUser(userName) {
      return await this.get(`user/${userName}`);
    },
    async getUsers() {
      return await this.get("user/logins");
    },

    async auth(userName) {
      return await this.post(`auth/${userName}`, { username: userName });
    },
  },
};

export default api;
