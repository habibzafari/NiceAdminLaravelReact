import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";


const Layout = ({children}) =>{
    return (
        <div>
            <Header/>
            <Sidebar/>
            {children}
        </div>
    )
}

export default Layout;