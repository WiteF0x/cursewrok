import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    render() {
        
        var arr = [];
        var prod = [
            {
            sa : {
            title: null,
            cena: null,
            }
        }
        ];
        var totalcost = Number(0);
        for (var i = 0; i <localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            prod[i] = JSON.parse(localStorage.getItem(arr[i]))
            totalcost = totalcost + Number(prod[i].cena)
        }
        console.log('key massiv: ',arr)
        console.log('product massiv: ',prod[2].cena)
        const listSales = prod.map((product) =>
            <section key={product.id} className="product_section"> 
                            <li className="product_li title"> 
                                <h2>
                                    Наименование товара:
                                </h2> 
                                <h4>
                                    {product.title}
                                </h4> 
                            </li>
                            <li className="product_li cena">
                                <h4>
                                    <span>Цена: </span>  
                                    {product.cena}
                                </h4>
                            </li>
            </section>);
            return (
                     <div className="container">
                        <div className="jumbotron">
                            <div className="title-order display-4">
                                Your orders
                                <br/>
                                <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                                <hr/>
                            </div>
                            <div className="card-body">
                            <ul>{listSales}</ul>
                            </div>
                        </div>
                        Общая стоимость: {totalcost}
                    </div>
            )
        }
    }