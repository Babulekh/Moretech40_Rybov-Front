const api = {
  data() {
    return {
      baseUrl: "", // todo
    };
  },
  methods: {
    async getUser(id) {
      const response = await fetch(
        `${this.baseUrl}/v1/getUser/${id}/`
      );
      const userObject = await response.json();

      return userObject;
    },
  },
};

export default api;
