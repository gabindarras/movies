const TVShow = () => import('./TVShow');
const PopularTVShow = () => import('./components/PopularTVShow');
const TopRatedTVShow = () => import('./components/TopRatedTVShow');
const TVDetails = () => import('./components/TVDetails');

export default {
  component: TVShow,
  children: [
    { path: 'popular', name: 'Popular TV Show', component: PopularTVShow },
    { path: 'top_rated', name: 'Top Rated TV Show', component: TopRatedTVShow },
    { path: ':id', component: TVDetails }
  ]
};
