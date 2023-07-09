import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Title = (props: TextProps) => {
  return (
    <h1
      className={cn(
        "mx-auto max-w-[20ch] text-center text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
};

const Paragraph = (props: TextProps) => {
  return (
    <p
      className={cn(
        "text-gray-11 dark:text-graydark-11 leading-normal tracking-tight md:text-base md:leading-7",
        props.className
      )}
    >
      {props.children}
    </p>
  );
};

export { Title, Paragraph };
