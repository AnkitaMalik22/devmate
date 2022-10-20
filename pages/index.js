import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import SKILLS from '../utils/skills';
import { ProfileCard } from '../components/ProfileCard';
import profiles from '../utils/profiles';
import { FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [display, setDisplay] = useState('absolute');
  const [searchedProfile, setSearchedProfile] = useState([]);
  const [lang, setLang] = useState();

  const filterItems = (arr, query) => {
    let filteredProfiles = [];
    if (query !== '') {
      arr.map((profile) => {
        profile.skills.filter((element) => {
          if (element.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            filteredProfiles.push(profile);
          }
        });
      });
    } else {
      setSearchedProfile(profiles);
    }
    setSearchedProfile(filteredProfiles);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Find Your DEV Mate!</title>
        <meta name="title" content="Find Your DEV Mate!" />
        <meta name="description" content="A Web App Find Your DEV Mate!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devmate.vercel.app/" />
        <meta property="og:title" content="Find Your DEV Mate!" />
        <meta property="og:description" content="A Web App Find Your DEV Mate!" />
        <meta property="twitter:url" content="https://devmate.vercel.app/" />
        <meta property="twitter:title" content="Find Your DEV Mate!" />
        <meta property="twitter:description" content="A Web App Find Your DEV Mate!" />
          
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        {/* <link rel='icon' href='/favicon/favicon.ico'/> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Find Your DEV Mate!</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            <Typewriter
              options={{
                strings: ['Search your mates now ...'],
                autoStart: true,
                loop: true,
              }}
            />
          </code>
        </p>

        <div className="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto text-black">
          <div className="w-full px-4">
            <div className="flex flex-col items-center relative">
              <div className="w-full  svelte-1l8159u">
                <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
                  <div className="flex flex-auto flex-wrap">
                    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700  border border-teal-300 ">
                      <div
                        className="text-xs font-normal leading-none max-w-full flex-initial"
                        id="skillsDiv"
                      >
                        {lang}
                      </div>
                      <div className="flex flex-auto flex-row-reverse">
                        <div
                          onClick={() => {
                            setLang('');
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                        onChange={(e) => {
                          filterItems(profiles, e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                    <button
                      className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                      onClick={() => {
                        display === 'hidden'
                          ? setDisplay('absolute')
                          : setDisplay('hidden');
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  display === 'hidden' ? 'absolute' : 'hidden'
                } shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj`}
              >
                <div className="flex flex-col w-full">
                  {SKILLS &&
                    SKILLS.map((skill, index) => {
                      return (
                        <div
                          className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:"
                          onClick={() => {
                            filterItems(profiles, skill.name);
                            setLang(skill.name);
                          }}
                          key={index}
                        >
                          <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                            <div className="w-full items-center flex">
                              <div
                                className="mx-2 leading-6"
                                data-skill={skill.name}
                              >
                                {skill.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* added animations */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-anchor-placement="top-center"
          className={styles.grid}
        >
          {profiles &&
            searchedProfile.map((data, index) => {
              return <ProfileCard data={data} key={index} />;
            })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/AnkitaMalik22/devmate"
          rel="noopener noreferrer"
        >
          Add your profile now!
          <span className={styles.logo}>
            <FaGithub />
          </span>
        </a>
      </footer>
    </div>
  );
}
