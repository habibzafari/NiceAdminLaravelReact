import react from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from './auth/Login';
import Dashboard from './Dashboard';
import User from './User';

function MyApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/user" element={<User/>} />
            </Routes>
        </Router>
    );
}

export default MyApp;

ReactDOM.createRoot(document.getElementById('app')).render(<MyApp />);