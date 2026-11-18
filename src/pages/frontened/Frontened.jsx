import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Home from "./home/Home"
import About from "./about/About"
import Contact from "./contact/Contact"
import Cart from "./cart/Cart"
import Checkout from "./checkout/Checkout"
import Menu from "./menu/Menu"
import { CartProvider } from "../../context/CartContext.jsx"

const Frontend = () => {
    return (
        <CartProvider>
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='menu' element={<Menu />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='checkout' element={<Checkout />} />
                </Routes>
            </main>
            <Footer />
        </CartProvider>
    )
}

export default Frontend

