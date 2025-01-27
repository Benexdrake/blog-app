import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from '@/components/navbar/navbar.tsx'
import Blog from "./pages/blog/blog";
import New from "./pages/blog/new";

import './index.css'

function App()
{

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Blog/>}/>
                <Route path="/new" element={<New/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;