import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Link } from 'react-router-dom'

class App extends PureComponent {
    state = {
        reverted: false 
    }

    render() {
        return (
            <div className="container">
                <div className="myheader jumbotron">
                    <h1 className="title-shop display-4">
                        MyShop
                        <br />
                        <button className="btn" onClick = {this.revert}>Revert</button>
                        <br />
                        <hr />
                        <Link to='/bin'><img alt="bin" className="bin" src="/img/bin.png" /></Link>
                    </h1>
                </div>
                <ArticleList articles = {this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }
    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App