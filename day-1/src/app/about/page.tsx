import ProfileCard from "@/components/profileCard";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col space-y-4 px-3 md:flex-row md:gap-15">
        <ProfileCard
          name="Musa Jamaldeen"
          role="Frontend Engineer"
          bio="mastering Next.js, and making
          money online."
        />
        <ProfileCard
          name="Alex Hormozi"
          role="Business Mogul"
          bio="I have nothing to sell you. I just want you to get rich."
        />
      </div>
    </div>
  );
}
