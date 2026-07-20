import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  /** container = 1400px (max page width), content = 1280px, reading = 720px (prose) */
  size?: "container" | "content" | "reading";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const MAX_WIDTH: Record<NonNullable<ContainerProps["size"]>, string> = {
  container: "max-w-[var(--container-width)]",
  content: "max-w-[var(--content-width)]",
  reading: "max-w-[var(--reading-width)]",
};

export function Container({
  children,
  size = "container",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-10 lg:px-16", MAX_WIDTH[size], className)}>
      {children}
    </Tag>
  );
}