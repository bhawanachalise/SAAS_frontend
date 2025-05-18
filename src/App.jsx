import {BrowserRouter,Router,Routes,Route} from "react-router-dom"//package.json baata router laai export gareko yahaa(install gareko router)


import Home from "./Home"
import About from "./About"
import LearningUseEffect from "./LearningUseEffect"
import Contact from "./Contact"

     function App(){
      return (
        <BrowserRouter>
        <Routes>  
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/useeffect" element={<LearningUseEffect />}/>
       
         

        </Routes>
        </BrowserRouter>
        )
     } 
     
        
      
      
export default App
