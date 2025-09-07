import type { MetaFunction } from "@remix-run/node";
import { LandingHero } from "~/components/landing/LandingHero";
import { useLoaderData } from "@remix-run/react";
import { loader as LandingLoader } from "./loader+/landing.loader";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Catalyst - Learning Community & Mentorship Platform" },
    {
      name: "description",
      content:
        "Join the Catalyst learning community - where students connect with mentors for personalized guidance. Learn coding together, get mentorship from Leo, and accelerate your development journey.",
    },
    {
      name: "keywords",
      content: "mentorship, coding, learning, students, community, programming, development, Leo, portfolio",
    },
    { property: "og:title", content: "Catalyst - Learning Community & Mentorship" },
    {
      property: "og:description",
      content:
        "Connect with mentors and fellow students in our learning community. Get personalized guidance and accelerate your coding journey.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Catalyst - Learning Community & Mentorship" },
    {
      name: "twitter:description",
      content: "Join our community of learners and get mentorship for your coding journey.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Catalyst Learning Community" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
};

export const loader = LandingLoader;

export default function Landing() {
  const { user } = useLoaderData<typeof loader>();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <Link
          to="/"
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg">
            C
          </div>
        </Link>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("community");
              if (element) {
                const headerOffset = 120;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="relative z-20">Community</span>
          </a>
          <a
            className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                const headerOffset = 120;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="relative z-20">Contact</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.name}
              </span>
              <Link
                to="/feature/dashboard"
                className="font-medium transition-colors hover:text-foreground text-muted-foreground text-sm cursor-pointer"
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <>
              <Link
                to="/auth/signin"
                className="font-medium transition-colors hover:text-foreground text-muted-foreground text-sm cursor-pointer flex items-center gap-2"
              >
                Log In
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <Link
                to="/auth/signup"
                className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
              >
                Join Community
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm">
            C
          </div>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("community")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Community
              </button>
              <button
                onClick={() => handleMobileNavClick("contact")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Contact
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                {user ? (
                  <Link
                    to="/feature/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/auth/signin"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/auth/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Join Community
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <LandingHero user={user} />

      {/* Community Section */}
      <div id="community" className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Join Our Learning Community
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect with fellow students, share knowledge, and grow together. 
            Our community is designed for collaborative learning, mentorship, 
            and building the next generation of developers.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn Together</h3>
              <p className="text-muted-foreground text-sm">
                Study groups, code reviews, and collaborative learning sessions with peers
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧑‍🏫</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Mentored</h3>
              <p className="text-muted-foreground text-sm">
                Connect with experienced developers for guidance and career advice
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Build Projects</h3>
              <p className="text-muted-foreground text-sm">
                Collaborate on real-world projects and build your portfolio together
              </p>
            </div>
          </div>

          {/* Featured Mentor Section */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-600/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-4">
                  <span className="text-lg">⭐</span>
                  Featured Mentor
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Learn from Leo
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Get personalized mentorship from an experienced developer. 
                  Join study groups, receive code reviews, and accelerate your learning journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://portfolio.leocode.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                  >
                    View Portfolio
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById("contact");
                      if (element) {
                        const headerOffset = 120;
                        const elementPosition =
                          element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-accent transition-colors"
                  >
                    Get Mentorship
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                  L
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative py-24 px-4 bg-card/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Get Mentorship & Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to accelerate your learning? Connect with Leo for personalized mentorship 
            or join our student community for collaborative learning.
          </p>
          
          {/* Leo's Contact Card */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-600/30 mb-12">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-3xl mb-4">
                L
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Leo - Your Mentor</h3>
              <p className="text-muted-foreground max-w-2xl">
                Experienced developer offering personalized mentorship, code reviews, and career guidance. 
                Visit my portfolio to see my work and reach out for collaboration opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-xl">🌐</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Portfolio</h4>
                  <a
                    href="https://portfolio.leocode.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    portfolio.leocode.tech
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card/50 border border-border/50">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                  <span className="text-xl">📧</span>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:leo@leocode.tech"
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    leo@leocode.tech
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Community Contacts */}
          <h3 className="text-xl font-semibold text-foreground mb-6">Community Channels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Discord</h4>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Join study groups
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <span className="text-lg">📱</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Telegram</h4>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Daily discussions
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                <span className="text-lg">📧</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">General</h4>
                <a
                  href="mailto:community@catalyst.com"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  community@catalyst.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
