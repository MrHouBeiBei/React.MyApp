import { Router, Route, Link, hashHistory  } from 'react-router'
import App from '../App'
import test from '../components/test'



React.React((
  <Router history={hashHistory}>
    <Route path="/" component={test}>
      {/* <Route path="/test" component={test}/> */}
    </Route>
  </Router>
), document.getElementById('root'))

// export default () => (
//       <Router history={hashHistory}>
//     <Route path="/" component={test}>
//       {/* <Route path="/test" component={test}/> */}
//     </Route>
//   </Router>
// )