 class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _handleResponse(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

      getMovies() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse);
      }
}

const moviesApi = new MoviesApi({
    //baseUrl: "http://localhost:3001",
    baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});

export default moviesApi;