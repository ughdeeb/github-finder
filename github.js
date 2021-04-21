class Github {
  constructor() {
    this.client_id = "a9d5bcea9851aaf7348b";
    this.client_secret = "0fc190cab1e21d13d2e46721d3f8e08b2e61648d";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile,
    };
  }
}
