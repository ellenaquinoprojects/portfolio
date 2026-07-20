interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function Tag({ children, active = false, onClick }: TagProps) {
  const baseClasses = "inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200";
  
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${
          active
            ? "bg-gradient text-white shadow-accent"
            : "bg-white/5 text-muted-foreground border border-white/10 hover:border-accent/50 hover:text-accent hover:bg-accent/5"
        } focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background`}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={`${baseClasses} bg-white/5 text-muted-foreground border border-white/10`}>
      {children}
    </span>
  );
}
