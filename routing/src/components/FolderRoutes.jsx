import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contect from '../pages/Contect'
import Service from '../pages/Service'
import PageNotFount from '../pages/PageNotFount'

const FolderRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contect' element={<Contect />} />
                <Route path='/service' element={<Service />} />
                <Route path='' element={<PageNotFount />} />
            </Routes>
        </div>
    )
}

export default FolderRoutes
