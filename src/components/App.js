import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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