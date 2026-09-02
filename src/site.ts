// The AI Learning Hub, open to the whole SLS community and requiring no sign-in.
//
// This digest is reached from the hub and from the faculty site, and neither one
// embeds it any more: both link to it and it links back here. One constant, so a
// moved hub is a single edit rather than a search across components.
//
// The return link points at the hub and only the hub, deliberately, even though
// faculty arrive from the faculty site too. The hub is public, so it is the one
// destination that works for every reader — a student who followed the digest
// from the hub, a faculty member who came from behind the gate. Faculty get back
// to the faculty site from the hub, which costs them one extra click and spares
// everybody else a link into a sign-in wall.
export const AI_LEARNING_HUB_URL = "https://ailearninghub.law.stanford.edu/";

/** Outbound Stanford links, matching the footer both sibling sites carry. */
export const ELSEWHERE_LINKS = [
  { label: "SLS AI Initiative", href: "https://law.stanford.edu/ai-initiative/" },
  { label: "Robert Crown Law Library", href: "https://law.stanford.edu/robert-crown-law-library/" },
  { label: "Responsible AI at Stanford", href: "https://uit.stanford.edu/security/responsibleai" },
] as const;

export const LIBRARY_EMAIL = "library@law.stanford.edu";
