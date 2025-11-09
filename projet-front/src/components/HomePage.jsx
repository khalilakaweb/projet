import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Store, ShoppingBag, TrendingUp, Sparkles, Zap, Award } from 'lucide-react';

const HomePage = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: <Store className="h-8 w-8" />,
      title: "Premium Vendors",
      description: "Connect with verified businesses"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Luxury Products",
      description: "Discover exclusive collections"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Best Deals",
      description: "Get the best prices guaranteed"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-100/40 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <Sparkles className="h-12 w-12 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-700">
          <Zap className="h-10 w-10 text-blue-500 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce delay-500">
          <Award className="h-14 w-14 text-blue-400 opacity-60" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                </span>
                <span className="text-blue-700 font-semibold text-sm">Now Live - Premium Marketplace</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="text-slate-800">Your Premium</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Marketplace
                  </span>
                  <br />
                  <span className="text-slate-800">Experience</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                  Connect with Tunisia's finest vendors. Discover luxury products, 
                  exclusive deals, and premium services all in one place.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/marketplace" 
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/register" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-600 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-blue-600"
                >
                  Become a Vendor
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-slate-600">Premium Vendors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">10K+</div>
                  <div className="text-slate-600">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-slate-600">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  {/* Current Feature */}
                  <div className="flex items-center gap-4 animate-fade-in">
                    <div className="p-4 bg-blue-100 rounded-2xl">
                      <div className="text-blue-600">
                        {features[currentFeature].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-slate-600">
                        {features[currentFeature].description}
                      </p>
                    </div>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex gap-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentFeature 
                            ? 'w-8 bg-blue-600' 
                            : 'w-2 bg-slate-300'
                        }`}
                        aria-label={`Go to feature ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all ${
                          index === currentFeature
                            ? 'bg-blue-50 border-2 border-blue-200'
                            : 'bg-slate-50 border-2 border-transparent'
                        }`}
                      >
                        <div className="text-blue-600 mb-2">
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold text-slate-800">
                          {feature.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-blue-100 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Flash Sale</div>
                    <div className="font-bold text-slate-800">Up to 70% Off</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;