import React from "react";
import { ChromePicker } from "react-color";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  label: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  onChange,
  label,
}) => {
  const [showPicker, setShowPicker] = React.useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className="w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300"
        style={{ backgroundColor: color }}
        onClick={() => setShowPicker(!showPicker)}
      />
      {showPicker && (
        <div className="absolute z-10 mt-2">
          <div className="fixed inset-0" onClick={() => setShowPicker(false)} />
          <ChromePicker
            color={color}
            onChange={(color) => onChange(color.hex)}
          />
        </div>
      )}
    </div>
  );
};
