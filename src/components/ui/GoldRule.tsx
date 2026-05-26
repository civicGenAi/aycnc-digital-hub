export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent max-w-xs mx-auto ${className}`} />;
}
