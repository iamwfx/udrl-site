/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // The site is a single scrolling page; these paths once existed as
  // standalone routes that nothing ever linked to. Kept as redirects so
  // guessed URLs land on the matching section instead of a 404.
  // Temporary (307), not permanent, so they stay easy to reclaim if any
  // of these ever becomes a real page again.
  async redirects() {
    return ["projects", "publications", "courses", "people"].map((section) => ({
      source: `/${section}`,
      destination: `/#${section}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
