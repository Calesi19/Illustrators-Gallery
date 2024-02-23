
import { siteConfig } from "../../../config/siteConfig";

export default function Home() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}


function AboutMe() {
  return (
    <section className="container py-12 font-dekko">
      <h3 className="text-4xl font-bold text-neutral-700">
        {siteConfig.about_headline}
      </h3>
      <p className="text-2xl text-neutral-600 mt-6">
        {siteConfig.about_body}
      </p>
    </section>
  );
}