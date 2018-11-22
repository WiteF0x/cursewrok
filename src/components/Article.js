import React, {Component} from 'react'
import './main.css'

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    componentWillMount() {
        console.log('---', 'mounting')
    }
    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.defualtOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }
    componentWillUpdate() {
        console.log('---', 'will update')
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen   
    // }

    render() {
        
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className="card-text">
        {article.text} 
        <br />
        <img src={article.url}/>
         <br />
        <p className="price">Цена: {article.cost} грн.</p> <button className="add-but">Add +</button></section>
        return (
            <div className="card mx-auto" style = {{width: '50%', margin: '20px'}}>
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

}


export default Article