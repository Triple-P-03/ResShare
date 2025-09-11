import { User } from "lucide-react";
import { useState } from "react";

export function Videocard(p: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full max-w-md border rounded-lg overflow-hidden shadow-md bg-black  "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video src={p.source} autoPlay controls muted></video>
      ) : (
        <img src={p.thumb} alt="video thumbnail" className="w-full h-auto" />
      )}

      <div className="flex items-start gap-3 p-3">
        <div className="flex-shrink-0">
          <User className="w-8 h-8 text-indigo-600" />
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-semibold text-white">{p.title}</div>
          <div className="text-xs text-gray-100">{p.desc}</div>
        </div>
      </div>
    </div>
  );
}
