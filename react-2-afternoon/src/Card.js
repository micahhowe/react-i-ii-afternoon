import React, {Component} from 'react'

export default class Card extends Component {
    constructor(props){
        super(props)

    }
    render(){
        let dataName = this.props.data.map(function (el){
            return el.name.first + ' ' + el.name.last;
        });
        let dataCity = this.props.data.map(function (el){
            return el.city;
        });
        let dataTitle = this.props.data.map(function (el){
            return el.title;
        });
        let dataEmployer = this.props.data.map(function (el){
            return el.employer;
        });
        let dataMovies = this.props.data.map(function (el){
            return el.favoriteMovies;
        });

        return(
            <div id={'card'}>
                <div id={'card-content'}>
                    <div id={'fraction'}>
                    <h2>{this.props.index + 1}/{this.props.data.length}</h2>
                    </div>
                    <h1>{dataName[this.props.index]}</h1>
                    <h3>From: {dataCity[this.props.index]}</h3>
                    <h3>Title: {dataTitle[this.props.index]}</h3>
                    <h3>Employer: {dataEmployer[this.props.index]}</h3>
                    <br />

                    <h3>Favorite Movies:</h3>
                    <ol>
                    <li>{dataMovies[this.props.index][0]}</li>
                    <li>{dataMovies[this.props.index][1]}</li>
                    <li>{dataMovies[this.props.index][2]}</li>
                    </ol>
                    
                </div>
            </div>
        )
    }
}