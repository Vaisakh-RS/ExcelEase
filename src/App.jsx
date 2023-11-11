import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UploadFile from './pages/UploadFile';
import ViewDataCard from './pages/ViewDataCard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/data/:id" element={<ViewDataCard />} />
            </Routes>
        </Router>
    );
}

export default App;
