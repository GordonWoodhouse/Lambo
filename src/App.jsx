import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
// import lambo1 from "./components/images/Lambo.jpg" ;
//import lambo2 from "./components/images/C2.jpg"


function App(){
  return(

    <div>
    <Message />
    <img src = "./images/Lambo.jpg" alt = "Lambo"/>
    <ListGroup />
    <img src = "./images/c2.jpg" alt = "Lambo2"/>  
    </div>)
}

export default App;