import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Manual from './Manual';
import AI from './AI';

const Main = () => {


  return (
  <div>
   <div className="game" style={{paddingLeft:"10%",paddingTop:"10%"}}>
	<Switch>
	 <Route path='//'>
    	 <nav>
          <ul>
            <ol>
         <Link to="/Manual">
 	   <Button variant="contained" style={{margin: '2%',fontSize:'2vw',padding: '5% 10%'}} color="primary">Signle</Button>
    	 </Link>
    	 </ol>
    	 <ol>
    	  <Link to="/AI">
 	   <Button variant="contained" style={{margin: '2%',fontSize: '2vw',padding: '5% 10%'}} color="primary">AI mode</Button>
    	 </Link>
    	 </ol>
    	 </ul>
        </nav>
    	
      	</Route>
        <Route exact path='/Manual' component={Manual}></Route>
        <Route exact path='/AI' component={AI}></Route>
      </Switch>
     </div>
    </div>
  );
}

export default Main;
