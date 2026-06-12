'use client';

import Image from 'next/image';
import {useMemo, useState} from 'react';

const topTabs = ["Mentoria's Plans", 'Customise Your Mentorship Plan'];
const audienceOrder = ['8-9 STUDENTS', '10-12 STUDENTS', 'COLLEGE GRADUATES', 'WORKING PROFESSIONALS'];

// Custom SVG Icons for Customise Membership Plans
const getCustomIcon = (title) => {
  const t = title.toLowerCase();
  
  if (t.includes('career report') && !t.includes('counselling')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <rect x="22" y="16" width="56" height="68" rx="6" fill="#f6ba43" />
        <rect x="27" y="21" width="46" height="58" rx="4" fill="#fff" />
        <rect x="40" y="10" width="20" height="10" rx="3" fill="#585c6c" />
        <rect x="34" y="60" width="8" height="12" fill="#e2574c" />
        <rect x="46" y="44" width="8" height="28" fill="#ffd200" />
        <rect x="58" y="34" width="8" height="38" fill="#69c3a3" />
      </svg>
    );
  }

  if (t.includes('career report + career counselling')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <rect x="22" y="16" width="56" height="68" rx="6" fill="#aab2bd" />
        <rect x="27" y="21" width="46" height="58" rx="4" fill="#fff" />
        <rect x="40" y="10" width="20" height="10" rx="3" fill="#585c6c" />
        <path d="M34 36L38 40L48 30" stroke="#8cc152" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 52L38 56L48 46" stroke="#8cc152" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="54" y="33" width="12" height="4" rx="2" fill="#656d78" />
        <rect x="54" y="49" width="12" height="4" rx="2" fill="#656d78" />
        <line x1="34" y1="68" x2="66" y2="68" stroke="#656d78" strokeWidth="4" strokeLinecap="round"/>
        
        <path d="M74 54L82 62L62 82L54 74L74 54Z" fill="#fc6e51"/>
        <path d="M54 74L58 78L54 82L50 78L54 74Z" fill="#ffe066"/>
      </svg>
    );
  }

  if (t.includes('knowledge gateway') || t.includes('helpline')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <rect x="16" y="16" width="30" height="30" rx="8" fill="#fc6e51" />
        <polygon points="28,26 28,36 37,31" fill="#fff"/>
        
        <rect x="54" y="16" width="30" height="30" rx="8" fill="#4a89dc" />
        <line x1="62" y1="25" x2="76" y2="25" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <line x1="62" y1="31" x2="76" y2="31" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <line x1="62" y1="37" x2="70" y2="37" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>

        <rect x="16" y="54" width="30" height="30" rx="8" fill="#f6bb42" />
        <path d="M31 63H21C20 63 19 64 19 65V75C19 76 20 77 21 77H31L35 81V77H36C37 77 38 76 38 75V65C38 64 37 63 36 63H31Z" fill="#fff"/>

        <rect x="54" y="54" width="30" height="30" rx="8" fill="#3dbfd9" />
        <circle cx="64" cy="71" r="5" fill="#fff"/>
        <line x1="68" y1="75" x2="76" y2="83" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }

  if (t.includes('one-to-one') || t.includes('expert')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <circle cx="34" cy="40" r="16" fill="#8cc152" />
        <circle cx="34" cy="20" r="8" fill="#ffd200" />
        <path d="M50 46H76C78 46 79.5 44.5 79.5 42.5V31.5C79.5 29.5 78 28 76 28H50L46 37L50 46Z" fill="#4a89dc"/>
        <circle cx="58" cy="37" r="2" fill="#fff"/>
        <circle cx="63" cy="37" r="2" fill="#fff"/>
        <circle cx="68" cy="37" r="2" fill="#fff"/>
      </svg>
    );
  }

  if (t.includes('college admission') || t.includes('cap-100') || t.includes('planner')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <path d="M50 24L18 40L50 56L82 40L50 24Z" fill="#1b2559"/>
        <path d="M30 49.5V64C30 69.5 39 74 50 74C61 74 70 69.5 70 64V49.5L50 59.5L30 49.5Z" fill="#1b2559"/>
        <path d="M82 40V65" stroke="#ffcb3b" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="82" cy="65" r="5" fill="#ffcb3b"/>
      </svg>
    );
  }

  if (t.includes('stress') || t.includes('exam') || t.includes('brain')) {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
        <path d="M50 20C38.954 20 30 28.954 30 40C30 46.882 33.473 52.951 38.75 56.639V65C38.75 67.761 41.012 70 43.804 70H56.196C58.988 70 61.25 67.761 61.25 65V56.639C66.527 52.951 70 46.882 70 40C70 28.954 61.046 20 50 20Z" fill="#ffb03a" opacity="0.3"/>
        <path d="M50 24C41.163 24 34 31.163 34 40C34 45.546 36.816 50.435 41 53.375V62C41 63.657 42.343 65 44 65H56C57.657 65 59 63.657 59 62V53.375C63.184 50.435 66 45.546 66 40C66 31.163 58.837 24 50 24Z" fill="#ff9f1c"/>
        <path d="M44 32C47 30 53 30 56 32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <path d="M42 38C45 36 55 36 58 38" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
        <path d="M45 44C47 42 53 42 55 44" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="14" fill="#f0f2f9"/>
      <rect x="25" y="25" width="50" height="50" rx="8" fill="#4a60e6"/>
      <circle cx="50" cy="45" r="10" fill="#fff" />
    </svg>
  );
};

const formatPrice = (price) => {
  if (!price) return '';
  let p = price.replace(/\?/g, '₹').trim();
  p = p.replace(/₹(\d)/g, '₹ $1');
  return p;
};

// Checkmark and Crossmark icons for Features List
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="cross-icon">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Map standard package features to premium package features dynamically
const getFeaturesList = (pkg, allPackages) => {
  const isCollegeOrWP = pkg.audience === 'COLLEGE GRADUATES' || pkg.audience === 'WORKING PROFESSIONALS';
  
  const premiumPkg = allPackages.find((p) => {
    const isCorrectCategory = p.category === "Mentoria's Plans";
    const isMatchingAudience = isCollegeOrWP 
      ? (p.audience === 'COLLEGE GRADUATES' || p.audience === 'WORKING PROFESSIONALS')
      : p.audience === pkg.audience;
    return isCorrectCategory && isMatchingAudience && p.subtitle === 'PREMIUM';
  });

  const features = [];
  
  if (pkg.description) {
    features.push({
      text: pkg.description,
      included: true
    });
  }

  if (pkg.subtitle === 'STANDARD' && premiumPkg) {
    (pkg.features || []).forEach((f) => {
      features.push({ text: f, included: true });
    });
    
    if (premiumPkg.features) {
      for (let i = 3; i < premiumPkg.features.length; i++) {
        features.push({ text: premiumPkg.features[i], included: false });
      }
    }
  } else {
    (pkg.features || []).forEach((f) => {
      features.push({ text: f, included: true });
    });
  }
  
  return features;
};

export default function PackagesSection({packages = []}) {
  const [activeTop, setActiveTop] = useState(topTabs[0]);
  const [activeAudience, setActiveAudience] = useState(audienceOrder[0]);

  const showMentoria = activeTop === topTabs[0];

  const visible = useMemo(() => {
    if (activeTop !== topTabs[0]) {
      return packages.filter((p) => p.category && (p.category.includes('Customise') || p.category.includes('Customize')));
    }

    let filtered = [];
    if (activeAudience === 'COLLEGE GRADUATES' || activeAudience === 'WORKING PROFESSIONALS') {
      filtered = packages.filter(
        (p) => p.category === "Mentoria's Plans" && (p.audience === 'COLLEGE GRADUATES' || p.audience === 'WORKING PROFESSIONALS')
      );
    } else {
      filtered = packages.filter(
        (p) => p.category === "Mentoria's Plans" && p.audience === activeAudience
      );
    }

    // Sort to ensure STANDARD is on the left and PREMIUM is on the right
    const sorted = [...filtered];
    sorted.sort((a, b) => {
      if (a.subtitle === 'STANDARD' && b.subtitle === 'PREMIUM') return -1;
      if (a.subtitle === 'PREMIUM' && b.subtitle === 'STANDARD') return 1;
      return 0;
    });

    return sorted;
  }, [packages, activeTop, activeAudience]);

  return (
    <section id="packages" className="section">
      <h2>Packages</h2>

      <div className="tab-row top-tabs">
        {topTabs.map((tab) => (
          <button key={tab} className={`tab-btn ${activeTop === tab ? 'active' : ''}`} onClick={() => setActiveTop(tab)}>{tab}</button>
        ))}
      </div>

      {showMentoria && (
        <div className="tab-row audience-tabs">
          {audienceOrder.map((aud) => (
            <button key={aud} className={`tab-btn ${activeAudience === aud ? 'active' : ''}`} onClick={() => setActiveAudience(aud)}>{aud}</button>
          ))}
        </div>
      )}

      <div className="packages-wrapper">
        {showMentoria ? (
          <div className="mentor-grid">
            {visible.map((pkg, i) => {
              const features = getFeaturesList(pkg, packages);
              const isPremium = pkg.subtitle === 'PREMIUM';
              
              return (
                <article className={`mentor-card ${isPremium ? 'premium-tier-card' : 'standard-tier-card'}`} key={`${pkg.title}-${i}`}>
                  {pkg.imageUrl ? (
                    <div className="mentor-logo">
                      <Image src={pkg.imageUrl} alt={pkg.title} width={96} height={96} />
                    </div>
                  ) : null}
                  <p className="plan-tier">{pkg.subtitle}</p>
                  <h3>{pkg.title}</h3>
                  <div className="package-price">{formatPrice(pkg.price)}</div>
                  
                  <ul className="feature-list">
                    {features.map((f, idx) => (
                      <li key={`${f.text}-${idx}`} className={f.included ? '' : 'excluded'}>
                        {f.included ? <CheckIcon /> : <CrossIcon />}
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a className={`btn buy-now-btn ${isPremium ? 'btn-premium' : 'btn-standard'}`} href="#contact-us">BUY NOW</a>
                </article>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="custom-intro">
              <h3>Want To Customise Your Mentorship Plan?</h3>
              <p>If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:</p>
            </div>
            
            <div className="custom-grid">
              {visible.map((pkg, i) => (
                <article className="custom-card" key={`${pkg.title}-${i}`}>
                  <div className="custom-icon-wrapper">
                    {getCustomIcon(pkg.title)}
                  </div>
                  <div className="custom-content">
                    <h3>{pkg.title}</h3>
                    <p className="custom-price">{formatPrice(pkg.price)}</p>
                    <p>{pkg.description}</p>
                    <a className="btn small" href="#contact-us">BUY NOW</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

