import React from "react";

const widths = [320, 480, 768, 1024, 1280, 1600, 1920];

function createSrcSet(url) {
  return widths
    .map(
      (w) =>
        `${url.replace(
          "/upload/",
          `/upload/f_auto,q_auto:good,c_fill,g_auto,dpr_auto,w_${w}/`
        )} ${w}w`
    )
    .join(", ");
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
  ...props
}) {
  return (
    <img
      src={src}
      srcSet={createSrcSet(src)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchpriority={fetchPriority}
      className={className}
      {...props}
    />
  );
}

export default React.memo(CloudinaryImage);