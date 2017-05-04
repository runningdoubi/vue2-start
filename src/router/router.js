import App from "../App"
import Home from "../page/home";
import Item from "../page/item";
import Score from "../page/score";

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: Home
        //component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: Item
        //component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: Score
        //component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]
