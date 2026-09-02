import { AI_LEARNING_HUB_URL, ELSEWHERE_LINKS, LIBRARY_EMAIL } from '../site';

/**
 * The footer, carrying the second route back to the hub and the outbound Stanford
 * links both sibling sites list under "Elsewhere at Stanford".
 *
 * The hub link appears here as well as in the header on purpose: a reader who has
 * scrolled the whole digest is at the bottom of a long page, and sending them back
 * up to the bar to leave is the kind of small friction that ends in the back
 * button instead.
 */
export function SiteFooter() {
  return (
    <footer className="mt-20 w-full border-t border-gray-100 bg-[#FAF9F6]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-8">
        <nav aria-labelledby="footer-elsewhere" className="text-left">
          <h2
            id="footer-elsewhere"
            className="font-serif text-sm font-medium uppercase tracking-wide text-stanford-red"
          >
            Elsewhere at Stanford
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a
                href={AI_LEARNING_HUB_URL}
                className="font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-stanford-red hover:decoration-stanford-red"
              >
                AI Learning Hub
              </a>
              <span className="mt-1 block text-sm text-gray-500">
                Guides, skills, events, and tutorials
              </span>
            </li>
            {ELSEWHERE_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-800 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-stanford-red hover:decoration-stanford-red"
                >
                  {label}
                  <span aria-hidden="true"> &#8599;</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          The AI Upload is produced by the Robert Crown Law Library for the Stanford Law School
          community. Questions? Email{' '}
          <a
            href={`mailto:${LIBRARY_EMAIL}`}
            className="font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-stanford-red"
          >
            {LIBRARY_EMAIL}
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
