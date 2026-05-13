// app/loading.tsx
import { Loader } from "lucide-react";
export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 text-white">
      <Loader className="w-12 h-12 animate-spin" color="white"/>

      <p className="text-lg font-medium">
        Loading...
      </p>
    </div>
  );
}