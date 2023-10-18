class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _handleResponse(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

      registerUser(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }).then((res) => this._handleResponse(res));
      }
      

      loginUser(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((res) => this._handleResponse(res));
      }

      getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: {
            "Authorization" : `Bearer ${token}`
          },
        
        }).then(this._handleResponse);
      }

      setUserInfo(data, token) {
        console.log(token)
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH", 
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : `Bearer ${token}`
          },
          body: JSON.stringify(data),
        }).then(this._handleResponse);
      }

      getMovie(token) {
            return fetch(`${this._baseUrl}/movies`, {
              headers: {
                    "Authorization" : `Bearer ${token}`
              },
            }).then(this._handleResponse);
          }

          createNewMovies(data, token) {
            return fetch(`${this._baseUrl}/movies`, {
              method: "POST", 
              headers: {
                'Content-Type' : "application/json",
                    "Authorization" : `Bearer ${token}`
              },
              body: JSON.stringify(data),
            }).then(this._handleResponse);
          }

          saveMovie(data, token) {
            return fetch(`${this._baseUrl}/movies`, {
              method: "POST",
              headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  country: data.country,
                  director: data.director,
                  duration: data.duration,
                  description: data.description,
                  year: data.year,
                  image: `https://api.nomoreparties.co/${data.image.url}`,
                  trailerLink: data.trailerLink,
                  thumbnail: `https://api.nomoreparties.co/${data.image.url}`,
                  movieId: data.id,
                  nameRU: data.nameRU,
                  nameEN: data.nameEN,
              }),
            }).then(this._handleResponse);
          }

          deleteMovies(movieId, token) {
            return fetch(`${this._baseUrl}/movies/${movieId}`, {
              method: "DELETE",
              headers: {
                "Authorization" : `Bearer ${token}`
             }
            }).then(this._handleResponse);
          }

          checkToken(token) {
            return fetch(`${this._baseUrl}/users/me`, {
              method: "GET",
              headers: {
                Accept: "application/json*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }).then((res) => this._handleResponse(res));
          }
        }
          
      
export const mainApi = new MainApi({
  baseUrl: "https://api.movie.search.nomoredomainsicu.ru",
  //baseUrl: "http://localhost:3001",
    
})

