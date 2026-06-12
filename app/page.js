import {client, urlFor} from '../lib/sanity.client';
import {pageQuery} from '../lib/queries';
import PackagesSection from '../components/PackagesSection';

const fallbackNav = ['Home', 'About Founder', 'Services', 'Packages', 'Testimonials', 'Contact Us'];

function idFor(label) {
  return label.toLowerCase().replace(/\s+/g, '-');
}

export default async function Home() {
  const data = await client.fetch(pageQuery).catch(() => null);
  const navItems = data?.navItems?.length ? data.navItems : fallbackNav;
  const packages = (data?.packages || []).map((pkg) => ({
    ...pkg,
    imageUrl: pkg?.image ? urlFor(pkg.image).width(220).url() : null
  }));

  return (
    <main>
      <nav className="nav">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="Career With Confidence Logo" width={56} height={56} className="logo-img" />
          </a>
          <ul>
            {navItems.map((item) => (
              <li key={item}><a href={`#${idFor(item)}`}>{item}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="home" className="section hero">
        <div className="hero-copy">
          <h1>{data?.brandName || 'Career With Confidence'}</h1>
          <p className="tag">{data?.tagline || 'Empowering your Future'}</p>
          <p>{data?.aboutBrand}</p>
        </div>
      </section>

      <section id="about-founder" className="section">
        <h2>About Founder</h2>
        <div className="about-wrap">
          <div className="about-media card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {data?.founderPhoto && <img src={urlFor(data.founderPhoto).width(700).url()} alt={data?.founderName || 'Founder'} width={420} height={520} style={{width: '100%', height: 'auto', objectFit: 'cover'}} />}
          </div>
          <div className="about-content card">
            <p className="eyebrow">Founder</p>
            <h3>{data?.founderName}</h3>
            <p>{data?.founderBio}</p>
            <a className="btn" href="#contact-us">CONNECT NOW</a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="cards">
          {(data?.services || []).map((service, i) => (
            <article className="card service-card" key={`${service.title}-${i}`}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p><strong>Who it is for:</strong> {service.whoFor}</p>
            </article>
          ))}
        </div>
      </section>

      <PackagesSection packages={packages} />

      <section id="testimonials" className="section">
        <h2>Testimonials</h2>
        <div className="cards">
          {(data?.testimonials || []).map((t, i) => (
            <article className="card testimonial" key={`${t.name}-${i}`}>
              <p>"{t.quote}"</p>
              <p><strong>{t.name}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact-us" className="section">
        <h2>Contact Us</h2>
        <div className="contact-wrap">
          <div className="contact-info card">
            <p className="eyebrow">Get In Touch</p>
            <h3>Let&apos;s Start Your Journey</h3>
            <p><strong>Phone / WhatsApp:</strong> {data?.contact?.phone}</p>
            <p><strong>Email:</strong> {data?.contact?.email}</p>
          </div>
          <form className="contact-form card">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Your Email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" />
            <button className="btn btn-reset" type="button">SEND</button>
          </form>
        </div>
      </section>

      <p className="footer">&copy; {new Date().getFullYear()} {data?.brandName || 'Career With Confidence'}. All rights reserved.</p>
    </main>
  );
}
