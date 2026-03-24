const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-muted-foreground/50">
          &copy; 2025 jolene wei
        </p>
        <p className="font-mono text-xs text-muted-foreground/50">
          designed & built by me
        </p>
      </div>
    </footer>
  );
};

export default Footer;
