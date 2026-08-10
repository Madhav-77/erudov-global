/**
 * Slug generation utility — canonical rules from the developer brief.
 *
 * 1. Unicode NFKD normalise
 * 2. Lowercase
 * 3. "&" → " and "
 * 4. Delete apostrophes and backticks entirely  (O'Brien → obrien)
 * 5. Every remaining run of non-[a-z0-9] → single "-"
 * 6. Collapse repeated "-", trim leading/trailing "-"
 *
 * Slugs must be stored as frozen fields on records — never re-derived
 * from a name that might change upstream.
 */
export function toSlug(input: string): string {
  return input
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[`']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Validate that a set of slugs within one scope are all unique.
 * Throws with details on first collision — build should fail loudly,
 * never auto-append "-2".
 */
export function assertUniqueSlugs(slugs: string[], scope: string): void {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      throw new Error(
        `[slug] Duplicate slug "${slug}" in scope "${scope}". ` +
          'Fix the source data or add an explicit redirect — do not auto-deduplicate.',
      );
    }
    seen.add(slug);
  }
}
