import React, {Component} from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id={'nav'}>
                <p id={'white-text'} onClick={() => this.props.moveUpData()}>{'< Previous'}</p>

                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <p id={'white-text'} onClick={() => this.props.moveDownData()}>{'Next >'}</p>
            </div>
        )
    }
}