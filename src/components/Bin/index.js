import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    render() {
        var arr = [];
        var sales = [
            {
            title: "",
            cena: "",
    }
    ]
        for (var i = 0; i < localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            sales[i].title=JSON.parse(localStorage.getItem(arr[i])).title
            sales[i].cena=JSON.parse(localStorage.getItem(arr[i])).cena
            console.log('Наименование: ',sales[i].title)
            console.log('Цена: ',sales[i].cena)
        }
        // const listSales = mass.map((id) => <li>{id.title}</li>);
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