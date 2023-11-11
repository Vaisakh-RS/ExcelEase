import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UploadFile from './pages/UploadFile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload/" element={<UploadFile />} />
            </Routes>
        </Router>
    );
}

export default App;
