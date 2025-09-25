
import { HoverEffect } from "./ui/card-hover-effect";

export function testinomial() {
  return (
    <>
    <p className="text-center font-bold font-sans text-5xl lg:pt-20 lg:pb-10 p-10">What Our User Says </p>
  
    <div className="  mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Emily R",
    description:
      "A technology company that builds economic infrastructure for the internet A technology company that builds economic infrastructure for the internet",
      link: "https://stripe.com",
  },
  {
    title: "Amit K",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Soophie",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Hasan",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Anus",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Sufiyan",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
