export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-accent ${className}`} aria-hidden>
      <span className="h-px w-12 bg-border" />
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 2c-4 4-6 8-6 12a6 6 0 0012 0c0-4-2-8-6-12z" />
      </svg>
      <span className="h-px w-12 bg-border" />
    </div>
  );
}
