import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <div className={cn("relative pt-24 pb-24 lg:pt-32 lg:pb-36 bg-primary overflow-hidden", className)}>
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.18] bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/page-hero.png')` }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/30 via-primary/70 to-primary" aria-hidden="true" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #CC8B22 1px, transparent 1px), linear-gradient(to bottom, #CC8B22 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="w-12 h-0.5 bg-accent mb-8" aria-hidden="true" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight mb-6 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
