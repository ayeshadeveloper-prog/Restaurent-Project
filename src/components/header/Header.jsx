import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="bg-slate-900 text-white shadow-md">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                      <Link to="/" className="text-2xl font-bold text-white">Food<span className="text-green-400">Villa</span></Link>
                        {/* Navigation Links - Center */}
                        <ul className="hidden md:flex items-center gap-10">

                            <li>
                                <Link
                                    to="/"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/menu"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Menu
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Cart
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/checkout"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Checkout
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="relative py-2 font-medium text-white hover:text-green-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>

                        {/* Dashboard - Right */}
                        <Link
                            to="/dashboard/addTodo"
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold transition duration-300"
                        >
                            Dashboard
                        </Link>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
