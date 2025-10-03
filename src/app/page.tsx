import { Button } from "@/components/ui/button";
import { Shield, Camera, Smartphone, AlertTriangle, Clock, MapPin, Flame, CheckCircle, Download, Play, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 p-2 rounded-lg">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Flame Guard</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-red-500 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-red-500 transition-colors font-medium">How It Works</a>
            <a href="#contact" className="text-muted-foreground hover:text-red-500 transition-colors font-medium">Contact</a>
          </nav>
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-red-500 fill-current" />
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Trusted by 10,000+ users</span>
              </div>
            </div>
            <h1 className="hero-title text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Advanced Fire Detection
              <span className="text-red-500 block">Powered by IoT</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Protect your property with our intelligent fire detection system using Raspberry Pi cameras and instant mobile notifications to emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download App Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/20">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-500 mr-1" />
                Free 30-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-500 mr-1" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-red-500 mr-1" />
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium text-red-700 dark:text-red-300">Why Choose Us</span>
            </div>
            <h2 className="section-title text-5xl font-bold text-foreground mb-6">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive fire detection system combines cutting-edge technology with reliable emergency response to keep you safe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Camera className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">Smart Camera Detection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced computer vision powered by Raspberry Pi cameras that can detect fire and smoke in real-time with 99.9% accuracy.
              </p>
            </div>
            
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Smartphone className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">Instant Mobile Alerts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive immediate push notifications on your mobile device the moment fire is detected, ensuring rapid response within seconds.
              </p>
            </div>
            
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <MapPin className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">Auto Fire Station Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically contacts the nearest fire station with your location and incident details for fastest emergency response.
              </p>
            </div>
            
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Clock className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">24/7 Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous monitoring ensures your property is protected around the clock, even when you're away from home.
              </p>
            </div>
            
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <AlertTriangle className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">Incident Logging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Complete fire incident logs with timestamps, images, and response times for insurance claims and safety analysis.
              </p>
            </div>
            
            <div className="group bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:border-red-200 dark:hover:border-red-800">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl w-fit mb-6 group-hover:bg-red-500 group-hover:text-white transition-all">
                <Shield className="h-8 w-8 text-red-500 group-hover:text-white" />
              </div>
              <h3 className="feature-title text-xl font-semibold text-card-foreground mb-4">Reliable IoT System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on robust Raspberry Pi hardware with redundant connectivity options for maximum reliability and uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium text-red-700 dark:text-red-300">Simple Process</span>
            </div>
            <h2 className="section-title text-5xl font-bold text-foreground mb-6">How Flame Guard Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple setup, powerful protection. Here's how our system keeps you safe in just three steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Detection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Raspberry Pi cameras continuously monitor your space using advanced computer vision to detect fire and smoke patterns with machine learning algorithms.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-red-200 dark:bg-red-800 -z-10"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Alert</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instant notifications are sent to your mobile app with real-time images, location details, and severity assessment of the detected fire.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-red-200 dark:bg-red-800 -z-10"></div>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Response</h3>
              <p className="text-muted-foreground leading-relaxed">
                The system automatically contacts the nearest fire station while logging all incident data and providing real-time updates on response status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-5xl font-bold mb-6">
              Ready to Protect Your Property?
            </h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Join thousands of users who trust Flame Guard to keep their homes and businesses safe from fire hazards. Download now and get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-white text-red-500 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download App Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-white/30 text-red-500 hover:bg-white/10 backdrop-blur">
                Schedule Demo
              </Button>
            </div>
            <div className="mt-8 text-sm opacity-75">
              Available for iOS and Android • Free 30-day trial
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/30 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-red-500 p-2 rounded-lg">
                  <Flame className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">Flame Guard</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Advanced IoT fire detection system protecting homes and businesses worldwide with cutting-edge technology.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Now
              </Button>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-6">Product</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-red-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-6">Support</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-red-500 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Live Chat</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-6">Company</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Flame Guard. All rights reserved. Built with ❤️ for safety.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}