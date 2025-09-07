import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Badge } from '~/components/ui/badge';
import { 
  ArrowRight, 
  BarChart3, 
  Calculator, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  Star,
  Quote,
  Shield,
  Clock,
  Target,
  Zap,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

interface CompanyHeroProps {
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
}

export function CompanyHero({ user }: CompanyHeroProps) {

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Catalyst transformed our financial strategy and helped us achieve 300% growth in just 18 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Green Solutions",
      role: "CFO", 
      content: "Professional, reliable, and incredibly knowledgeable. They&apos;ve been instrumental to our success.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Metro Retail",
      role: "Founder",
      content: "The accounting services are top-notch. We finally have clarity on our financial position.",
      rating: 5
    }
  ];

  const faqs = [
    {
      id: "faq-1",
      question: "What makes Catalyst different from other consulting firms?",
      answer: "We combine deep industry expertise with innovative technology solutions. Our personalized approach ensures every strategy is tailored to your specific business needs and goals."
    },
    {
      id: "faq-2", 
      question: "How quickly can we see results from your services?",
      answer: "Most clients see initial improvements within 30-60 days. However, comprehensive transformation typically occurs over 6-12 months as we implement strategic changes across your organization."
    },
    {
      id: "faq-3",
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we serve everyone from startups to enterprise companies. Our scalable solutions and flexible service packages are designed to meet businesses at any stage of growth."
    },
    {
      id: "faq-4",
      question: "What is included in your accounting services?",
      answer: "Our comprehensive accounting services include bookkeeping, tax preparation, financial reporting, compliance management, payroll processing, and strategic financial planning."
    }
  ];

  const services = [
    {
      icon: BarChart3,
      title: "Financial Consulting",
      description: "Strategic financial planning, investment analysis, and performance optimization to maximize your business potential and sustainable growth.",
      features: ["Financial Planning", "Investment Analysis", "Risk Assessment", "Performance Metrics"],
      color: "blue"
    },
    {
      icon: Calculator,
      title: "Accounting Services", 
      description: "Professional bookkeeping, tax preparation, compliance management, and financial reporting to keep your business on track.",
      features: ["Bookkeeping", "Tax Preparation", "Compliance", "Financial Reports"],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      description: "Expert guidance on business development, market analysis, operational efficiency, and strategic decision-making.",
      features: ["Market Analysis", "Growth Strategy", "Operations", "Decision Support"],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {user && (
              <div className="mb-8 animate-fade-in">
                <Badge variant="secondary" className="mb-4 px-6 py-3 text-base font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">
                  🎉 Welcome back, {user.name || 'User'}
                </Badge>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  Ready to accelerate your business growth with our expert solutions?
                </p>
              </div>
            )}
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-slate-900 dark:text-white leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Business Success
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Partner with industry experts who have delivered <strong>$50M+ in value</strong> to 500+ companies. 
              Get strategic consulting, professional accounting, and innovative solutions that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {user ? (
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group px-8 py-4 text-lg">
                  <Link to="/feature/dashboard">
                    Access Your Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group px-8 py-4 text-lg">
                    <Link to="/auth/signup">
                      Start Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-2 border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800 px-8 py-4 text-lg">
                    <Link to="/auth/signin">View Our Work</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">500+</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">20+</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-purple-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">99%</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Success Rate</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">$50M+</span>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">Value Created</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2">Our Expertise</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Comprehensive Business Solutions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                From strategic planning to financial management, we provide the expertise and tools 
                your business needs to thrive in today&apos;s competitive landscape.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-6 relative z-10">
                      <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 text-${service.color}-600 dark:text-${service.color}-400`} />
                      </div>
                      <CardTitle className="text-2xl text-slate-900 dark:text-white mb-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed mb-6 text-slate-600 dark:text-slate-300">
                        {service.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge variant="outline" className="mb-6 px-4 py-2">Client Success</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="relative border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8">
                    <Quote className="h-8 w-8 text-blue-500 mb-4" />
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge variant="outline" className="mb-6 px-4 py-2">About Catalyst</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                  Driving Success Through Expertise & Innovation
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  With over two decades of experience in business consulting and financial services, 
                  we&apos;ve helped hundreds of companies achieve their goals and maximize their potential 
                  through strategic thinking and innovative solutions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Certified Professionals</h3>
                      <p className="text-slate-600 dark:text-slate-300">Industry-certified experts with proven track records across multiple sectors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">24/7 Support</h3>
                      <p className="text-slate-600 dark:text-slate-300">Round-the-clock assistance and ongoing partnership for your success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tailored Solutions</h3>
                      <p className="text-slate-600 dark:text-slate-300">Customized strategies designed specifically for your business goals</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl">
                  <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">500+</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">Clients Served</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-2xl">
                  <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-3">20+</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl">
                  <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">99%</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">Success Rate</div>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 rounded-2xl">
                  <div className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-3">$50M+</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">Value Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2">FAQ</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Get answers to the most common questions about our services and approach.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq) => (
                <Card key={faq.id} className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900 dark:text-white flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">?</span>
                      </div>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2">Get Started</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Take the first step towards business excellence. Schedule a consultation with our experts 
                and discover how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl mb-2">Get Your Free Consultation</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                        <Input id="firstName" placeholder="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                      <Input id="company" placeholder="Your Company" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
                        placeholder="Tell us about your business needs..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    Prefer to speak directly? Reach out to us using any of the methods below.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Phone</p>
                      <p className="text-slate-600 dark:text-slate-300">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-slate-300">hello@catalyst.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Office</p>
                      <p className="text-slate-600 dark:text-slate-300">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8">
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1">
                      Schedule Call
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}