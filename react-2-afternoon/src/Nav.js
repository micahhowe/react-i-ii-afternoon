import React, {Component} from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id={'nav'}>
                <button id={'white-text'} onClick={() => this.props.moveDownData()}>{'< Previous'}</button>

                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button id={'white-text'} onClick={() => this.props.moveUpData()}>{'Next >'}</button>
            </div>
        )
    }
}