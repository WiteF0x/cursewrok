import React, {Component} from 'react'
import './main.css'
// import './test.jpeg'

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
        <p className="subtitle">{article.subtitle}</p>
        <br />
        {article.text} 
        <br />
        <img className="model-photo" alt="error" src={article.url}/>
         <br />
        <button className="add-but">Add +</button><p className="price">Цена: {article.cost} грн.</p> </section>
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

}


export default Article