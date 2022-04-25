import React , { Component } from 'react'
import './Bouton.css'
import Modal from './Modal'

export default class Bouton extends Component {
    state = {
        visible:false

    }
    show = () => {
        this.setState({
            visible: true
        })
    }
    hide = () => {
        this.setState({
            visible: false
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.show} className='Bouton'> Add Vacancy</button>
                <Modal 
                    visible={this.state.visible}
                    hide = {this.hide}
                />
            
            
          </div>
        )
    }
}
