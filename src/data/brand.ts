/**
 * Logo assets. The final SixLine logo has not been supplied yet, so both are
 * null and <Logo> renders a plain text wordmark placeholder.
 *
 * When assets arrive, drop SVGs into public/brand/ and set the paths here:
 *   wordmark: '/brand/sixline-wordmark.svg'  (horizontal, used in header/footer)
 *   symbol:   '/brand/sixline-symbol.svg'    (square, used at compact sizes)
 * Both should use `currentColor` fills so they inherit theme colour.
 */
export const brandAssets = {
  wordmark: null as string | null,
  wordmarkAspect: 4.5, // width / height of the supplied wordmark artwork
  symbol: null as string | null,
};
