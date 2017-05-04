import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CSSTransitionGroup from 'react-addons-css-transition-group'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

const routeKey = () => {
    return Math.random() * 2385467239;
};

class Movies extends Component {
    render() {
        return (
            <div className="Movies">
                <h4>Movies</h4>
                <img src="http://placehold.it/500x700/DF363D/000000" alt=""/>
            </div>
        )
    }
}

class Audio extends Component {
    render() {
        return (
            <div className="Audio">
                <h4>Audio</h4>
                <img src="http://placehold.it/500x700/008E15/000000" alt=""/>
            </div>
        )
    }
}

class TV extends Component {
    render() {
        return (
            <div className="TV">
                <h4>TV</h4>
                <img src="http://placehold.it/500x700/1B7DBE/000000" alt=""/>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Router>
                <Route render={({ location }) => (
                <div className="App">

                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                        <Link to="/movies">Movie</Link>
                        <Link to="/tvs">TV</Link>
                        <Link to="/audio">Audio</Link>
                    </div>
                    <CSSTransitionGroup
                        className="animation-container"
                        transitionName="swipe"
                        transitionAppear={true}
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <Route location={location} key={routeKey()} path="/movies" component={Movies}/>
                        <Route location={location} key={routeKey()} path="/tvs" component={TV}/>
                        <Route location={location} key={routeKey()} path="/audio" component={Audio}/>
                    </CSSTransitionGroup>
                </div>
                )}/>
            </Router>
        );
    }
}


/*class Artwork extends React.Component {

    render() {
        return (
            <CSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="swipe">
                <div>
                    <h3>Art</h3>
                </div>
            </CSSTransitionGroup>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <h1>Home</h1>
        );
    }
}

class User extends React.Component {

    render() {
        return (

            <div className="row">
                <div className="col-md-4">
                    <h3>The User Page</h3>
                    <p>User ID:</p>
                    <li><Link to="/user/artwork">Artwork</Link></li>
                </div>
                <div className="col-md-8">
                    <Route path="/user/artwork" component={Artwork}/>
                </div>

            </div>

        );
    }
}

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <CSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}
            transitionName="swipe">
            <WrappedComponent {...props} />
        </CSSTransitionGroup>
    );
    return TransitionedComponent;
};


class App2 extends React.Component {

    render() {
        return (

            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <ul>
                                <li><Link to="/user">User</Link></li>
                                <li><Link to="/home">Home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <Route path="/" exact component={TransitionedPage(Home)}/>
                            <Route path="/home" exact component={TransitionedPage(Home)}/>
                            <Route path="/user" component={TransitionedPage(User)}/>

                        </div>
                    </div>
                </div>
            </Router>

        );
    }

}*/

/**
 * V3
 */

/* you'll need this CSS somewhere
 .fade-enter {
 opacity: 0;
 z-index: 1;
 }

 .fade-enter.fade-enter-active {
 opacity: 1;
 transition: opacity 250ms ease-in;
 }
 *//*

const App = () => (
    <Router>
        <Route render={({ location }) => (
            <div style={styles.fill}>
                <ul style={styles.nav}>
                    <NavLink to="/10/90/50">Red</NavLink>
                    <NavLink to="/120/100/40">Green</NavLink>
                    <NavLink to="/200/100/40">Blue</NavLink>
                    <NavLink to="/310/100/50">Pink</NavLink>
                </ul>

                <div style={styles.content}>
                    <CSSTransitionGroup
                        transitionName="swipe"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                    >
                        {/!* no different than other usage of
                         CSSTransitionGroup, just make
                         sure to pass `location` to `Route`
                         so it can match the old location
                         as it animates out
                         *!/}
                        <Route
                            location={location}
                            key={routeKey()}
                            path="/:h/:s/:l"
                            component={HSL}
                        />
                    </CSSTransitionGroup>
                </div>
            </div>
        )}/>
    </Router>
)

const NavLink = (props) => (
    <li style={styles.navItem}>
        <Link {...props} style={{ color: 'inherit' }}/>
    </li>
)

const HSL = ({ match: { params } }) => (
    <div style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
}

styles.content = {
    ...styles.fill,
    top: '40px',
    textAlign: 'center'
}

styles.nav = {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: 0,
    height: '40px',
    width: '100%',
    display: 'flex'
}

styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
}

styles.hsl  = {
    ...styles.fill,
    color: 'white',
    paddingTop: '20px',
    fontSize: '30px'
}*/


export default App;
