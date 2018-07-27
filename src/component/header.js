import React,{Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import About from './staticpage/about'
 class Header extends Component{
    render(){
        return(
            <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
               <Route path="/" exact render={
                    ()=>{
                        return(<h1> Main Head Section</h1>)
                    }
                }
                />
                <Route path="/about" exact render={
                    ()=>{
                        return(<About/>)
                    }
                }/>
            </div>
            </Router>
        )
    }
} 
export default Header;