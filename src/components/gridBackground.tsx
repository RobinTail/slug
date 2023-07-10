import type { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
}

const GridBackground = (props: GridBackgroundProps) => {
  return (
    <div className="min-h-screen bg-[url('/img/grid.svg')]">
      {props.children}
    </div>
  );
};

export default GridBackground;
