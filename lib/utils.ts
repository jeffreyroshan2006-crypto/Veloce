import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const cardData = [
  {
    id: 1,
    title: "Research and Analysis",
    description: "With your vision in mind, we enter the Research and Analysis phase. Here, we examine your competitors, industry trends, and user preferences. This informed approach ensures your website stands out and provides an excellent user experience.",
    color: "rgba(99, 102, 241, 0.8)", // Indigo
  },
  {
    id: 2,
    title: "Wireframing and Prototyping",
    description: "We move on to Wireframing and Prototyping, where we create skeletal representations of your website's pages. These visual blueprints allow us to test and refine the user experience before diving into design.",
    color: "rgba(139, 92, 246, 0.8)", // Violet
  },
  {
    id: 3,
    title: "Design Creation",
    description: "Now, it's time for the Design Creation phase. Our talented designers bring your vision to life. We focus on aesthetics, ensuring your website not only looks stunning but also aligns perfectly with your brand identity.",
    color: "rgba(168, 85, 247, 0.8)", // Purple
  },
  {
    id: 4,
    title: "Development and Testing",
    description: "In the Development and Testing phase, our skilled developers turn designs into a fully functional website. Rigorous testing ensures everything works seamlessly, providing an exceptional user experience.",
    color: "rgba(192, 132, 252, 0.8)", // Light Purple
  },
  {
    id: 5,
    title: "Launch and Support",
    description: "Our commitment continues beyond launch. We offer post-launch support to address questions, provide assistance, and ensure your website remains updated and optimized.",
    color: "rgba(232, 121, 249, 0.8)", // Fuchsia
  }
];
