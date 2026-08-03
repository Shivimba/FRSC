import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ 
  children, 
  subtitle, 
  centered = false, 
  className,
  light = false
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center flex flex-col items-center", className)}>
      {subtitle && (
        <span className={cn(
          "block text-sm font-bold uppercase tracking-widest mb-3",
          light ? "text-accent" : "text-accent"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-serif font-bold mb-6",
        light ? "text-white" : "text-primary"
      )}>
        {children}
      </h2>
      <div className={cn("h-1 w-16 bg-accent", centered && "mx-auto")} />
    </div>
  );
}
