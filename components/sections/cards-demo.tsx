"use client"

import { ContainerScroll, CardSticky } from "../ui/cards-stack"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Research and Analysis",
    description:
      "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
  },
  {
    id: "process-2",
    title: "Wireframing and Prototyping",
    description:
      "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual indigoprints allow us to test and refine the user experience before diving into design.",
  },
  {
    id: "process-3",
    title: "Design Creation",
    description:
      "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
  },
  {
    id: "process-4",
    title: "Development and Testing",
    description:
      "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
  },
  {
    id: "process-5",
    title: "Launch and Support",
    description:
      "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized. The Website Design Process isn't just about creating a website; it's about crafting a digital experience that resonates, engages, and converts.",
  },
]

const ProcessSection = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 py-24">
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        <div className="sticky top-24 h-fit flex flex-col justify-center py-12">
          <h5 className="text-xs uppercase tracking-wide text-stone-500 mb-4">our process</h5>
          <h2 className="mb-6 mt-4 text-4xl xl:text-5xl font-bold tracking-tight">
            Planning your{" "}
            <span className="text-indigo-500">project development</span> journey
          </h2>
          <p className="max-w-lg text-sm text-stone-600">
            Our journey begins with a deep dive into your vision. In the
            Discovery phase, we engage in meaningful conversations to grasp your
            brand identity, goals, and the essence you want to convey. This
            phase sets the stage for all that follows.
          </p>
        </div>
        
        <div className="relative">
          {PROCESS_PHASES.map((phase, index) => (
            <CardSticky
              key={phase.id}
              index={index}
              incrementY={80}
              incrementZ={10}
              className="mb-6"
            >
              <div className="rounded-2xl border border-stone-200 p-8 shadow-lg bg-white">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h2 className="text-xl xl:text-2xl font-bold tracking-tighter">
                    {phase.title}
                  </h2>
                  <h3 className="text-2xl xl:text-3xl font-bold text-indigo-500">
                    {String(index + 1).padStart(2, "0")}
                  </h3>
                </div>
                <p className="text-stone-600 leading-relaxed">{phase.description}</p>
              </div>
            </CardSticky>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessSection
