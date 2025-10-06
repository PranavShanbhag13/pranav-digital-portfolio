import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css';

const gsap = window.gsap || null;

// GSAP COMPONENets
const shortDuration = 0.3;
const quickDuration = 0.15;
const liftDuration = 0.3; 
const easeOut = 'power2.out';
const easeInOut = 'power2.inOut';

const Navbar = () => {
  useEffect(() => {
    if (!gsap) return;
    const links = document.querySelectorAll('.nav-link');

    const createScaleHandler = (targetScale) => (e) => gsap.to(e.currentTarget, { scale: targetScale, duration: shortDuration, ease: easeOut });
    const clickHandler = (e) => gsap.to(e.currentTarget, { scale: 0.95, duration: quickDuration, yoyo: true, repeat: 1, ease: easeInOut });

    links.forEach((link) => {
      link.addEventListener('mouseenter', createScaleHandler(1.05));
      link.addEventListener('mouseleave', createScaleHandler(1));
      link.addEventListener('click', clickHandler);
    });

    gsap.from(links, { y: -10, duration: 0.5, stagger: 0.1, ease: easeOut });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', createScaleHandler(1.05));  
        link.removeEventListener('mouseleave', createScaleHandler(1));
        link.removeEventListener('click', clickHandler);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <img src="/images/logo3.png" alt="University of Limerick Logo" className="ul-logo" />
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
        <li className="nav-item"><Link to="/education" className="nav-link">Education</Link></li>
        <li className="nav-item"><Link to="/professional" className="nav-link">Professional Knowledge</Link></li>
        <li className="nav-item"><Link to="/pictures" className="nav-link">Pictures Gallery</Link></li>
        <li className="nav-item"><Link to="/video" className="nav-link">Video Gallery</Link></li>
        <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
        <li className="nav-item"><Link to="/chat" className="nav-link">Instant Messaging</Link></li>
      </ul>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>PRANAV's Digital Portfolio Built with React & GSAP</p>
  </footer>
);

const Home = () => {
  useEffect(() => {
    if (!gsap) return;
    console.log('Home animation starting');
    gsap.from('.home', { y: -15, scale: 0.98, duration: 0.8, stagger: 0.2, ease: easeOut });
  }, []);
  return (
    <section className="section">
      <h1 className="title home"> Pranav Venkatesh Shanbhag</h1>
      <div className="home">
        <p> DIGITAL PORTFOLIO</p>
        <p> MSc Software Engineering student at University of Limerick (ID: 25161601), this site showcases my portfolio.</p>
        <img src="/images/pranav photo.jpg" alt="Welcome to Portfolio" className="home" style={{ maxWidth: '10%', borderRadius: '5px', marginTop: '1rem' }} />
      </div>
    </section>
  );
};

const About = () => {
  useEffect(() => {
    if (!gsap) return;
    gsap.from('.about', { y: -20, scale: 0.98, duration: 0.7, stagger: 0.3, ease: easeOut });

    //lifts lists
    const listItems = document.querySelectorAll('.list-item');
    const createLiftHandler = (targetY) => (e) => gsap.to(e.currentTarget, { y: targetY, duration: liftDuration, ease: easeOut });

    listItems.forEach((item) => {
      item.addEventListener('mouseenter', createLiftHandler(-5));
      item.addEventListener('mouseleave', createLiftHandler(0));
    });

    return () => {
      listItems.forEach((item) => {
        item.removeEventListener('mouseenter', createLiftHandler(-5));
        item.removeEventListener('mouseleave', createLiftHandler(0));
      });
    };
  }, []);

  return (
    <section className="section">
      <h1 className="title">About Me</h1>
      <div className="about">
        <p>Pranav Shanbhag – MSc Software Engineering student at University of Limerick.</p>
      </div>
      <div className="about">
        <p>Intrests include- Reading manhwas, Programming and Problem Solving.</p>
        <ul className="list">
          <li className="list-item">Software Development</li>
          <li className="list-item">Manhwas</li>
          <li className="list-item">Travelling</li>
        </ul>
      </div>
    </section>
  );
};

const Education = () => {
  useEffect(() => {
    if (!gsap) return;
    gsap.from('.edu', { y: -15, scale: 0.98, duration: 0.7, stagger: 0.2, ease: easeOut });

    const eduItems = document.querySelectorAll('.edu');
    const createLiftHandler = (targetY) => (e) => gsap.to(e.currentTarget, { y: targetY, duration: liftDuration, ease: easeOut });

    eduItems.forEach((item) => {
      item.addEventListener('mouseenter', createLiftHandler(-5));
      item.addEventListener('mouseleave', createLiftHandler(0));
    });

    return () => {
      eduItems.forEach((item) => {
        item.removeEventListener('mouseenter', createLiftHandler(-5));
        item.removeEventListener('mouseleave', createLiftHandler(0));
      });
    };
  }, []);

  return (
    <section className="section">
      <h1 className="title">Education</h1>
      <ul className="list">
        <li className="list-item edu">
          <strong>MSc Software Engineering</strong><br />University of Limerick, 2025-2026<br /></li>
        <li className="list-item edu">
          <strong>BTech Information Technology</strong><br />Pune University, 2021-2025<br />
        </li>
        <li className="list-item edu">
          <strong>Higher Secondary Certification</strong><br />St. John Junior College, 2020-2021
        </li>
      </ul>
    </section>
  );
};

const Professional = () => {
  useEffect(() => {
    if (!gsap) return;
    gsap.from('.prof', { y: -20, scale: 0.98, duration: 0.8, stagger: 0.2, ease: easeOut });

    const profItems = document.querySelectorAll('.prof');
    const createLiftHandler = (targetY) => (e) => gsap.to(e.currentTarget, { y: targetY, duration: liftDuration, ease: easeOut });

    profItems.forEach((item) => {
      item.addEventListener('mouseenter', createLiftHandler(-5));
      item.addEventListener('mouseleave', createLiftHandler(0));
    });

    return () => {
      profItems.forEach((item) => {
        item.removeEventListener('mouseenter', createLiftHandler(-5));
        item.removeEventListener('mouseleave', createLiftHandler(0));
      });
    };
  }, []);

  return (
    <section className="section">
      <h1 className="title">Professional Skills</h1>
      <ul className="list">
        <li className="list-item prof">
          <strong>Web Development</strong><br />HTML,CSS, JavaScript, React, Node.
        </li>
        <li className="list-item prof">
          <strong>GSAP Animations</strong><br />Adding Animation effects to websites.
        </li>
        <li className="list-item prof">
          <strong>Programming</strong><br />JAVA, CPP, Python.
        </li>
        <li className="list-item prof">
          <strong>Backend Development</strong><br />Springboot, Mysql, MongoDB.
        </li>
      </ul>
    </section>
  );
};

const Pictures = () => {
  useEffect(() => {
    if (!gsap) return;
    gsap.from('.gallery', { y: -15, scale: 0.98, duration: 0.7, stagger: 0.2, ease: easeOut });

    const images = document.querySelectorAll('.galimg');
    const cards = document.querySelectorAll('.galcard');

    const createImageHandler = (targetScale, targetY) => (e) => gsap.to(e.currentTarget, { scale: targetScale, y: targetY, duration: shortDuration, ease: easeOut });
    const createCardLiftHandler = (targetY) => (e) => gsap.to(e.currentTarget, { y: targetY, duration: shortDuration, ease: easeOut });
    const clickHandler = (e) => {
      console.log('Click on gallery card');
      gsap.to(e.currentTarget, { scale: 0.95, duration: quickDuration, yoyo: true, repeat: 1, ease: easeInOut });
    };

    images.forEach((img) => {
      img.addEventListener('mouseenter', createImageHandler(1.05, -5));
      img.addEventListener('mouseleave', createImageHandler(1, 0));
    });

    cards.forEach((card) => {
      card.addEventListener('mouseenter', createCardLiftHandler(-3));
      card.addEventListener('mouseleave', createCardLiftHandler(0));
      card.addEventListener('click', clickHandler);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('mouseenter', createImageHandler(1.05, -5));
        img.removeEventListener('mouseleave', createImageHandler(1, 0));
      });
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', createCardLiftHandler(-3));
        card.removeEventListener('mouseleave', createCardLiftHandler(0));
        card.removeEventListener('click', clickHandler);
      });
    };
  }, []);

  const galleryItems = [
    { src: '/images/limerick.jpg', alt: 'Image 1', desc: 'Limerick' },
    { src: '/images/university img.png', alt: 'Image 2', desc: 'University' },
    { src: '/images/concert hall.jpeg', alt: 'Image 3', desc: 'Concert Hall' },
    { src: '/images/pess.jpg', alt: 'Image 4', desc: 'Computer Science' }
  ];

  return (
    <section className="section">
      <h1 className="title">Pictures Gallery</h1>
      <p>Picture Gallery</p>
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="galcard">
            <img src={item.src} alt={item.alt} className="galimg" />
            <p className="galdesc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const MainContent = () => {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (!gsap || !mainRef.current) return;
    gsap.to(mainRef.current, { x: '-100%', duration: shortDuration, ease: easeInOut });
    const tl = gsap.timeline();
    tl.set(mainRef.current, { x: '100%' })
      .to(mainRef.current, { x: 0, duration: shortDuration, ease: easeOut })
      .from('.section', { y: -20, scale: 0.98, duration: 0.6, stagger: 0.1, ease: easeOut }, '-=0.3');
    return () => tl.kill();
  }, [location]);

  return (
    <main ref={mainRef} className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/video" element={<div className="section"><h1 className="title">Video Gallery </h1><p>In Development.</p></div>} />
        <Route path="/blog" element={<div className="section"><h1 className="title">Blog </h1><p>In Development.</p></div>} />
        <Route path="/chat" element={<div className="section"><h1 className="title">Instant Messaging </h1><p>In Development.</p></div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
