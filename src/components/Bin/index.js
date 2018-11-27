import React, {Component} from 'react'

export default class Bin extends Component {
    render() {
        for (var i = 0; i < localStorage.length; i++) {
            const list = JSON.parse(localStorage.getItem('task'+i))
            return (
                <div className={'task'+i}>
                    <h2>{list['title']}</h2>
                    <h3>{list['cena']}</h3>
                </div>
            )
        }
    }
}