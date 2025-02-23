import React from "react";
import type { AvatarState } from "../types";

interface AvatarProps {
  features: AvatarState;
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({ features, size = "md" }) => {
  const dimensions = {
    sm: "w-24 h-24",
    md: "w-48 h-48",
    lg: "w-64 h-64",
  };

  const getFaceShape = () => {
    switch (features.faceShape) {
      case "round":
        return "rounded-full";
      case "square":
        return "rounded-lg";
      case "heart":
        return "rounded-t-full rounded-b-lg";
      default:
        return "rounded-[45%]"; // oval
    }
  };

  const getHairStyle = () => {
    const baseStyle = {
      backgroundColor: features.hair,
      position: "absolute",
      width: "100%",
    } as const;

    if (features.gender === "male") {
      switch (features.hairStyle) {
        case "short":
          return {
            ...baseStyle,
            height: "25%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "medium":
          return {
            ...baseStyle,
            height: "35%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "long":
          return {
            ...baseStyle,
            height: "50%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "buzz":
          return {
            ...baseStyle,
            height: "15%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "bald":
          return null;
        default:
          return {
            ...baseStyle,
            height: "25%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
      }
    } else {
      switch (features.hairStyle) {
        case "long":
          return {
            ...baseStyle,
            height: "70%",
            top: 0,
            borderRadius: "100px 100px 20px 20px",
          };
        case "medium":
          return {
            ...baseStyle,
            height: "50%",
            top: 0,
            borderRadius: "100px 100px 20px 20px",
          };
        case "short":
          return {
            ...baseStyle,
            height: "30%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "ponytail":
          return {
            ...baseStyle,
            height: "40%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "bun":
          return {
            ...baseStyle,
            height: "25%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        case "braids":
          return {
            ...baseStyle,
            height: "60%",
            top: 0,
            borderRadius: "100px 100px 0 0",
          };
        default:
          return {
            ...baseStyle,
            height: "50%",
            top: 0,
            borderRadius: "100px 100px 20px 20px",
          };
      }
    }
  };

  return (
    <div
      className={`${dimensions[size]} overflow-hidden relative`}
      style={{ backgroundColor: features.backgroundColor }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-3/4 h-3/4">
          {/* Base face shape */}
          <div
            className={`absolute inset-0 ${getFaceShape()}`}
            style={{ backgroundColor: features.skin }}
          />

          {/* Eyes */}
          <div className="absolute w-full top-1/3 flex justify-around">
            <div className="w-4 h-4 rounded-full bg-white">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: features.eyes }}
              />
            </div>
            <div className="w-4 h-4 rounded-full bg-white">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: features.eyes }}
              />
            </div>
          </div>

          {/* Mouth */}
          <div
            className="absolute w-1/3 h-1 rounded-full left-1/3 top-2/3"
            style={{ backgroundColor: features.mouth }}
          />

          {/* Hair */}
          {getHairStyle() && <div style={getHairStyle() as any} />}

          {/* Accessories */}
          {features.accessories.includes("glasses") && (
            <div className="absolute w-full top-1/3 flex justify-around">
              <div className="w-5 h-5 rounded-full border-2 border-gray-800" />
              <div className="w-5 h-5 rounded-full border-2 border-gray-800" />
            </div>
          )}

          {features.accessories.includes("earrings") &&
            features.gender === "female" && (
              <div className="absolute w-full top-1/2 flex justify-between px-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
            )}

          {features.accessories.includes("cap") &&
            features.gender === "male" && (
              <div
                className="absolute w-full h-1/4 top-0 rounded-t-full"
                style={{ backgroundColor: "#333" }}
              />
            )}
        </div>
      </div>
    </div>
  );
};
