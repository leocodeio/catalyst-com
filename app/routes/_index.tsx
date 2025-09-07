import type { MetaFunction } from "@remix-run/node";
import { LandingHero } from "~/components/landing/LandingHero";
import { useLoaderData } from "@remix-run/react";
import { loader as LandingLoader } from "./loader+/landing.loader";
import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const meta: MetaFunction = () => {
  return [
    { title: "Catalyst - Welcome to Our Community" },
    {
      name: "description",
      content:
        "Join the Catalyst community - a place where innovation meets collaboration. Connect with like-minded individuals and grow together.",
    },
    {
      name: "keywords",
      content: "community, collaboration, innovation, networking, growth",
    },
    { property: "og:title", content: "Catalyst - Community Platform" },
    {
      property: "og:description",
      content:
        "Welcome to the Catalyst community - where connections drive innovation.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Catalyst - Community Platform" },
    {
      name: "twitter:description",
      content: "Join our community of innovators and creators.",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Catalyst Community" },
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
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Welcome to Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with like-minded individuals, share ideas, and grow
            together. Our community is a place where innovation meets
            collaboration.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground text-sm">
                Build meaningful relationships with peers and mentors
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovate</h3>
              <p className="text-muted-foreground text-sm">
                Share ideas and collaborate on exciting projects
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Grow</h3>
              <p className="text-muted-foreground text-sm">
                Learn from others and accelerate your personal growth
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="relative py-24 px-4 bg-card/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
          <div className="grid gap-6">
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <span className="text-lg">📧</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:hello@catalyst.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@catalyst.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                <span className="text-lg">💬</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Discord</h3>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Join our community server
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <span className="text-lg">🐦</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Twitter</h3>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  @catalyst_community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
