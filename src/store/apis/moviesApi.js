import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query({
        query: (movie) => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '553ed4316c94f286dfaf03af9cf99772',
              with_genres: movie
            },
            method: 'GET',
          };
        }, 
      }),
      fetchMovie: builder.mutation({
        query: (movie) => {
          return {
            url: 'movie/' + movie.id,
            params: {
              api_key: '553ed4316c94f286dfaf03af9cf99772'
            },
            method: 'GET',
          };
        }, 
      }),
      fetchHighestRatedMovies: builder.query({
        query: (movie) => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '553ed4316c94f286dfaf03af9cf99772',
              with_genres: movie,
            },
            method: 'GET',
          };
        },
      }), 
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '553ed4316c94f286dfaf03af9cf99772'
            },
            method: 'GET',
          };
        },
      }),  
      fetchSearchTvShow: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/tv',
            params: {
              query: searchTerm,
              api_key: '553ed4316c94f286dfaf03af9cf99772'
            },
            method: 'GET',
          };
        },
      }),  
      fetchUpcomingMovie: builder.query({
        query: (movie) => {
          return {
            url: 'movie/upcoming',
            params: {
              api_key: '553ed4316c94f286dfaf03af9cf99772',
              page: 1,
              with_genres: movie,
            },
            method: 'GET',
          };
        },
      }), 
      fetchTvShows: builder.query({
        query: (movie) => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '553ed4316c94f286dfaf03af9cf99772',
              language: "en-US",
              with_genres: movie,
            },
            method: 'GET',
          };
        }, 
      }), 
      fetchTrailer: builder.mutation({
        query: (movie) => {
          return {
            url: 'movie/' + movie.id + '/videos',
            params: {
              api_key: '553ed4316c94f286dfaf03af9cf99772'
            },
            method: 'GET',
          };
        }, 
      }), 
      fetchGenreId: builder.query({
        query: (movie) => {
          return {
            url: 'discover/movie',
            params: {
              api_key: '553ed4316c94f286dfaf03af9cf99772',
              with_genres: movie,
            },
            method: 'GET',
          };
        }, 
      }), 
      fetchSearchPerson: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/person',
            params: {
              query: searchTerm,
              api_key: '553ed4316c94f286dfaf03af9cf99772'
            },
            method: 'GET',
          };
        },
      }),
      fetchPerson: builder.mutation({
        query: (person) => {
          return {
            url: 'person/' + person.id + '/movie_credits',
            params: {
              api_key: '553ed4316c94f286dfaf03af9cf99772',
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {useFetchPopularMoviesQuery, useFetchHighestRatedMoviesQuery, useFetchSearchMovieQuery, useFetchUpcomingMovieQuery, useFetchTvShowsQuery, useFetchTrailerMutation, useFetchMovieMutation, useFetchGenreIdQuery, useFetchSearchPersonQuery, useFetchPersonMutation, useFetchSearchTvShowQuery} = moviesApi;
export { moviesApi };