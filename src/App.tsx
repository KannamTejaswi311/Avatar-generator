import React, { useState } from "react";
import { Download } from "lucide-react";
import { Avatar } from "./components/Avatar";
import { ColorPicker } from "./components/ColorPicker";
import { FeatureSelector } from "./components/FeatureSelector";
import type { AvatarState } from "./types";

const INITIAL_STATE: AvatarState = {
  gender: "male",
  skin: "#FFD5B5",
  eyes: "#4B4B4B",
  mouth: "#FF6B6B",
  hair: "#4A4A4A",
  hairStyle: "short",
  faceShape: "oval",
  accessories: [],
  backgroundColor: "#87CEEB",
};

const FEATURES = {
  skin: ["#FFD5B5", "#F1C27D", "#E0AC69", "#C68642", "#8D5524"],
  eyes: ["#4B4B4B", "#7BA23F", "#668B8B", "#A52A2A", "#36454F"],
  mouth: ["#FF6B6B", "#FF8E8E", "#FF4757", "#2F3542"],
  hair: ["#4A4A4A", "#8B4513", "#D4AF37", "#C0C0C0", "#800020"],
  maleHairStyles: ["short", "medium", "long", "buzz", "bald"],
  femaleHairStyles: ["long", "medium", "short", "ponytail", "bun", "braids"],
  maleAccessories: ["glasses", "cap", "beanie", "headphones"],
  femaleAccessories: ["earrings", "necklace", "glasses", "hairband"],
  faceShapes: ["round", "oval", "square", "heart"],
};

function App() {
  const [avatar, setAvatar] = useState<AvatarState>(INITIAL_STATE);

  const handleFeatureChange = (feature: keyof AvatarState, value: any) => {
    setAvatar((prev) => ({ ...prev, [feature]: value }));
  };

  const toggleAccessory = (accessory: string) => {
    setAvatar((prev) => ({
      ...prev,
      accessories: prev.accessories.includes(accessory)
        ? prev.accessories.filter((a) => a !== accessory)
        : [...prev.accessories, accessory],
    }));
  };

  const downloadAvatar = () => {
    alert("In a production environment, this would download your avatar!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Avatar Generator
          </h1>
          <p className="text-gray-600">
            Create your unique avatar by customizing features
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <Avatar features={avatar} size="lg" />
            <button
              onClick={downloadAvatar}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download size={20} />
              Download Avatar
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Customize Your Avatar
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => handleFeatureChange("gender", "male")}
                  className={`px-4 py-2 rounded-lg ${
                    avatar.gender === "male"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => handleFeatureChange("gender", "female")}
                  className={`px-4 py-2 rounded-lg ${
                    avatar.gender === "female"
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Female
                </button>
              </div>

              <FeatureSelector
                label="Face Shape"
                options={FEATURES.faceShapes}
                value={avatar.faceShape}
                onChange={(value) => handleFeatureChange("faceShape", value)}
              />

              <FeatureSelector
                label="Skin Tone"
                options={FEATURES.skin}
                value={avatar.skin}
                onChange={(value) => handleFeatureChange("skin", value)}
              />

              <FeatureSelector
                label="Eye Color"
                options={FEATURES.eyes}
                value={avatar.eyes}
                onChange={(value) => handleFeatureChange("eyes", value)}
              />

              <FeatureSelector
                label="Hair Color"
                options={FEATURES.hair}
                value={avatar.hair}
                onChange={(value) => handleFeatureChange("hair", value)}
              />

              <FeatureSelector
                label="Hair Style"
                options={
                  avatar.gender === "male"
                    ? FEATURES.maleHairStyles
                    : FEATURES.femaleHairStyles
                }
                value={avatar.hairStyle}
                onChange={(value) => handleFeatureChange("hairStyle", value)}
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Accessories
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(avatar.gender === "male"
                    ? FEATURES.maleAccessories
                    : FEATURES.femaleAccessories
                  ).map((accessory) => (
                    <button
                      key={accessory}
                      onClick={() => toggleAccessory(accessory)}
                      className={`p-2 rounded-lg text-sm transition-colors ${
                        avatar.accessories.includes(accessory)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {accessory}
                    </button>
                  ))}
                </div>
              </div>

              <ColorPicker
                label="Background Color"
                color={avatar.backgroundColor}
                onChange={(value) =>
                  handleFeatureChange("backgroundColor", value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
