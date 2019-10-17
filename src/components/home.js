import React, { Component } from 'react'
import sample  from '../img/impact-hero.mp4'

export default class Home extends Component {
    render() {
        return (
            <div className = "hero">
   
<video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
            </div>
        )
    }
}
