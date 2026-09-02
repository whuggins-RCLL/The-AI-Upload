import { AI_LEARNING_HUB_URL } from '../site';

/**
 * The bar this site never had.
 *
 * Until now the digest had no header, no footer and no navigation of any kind:
 * it was only ever shown inside a full-page frame on the AI Learning Hub and on
 * the faculty site, so the surrounding site supplied the chrome and a reader
 * never needed a way out. Neither site frames it now, which means a reader can
 * land here as a destination — and without this bar the only way back would be
 * the browser's back button.
 *
 * The logo is deliberately not a link. This is a single page, so a logo linking
 * "home" would either point at the page you are already on or quietly leave the
 * site; one explicit, labelled return link is clearer than two links in the same
 * bar doing different things. The faculty site's sign-in page strips its logo to
 * a non-link for the same reason.
 *
 * `min-h-11` is a 44px floor on the link's height, not decoration: at 320px the
 * padding alone gave 38px, which is under the comfortable-tap-target guidance and
 * is the width most likely to be a phone.
 *
 * Same tab, not a new one. Nothing frames this site any more, so there is no
 * frame to escape and "Return to the AI Learning Hub" can mean what it says.
 * (The hub's link *in* has to open a new tab, because hub pages are themselves
 * framed by Google Sites.)
 */
export function SiteHeader() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 lg:px-8">
        <span className="block w-44 shrink-0 sm:w-56">
          <img
            src="/images/robert-crown-law-library-logo.svg"
            alt="Stanford Law School | Robert Crown Law Library"
            width={551}
            height={139}
            className="h-auto w-full"
          />
        </span>

        <a
          href={AI_LEARNING_HUB_URL}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-stanford-red hover:text-stanford-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stanford-red"
        >
          Return to AI Learning Hub
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </header>
  );
}
