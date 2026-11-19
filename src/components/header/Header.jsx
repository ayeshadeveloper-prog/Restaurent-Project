import { useState } from "react"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const navigationLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Menu", to: "/menu" },
    { label: "Cart", to: "/cart" },
    { label: "Checkout", to: "/checkout" },
    { label: "Contact", to: "/contact" },
]

const linkClassName =
    "relative py-2 font-medium text-white transition duration-300 hover:text-green-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="relative z-50">
            <nav className="bg-slate-900 text-white shadow-md" aria-label="Main navigation">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex min-h-20 items-center justify-between gap-4">
                        <Link to="/" className="shrink-0 text-2xl font-bold text-white" onClick={closeMenu}>
                            Food<span className="text-green-400">Villa</span>
                        </Link>

                        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
                            {navigationLinks.map(({ label, to }) => (
                                <li key={to}>
                                    <Link to={to} className={linkClassName}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            to="/dashboard/addTodo"
                            className="hidden rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-green-700 lg:inline-flex"
                        >
                            Dashboard
                        </Link>

                        <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-xl text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 lg:hidden"
                            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-navigation"
                            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        >
                            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div id="mobile-navigation" className="border-t border-white/10 pb-4 pt-2 lg:hidden">
                            <ul className="flex flex-col gap-1">
                                {navigationLinks.map(({ label, to }) => (
                                    <li key={to}>
                                        <Link
                                            to={to}
                                            className="block rounded-lg px-3 py-2.5 font-medium text-white transition hover:bg-white/10 hover:text-green-400"
                                            onClick={closeMenu}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link
                                        to="/dashboard/addTodo"
                                        className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700"
                                        onClick={closeMenu}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header
