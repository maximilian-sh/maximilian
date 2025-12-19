import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 mb-8 transition-colors"
        >
          ← Back
        </Link>
        
        <h1 className="text-4xl font-bold text-stone-800 mb-8">Impressum</h1>
        
        <div className="prose prose-stone max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">
              Information according to §5 ECG (E-Commerce Act)
            </h2>
            <p className="text-stone-600">
              Maximilian Kallina<br />
              Vienna, Austria
            </p>
            <p className="text-stone-600 mt-4">
              Email: maximilian [dot] kallina [at] gmail [dot] com
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">EU Online Dispute Resolution</h2>
            <p className="text-stone-600">
              The European Commission provides a platform for online dispute resolution (OS):{' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-800 underline hover:text-stone-600"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-stone-600 mt-2">
              Our email address can be found above in this imprint.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Alternative Dispute Resolution</h2>
            <p className="text-stone-600">
              We do not participate in alternative dispute resolution procedures before a consumer arbitration board.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Liability for Contents</h2>
            <p className="text-stone-600">
              As a service provider, we are responsible for our own content on these pages according to §13 ECG and general laws. 
              We are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that 
              indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. 
              However, liability in this regard is only possible from the point in time at which a concrete infringement of the law 
              becomes known. If we become aware of any such infringements, we will remove the relevant content immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Liability for Links</h2>
            <p className="text-stone-600">
              Our offer contains links to external websites of third parties, on whose contents we have no influence. 
              Therefore, we cannot assume any liability for these external contents. The respective provider or operator 
              of the pages is always responsible for the contents of the linked pages. The linked pages were checked for 
              possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. 
              However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence 
              of a violation of the law. If we become aware of any infringements, we will remove such links immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Copyright</h2>
            <p className="text-stone-600">
              The contents and works created by the site operators on these pages are subject to Austrian copyright law. 
              Duplication, processing, distribution, or any form of commercialization of such material beyond the scope 
              of the copyright law shall require the prior written consent of its respective author or creator. Downloads 
              and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this 
              site was not created by the operator, the copyrights of third parties are respected. In particular, third-party 
              content is marked as such. Should you become aware of a copyright infringement, please inform us accordingly. 
              If we become aware of any infringements, we will remove such contents immediately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Third-Party Services</h2>
            
            <h3 className="text-xl font-medium text-stone-800 mt-6 mb-2">Google Fonts</h3>
            <p className="text-stone-600">
              This website uses Google Fonts, a service provided by Google LLC, for the uniform display of fonts. 
              When you access a page, your browser loads the required web fonts into your browser cache to display 
              texts and fonts correctly. For this purpose, the browser you use must connect to Google&apos;s servers. 
              This represents a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR. Further information 
              about Google Fonts can be found at{' '}
              <a 
                href="https://developers.google.com/fonts/faq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-800 underline hover:text-stone-600"
              >
                Google Fonts FAQ
              </a>{' '}
              and in{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-800 underline hover:text-stone-600"
              >
                Google&apos;s Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-stone-800 mb-4">Credits & Acknowledgments</h2>
            <p className="text-stone-600 mb-4">
              This website was built with the following open-source tools and resources:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>
                <a 
                  href="https://reactbits.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-800 underline hover:text-stone-600"
                >
                  React Bits
                </a>{' '}
                — Animated UI components (BlurText)
              </li>
              <li>
                <a 
                  href="https://nextjs.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-800 underline hover:text-stone-600"
                >
                  Next.js
                </a>{' '}
                — React framework
              </li>
              <li>
                <a 
                  href="https://tailwindcss.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-800 underline hover:text-stone-600"
                >
                  Tailwind CSS
                </a>{' '}
                — Utility-first CSS framework
              </li>
              <li>
                <a 
                  href="https://motion.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-800 underline hover:text-stone-600"
                >
                  Motion
                </a>{' '}
                — Animation library
              </li>
            </ul>
          </section>

          <section className="mb-10 pt-8 border-t border-stone-200">
            <p className="text-stone-500 text-sm">
              ©{new Date().getFullYear()} Maximilian Kallina. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
