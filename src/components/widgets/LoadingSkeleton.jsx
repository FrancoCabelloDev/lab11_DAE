import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ count = 4, height, width }) => {
  return (
    <div className="g-layout g-layout--auto-fit-columns g-4">
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          height={height || 200}
          width={width || "100%"}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
