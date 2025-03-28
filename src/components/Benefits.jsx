import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import { benefits } from "../constants"; // Keep content in index.js
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Import card background SVGs separately
import Card1 from "../assets/benefits/card-1.svg";
import Card2 from "../assets/benefits/card-2.svg";
import Card3 from "../assets/benefits/card-3.svg";
import Card4 from "../assets/benefits/card-4.svg";
import Card5 from "../assets/benefits/card-5.svg";
import Card6 from "../assets/benefits/card-6.svg";

// Array to map SVGs dynamically
const backgroundImages = [Card1, Card2, Card3, Card4, Card5, Card6];

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
          {benefits.map((item, index) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            >
              {/* Apply background as an image instead of CSS */}
              <img
                src={backgroundImages[index]} // Dynamically assign background
                alt=""
                className="absolute inset-0 w-full h-full z-0"
              />

              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl} // Keep icon from index.js
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto text-xs font-bold text-n-1 font-code uppercase tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      width={380}
                      height={362}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
