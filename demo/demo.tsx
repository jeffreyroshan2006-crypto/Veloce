import { GradientWave } from "@/components/ui/gradient-wave";

export default function DemoOne() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <GradientWave colors={["#64303d", "#c3dbe7"]} />
      <h1 className="text-white tracking-tighter text-7xl font-bold text-center z-10">
        Gradient Wave
      </h1>
    </div>
  );
}
