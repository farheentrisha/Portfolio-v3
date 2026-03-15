import React from "react";

export const SkeletonLoader = ({ height = "h-20", count = 3 }) => {
  return (
    <div className={`space-y-4 ${height}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="skeleton h-6 rounded-lg"
          style={{
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export const GridSkeletonLoader = ({ cols = 3, rows = 2 }) => {
  return (
    <div className={`grid grid-cols-${cols} gap-4`}>
      {Array.from({ length: cols * rows }).map((_, i) => (
        <div key={i} className="skeleton aspect-video rounded-lg" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
