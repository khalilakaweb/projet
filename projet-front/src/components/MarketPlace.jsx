import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Star, Crown, CheckCircle, ShoppingBag, Filter, Tag } from 'lucide-react';
import AddBusiness from './AddBusiness';
import EditBusiness from './EditBusiness';
import DeleteBusiness from './DeleteBusiness';

// Demo Data
const products = [
  {
    id: 1,
    title: "Royal Sapphire Necklace",
    vendor: "Bijoux Luxe",
    price: 3200,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    luxury: true,
    featured: true,
    rating: 5,
    tags: ["Jewelry", "New", "Top Seller"],
  },
  {
    id: 2,
    title: "Italian Silk Scarf",
    vendor: "Moda Deluxe",
    price: 540,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    luxury: true,
    featured: false,
    rating: 4,
    tags: ["Fashion", "New"],
  },
  {
    id: 3,
    title: "Handmade Leather Bag",
    vendor: "Artisan House",
    price: 960,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    luxury: false,
    featured: false,
    rating: 4,
    tags: ["Bags"],
  },
  {
    id: 4,
    title: "Premium Smart Watch",
    vendor: "Tech Glam",
    price: 1290,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    luxury: true,
    featured: false,
    rating: 5,
    tags: ["Tech", "Hot"],
  },
  {
    id: 5,
    title: "Exclusive Sneaker Drop",
    vendor: "Urban Elite",
    price: 690,
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29c?auto=format&fit=crop&w=400&q=80",
    luxury: false,
    featured: true,
    rating: 4,
    tags: ["Shoes", "New"],
  },
  {
    id: 6,
    title: "French Crystal Vase",
    vendor: "Maison Précieux",
    price: 1780,
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
    luxury: true,
    featured: false,
    rating: 5,
    tags: ["Home", "New"],
  },
];

const categories = ["All", "Jewelry", "Fashion", "Tech", "Bags", "Shoes", "Home"];

const MarketPlace = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const user = useSelector((state) => state.AuthReducer.user);
  const isAdmin = user?.role === 'admin';

  const filtered = products.filter((p) =>
    (category === "All" || p.tags.includes(category)) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "luxury") return b.luxury - a.luxury;
    return b.featured - a.featured;
  });

 

  return (
    <div className="min-h-[85vh] bg-gradient-to-bl from-blue-50 via-white to-slate-100 pb-20">
      {/* Banner/Hero */}
      <section className="relative px-4 w-full max-w-7xl mx-auto mt-10 mb-16">
        <div className="rounded-3xl bg-blue-700 bg-gradient-to-r from-blue-700 to-blue-900 shadow-2xl p-10 py-16 w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden">
          <div className="relative z-10 w-full mb-10 lg:mb-0 lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">Discover Tunisia's Most Exclusive <span className="bg-white/20 px-2 rounded-xl">Marketplace</span></h2>
            <p className="text-blue-100/90 text-lg max-w-xl mt-5 mb-8">Shop luxury, rare and trending products. Join the premium community and elevate your style and lifestyle.</p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-blue-700 px-8 py-3 font-semibold rounded-xl shadow-md hover:bg-blue-100 transition text-lg flex items-center gap-2"><ShoppingBag className="h-5 w-5"/> Shop Now</button>
              <button className="bg-blue-800/80 text-white px-8 py-3 font-semibold rounded-xl shadow-md border-2 border-blue-100 hover:bg-blue-900 transition text-lg flex items-center gap-2"><Crown className="h-5 w-5 text-yellow-300"/> Become a Vendor</button>
            </div>
          </div>
          <div className="relative z-10 w-full lg:w-1/2 h-52 lg:h-72 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=450&q=80" alt="Luxury Marketplace" className="rounded-2xl shadow-2xl border-8 border-blue-800/40 w-72 h-52 lg:w-96 lg:h-72 object-cover object-top bg-white" />
            <div className="absolute top-0 left-1/3 w-28 h-28 bg-blue-300/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 right-8 w-36 h-12 bg-blue-200/30 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1 left-4 flex items-center gap-0.5">{
              Array(5).fill(0).map((_,i) => <Star key={i} className="h-5 w-5 text-yellow-300"/>)
            }</div>
          </div>
        </div>
      </section>

      {/* Admin Add Business */}
      {isAdmin && (
        <section className="w-full max-w-7xl mx-auto px-4 -mt-6 mb-2">
          <AddBusiness />
        </section>
      )}

      {/* Marketplace Filters & Controls */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-4">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"/>
            <input value={search} onChange={e=>setSearch(e.target.value)} type="search" placeholder="Search luxury products..." className="pl-12 pr-4 py-3 bg-slate-50 border border-blue-100 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-w-[250px]"/>
          </div>
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Filter className="h-5 w-5 text-blue-400"/>
            {categories.map(c=>(
              <button key={c} onClick={()=>setCategory(c)} className={`px-4 py-2 rounded-full border-2 font-semibold transition-all text-sm ${category===c?"bg-blue-600 text-white border-blue-700 shadow-lg":"bg-white text-blue-600 border-blue-100 hover:bg-blue-100"}`}>{c}</button>
            ))}
          </div>
          {/* Sort */}
          <div className="flex gap-2 items-center">
            <span className="text-blue-600 font-semibold">Sort by</span>
            <select value={sort} onChange={e=>setSort(e.target.value)} className="border border-blue-100 rounded-xl px-5 py-2 bg-white text-blue-700 font-medium focus:ring-blue-500">
              <option value="featured">Featured</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
        {sorted.length ? sorted.map(product=>(
          <div key={product.id} className={
            `relative group bg-white rounded-3xl shadow-2xl p-5 border-2 ${product.luxury?"border-blue-300":"border-slate-200"} flex flex-col h-full transition-all hover:scale-105 hover:shadow-blue-200`}
          >
            {product.featured && (
              <span className="absolute top-5 left-6 inline-flex items-center gap-1 bg-gradient-to-r from-blue-700 to-blue-400 text-white rounded-full px-4 py-1 font-semibold text-xs shadow-md animate-bounce">
                <Crown className="h-4 w-4 text-yellow-300"/>
                Featured
              </span>)
            }
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-5 border-4 border-blue-50 flex items-center justify-center">
              <img src={product.image} alt={product.title} className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300" onError={e=>e.target.style.display='none'} />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="flex gap-1 mb-2">{/* Tags */}{product.tags.map(t => <span key={t} className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded-full inline-flex items-center"><Tag className="w-3 h-3 mr-1"/>{t}</span>)}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                  {product.title}
                  {product.luxury && <Star className="h-5 w-5 text-blue-300"/>}
                </h3>
              </div>
              <div className="text-blue-600 text-sm mb-2">by <span className="font-semibold">{product.vendor}</span></div>
              <div className="flex gap-1 mb-2">{Array(5).fill(0).map((_,i) => <Star key={i} className={`h-4 w-4 ${i<product.rating?'text-yellow-300':'text-slate-200'}`}/>)}</div>
              <div className="text-2xl font-extrabold text-blue-700 tracking-tight mb-2">{product.price} TND</div>
              {product.luxury && <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full px-3 py-0.5 text-xs font-semibold"><CheckCircle className="w-4 h-4"/> Luxury</span>}
            </div>

            {isAdmin && product?._id && (
              <div className="mt-4 flex gap-2">
                <EditBusiness business={product} />
                <DeleteBusiness id={product._id} />
              </div>
            )}
          </div>
        )) : (
          <div className="col-span-full text-center text-slate-500 text-2xl py-12">No products match your search.</div>
        )}
      </section>
    </div>
  );
}

export default MarketPlace;