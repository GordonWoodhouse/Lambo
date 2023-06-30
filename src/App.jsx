import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import lambo1 from "./components/images/Lambo.jpg" ;
import lambo2 from "./components/images/C2.jpg"


function App(){
  return(

    <div>
    <Message />
    <img src = {lambo1} alt = "Lambo"/>
    <ListGroup />
    <img src = {lambo2} alt = "Lambo2"/>  
    </div>)
}

export default App;