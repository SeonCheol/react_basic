// export {default as Home} from './Home'
// export {default as About} from './About'
// export {default as Post} from './Post'
// export {default as Posts} from './Posts'

import asyncComponent from "../lib/asyncComponent";

export const Home = asyncComponent(() => import('./Home'))
export const About = asyncComponent(() => import('./About'))
export const Post = asyncComponent(() => import('./Post'))
export const Posts = asyncComponent(() => import('./Posts'))
