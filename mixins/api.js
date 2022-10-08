const api = {
  data() {
    return {
      baseUrl: "https://7744-109-252-41-241.eu.ngrok.io/",
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

      if (response.ok) {
        return await response.json();
      } else {
        return response.json();
      }
    },
    async post(path, payload) {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return await response.json();
      } else {
        return response.json();
      }
    },

    async getUser(userName) {
      return await this.get(`user/${userName}`);
    },
    async getUsers() {
      return await this.get("user/logins");
    },

    async auth(userName) {
      return await this.post('auth/login/', {
        username: userName,
        password: "secret",
      });
    },
  },
};

export default api;
