import React from "react";

const BackgroundBubbles = ({ color = "bg-gray-600" }) => {
  const bubbles = [
    { top: "top-20", left: "left-1/4", w: "w-48", h: "h-48", opacity: "opacity-40", blur: "blur-2xl", anim: "animate-pulse" },
    { bottom: "bottom-10", right: "right-1/4", w: "w-40", h: "h-40", opacity: "opacity-40", blur: "blur-xl", anim: "animate-bounce" },
    { top: "top-10", left: "left-10", w: "w-32", h: "h-32", opacity: "opacity-35", blur: "blur-xl", anim: "animate-ping" },
    { bottom: "bottom-20", left: "left-1/3", w: "w-20", h: "h-20", opacity: "opacity-45", blur: "blur-lg", anim: "animate-bounce" },
    { top: "top-32", right: "right-10", w: "w-36", h: "h-36", opacity: "opacity-40", blur: "blur-2xl", anim: "animate-pulse" },
    { bottom: "bottom-10", right: "right-1/5", w: "w-24", h: "h-24", opacity: "opacity-40", blur: "blur-xl", anim: "animate-ping" },
    { top: "top-1/2", left: "left-5", w: "w-28", h: "h-28", opacity: "opacity-35", blur: "blur-lg", anim: "animate-bounce" },
    { bottom: "bottom-1/4", left: "left-1/4", w: "w-20", h: "h-20", opacity: "opacity-40", blur: "blur-lg", anim: "animate-ping" },
    { top: "top-10", right: "right-1/3", w: "w-16", h: "h-16", opacity: "opacity-35", blur: "blur-xl", anim: "animate-pulse" },
    { bottom: "bottom-16", right: "right-16", w: "w-20", h: "h-20", opacity: "opacity-40", blur: "blur-xl", anim: "animate-bounce" },
    { top: "top-3/4", left: "left-3/4", w: "w-28", h: "h-28", opacity: "opacity-45", blur: "blur-xl", anim: "animate-pulse" },
  ];

  return (
    <>
      {bubbles.map((bubble, index) => {
        const positionClasses = `${bubble.top || ""} ${bubble.bottom || ""} ${bubble.left || ""} ${bubble.right || ""}`;
        const sizeClasses = `${bubble.w} ${bubble.h}`;
        const styleClasses = `${color} ${bubble.opacity} ${bubble.blur} ${bubble.anim} absolute rounded-full`;
        return <div key={index} className={`${positionClasses} ${sizeClasses} ${styleClasses}`}></div>;
      })}
    </>
  );
};

export default BackgroundBubbles;
