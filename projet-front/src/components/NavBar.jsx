import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Store, LogOut, User, Search, Crown } from "lucide-react";
import axios from "axios";


const NavBar = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch user info
  useEffect(() => {
    axios
      .get("/api/auth/user")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  // Fetch cart count
  useEffect(() => {
    axios
      .get("/api/cart/count")
      .then((res) => setCartCount(res.data.count))
      .catch(() => setCartCount(0));
  }, []);

  const handleLogout = () => {
    axios
      .post("/api/auth/logout")
      .then(() => {
        setUser(null);
        setCartCount(0);
      })
      .catch((err) => console.error(err));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative">
              <Store className="h-10 w-10 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
              <div className="absolute -inset-2 rounded-full bg-blue-100 blur-xl group-hover:bg-blue-200 transition-all" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
                TuniCart
              </span>
              <p className="text-xs text-blue-500 font-medium tracking-widest uppercase">Connect</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link 
              to="/marketplace" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Marketplace
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
            >
              Contact Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="search"
                placeholder="Search luxury products..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative group">
              <button className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 hover:border-blue-200 transition-all relative">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {!user ? (
              <>
                <Link to="/login">
                  <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold tracking-wide shadow-sm">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold tracking-wide shadow-lg hover:shadow-xl flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Become Vendor
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{user.name}</span>
                </div>
                <button
                  className="p-3 rounded-xl bg-slate-50 hover:bg-red-50 border border-slate-200 hover:border-red-200 transition-all"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 text-slate-600" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-6 w-6 text-blue-600" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-blue-100 p-4 bg-white backdrop-blur-xl rounded-2xl shadow-xl mb-4">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-600" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full pl-3 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            <Link to="/marketplace" className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-all">
              <Store className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-semibold">Marketplace</span>
            </Link>

            <Link to="/contact" className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-all">
              <span className="text-slate-700 font-semibold">Contact Us</span>
            </Link>

            <Link to="/cart" className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl hover:bg-blue-100 transition-all">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700 font-semibold">Cart {cartCount > 0 && `(${cartCount})`}</span>
            </Link>

            {!user ? (
              <>
                <Link to="/login">
                  <button className="w-full mt-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold">
                    Sign In
                  </button>
                </Link>
                <Link to="/register">
                  <button className="w-full mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-semibold flex items-center justify-center gap-2">
                    <Crown className="h-4 w-4" />
                    Become Vendor
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-slate-700 font-semibold">{user.name}</span>
                </div>
                <button
                  className="w-full mt-2 px-6 py-3 bg-slate-50 border border-red-200 hover:bg-red-50 rounded-xl flex items-center gap-3 justify-center text-slate-700 hover:text-red-600 transition-all font-semibold"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" /> Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
