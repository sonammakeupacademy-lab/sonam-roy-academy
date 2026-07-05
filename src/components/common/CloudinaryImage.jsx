import React from "react";

function getWidths(maxWidth = 1920) {
  const allWidths = [
    240,
    320,
    480,
    640,
    768,
    960,
    1200,
    1600,
    1920,
  ];

  return allWidths.filter((w) => w <= maxWidth);
}

function createSrcSet(url, maxWidth) {
  return getWidths(maxWidth)
    .map(
      (w) =>
        `${url.replace(
          "/upload/",
          `/upload/f_avif,q_auto:good,c_fill,g_auto,dpr_auto,w_${w}/`
        )} ${w}w`
    )
    .join(", ");
}

function createSrc(url, maxWidth) {
  return url.replace(
    "/upload/",
    `/upload/f_avif,q_auto:good,c_fill,g_auto,dpr_auto,w_${maxWidth}/`
  );
}

function CloudinaryImage({
  src,
  alt,
  className = "",
  width,
  height,
  sizes = "100vw",
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  maxWidth = 1920,
  ...props
}) {
  return (
    <img
  src={createSrc(src, maxWidth)}
  srcSet={createSrcSet(src, maxWidth)}
  sizes={sizes}
  alt={alt}
  width={width}
  height={height}
  loading={loading}
  decoding={decoding}
  {...(fetchPriority !== "auto"
    ? { fetchpriority: fetchPriority }
    : {})}
  className={className}
  {...props}
/>
  );
}

export default React.memo(CloudinaryImage);