import React, {Component} from 'react'
import EvenAndOdd from '../TopicBrowser/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import sum from '../Topics/Sum'

export default class TopicBrowser extends Component{
    render(){
    
    return(
        <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome/>
        <sum />
        </div>
    )
}
}
