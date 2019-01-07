const Person = () => import('./Person');
const PersonDetails = () => import('./components/PersonDetails.vue');

export default {
  component: Person,
  children: [{ path: ':id', component: PersonDetails }]
};
