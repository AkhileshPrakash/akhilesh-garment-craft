import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Award, Users, Globe, ShoppingBag, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import heroImage from '../assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Infrastructure",
      description: "State-of-the-art manufacturing facility with modern machinery and quality control systems.",
      link: "/infrastructure"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
      title: "Products",
      description: "Wide range of knitted garments including T-Shirts, Pull Overs, Sweat Shirts, and Pyjamas.",
      link: "/products"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Our Buyers",
      description: "Trusted by international clients including OTTO, MR LADY, FAMILY DOLLAR, and LPP S.A.",
      link: "/buyers"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Certificates",
      description: "SMETA SEDEX 4 Pillar Audit certified ensuring ethical and quality manufacturing standards.",
      link: "/certificates"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "About Us",
      description: "Established company with years of experience in textile manufacturing and global exports.",
      link: "/about"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-secondary" />,
      title: "Contact",
      description: "Get in touch with our team for inquiries, orders, and partnerships worldwide.",
      link: "/contact"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Akhilesh Exports Manufacturing Facility" 
            className="w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-secondary/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/4 left-20 w-20 h-20 bg-white/8 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Enhanced Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4 animate-pulse-glow">
                🏭 Since 2000 • Premium Quality Manufacturing
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white font-poppins mb-8 tracking-tight">
              <span className="block">Akhilesh</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Exports
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 mb-6 font-medium">
              World-Class Knitted Garments Manufacturer
            </p>
            <p className="text-lg sm:text-xl text-white/85 mb-12 max-w-4xl mx-auto leading-relaxed">
              Trusted by 50+ global brands • 20+ years of excellence • SMETA certified facility in Tirupur
              <br className="hidden sm:block" />
              Specializing in T-Shirts, Pull Overs, Sweat Shirts, and Premium Knitted Apparel
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/products" className="btn-hero group flex items-center space-x-3">
                <span>Explore Our Products</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="btn-outline bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Hint Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">About Akhilesh Exports</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 20 years of experience in the textile industry, we have established ourselves as a reliable partner for global brands seeking high-quality knitted garments.
              </p>
              <p className="text-muted-foreground mb-8">
                Our state-of-the-art manufacturing facility in Tirupur, combined with skilled craftsmanship and modern technology, ensures that every garment meets international quality standards.
              </p>
              <Link to="/about" className="btn-hero group flex items-center space-x-2 w-fit">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Textile Manufacturing" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buyers Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Our Global Buyers</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading brands worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['OTTO', 'MR LADY', 'FAMILY DOLLAR', 'LPP S.A.'].map((buyer, index) => (
              <div key={buyer} className="feature-card text-center animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <img 
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=150&h=100&fit=crop" 
                  alt={buyer}
                  className="w-full h-20 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-foreground">{buyer}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/buyers" className="btn-outline">View All Buyers</Link>
          </div>
        </div>
      </section>

      {/* Product Categories Scrolling */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground">Premium quality knitted garments for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {['T-Shirts', 'Pull Overs', 'Sweat Shirts', 'Pyjamas', 'Polo Shirts', 'Tank Tops'].map((product, index) => (
              <Link 
                key={product}
                to="/products"
                className="product-card animate-fade-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop" 
                  alt={product}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground font-poppins mb-2">{product}</h3>
                  <p className="text-muted-foreground text-sm">High-quality {product.toLowerCase()} in various styles and colors</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-hero group flex items-center space-x-2 w-fit mx-auto">
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-gradient textile-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Why Choose Akhilesh Exports?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive services and capabilities that make us a trusted partner 
              in the global textile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={feature.title}
                to={`${feature.link}#top`}
                className="feature-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary group-hover:text-secondary transition-colors duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your textile manufacturing needs and discover how we can help bring your vision to life.
            </p>
            <Link to="/contact" className="btn-hero group flex items-center space-x-2 w-fit mx-auto">
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-foreground font-poppins mb-4">
              Numbers That Speak Excellence
            </h2>
            <p className="text-xl text-primary-foreground/80">Our journey in numbers</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-up feature-card bg-white/10 backdrop-blur-sm border-white/20">
              <div className="text-5xl font-bold text-primary-foreground font-poppins mb-3">20+</div>
              <div className="text-primary-foreground/90 font-medium">Years Experience</div>
            </div>
            <div className="animate-fade-up feature-card bg-white/10 backdrop-blur-sm border-white/20" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold text-primary-foreground font-poppins mb-3">50+</div>
              <div className="text-primary-foreground/90 font-medium">Global Buyers</div>
            </div>
            <div className="animate-fade-up feature-card bg-white/10 backdrop-blur-sm border-white/20" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold text-primary-foreground font-poppins mb-3">150K+</div>
              <div className="text-primary-foreground/90 font-medium">Garments/Month</div>
            </div>
            <div className="animate-fade-up feature-card bg-white/10 backdrop-blur-sm border-white/20" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold text-primary-foreground font-poppins mb-3">24/7</div>
              <div className="text-primary-foreground/90 font-medium">Quality Control</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
