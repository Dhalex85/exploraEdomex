import { useRef } from "react";
import { Hero } from "../components/Hero";
import { Destinations } from "../components/Destinations";
import { useHomeMotion } from "../hooks/useHomeMotion";
import { FeaturedPlaces } from "../components/FeaturedPlaces";

export function HomePage() {
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);
  return <div className="home-layout" ref={root}><Hero /><Destinations /><FeaturedPlaces /></div>;
}
