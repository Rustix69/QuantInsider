import { Testimonials } from '@/components/Testimonials'
import ShinyButton from '@/components/ui/shiny-button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import events from "../data/events.json"
import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileForm } from '@/components/Contact';
import NumberTicker from '@/components/ui/number-ticker';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { GallerySlider } from '@/components/GallerySlider';
import { AlgoBulls } from '@/components/AlgoBulls';


const LandingPage = () => {

    return (
        <>
            <div className='flex flex-col'>
                {/* Section Text */}
                <div className='mt-8 lg:mt-40 text-xl md:text-4xl lg:text-6xl gradient-title tracking-tighter font-extrabold flex flex-col justify-center items-center'>
                    <div>Master the Art of Quant Finance</div>
                    <div>Build, Trade, and Succeed in the Markets!</div>
                </div>

                {/* Section Para */}
                <div className='text-center text-xs lg:text-lg tracking tracking-tighter flex flex-col px-3'>
                    <p>Learn from industry experts with our quant courses and cutting-edge <b>algo trading software,</b></p>
                    <p>paying your way to <b>Hedge funds, HFTs, and top-tier investment banks.</b></p>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-center mt-5 sm:mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                        <Link to="/education" target="_blank">
                            <ShinyButton className="font-semibold tracking-tighter">
                                Crack Your First Quant Job
                            </ShinyButton>
                        </Link>
                        <Link to="https://quantinsider.algobulls.com/phoenix/splash" target="_blank">
                            <ShinyButton className="font-semibold tracking-tighter">
                                <h1 className='px-3'>Algo Trading Platform</h1>
                            </ShinyButton>
                        </Link>
                    </div>
                </div>


                {/* Collaborations */}
                <div className='flex flex-col items-center mt-5 sm:mt-24'>
                    <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>Past Events</h1>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            }),
                        ]}
                        className="w-full py-5 sm:py-10 sm:mt-6"
                    >
                        <CarouselContent className="flex gap-8 sm:gap-20 items-center">
                            {events.map(({ name, id, path }) => (
                                <CarouselItem key={id} className="basis-1/4 lg:basis-1/5 ">
                                    <img
                                        src={path}
                                        alt={name}
                                        className="h-14 sm:h-24 object-contain"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>


            {/* Numerics Data */}
            <div className='mt-10 sm:mt-28'>
                <h1 className='text-center text-black text-3xl md:text-4xl lg:text-6xl tracking-tighter font-extrabold'>The Edge in Quantitative Strategies</h1>
                <div className='py-2 sm:py-6 lg:py-8 text-center font-semibold text-xs lg:text-lg tracking tracking-tighter px-5 sm:px-10'>
                    <p>Our team helps you excel in quantitative strategies, positioning you as a thought leader to attract top talent, generate leads, and secure investments for growth.</p>
                </div>
                <div className="px-5 lg:px-20 mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-blue-600 drop-shadow-lg">
                            <span>
                                <NumberTicker value={105} className="text-blue-600" />
                            </span>
                            <span className="ml-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl">K+</span>
                        </div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-xl lg:text-5xl lg:gap-6 sm:gap-3 md:gap-4 py-4 font-extrabold tracking-tighter text-transparent bg-clip-text bg-blue-600 drop-shadow-lg gap-2">
                            <h1 >on</h1>
                            <img src='/linkedIn_logo.svg' alt='LinkedIn' className='h-5 md:h-9 sm:h-7 lg:h-12 align-bottom' />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-orange-600 drop-shadow-lg">
                            <span>
                                <NumberTicker value={2800} className="text-orange-600" />
                            </span>
                            <span className="ml-2 text-5xl sm:text-5xl md:text-7xl lg:text-9xl">+</span>
                        </div>
                        <div className="flex items-center justify-center whitespace-pre-wrap text-xl lg:text-5xl lg:gap-6 sm:gap-3 md:gap-4 py-4 font-extrabold tracking-tighter text-transparent bg-clip-text bg-orange-600 drop-shadow-lg gap-2">
                            <h1 >Students mentored on</h1>
                            <img src='/topmate_logo.png' alt='LinkedIn' className='h-5 md:h-9 sm:h-7 lg:h-12 align-bottom' />
                        </div>
                    </div>
                </div>


                {/* Neon Cards */}
                <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 px-5 sm:px-10 mt-5 sm:mt-20">
                    <NeonGradientCard className="w-full lg:w-1/2 justify-center text-center">
                        <h1 className="text-center pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Our Mission
                        </h1>
                        <span className="text-lg py-20">
                            At Quant Insider, our mission is all about you. We're here to empower individuals, like you, with the
                            knowledge, skills, and guidance you need to thrive in the dynamic world of quantitative finance.
                            We're not just a service; we're your partner on the journey to success. We provide a comprehensive
                            suite of resources and unwavering support to help you excel in high-frequency trading, hedge funds,
                            proprietary trading desks, mid-frequency firms, low-frequency firms.
                        </span>
                    </NeonGradientCard>
                    <NeonGradientCard className="w-full lg:w-1/2 justify-center text-center">
                        <h1 className="text-center pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                            Our Vision
                        </h1>
                        <span className="text-lg">
                            Our vision at Quant Insider is to be your go-to destination for a rewarding career in quantitative finance. We envision a global community of enthusiasts where you're a valued member, not just a face in the crowd. We're here to help you ace interviews, land your dream job, and master the math and technical knowledge driving success in this field. Through innovative services, personalized guidance, and continuous learning, we aim to nurture future leaders and innovators.
                        </span>
                    </NeonGradientCard>
                </div>

            </div>


            {/* AlgoBulls */}
            <div className='mt-20 px-10 sm:px-14'>
                <AlgoBulls />
            </div>

            {/* Gallery */}
            <div className='mt-20 px-10 sm:px-14' id="event">
                <GallerySlider />
            </div>

            {/* Testimonials */}
            <div className='mt-14 sm:mt-20 flex flex-col items-center'>
                <h1 className='text-center text-black text-5xl md:text-6xl lg:text-8xl tracking-tighter font-extrabold'>Testimonials</h1>
                <Testimonials />
            </div>


            {/* Contact Us */}
            <div className='flex flex-col items-center justify-center item-centre px-3 mt-10 sm:mt-20' id="contact-us">
                <h1 className='text-center text-black text-5xl md:text-6xl lg:text-7xl tracking-tighter font-extrabold p-4'>Contact Us</h1>
                <ProfileForm />
            </div>



        </>
    )
}

export default LandingPage