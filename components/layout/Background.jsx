export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-[480px] w-[480px] animate-blob rounded-full bg-purple-500/30 blur-3xl" />
      <div
        className="absolute -right-40 top-1/3 h-[520px] w-[520px] animate-blob rounded-full bg-cyan-400/25 blur-3xl"
        style={{ animationDelay: '4s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] animate-blob rounded-full bg-fuchsia-500/20 blur-3xl"
        style={{ animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />
    </div>
  );
}
