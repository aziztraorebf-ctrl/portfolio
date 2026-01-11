import { useState } from 'react';

interface Phase {
  number: number;
  title: string;
  description: string;
  completedDate: string;
  highlights: string[];
}

interface TimelineProps {
  phases: Phase[];
}

export default function Timeline({ phases }: TimelineProps) {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="relative">
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--color-border)]" />

        <div className="space-y-12">
          {phases.map((phase, index) => {
            const isLeft = index % 2 === 0;
            const isSelected = selectedPhase === phase.number;

            return (
              <div key={phase.number} className="relative flex items-center">
                {/* Left side content */}
                <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : ''}`}>
                  {isLeft && (
                    <PhaseCard
                      phase={phase}
                      isSelected={isSelected}
                      onSelect={() => setSelectedPhase(isSelected ? null : phase.number)}
                      formatDate={formatDate}
                    />
                  )}
                </div>

                {/* Center node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <button
                    onClick={() => setSelectedPhase(isSelected ? null : phase.number)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${
                      isSelected
                        ? 'bg-[var(--color-accent)] text-white scale-110 shadow-lg'
                        : 'bg-[var(--color-bg-card)] border-4 border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:scale-105'
                    }`}
                    aria-label={`Phase ${phase.number}: ${phase.title}`}
                  >
                    {phase.number}
                  </button>
                </div>

                {/* Right side content */}
                <div className={`w-5/12 ${!isLeft ? 'pl-12 ml-auto' : 'ml-auto'}`}>
                  {!isLeft && (
                    <PhaseCard
                      phase={phase}
                      isSelected={isSelected}
                      onSelect={() => setSelectedPhase(isSelected ? null : phase.number)}
                      formatDate={formatDate}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6">
        {phases.map((phase) => {
          const isSelected = selectedPhase === phase.number;

          return (
            <div key={phase.number} className="relative pl-12">
              {/* Timeline line */}
              {phase.number < phases.length && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-[var(--color-border)]" />
              )}

              {/* Node */}
              <button
                onClick={() => setSelectedPhase(isSelected ? null : phase.number)}
                className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[var(--color-accent)] text-white scale-110'
                    : 'bg-[var(--color-bg-card)] border-3 border-[var(--color-border)] text-[var(--color-text-primary)]'
                }`}
              >
                {phase.number}
              </button>

              <PhaseCard
                phase={phase}
                isSelected={isSelected}
                onSelect={() => setSelectedPhase(isSelected ? null : phase.number)}
                formatDate={formatDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface PhaseCardProps {
  phase: Phase;
  isSelected: boolean;
  onSelect: () => void;
  formatDate: (date: string) => string;
}

function PhaseCard({ phase, isSelected, onSelect, formatDate }: PhaseCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer transition-all duration-300 ${
        isSelected
          ? 'transform scale-[1.02]'
          : 'hover:transform hover:scale-[1.01]'
      }`}
    >
      <div
        className={`p-6 rounded-xl border transition-all duration-300 ${
          isSelected
            ? 'bg-[var(--color-bg-card)] border-[var(--color-accent)] shadow-lg'
            : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent-light)]'
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
            {phase.title}
          </h3>
          <span className="text-xs text-[var(--color-text-muted)] whitespace-nowrap ml-2">
            {formatDate(phase.completedDate)}
          </span>
        </div>

        {/* Description */}
        <p className={`text-sm text-[var(--color-text-secondary)] leading-relaxed ${
          isSelected ? '' : 'line-clamp-2'
        }`}>
          {phase.description}
        </p>

        {/* Highlights - only show when selected */}
        {isSelected && (
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <h4 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
              Key Highlights
            </h4>
            <ul className="space-y-1">
              {phase.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Expand indicator */}
        <div className="mt-3 flex items-center gap-1 text-xs text-[var(--color-accent)]">
          <span>{isSelected ? 'Click to collapse' : 'Click for details'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
