import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const favoriteMovieApi = createApi({
    reducerPath: 'favoriteMovies',       //specificere hvor alt state skal gemmes i Store, 'albums' string der angiver "key" i storen
    baseQuery: fetchBaseQuery({  //funktion der returnere et prækonfigureret version af 'fetch'
        baseUrl: 'http://localhost:3005',  //adressen på json-server, der kører på port 3005 
    }),
    endpoints(builder){
        return {
            addMovie: builder.mutation({
                invalidatesTags: (result, error, movie) => { return [{type: 'Movie', id: movie.id}];},
                query: (movie) =>{
                    return {
                        url: '/favoriteMovies', 
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(movie),
                    };
                }
            }),
            removeMovie: builder.mutation({
                  invalidatesTags: (result, error, movie) => { return [{type: 'Movie', id: movie.id}];},
                  query: (movie) => {
                      return {
                          url: `favoriteMovies/${movie.id}`, 
                          method: 'DELETE'
                      };
                  }
              }),
              fetchMovies: builder.query({
                query: () => {
                  return {
                    url: '/favoriteMovies',
                    method: 'GET',
                  };
                }, 
              }),

            addFavoriteMovie: builder.mutation({
                query: (movie) => {
                  return {
                    url: '/favoriteMovies', 
                    method: 'POST',
                    body: JSON.stringify(movie),
                  };
                }, 
              }), 
        }
    }
});

export const favoriteMovieApi2 = 'http://localhost:3005/favoriteMovies';
export const {useFetchMoviesQuery, useAddMovieMutation, useRemoveMovieMutation, useAddFavoriteMovieMutation} = favoriteMovieApi;
export { favoriteMovieApi };
