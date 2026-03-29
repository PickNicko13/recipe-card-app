import React from 'react';

export type FilterMode = 'all' | 'liked' | 'easy' | 'medium' | 'hard';

interface FilterBarProps {
  activeFilter: FilterMode;
  onFilterChange: (mode: FilterMode) => void;
  counts: Record<FilterMode, number>;
}

const FILTERS: { mode: FilterMode; label: string }[] = [
  { mode: 'all',    label: 'All' },
  { mode: 'liked',  label: '❤️ Liked' },
  { mode: 'easy',   label: '🟢 Easy' },
  { mode: 'medium', label: '🟡 Medium' },
  { mode: 'hard',   label: '🔴 Hard' },
];

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange, counts }) => {
  return (
    <div className="filter-bar">
      {FILTERS.map(({ mode, label }) => (
        <button
          key={mode}
          className={`filter-btn${activeFilter === mode ? ' filter-btn--active' : ''}`}
          onClick={() => onFilterChange(mode)}
        >
          {label}
          <span className="filter-count">{counts[mode]}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
