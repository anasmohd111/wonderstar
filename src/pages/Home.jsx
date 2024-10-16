import React, { useEffect, useRef, useState } from 'react';
import mainvideo from '../assets/main.mp4';
import map from '../assets//map.jpg';
import company from '../assets/company.jpg';
import pin from '../assets/placeholder.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
AOS.init();

function Home() {

  const cursorRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const [counterOn, setCounterOn] = useState(false);

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
    cursorRef.current.style.transform = 'scale(1.5)';
    cursorRef.current.style.display = 'block';
    cursorRef.current.style.opacity = '1';
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
    cursorRef.current.style.transform = 'scale(1)';
    cursorRef.current.style.display = 'none';
    cursorRef.current.style.opacity = '0';
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <>
      <section className="homeSection">
        <div className="bgVideo">
          <video src={mainvideo} className="videoTag" autoPlay loop muted />
        </div>
        <div className="content section" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="title">Trade Beyond Borders! <br />
            Trust Beyond Measure!</h1>

          <button className='actionBtn'>Explore More</button>
        </div>
      </section>

      <section className="contentSection section sectionPadding">
        <div className="headDiv" data-aos="fade-up" data-aos-duration="2000">
          <h3 className="title">Excellence in Commodity Trading Since 2001</h3>
        </div>
        <div className="contentDiv" data-aos="fade-up" data-aos-duration="3000">
          <p className="text">Founded in 2001 and based in Dubai, UAE, Wonder Star Trading LLC has established itself as a key player in the commodity trading sector for over 23 years. We specialize in high-quality minerals, petrochemicals,fertilizers, and metals, driven by our commitment to excellence.</p>
          <button className='actionBtn'>Learn More</button>
        </div>
      </section>

      <div id='bannerSection'>
        <section className="bannerSection section sectionPadding">
          <div ref={cursorRef} className="custom-cursor"></div>
          <div
            className="bgVideo"
            onMouseEnter={() => handleMouseEnter(videoRef1)}
            onMouseLeave={() => handleMouseLeave(videoRef1)}
          >
            <video
              ref={videoRef1}
              src={mainvideo}
              className="videoTag"
              loop
              muted
            />
          </div>
          <div className="contentDiv">
            <h4 className="title">Petrochemicals</h4>
            <p className="text">
              Wonder Star LLC, a renowned petrochemical supplier based in the UAE
            </p>
            <button className="actionBtn">Know More</button>
          </div>
        </section>

        <section className="bannerSection section sectionPadding">
          <div ref={cursorRef} className="custom-cursor"></div>
          <div
            className="bgVideo"
            onMouseEnter={() => handleMouseEnter(videoRef2)}
            onMouseLeave={() => handleMouseLeave(videoRef2)}
          >
            <video
              ref={videoRef2}
              src={mainvideo}
              className="videoTag"
              loop
              muted
            />
          </div>
          <div className="contentDiv">
            <h4 className="title">Minerals</h4>
            <p className="text">
              Minerals play a crucial role in diverse industrial applications
            </p>
            <button className="actionBtn">Know More</button>
          </div>
        </section>

        <section className="bannerSection section sectionPadding">
          <div ref={cursorRef} className="custom-cursor"></div>
          <div
            className="bgVideo"
            onMouseEnter={() => handleMouseEnter(videoRef3)}
            onMouseLeave={() => handleMouseLeave(videoRef3)}
          >
            <video
              ref={videoRef3}
              src={mainvideo}
              className="videoTag"
              loop
              muted
            />
          </div>
          <div className="contentDiv">
            <h4 className="title">Metals</h4>
            <p className="text">Wonder Star supplies a diverse range of high quality metals to numerous countries</p>
            <button className="actionBtn">Know More</button>
          </div>
        </section>

        <section className="bannerSection section sectionPadding">
          <div ref={cursorRef} className="custom-cursor"></div>
          <div
            className="bgVideo"
            onMouseEnter={() => handleMouseEnter(videoRef4)}
            onMouseLeave={() => handleMouseLeave(videoRef4)}
          >
            <video
              ref={videoRef4}
              src={mainvideo}
              className="videoTag"
              loop
              muted
            />
          </div>
          <div className="contentDiv">
            <h4 className="title">Fertilizers</h4>
            <p className="text">Wonder Star specializes in sourcing and supplying high quality agricultural fertilizers globally</p>
            <button className="actionBtn">Know More</button>
          </div>
        </section>
      </div>

      <section className="mapSection section">
        <img src={map} alt="" />
        <img src={pin} className='pin1' alt="" />
        <img src={pin} className='pin2' alt="" />
        <img src={pin} className='pin3' alt="" />
        <img src={pin} className='pin4' alt="" />
        <img src={pin} className='pin5' alt="" />
      </section>

      <section className="contentSection contentSection1 section sectionPaddingBottom">
        <div className="headDiv" data-aos="fade-up" data-aos-duration="2000">
          <h3 className="title">Delivering customized services through a local lens</h3>
        </div>
        <div className="contentDiv" data-aos="fade-up" data-aos-duration="3000">
          <p className="text">With decades of experience in communities nationwide, we’re likely already your neighbors. We don’t just build and leave; we invest in our own backyards. Why? Because the strongest communities are the ones we create together.</p>
        </div>
      </section>

      <section className="companySection section sectionPadding">
        <div className="imgDiv">
          <img src={company} alt="" />
        </div>
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} className="contentDiv">
          <div className="count">
            <p className="number">{counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}+
              <span className='year'>Years Of Experiance</span></p>
          </div>
          <div className="count">
            <p className="number">{counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}+
              <span className='year'>Clientele</span></p>
          </div>
          <div className="count">
            <p className="number">{counterOn && <CountUp start={0} end={18} duration={2} delay={0} />}+
              <span className='year'>Countries</span></p>
          </div>
          <div className="count">
            <p className="number">{counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}+
              <span className='year'>Products</span></p>
          </div>
        </ScrollTrigger>
      </section>
    </>
  );
}

export default Home;
