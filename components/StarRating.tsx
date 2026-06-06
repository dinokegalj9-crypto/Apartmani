"use client";

import { motion } from "framer-motion";

type StarRatingProps = {
  /** Number of filled stars. */
  rating?: number;
  /** Total stars shown. */
  outOf?: number;
  className?: string;
  starClassName?: string;
  /** Delay before the animation begins (seconds). */
  delay?: number;
};

/**
 * Animated star rating. Each filled star pops into place in sequence; empty
 * stars fade in as outlines. Animates once when scrolled into view.
 */
export function StarRating({
  rating = 3,
  outOf = 5,
  className = "",
  starClassName = "h-5 w-5",
  delay = 0,
}: StarRatingProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`${rating} out of ${outOf} stars`}
    >
      {Array.from({ length: outOf }).map((_, i) => {
        const filled = i < rating;
        return (
          <motion.svg
            key={i}
            viewBox="0 0 24 24"
            className={`${starClassName} ${filled ? "fill-current" : "fill-none opacity-50"}`}
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: filled ? 1 : 0.5 }}
            viewport={{ once: true }}
            transition={{
              delay: delay + i * 0.12,
              type: "spring",
              stiffness: 260,
              damping: 13,
            }}
          >
            <path d="m12 17.3 5.2 3.1-1.4-5.9 4.6-4-6-.5L12 4 9.6 9.9l-6 .5 4.6 4-1.4 5.9z" />
          </motion.svg>
        );
      })}
    </span>
  );
}
