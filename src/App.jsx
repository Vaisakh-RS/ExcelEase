import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ViewDataCard from './pages/ViewDataCard';
import ViewTable from './pages/ViewTable';
import DataLayout from './Layout/Data';
import {Toaster} from 'react-hot-toast';

function App() {
    return (
        
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<DataLayout />}>
                    <Route path="/data" element={<ViewTable />} />
                    <Route path="/data/:id" element={<ViewDataCard />} />
                    </Route>
                </Routes>
                <Toaster/>
            </Router>
        
       
    );
}

export default App;
