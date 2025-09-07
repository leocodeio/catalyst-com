import { useState, useEffect } from 'react';
import { Badge } from '~/components/ui/badge';
import { Link } from '@remix-run/react';
import { Sparkles, Globe, ArrowRight } from 'lucide-react';

interface LandingHeroProps {
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
}

export function LandingHero({ user }: LandingHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
        <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4" />
              Welcome to Catalyst
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Catalyst
              </span>{" "}
              <strong>community</strong> <span>&</span> <br />
              <strong>connect</strong> <em className="italic">together</em>
            </h1>
          </div>

          {/* Description */}
          <p
            className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Join the Catalyst community of innovators, creators, and dreamers. 
            Share ideas, build connections, and accelerate your journey together.
          </p>

          <div
            className="flex flex-col items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            {/* Decorative Elements */}
            <svg
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground mt-8"
            >
              <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
              <path d="M74.0117 26.1349C73.2662 27.1206 72.5493 28.1096 72.0194 29.235C71.5688 30.167 71.2007 31.137 70.7216 32.0658C70.4995 32.5033 70.252 32.9091 69.9475 33.3085C69.8142 33.4669 69.6779 33.654 69.5161 33.8093C69.4527 33.86 68.9199 34.2339 68.9167 34.2624C68.9263 34.1768 69.0752 34.3957 69.0055 34.2434C68.958 34.1515 68.8534 34.0531 68.8058 33.9612C68.6347 33.6821 68.4637 33.403 68.264 33.1208L67.1612 31.3512C66.3532 30.0477 65.5199 28.7126 64.7119 27.4093C64.5185 27.0699 63.9701 27.0666 63.7131 27.2979C63.396 27.5514 63.4053 27.9858 63.6018 28.2966C64.3845 29.5683 65.1956 30.8431 65.9783 32.1149L67.1572 33.9796C67.5025 34.5093 67.8225 35.2671 68.428 35.5368C69.6136 36.0446 70.7841 34.615 71.3424 33.7529C71.9992 32.786 72.4085 31.705 72.9035 30.6336C73.4842 29.3116 74.2774 28.1578 75.1306 26.9818C75.7047 26.2369 74.5573 25.3868 74.0117 26.1349ZM55.1301 12.2849C54.6936 18.274 54.6565 24.3076 55.0284 30.3003C55.1293 31.987 55.2555 33.7056 55.4419 35.4019C55.5431 36.3087 56.9541 36.0905 56.8529 35.1837C56.2654 29.3115 56.0868 23.3982 56.2824 17.4978C56.3528 15.8301 56.4263 14.1339 56.5537 12.4725C56.6301 11.5276 55.2034 11.3686 55.1301 12.2849Z"></path>
              <path d="M59.2642 30.6571C58.8264 31.475 58.36 32.2896 57.9222 33.1075C57.7032 33.5164 57.4843 33.9253 57.2369 34.3311C57.0528 34.6861 56.8656 35.0697 56.6278 35.3898C56.596 35.4152 56.5611 35.4691 56.5294 35.4944C56.4881 35.6054 56.5041 35.4627 56.5548 35.5261C56.7481 35.6055 56.8337 35.6151 56.7545 35.5484L56.6784 35.4533C56.6023 35.3581 56.5263 35.263 56.4534 35.1393C56.1778 34.7619 55.8734 34.3814 55.5946 34.0324C55.0146 33.2744 54.4315 32.545 53.8515 31.787C53.2685 31.0576 52.1584 31.945 52.7415 32.6744C53.4229 33.5592 54.1042 34.4441 54.7888 35.3004C55.1184 35.7127 55.4321 36.2677 55.8569 36.6039C56.3069 36.9719 56.884 36.9784 57.3533 36.6551C57.7624 36.3542 57.9845 35.9167 58.2067 35.4792C58.4636 34.9878 58.746 34.5282 59.003 34.0369C59.5423 33.0859 60.0563 32.1032 60.5957 31.1522C60.7765 30.8257 60.5104 30.3627 60.2092 30.2135C59.8161 30.112 59.4451 30.3305 59.2642 30.6571ZM44.5918 10.1569L42.2324 37.5406C42.0032 40.1151 41.8057 42.6641 41.5764 45.2386C41.5032 46.1549 42.9299 46.314 43.0032 45.3977L45.3626 18.014C45.5918 15.4396 45.7893 12.8905 46.0186 10.316C46.1235 9.37433 44.6968 9.21532 44.5918 10.1569Z"></path>
            </svg>

            {/* Get started button */}
            <div className="flex items-center justify-center">
              {user ? (
                <Link to="/feature/dashboard">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <Globe className="w-[18px] h-[18px] animate-spin" />
                        Go to Dashboard
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <ArrowRight className="w-[14px] h-[14px] group-hover:rotate-180 ease-in-out transition-all" />
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to="/auth/signup">
                  <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full">
                    <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground">
                      <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                        <Globe className="w-[18px] h-[18px] animate-spin" />
                        Join Community
                      </p>
                    </div>
                    <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border">
                      <ArrowRight className="w-[14px] h-[14px] group-hover:rotate-180 ease-in-out transition-all" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div
          className="mt-auto pb-8 animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by developers and creators worldwide</p>
            <div className="flex items-center justify-center gap-8">
              {/* Community Icons */}
              <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-sm">🚀</span>
                </div>
              </div>

              <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-green-600/20 flex items-center justify-center">
                  <span className="text-sm">🌟</span>
                </div>
              </div>

              <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <span className="text-sm">💡</span>
                </div>
              </div>

              <div className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-orange-600/20 flex items-center justify-center">
                  <span className="text-sm">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
