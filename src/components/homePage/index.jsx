import React from 'react'
import { Link } from "react-router-dom";
import SearchPage from '../search';
import AddFilePage from '../addFiles';
import SortByProduct from '../sortByProduct'
import Images from '../images';

import './index.css'

const HomePage = () => {
    return (
        <div>
        <nav>
        <Link to="/">SCAI Vision</Link> 
        </nav>
        <div className='main'>
            <div className='search'>
                <SearchPage />
            </div>
            <div className='sortByButton'>
                <SortByProduct />
            </div>
            <div className='addFile'>
                <AddFilePage />
            </div>            
        </div>
        <div className='images'>
        <Images/>
        </div>
        
        </div>
    )
}

export default HomePage;