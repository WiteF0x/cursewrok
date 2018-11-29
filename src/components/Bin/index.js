import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    render() {
        var arr = [];
        var sales = [];
        for (var i = 0; i < localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            sales[i]=localStorage.getItem(arr[i])
            console.log(arr[i])
            console.log(sales[i])
        }
        const listSales = sales.map((id) => <li>{id}</li>);
            return (
                <div>
                     <div className="container">
                        <div className="jumbotron">
                            <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                            <ol>{listSales}</ol>
                            {/* <button onCLick = {this.DeleteCLick}>Delete</button> */}
                        </div>
                    </div>

                </div>
            )
        }
        // DeleteClick = () => {
        //     Storage.clear();
        // }
    }