import Layout from "./Layout.jsx";

import Landing from "./Landing";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import Subscribe from "./Subscribe";

import AccountSettings from "./AccountSettings";

import AboutThePacks from "./AboutThePacks";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Landing: Landing,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    Subscribe: Subscribe,
    
    AccountSettings: AccountSettings,
    
    AboutThePacks: AboutThePacks,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Landing />} />
                
                
                <Route path="/Landing" element={<Landing />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/Subscribe" element={<Subscribe />} />
                
                <Route path="/AccountSettings" element={<AccountSettings />} />
                
                <Route path="/AboutThePacks" element={<AboutThePacks />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}