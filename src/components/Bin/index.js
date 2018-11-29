import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    render() {
        var arr = [];
        var mass = [
            {
            sales : {
            title: null,
            cena: null
        }
    }
    ]
        for (var i = 0; i < localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            mass[i].sales.title=JSON.parse(localStorage.getItem(arr[i])).title
            mass[i].sales.cena=JSON.parse(localStorage.getItem(arr[i])).cena
            console.log('Наименование: ',mass[i].sales.title)
            console.log('Цена: ',mass[i].sales.cena)
        }
        // const listSales = mass.map((id) => <li>{id}</li>);
            return (
                     <div className="container">
                        <div className="jumbotron">
                            <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                            {/* <ol>{listSales}</ol> */}
                            {/* <button onCLick = {this.DeleteCLick}>Delete</button> */}
                        </div>
                    </div>
            )
        }
        // DeleteClick = () => {
        //     Storage.clear();
        // }
    }