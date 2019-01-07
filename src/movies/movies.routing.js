const Movies = () => import('./Movies');
const PopularMovies = () => import('./components/PopularMovies');
const UpcomingMovies = () => import('./components/UpcomingMovies');
const TopRatedMovies = () => import('./components/TopRatedMovies');
const MovieDetails = () => import('./components/MovieDetails');

export default {
  component: Movies,
  children: [
    { path: 'popular', name: 'Popular Movies', component: PopularMovies },
    { path: 'upcoming', name: 'Upcoming Movies', component: UpcomingMovies },
    { path: 'top_rated', name: 'Top Rated Movies', component: TopRatedMovies },
    { path: ':id', component: MovieDetails }
  ]
};
