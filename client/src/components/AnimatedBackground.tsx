interface AnimatedBackgroundProps {
  variant?: 'default' | 'cyan' | 'purple' | 'emerald' | 'amber' | 'sky' | 'violet';
  intensity?: 'low' | 'medium' | 'high';
  showParticles?: boolean;
  showLines?: boolean;
}

const colorVariants = {
  default: {
    primary: 'cyan',
    secondary: 'purple',
    tertiary: 'blue',
  },
  cyan: {
    primary: 'cyan',
    secondary: 'blue',
    tertiary: 'teal',
  },
  purple: {
    primary: 'purple',
    secondary: 'violet',
    tertiary: 'fuchsia',
  },
  emerald: {
    primary: 'emerald',
    secondary: 'cyan',
    tertiary: 'teal',
  },
  amber: {
    primary: 'amber',
    secondary: 'orange',
    tertiary: 'yellow',
  },
  sky: {
    primary: 'sky',
    secondary: 'cyan',
    tertiary: 'blue',
  },
  violet: {
    primary: 'violet',
    secondary: 'purple',
    tertiary: 'indigo',
  },
};

export function AnimatedBackground({ 
  variant = 'default', 
  intensity = 'medium',
  showParticles = true,
  showLines = true,
}: AnimatedBackgroundProps) {
  const colors = colorVariants[variant];
  
  const opacityMap = {
    low: { orb: '8', particle: '30', line: '10' },
    medium: { orb: '12', particle: '50', line: '20' },
    high: { orb: '15', particle: '60', line: '30' },
  };
  
  const opacity = opacityMap[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orbs */}
      <div 
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${colors.primary}-500/${opacity.orb} rounded-full blur-[120px] animate-pulse`}
        style={{ animationDuration: '3s' }}
      />
      <div 
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-${colors.secondary}-500/${opacity.orb} rounded-full blur-[100px] animate-pulse`}
        style={{ animationDuration: '4s', animationDelay: '1s' }}
      />
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-${colors.tertiary}-500/8 rounded-full blur-[150px] animate-pulse`}
        style={{ animationDuration: '5s', animationDelay: '2s' }}
      />
      
      {/* Floating particles */}
      {showParticles && (
        <>
          <div 
            className={`absolute top-20 left-[10%] w-2 h-2 bg-${colors.primary}-400/${opacity.particle} rounded-full animate-bounce`}
            style={{ animationDuration: '3s' }}
          />
          <div 
            className={`absolute top-40 right-[15%] w-1.5 h-1.5 bg-${colors.secondary}-400/${opacity.particle} rounded-full animate-bounce`}
            style={{ animationDuration: '4s', animationDelay: '1s' }}
          />
          <div 
            className={`absolute bottom-32 left-[20%] w-1 h-1 bg-${colors.tertiary}-400/${opacity.particle} rounded-full animate-bounce`}
            style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
          />
          <div 
            className={`absolute top-1/3 right-[25%] w-2.5 h-2.5 bg-${colors.primary}-300/${opacity.particle} rounded-full animate-bounce`}
            style={{ animationDuration: '5s', animationDelay: '2s' }}
          />
          <div 
            className={`absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-${colors.secondary}-300/${opacity.particle} rounded-full animate-bounce`}
            style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}
          />
        </>
      )}
      
      {/* Animated gradient lines */}
      {showLines && (
        <>
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${colors.primary}-500/${opacity.line} to-transparent`} />
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${colors.secondary}-500/${opacity.line} to-transparent`} />
          <div className={`absolute top-0 bottom-0 left-[10%] w-px bg-gradient-to-b from-transparent via-${colors.primary}-500/10 to-transparent`} />
          <div className={`absolute top-0 bottom-0 right-[10%] w-px bg-gradient-to-b from-transparent via-${colors.secondary}-500/10 to-transparent`} />
        </>
      )}
    </div>
  );
}

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleGradient: string;
  description: string;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'sky' | 'violet';
}

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  titleGradient,
  description,
  variant = 'cyan',
}: SectionHeaderProps) {
  const badgeColors = {
    cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    amber: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    sky: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    violet: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  };

  const lineColors = {
    cyan: 'cyan-500',
    purple: 'purple-500',
    emerald: 'emerald-500',
    amber: 'amber-500',
    sky: 'sky-500',
    violet: 'violet-500',
  };

  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className={`h-px w-12 bg-gradient-to-r from-transparent to-${lineColors[variant]}/50`} />
        <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border ${badgeColors[variant]}`}>
          {badgeIcon}
          {badge}
        </span>
        <div className={`h-px w-12 bg-gradient-to-l from-transparent to-${lineColors[variant]}/50`} />
      </div>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
        {title}{" "}
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${titleGradient}`}>
          {titleGradient.includes('from-') ? '' : titleGradient}
        </span>
      </h2>
      <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface GlowingCardProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'sky' | 'violet';
  className?: string;
  glowIntensity?: 'low' | 'medium' | 'high';
}

export function GlowingCard({
  children,
  variant = 'cyan',
  className = '',
  glowIntensity = 'medium',
}: GlowingCardProps) {
  const borderColors = {
    cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
    purple: 'border-purple-500/20 hover:border-purple-500/40',
    emerald: 'border-emerald-500/20 hover:border-emerald-500/40',
    amber: 'border-amber-500/20 hover:border-amber-500/40',
    sky: 'border-sky-500/20 hover:border-sky-500/40',
    violet: 'border-violet-500/20 hover:border-violet-500/40',
  };

  const glowColors = {
    cyan: 'rgba(6, 182, 212, 0.15)',
    purple: 'rgba(168, 85, 247, 0.15)',
    emerald: 'rgba(16, 185, 129, 0.15)',
    amber: 'rgba(245, 158, 11, 0.15)',
    sky: 'rgba(14, 165, 233, 0.15)',
    violet: 'rgba(139, 92, 246, 0.15)',
  };

  const intensityMap = {
    low: '15px',
    medium: '25px',
    high: '40px',
  };

  return (
    <div 
      className={`bg-slate-900/60 backdrop-blur-sm rounded-xl border transition-all duration-300 ${borderColors[variant]} ${className}`}
      style={{ boxShadow: `0 0 ${intensityMap[glowIntensity]} ${glowColors[variant]}` }}
    >
      {children}
    </div>
  );
}

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'sky';
  size?: 'default' | 'lg';
  className?: string;
}

export function GradientButton({
  children,
  onClick,
  variant = 'cyan',
  size = 'default',
  className = '',
}: GradientButtonProps) {
  const gradients = {
    cyan: 'from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400',
    purple: 'from-purple-500 via-violet-500 to-fuchsia-500 hover:from-purple-400 hover:via-violet-400 hover:to-fuchsia-400',
    emerald: 'from-emerald-500 via-cyan-500 to-teal-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-400',
    amber: 'from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:via-orange-400 hover:to-yellow-400',
    sky: 'from-sky-500 via-cyan-500 to-blue-500 hover:from-sky-400 hover:via-cyan-400 hover:to-blue-400',
  };

  const shadows = {
    cyan: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
    purple: '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(217, 70, 239, 0.3)',
    emerald: '0 0 30px rgba(16, 185, 129, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
    amber: '0 0 30px rgba(245, 158, 11, 0.5), 0 0 60px rgba(249, 115, 22, 0.3)',
    sky: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)',
  };

  const sizeClasses = size === 'lg' ? 'px-10 py-6 text-base' : 'px-6 py-3 text-sm';

  return (
    <button
      onClick={onClick}
      className={`relative group ${sizeClasses} bg-gradient-to-r ${gradients[variant]} text-white font-bold rounded-full overflow-visible transition-all duration-500 hover:scale-105 active:scale-95 ${className}`}
      style={{ boxShadow: shadows[variant] }}
    >
      <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradients[variant]} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </span>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
