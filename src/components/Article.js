import React, {Component} from 'react'
import './main.css'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    
    // componentWillMount() {
    //     console.log('---', 'mounting')
    // }
    // componentWillUpdate() {
    //     console.log('---', 'will update')
    // }

    render() {
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && 
        <section className="card-text">
            <p className="subtitle">
                {article.subtitle}
            </p>
            <br />
                {article.text} 
            <br />
            <img className="model-photo" alt="error" src={article.url}/>
            <br />
            <button className="add-but" onClick={this.onAddClick} >
                Add +
            </button>
            <p className="price">
                Цена: 
                {article.cost} 
                грн.
            </p> 
        </section>
        return (
            <div className="card mx-auto" style = {{width: '100%', margin: '35px'}}>
                <div className="card-header">
                    <h2>
                    {article.title}
                    <button onClick={onButtonClick} className="mybut btn float-right">
                    {isOpen ? 'close' : 'open' }
                    </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h5 className="card-subtext text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h5>
                    {body}
                </div>
            </div>
        )
    }

    onAddClick = () => {
        //made initialization data localstorage by ms of time
        var ran = Math.floor(Math.random() * 10000000) + 1;
        var sale = { 
            id: ran,   
            title: this.props.article.subtitle,
            cena: this.props.article.cost,
        }
        localStorage.setItem(ran, JSON.stringify(sale))
        console.log(sale)
    }

}


export default Article