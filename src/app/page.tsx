import Hero from "@/components/hero";
import heroImg from 'public/images/home.jpg'

export default function HomePage() {
  return (
    <Hero imgData={heroImg} imgAlt="car factory" title="Professional Cloud Hosting" />
  );
}
