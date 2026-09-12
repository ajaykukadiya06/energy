import { ContactForm } from "../../components/landing/ContactForm";
import { SiteFooter } from "../../components/landing/SiteFooter";
import { SiteHeader } from "../../components/landing/SiteHeader";

export default function ContactPage() {
  return (
    <div className="page-shell route-page">
      <SiteHeader />

      <main className="route-main">
        <section className="route-hero compact contact-hero">
          <span className="eyebrow">Contact</span>
          <h1>Request a custom proposal for your site.</h1>
          <p>
            Share your project goals, site context, and expected footprint, and we will help map the
            best Wind Tree solution for your environment.
          </p>
        </section>

        <section className="contact-section route-contact-section">
          <div className="contact-copy">
            <h2>Let&apos;s build something sustainable.</h2>
            <p>
              Ideal for developers, municipalities, campuses, hotels, retail spaces, and premium eco
              communities seeking unique renewable infrastructure.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
