import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'

export default class Bin extends Component {
    render() {
        var style = {
            fontSize: 35
          };
        var arr = [];
        var prod = [
            {
            sa : {
            title: null,
            cena: null,
            }
        }
        ];
        var totalcost = parseInt(0);
        for (var i = 0; i <localStorage.length; i++) {
            arr[i] = localStorage.key(i);
            prod[i] = JSON.parse(localStorage.getItem(arr[i]))
            totalcost = totalcost + parseInt(prod[i].cena)
        }
        console.log('key massiv: ',arr)
        console.log('product massiv: ',prod)
        console.log('totalcost: ',totalcost)
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
                                    {product.cena} грн.
                                </h4>
                            </li>
            </section>);
            if(localStorage.length > 0){ 
            return (
                     <div className="container">
                        <div className="jumbotron">
                            <div className="title-order display-4">
                                Your orders
                                <br/>
                                <hr/>
                                <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                            </div>
                            <div className="card-body">
                                <ul>{listSales}</ul>
                            </div>
                            <div className="totalcost">
                            <Link to='/bin'><button className="btn" onClick={this.DeteleAllOrders}>Delete all orders</button></Link>
                            <br/>
                                <span>Общая стоимость:</span> <span className="cost">{totalcost}</span> грн.
                            </div>
                        </div> 
                    </div>
            )}
            else {
                return(
                    <div className="container">
                    <div className="jumbotron">
                        <div className="title-order display-4">
                            Your orders
                            <br/>
                            <hr/>
                            <Link to='/'><img className="home-logo" alt="home" src="/img/home.png" /></Link>
                            <br/>
                                <br/>
                            <br/>
                            <div className="display-3">
                                Your shopping cart is empty.
                            </div>
                            <br/>
                            <div clasName="purpose" style={style}>
                                You can buy whatever you want on the main page. 
                            </div>
                        </div>
                    </div> 
                </div>
                )
            }
        }
        DeteleAllOrders = () => {
            if(localStorage.length > 0) {
                localStorage.clear()
            }
            else {
                alert('You have no orders.')
            }
        }
    }