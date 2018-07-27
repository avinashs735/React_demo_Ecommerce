import React,{Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route';
 class Content extends Component{
    render(){
        return(
            <Router>
            <div>
                amfabfbafasjbk
                
                <Route path="/" exact render={
                    ()=>{
                        return(<h1> Main Head Section</h1>)
                    }
                }
                />
                <Route path="/about" exact render={
                    ()=>{
                        return(<h1> Main about section</h1>)
                    }
                }
                />
                
            </div>
            </Router>
        )
    }
} 
export default Content;