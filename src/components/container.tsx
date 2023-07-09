import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const HomeContainer = (props: ContainerProps) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-7 text-center">
      {props.children}
    </div>
  );
};

export { HomeContainer };
