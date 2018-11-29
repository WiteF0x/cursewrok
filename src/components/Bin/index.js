import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    constructor(props) {
            super(props)
            this.state = {
                title:"",
                cena:""
            }
        }
    render() {
        
        var arr = [];
        var prod = [
            {
            sa : {
            title:null,
            cena: null,
            }
        }
        ];
        for (var i = 0; i <localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            prod[i] = JSON.parse(localStorage.getItem(arr[i]))
            console.log('Наименование: ', prod[i].title)
        }
        console.log('key massiv: ',arr)
        console.log('product massiv: ',prod)
        // const listSales = mass.map((id) => <li>{id}</li>);
            return (
                     <div className="container">
                        <div className="jumbotron">
                            <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                            {/* <ol>{listSales}</ol> */}
                        </div>
                    </div>
            )
        }
    }