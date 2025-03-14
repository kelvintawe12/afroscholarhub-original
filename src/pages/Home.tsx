import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRightIcon, CheckCircleIcon, GlobeIcon, BookOpenIcon, HeartIcon, UsersIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      <StatsSection />
      {/* Mission Section */}
      <MissionSection />
      {/* Featured Stories */}
      <FeaturedStoriesSection />
      {/* Countries Map */}
      <CountriesSection />
      {/* CTA Section */}
      <CTASection />
    </div>;
};
const HeroSection = () => {
  return <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      filter: 'brightness(0.6)'
    }} />
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6" initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          Empowering Futures, <br />
          <span className="text-[#FFD700]">One Scholarship at a Time</span>
        </motion.h1>
        <motion.p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          AfroScholarHub connects deserving African students with educational
          opportunities through scholarships, mentorship, and financial support.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }}>
          <Link to="/donate" className="px-8 py-3 bg-[#AF3034] text-white font-bold rounded-md hover:bg-opacity-90 transition-all text-lg">
            Donate Now
          </Link>
          <Link to="/apply" className="px-8 py-3 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-md hover:bg-[#FFD700] hover:text-[#2B463C] transition-all text-lg">
            Apply for Support
          </Link>
        </motion.div>
      </div>
    </div>;
};
const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const stats = [{
    value: '5,000+',
    label: 'Students Supported',
    icon: <UsersIcon className="w-8 h-8" />
  }, {
    value: '20+',
    label: 'Countries',
    icon: <GlobeIcon className="w-8 h-8" />
  }, {
    value: '$1M+',
    label: 'Scholarships Awarded',
    icon: <BookOpenIcon className="w-8 h-8" />
  }, {
    value: '98%',
    label: 'Fund Utilization Rate',
    icon: <HeartIcon className="w-8 h-8" />
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div key={index} className="flex flex-col items-center text-center" variants={{
          hidden: {
            opacity: 0,
            y: 20
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }} initial="hidden" animate={controls} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <div className="text-[#2B463C] mb-4">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2B463C] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
const MissionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div className="md:w-1/2" variants={{
          hidden: {
            opacity: 0,
            x: -50
          },
          visible: {
            opacity: 1,
            x: 0
          }
        }} initial="hidden" animate={controls} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B463C] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              AfroScholarHub is committed to ensuring that students who cannot
              afford scholarship application services or basic education costs
              still have access to opportunities. We believe that financial
              constraints should never limit academic potential.
            </p>
            <ul className="space-y-4">
              {['Providing scholarship application support', 'Funding direct educational expenses', 'Connecting students with mentors', 'Creating a community of African scholars'].map((item, index) => <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#FFD700] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>)}
            </ul>
            <Link to="/about" className="inline-flex items-center text-[#2B463C] font-semibold mt-8 group">
              Learn more about our work
              <ChevronRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div className="md:w-1/2" variants={{
          hidden: {
            opacity: 0,
            x: 50
          },
          visible: {
            opacity: 1,
            x: 0
          }
        }} initial="hidden" animate={controls} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="African students studying together" className="rounded-lg shadow-xl w-full h-auto object-cover" style={{
            maxHeight: '500px'
          }} />
          </motion.div>
        </div>
      </div>
    </section>;
};
const FeaturedStoriesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const stories = [{
    name: 'Amina Ibrahim',
    country: 'Nigeria',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    quote: 'AfroScholarHub funded my application to Oxford, where I now study Medicine. My dream would have been impossible without their support.'
  }, {
    name: 'David Osei',
    country: 'Ghana',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
    quote: "The mentorship program connected me with professionals in my field. Now I'm pursuing a PhD in Environmental Science."
  }, {
    name: 'Grace Muthoni',
    country: 'Kenya',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    quote: 'From a small village to a Computer Science degree at MIT. AfroScholarHub made the impossible possible for me.'
  }];
  return <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={{
        hidden: {
          opacity: 0,
          y: -20
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }} initial="hidden" animate={controls} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B463C] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet some of the talented scholars whose lives have been transformed
            through our programs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105" variants={{
          hidden: {
            opacity: 0,
            y: 30
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }} initial="hidden" animate={controls} transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2
        }}>
              <div className="h-64 overflow-hidden">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B463C] mb-1">
                  {story.name}
                </h3>
                <p className="text-[#FFD700] font-semibold mb-4">
                  {story.country}
                </p>
                <p className="text-gray-600 italic">"{story.quote}"</p>
                <Link to="/blog" className="inline-flex items-center text-[#2B463C] font-semibold mt-4 group">
                  Read full story
                  <ChevronRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>)}
        </div>
        <div className="text-center mt-12">
          <Link to="/blog" className="px-6 py-3 bg-[#2B463C] text-white font-semibold rounded-md hover:bg-opacity-90 transition-all inline-flex items-center">
            View All Stories
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
    </section>;
};
const CountriesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" variants={{
        hidden: {
          opacity: 0,
          y: -20
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }} initial="hidden" animate={controls} transition={{
        duration: 0.5
      }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B463C] mb-4">
            Our Global Footprint
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AfroScholarHub operates across Africa, supporting students in over
            20 countries.
          </p>
        </motion.div>
        <motion.div className="bg-gray-100 rounded-lg p-4 md:p-8 shadow-lg" variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }} initial="hidden" animate={controls} transition={{
        duration: 0.7
      }}>
          {/* This would be replaced with an actual interactive map component */}
          <div className="w-full h-96 bg-[#2B463C] bg-opacity-10 rounded-lg flex items-center justify-center">
            <p className="text-xl text-gray-500">
              Interactive Map - AfroScholarHub's Impact
            </p>
            {/* In a real implementation, we would use a library like react-simple-maps or Leaflet */}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Nigeria', 'Kenya', 'Ghana', 'South Africa', 'Rwanda', 'Ethiopia', 'Uganda', 'Tanzania', 'Senegal', 'Cameroon'].map((country, index) => <motion.div key={index} className="bg-white rounded-md p-3 shadow text-center hover:shadow-md transition-shadow" variants={{
            hidden: {
              opacity: 0,
              y: 10
            },
            visible: {
              opacity: 1,
              y: 0
            }
          }} transition={{
            delay: 0.1 * index
          }}>
                <p className="font-semibold text-[#2B463C]">{country}</p>
              </motion.div>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/countries" className="inline-flex items-center text-[#2B463C] font-semibold group">
              Explore our country hubs
              <ChevronRightIcon className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>;
};
const CTASection = () => {
  return <section className="py-20 bg-[#2B463C]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300">
              Join us in empowering the next generation of African scholars.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/donate" className="px-8 py-3 bg-[#FFD700] text-[#2B463C] font-bold rounded-md hover:bg-opacity-90 transition-all text-center">
              Donate Now
            </Link>
            <Link to="/partnerships" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-[#2B463C] transition-all text-center">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default Home;