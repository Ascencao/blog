import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Articles = lazy(() => import('../pages/articles'));
const NoMatch = lazy(() => import('../pages/noMatch'));

export { Home, About, Articles, NoMatch }