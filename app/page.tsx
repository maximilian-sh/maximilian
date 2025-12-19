import Background from '@/components/Background';
import ParallaxImage from '@/components/ParallaxImage';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Client-only Background */}
      <Background />

      {/* Content - Server Rendered */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="mx-auto max-w-6xl">
            <div className="glass-card flex items-center justify-between rounded-2xl px-6 py-3">
              <a href="#" className="hover:opacity-80 transition-opacity cursor-pointer">
                <img src="/icon.svg" alt="MK" className="h-8 w-8" />
              </a>
              <div className="flex gap-6">
                <a href="#work" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Work</a>
                <a href="#about" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">About</a>
                <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Animated */}
        <HeroSection />

        {/* Featured Project: Koda Remote */}
        <section id="work" className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-4xl font-bold text-stone-800">Featured Work</h2>
            
            {/* Koda Remote - Flagship - Full width showcase */}
            <div className="relative mb-16">
              {/* Phone floating - more centered */}
              <div className="hidden md:block absolute right-20 lg:right-32 xl:right-40 top-1/2 -translate-y-1/2 z-20">
                <ParallaxImage speed={0.08}>
                  <img 
                    src="/koda-mockup.png" 
                    alt="Koda Remote Screenshot" 
                    className="w-[200px] lg:w-[260px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)] rotate-3"
                  />
                </ParallaxImage>
              </div>
              
              {/* Content card */}
              <div className="glass-card rounded-3xl p-8 md:p-12 md:pr-[240px] lg:pr-[280px]">
                <div className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  iOS App
                </div>
                <h3 className="mb-4 text-3xl font-bold text-stone-800">Koda Remote</h3>
                <p className="mb-6 text-lg text-stone-600 max-w-lg">
                  The perfect Kodi remote for your iPhone. Smart device discovery, 
                  intuitive gestures, and a beautiful native UI.
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">Swift</span>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">iOS</span>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">Kodi API</span>
                </div>
                <a 
                  href="https://maximilian-sh.github.io/kodaWeb/" 
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-stone-700"
                >
                  Learn More →
                </a>
                
                {/* Mobile phone - shown inline on small screens */}
                <div className="md:hidden mt-8 flex justify-center">
                  <img 
                    src="/koda-mockup.png" 
                    alt="Koda Remote Screenshot" 
                    className="w-[160px] drop-shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Forstrechner */}
              <div className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02]">
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20 flex items-center justify-center">
                  <span className="text-4xl">🌲</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  iOS App
                </div>
                <h3 className="text-lg font-semibold text-stone-800">Forstrechner</h3>
                <p className="text-sm text-stone-500">Forestry calculator app for Swift</p>
              </div>

              {/* À la Melissa */}
              <a 
                href="https://alamelissa.at" 
                target="_blank"
                className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-pink-400/20 to-rose-400/20 flex items-center justify-center">
                  <span className="text-4xl">🍰</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  Website
                </div>
                <h3 className="text-lg font-semibold text-stone-800">À la Melissa</h3>
                <p className="text-sm text-stone-500">Patisserie website built with Webflow</p>
              </a>

              {/* DeviceBatteryTray */}
              <a 
                href="https://github.com/maximilian-sh/DeviceBatteryTray" 
                target="_blank"
                className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 flex items-center justify-center">
                  <span className="text-4xl">🔋</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
                  Windows
                </div>
                <h3 className="text-lg font-semibold text-stone-800">DeviceBatteryTray</h3>
                <p className="text-sm text-stone-500">System tray app for device battery</p>
              </a>

              {/* TuQsAi */}
              <a 
                href="https://github.com/maximilian-sh/TuQsAi" 
                target="_blank"
                className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                  JavaScript
                </div>
                <h3 className="text-lg font-semibold text-stone-800">TuQsAi</h3>
                <p className="text-sm text-stone-500">AI-powered tool</p>
              </a>

              {/* autoSearch */}
              <a 
                href="https://github.com/maximilian-sh/autoSearch" 
                target="_blank"
                className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02]"
              >
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-violet-400/20 to-purple-400/20 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700">
                  Python
                </div>
                <h3 className="text-lg font-semibold text-stone-800">autoSearch</h3>
                <p className="text-sm text-stone-500">Telegram bot for used car listings</p>
              </a>

              {/* More on GitHub */}
              <a 
                href="https://github.com/maximilian-sh" 
                target="_blank"
                className="glass-card group cursor-pointer rounded-3xl p-6 transition-all hover:scale-[1.02] flex flex-col items-center justify-center"
              >
                <svg className="h-12 w-12 text-stone-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-lg font-semibold text-stone-800">More on GitHub</h3>
                <p className="text-sm text-stone-500">16 repositories</p>
              </a>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-4xl font-bold text-stone-800">Upcoming Projects</h2>
            <p className="mb-12 text-center text-stone-500">What I&apos;m currently working on</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* Gustus */}
              <a 
                href="https://gustus.maximilian.sh" 
                target="_blank"
                className="glass-card rounded-3xl p-6 opacity-80 transition-all hover:opacity-100 hover:scale-[1.02]"
              >
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-rose-400/20 to-pink-400/20 flex items-center justify-center">
                  <span className="text-4xl">🍹</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-700">
                  Coming Soon
                </div>
                <h3 className="text-lg font-semibold text-stone-800">Gustus</h3>
                <p className="text-sm text-stone-500">Cocktail discovery app</p>
              </a>

              {/* offSide */}
              <div className="glass-card rounded-3xl p-6 border-2 border-emerald-200/50">
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-green-400/20 flex items-center justify-center">
                  <span className="text-4xl">💻</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  Releasing Soon
                </div>
                <h3 className="text-lg font-semibold text-stone-800">offSide</h3>
                <p className="text-sm text-stone-500">Something exciting for developers</p>
              </div>

              {/* neo */}
              <div className="glass-card rounded-3xl p-6 border-2 border-stone-300/50">
                <div className="mb-4 h-32 rounded-2xl bg-gradient-to-br from-stone-400/20 to-zinc-400/20 flex items-center justify-center">
                  <span className="text-4xl">🔮</span>
                </div>
                <div className="mb-2 inline-block rounded-full bg-stone-200 px-2 py-0.5 text-xs font-medium text-stone-600">
                  Secret Project
                </div>
                <h3 className="text-lg font-semibold text-stone-800">neo</h3>
                <p className="text-sm text-stone-500">A bigger, longer-term project. Stay tuned...</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-stone-800">About Me</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {/* Education */}
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-stone-800">TU Wien</h4>
                      <span className="text-xs text-stone-500">Ongoing</span>
                    </div>
                    <p className="text-sm text-stone-600">Computer Science</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-xl">💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-stone-800">Fink Zeitsysteme</h4>
                      <span className="text-xs text-stone-500">Multiple Internships</span>
                    </div>
                    <p className="text-sm text-stone-600">Software Development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card rounded-3xl p-8 mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">Swift</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">React</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">TypeScript</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">Next.js</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">Python</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">iOS Development</span>
                <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600">Web Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-24 pb-32">
          <div className="mx-auto max-w-2xl">
            <div className="glass-card rounded-3xl p-10 text-center md:p-16">
              <h2 className="mb-4 text-4xl font-bold text-stone-800">Let&apos;s Connect</h2>
              <p className="mb-8 text-lg text-stone-600">
                Have a project in mind or just want to say hi?
              </p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://github.com/maximilian-sh" 
                  target="_blank"
                  className="glass-card-inner rounded-full p-4 text-stone-600 transition-all hover:text-stone-900 hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/maxim_kallina" 
                  target="_blank"
                  className="glass-card-inner rounded-full p-4 text-stone-600 transition-all hover:text-stone-900 hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com/maxim_kallina" 
                  target="_blank"
                  className="glass-card-inner rounded-full p-4 text-stone-600 transition-all hover:text-stone-900 hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center border-t border-stone-200/50">
          <div className="flex justify-center gap-6 text-sm text-stone-500">
            <span>©{new Date().getFullYear()} Maximilian Kallina</span>
            <a href="/impressum" className="hover:text-stone-700 transition-colors">Impressum</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
