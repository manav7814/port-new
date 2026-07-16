"use client";

import { CldImage } from 'next-cloudinary';

/**
 * A wrapper around next-cloudinary's CldImage for easy use in the portfolio.
 * Ensure you have NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME set in your .env.local.
 * 
 * Usage:
 * <CloudinaryImage 
 *   src="your-public-id" 
 *   alt="Description"
 *   width="500" 
 *   height="500" 
 * />
 */
export default function CloudinaryImage({ src, alt, width = 500, height = 500, ...props }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <CldImage
        width={width}
        height={height}
        src={src}
        sizes="100vw"
        alt={alt || "Portfolio image"}
        className="object-cover transition-transform duration-500 hover:scale-105"
        {...props}
      />
    </div>
  );
}
