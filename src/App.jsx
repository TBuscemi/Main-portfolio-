import './style/App.css';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./component/Pages/Home/Home";
import SimpleFlex from './component/Pages/SimpleFlex/SimpleFlex';
import SimpleGrid from './component/Pages/SimpleGrid/SimpleGrid';
import ReactTest from './component/ReactTest/ReactTest';
function App() {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home/>}/>    
                <Route  path="/simpleflex" element={<SimpleFlex/>}/>    
                <Route  path="/simpleGrid" element={<SimpleGrid/>}/>        
                <Route  path="/TEST2" element={<ReactTest/>}/>    
            </Routes>
        </>
    );
}

export default App;
