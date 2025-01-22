'use client';
import { useState } from "react"
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import AboutTab from "./component/about";
import OurTeam from './component/ourTeam';
import HappyClients from "./component/happyClient";
import Press from "./component/press";
import JobsCareer from "./component/jobs&Career";
import Policy from "./component/policy";

export default function About(){
    const [activeAboutLink, setActiveAboutLink] = useState('About us');

    const aboutLinks = [
        {title: 'About us', id: 1},
        {title: 'Our team', id: 2},
        {title: 'Happy clients', id: 3},
        {title: 'Press', id: 4},
        {title: 'Jobs & careers', id: 5},
        {title: 'Contact', id: 6},
        {title: 'Policy', id: 7}
    ]
    const twitterFeeds = [
        {date: 'Dec 25', feed: 'Rachel Nabors talks about the State of Web Animation in 2014:', link: 'buff.ly/1rZOfdY', id: 1},
        {date: 'Dec 25', feed: 'Rachel Nabors talks about the State of Web Animation in 2014:', link: 'buff.ly/1rZOfdY', id: 2},
        {date: 'Dec 25', feed: 'Rachel Nabors talks about the State of Web Animation in 2014:', link: 'buff.ly/1rZOfdY', id: 3},
    ]
    
    const renderTab = () =>{
        switch(activeAboutLink){
            case 'About us':
                return <AboutTab />;
            case 'Our team':
                return <OurTeam />
            case 'Happy clients':
                return <HappyClients />
            case 'Press':
                return <Press />
            case 'Jobs & careers':
                return <JobsCareer />
            case 'Contact':
                return 'Contact';
            case 'Policy':
                return <Policy />
        }
    }
    
    return(
        <section
            className=" p-[1rem] md:px-[2rem] lg:py-[2rem] lg:px-[4rem] md:grid grid-cols-4 flex flex-col-reverse items-start gap-10 gap-y-10"
        >
            <div
                className="col-span-1 "
            >
                <div
                    className="flex px-4 md:px-2 lg:px-4 flex-col items-start mb-8 justify-start border border-secondaryColor-100 rounded"
                >
                    {
                        aboutLinks.map((aboutLink)=>(
                            <button
                                className={`${aboutLink.title === activeAboutLink && 'text-primaryColor font-bold text-[1.1rem] pl-5'} border-b last:border-b-0 hover:text-primaryColor hover:pl-5 hover:text-[1.1rem] hover:font-bold p-4 block text-start w-full border-secondaryColor-100 transition duration-300 ease-linear`}
                                key={aboutLink.id}
                                onClick={()=>{
                                    setActiveAboutLink(aboutLink.title);
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                }}
                            >
                                {aboutLink.title}
                            </button>
                        ))
                    }
                </div>
                <div
                    className="border text-md p-4 md:p-2 lg:p-6 mb-8 border-secondaryColor-100 rounded"
                >
                    <h3
                        className="capitalize font-bold mb-4"
                    >
                        twitter feeds
                    </h3>
                    <div
                        className="flex flex-wrap gap-y-4 mb-4"
                    >
                        {
                            twitterFeeds.map((twitterFeed)=>(
                                <div
                                    key={twitterFeed.id}
                                    className="w-full"
                                >
                                    <div
                                        className="text-secondaryColor-100 "
                                    >
                                        {twitterFeed.date}
                                    </div>
                                    <div
                                        className=""
                                    >
                                        {twitterFeed.feed}
                                    </div>
                                    <Link
                                        href=''
                                        className="text-primaryColor hover:underline"
                                    >
                                        {twitterFeed.link}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <button
                        className="bg-primaryColor text-white rounded px-4 py-2"
                    >
                        <Link
                            href=''
                            className="hover:underline flex items-center justify-center gap-2 "
                        >
                            <span
                                className="w-fit"
                            >
                                <FaTwitter />
                            </span>
                            <span
                                className="w-fit"
                            >
                                follow us
                            </span>
                        </Link>
                    </button>

                </div>
                <div
                    className="border text-sm border-secondaryColor-100 rounded p-4 md:p-2 lg:p-4"
                >
                    <h3
                        className="capitalize text-[1rem] mb-2"
                    >
                        contact us
                    </h3>
                    <address
                        className="mb-2"
                    >
                        1639 H Street Northwest, Washington, District of Columbia
                    </address>
                    <div
                        className="mb-2"
                    >
                        <span className="block">Tel.: +0 20 550 6300</span>
                        <span className="block">Fax: +0 20 580 6399</span>
                    </div>
                    <Link
                        href=''
                        className="text-primaryColor hover:underline"
                    >
                        hello@domain.com
                    </Link>
                </div>
            </div>
            <div
                className="col-span-3"
            >
                {renderTab()}
            </div>

        </section>
    )
}