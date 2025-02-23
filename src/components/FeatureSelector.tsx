import React from "react";
import { clsx } from "clsx";

interface FeatureSelectorProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const FeatureSelector: React.FC<FeatureSelectorProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={clsx(
              "p-2 rounded-lg text-sm transition-colors",
              value === option
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700",
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
