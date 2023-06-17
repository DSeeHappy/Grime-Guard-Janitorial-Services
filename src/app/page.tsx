'use client'

import { useState } from 'react'
import { Dialog, Disclosure } from '@headlessui/react'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    PhoneIcon,
    LifebuoyIcon,
    NewspaperIcon,
    CheckCircleIcon,
    ArrowPathIcon,
    CheckIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'
import Image from "next/image";
import {ClassName} from "postcss-selector-parser";

const topNav = [
    { name: 'Services', href: '#services' },
    { name: 'Our People', href: '#our-people' },
    { name: 'Our Process', href: '#our-process' },
    { name: 'Free Quote', href: '#free-quote' },
]
const incentives = [
    {
        name: 'Free Consult',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "We initiate our journey with a detailed consultation to understand your unique cleaning needs.",
    },
    {
        name: 'Schedule',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "With your needs in mind, we plan and schedule our cleaning tasks at your convenience, ensuring our services seamlessly blend with your operations.",
    },
    {
        name: 'Clean',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "Our team, led by an industry veteran, meticulously cleans your space using eco-friendly products.",
    },
]
const cards = [
    {
        name: 'Tailored Services',
        description: 'Our services are meticulously tailored to your needs. Whether it\'s regular office cleaning or specialized sanitation procedures, we offer a diverse range of services to keep your workspace pristine and welcoming.',
        icon: PhoneIcon,
    },
    {
        name: 'Flexible Scheduling',
        description: 'At Grime Guard, we align with your schedule to minimize disruption to your operations. You decide when and how often we clean, ensuring our services fit seamlessly into your day-to-day business activities.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Uncompromising Quality',
        description: 'We take immense pride in the quality of our work. Our attention to detail and use of eco-friendly cleaning products ensure that your workspace is not only clean but also healthy and safe.',
        icon: NewspaperIcon,
    },
]

const features = [
    {
        name: 'Office Cleaning',
        description: 'Our services cover all aspects of office cleaning including dusting, vacuuming, trash removal, and sanitizing common areas to maintain a clean and welcoming work environment.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Health Focused Cleaning',
        description: ' In these unprecedented times, we\'ve enhanced our cleaning protocols to include additional measures that help safeguard your workspace against health risks. This thorough sanitization process contributes to the well-being of employees and visitors alike.',
        icon: LockClosedIcon,
    },
    {
        name: 'Restroom Sanitation & Restocking',
        description: 'We meticulously maintain the hygiene and cleanliness of your restrooms, ensuring they are fully stocked, sanitized, and odor-free at all times.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Breakroom Cleaning & Restocking',
        description: 'Our services extend to cleaning and maintaining the cleanliness of breakrooms or kitchens, including appliance cleaning, countertop and sink cleaning, and trash removal.',
        icon: FingerPrintIcon,
    },
    {
        name: 'High-touch Point Sanitization',
        description: 'We pay special attention to areas with high human contact, such as door handles, elevator buttons, and light switches, ensuring these frequently touched surfaces are regularly cleaned and sanitized.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Detailed Cleaning',
        description: 'This service tackles dust build-up on all surfaces, including hard-to-reach areas, ensuring a cleaner and healthier workspace.',
        icon: ServerIcon,
    },
]
const benefits = [
    'Two Decades of Expertise',
    'Personalized Approach',
    'Reliable and Consistent',
    'Affordable Excellence',
    'Eco-friendly Cleaning',
    'Committed to Customer Satisfaction',
]
function classNames(...classes:[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto max-w-7xl">
                        <div className="px-6 pt-6 lg:max-w-5xl lg:pl-8 lg:pr-0">
                            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Grime Guard Janitorial Services</span>
                                    <Image
                                        alt="Grime Guard Janitorial Services Logo"
                                        className="h-20 w-auto"
                                        src="/Grime Guard Logo@3x.png"
                                        height={477}
                                        width={1728}
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                                    {topNav.map((item) => (
                                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-DarkBlueShade">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </div>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Grime Guard Janitorial Services</span>
                                    <Image
                                        alt="Grime Guard Janitorial Services Logo"
                                        className="h-25 w-auto"
                                        src="/Grime Guard Logo@3x.png"
                                        height={150}
                                        width={150}
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {topNav.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
            <main>
                <div className="relative">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                            <svg
                                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <polygon points="0,0 90,0 50,100 0,100" />
                            </svg>
                            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                    <div className="hidden sm:mb-10 sm:flex">
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-LightBlueAccent ring-1 ring-LightBrownAccent hover:ring-gray-900/20">
                                            Scheduled Cleaning | Two Decades of Industry Experience
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-DarkBlueShade sm:text-6xl">
                                        Step into a World of Exceptional Cleanliness with Grime Guard
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-DarkBrownShade">
                                        Welcome to Grime Guard Janitorial Services, your new reliable partner for all your commercial cleaning needs. We carry with us two decades of industry experience and an unwavering commitment to guard your space against grime, leaving nothing behind but a fresh, vibrant environment.                                    </p>
                                    {/*<div className="mt-10 flex items-center gap-x-6">*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                    {/*    >*/}
                                    {/*        Get started*/}
                                    {/*    </a>*/}
                                    {/*    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">*/}
                                    {/*        Learn more <span aria-hidden="true">→</span>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <Image
                            className="aspect-[3/2] object-cover ring-4 ring-LightBrownAccent/40  lg:aspect-auto lg:h-full lg:w-full"
                            src="/content/mainImage.jpg"
                            alt="Image by macrovector on Freepik"
                            height={1920}
                            width={1080}
                        />
                    </div>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-DarkBlueShade sm:text-4xl">
                                At Grime Guard, we tailor our services to meet your specific needs, fostering a clean, comfortable, and productive work environment.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-DarkBrownShade">
                                Embark on your journey with Grime Guard today. Our straightforward process ensures that your commercial space not only shines but also facilitates productivity, leaving you to concentrate on what truly matters in your business.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex flex-col">
                                        <dt className="text-base font-semibold leading-7 text-DarkBlueShade">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-DarkBlueShade">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-DarkBrownShade">
                                            <p className="flex-auto">{feature.description}</p>
                                            {/*<p className="mt-6">*/}
                                            {/*    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">*/}
                                            {/*        Learn more <span aria-hidden="true">→</span>*/}
                                            {/*    </a>*/}
                                            {/*</p>*/}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Testimonial section */}
                <div className="relative z-10 mt-32 bg-DarkBlueShade pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                            <div
                                className="aspect-[1097/1023] w-[68.5625rem]  opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                        <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                                <Image
                                    className="absolute inset-0 h-full w-full rounded-2xl ring-4 ring-LightBrownAccent/90 bg-gray-800 object-cover shadow-2xl"
                                    src="/content/cleaning-office-1.jpg"
                                    alt="Image by Freepik"
                                    height={1920}
                                    width={1080}
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                            <figure className="relative isolate pt-6 sm:pt-12">
                                <svg
                                    viewBox="0 0 162 128"
                                    fill="none"
                                    aria-hidden="true"
                                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                                >
                                    <path
                                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                    />
                                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                                </svg>
                                <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                                    <p>
                                        At Grime Guard, we are committed to delivering a clean, safe, and hygienic workspace for our clients. We understand the crucial role cleanliness plays in enhancing productivity and elevating brand reputation. Our promise is to help you make the best impression every day.
                                    </p>
                                </blockquote>
                                <figcaption className="mt-8 text-base">
                                    <div className="font-semibold text-white">Rosa Chavez</div>
                                    <div className="mt-1 text-gray-400">Owner of Grime Guard Janitorial Services</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50">
                    <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                                <div>
                                    <h2 className="text-4xl font-bold tracking-tight text-DarkBlueShade">
                                        The Grime Guard Advantage
                                    </h2>
                                    <p className="mt-4 text-DarkBrownShade">
                                        Choosing Grime Guard means choosing a dedicated ally who will value and respect your space as much as you do. We take immense pride in our attention to detail, professional demeanor, and the relentless pursuit of customer satisfaction.
                                    </p>
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100  ring-8 ring-LightBrownAccent/80">
                                    <Image
                                        src="/content/cleaning-office-2.jpg"
                                        alt=""
                                        className="object-cover object-center"
                                        height={1920}
                                        width={1080}
                                    />
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                                {incentives.map((incentive) => (
                                    <div key={incentive.name} className="sm:flex lg:block">
                                        <div className="sm:flex-shrink-0">
                                            <Image className="h-16 w-16" src={incentive.imageSrc} height={500} width={500} alt="" />
                                        </div>
                                        <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                            <h3 className="text-sm font-medium text-DarkBlueShade">{incentive.name}</h3>
                                            <p className="mt-2 text-sm text-DarkBrownShade">{incentive.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="overflow-hidden bg-gray-50 py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-DarkBlueShade sm:text-4xl">Our people</h2>
                                <p className="mt-6 text-xl leading-8 text-LightBlueAccent">
                                    At the core of Grime Guard is our dedicated team, small but mighty, led by a seasoned professional with 20 years of industry experience. <br/><br/>Our people are more than our strength - they are our defining factor.                                </p>
                                <p className="mt-6 text-base leading-7 text-DarkBrownShade">
                                    Choosing Grime Guard means choosing a small business that operates with the passion, dedication, and personal touch that larger firms often lack. <br/><br/> You&apos;re not just hiring a cleaning service – you&apos;re partnering with a team that brings a wealth of industry knowledge and skill to your commercial space.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                    <Image
                                        src="/content/team-image-2.jpg"
                                        height={250}
                                        width={250}
                                        alt="Image by wirestock on Freepik"
                                        className="aspect-[7/5] w-[37rem] max-w-none ring-8 ring-LightBrownAccent/80 rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature section */}
                <div className="bg-DarkBlueShade py-24 sm:py-32">
                    <div className="relative isolate">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-LightBrownAccent/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-2xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                                <Image
                                    src="/content/team-image-3.jpg"
                                    height={250}
                                    width={500}
                                    alt="Image by wirestock on Freepik"
                                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm ring-8 ring-LightBrownAccent/80"
                                />
                                <div className="w-full flex-auto">
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Grime Guard Difference</h2>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">
                                        Our team is led by a seasoned professional with 20 years of industry experience, ensuring high-quality service that meets and exceeds your expectations.                                 </p>
                                    <ul
                                        role="list"
                                        className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                                    >
                                        {benefits.map((benefit) => (
                                            <li key={benefit} className="flex gap-x-3">
                                                <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    {/*<div className="mt-10 flex">*/}
                                    {/*    <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">*/}
                                    {/*        See our job postings <span aria-hidden="true">&rarr;</span>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                            aria-hidden="true"
                        >
                            <div
                                className="aspect-[1318/752] w-[82.375rem] flex-none  opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="relative bg-DarkBlueShade">
                    <div className="relative h-80 overflow-hidden rounded-t-2xl md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2 ring-8 ring-LightBrownAccent/80">
                        <Image
                            className="h-full w-full object-cover "
                            src="/content/cleaning-office-3.jpg"
                            height={500}
                            width={900}
                            alt=""
                        />
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                            <h2 className="text-base font-semibold leading-7 text-LightBrownAccent">Diligence & Timeliness</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Without compromising on service quality</p>
                            <p className="mt-6 text-base leading-7 text-gray-300">
                                In the world of janitorial services, punctuality and diligence are of utmost importance. At Grime Guard, we respect your time and always ensure our cleaning tasks are completed within the agreed timeframe.</p>
                            {/*<div className="mt-8">*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"*/}
                            {/*    >*/}
                            {/*        Visit the help center*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg
                            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y={-1}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                                <path
                                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                    strokeWidth={0}
                                />
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                        </svg>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    <p className="text-base font-semibold leading-7 text-LightBlueAccent">Accommodating Your Schedule</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-DarkBlueShade sm:text-4xl">Streamlined Process, Optimized Results</h1>
                                    <p className="mt-6 text-xl leading-8 text-DarkBrownShade">
                                        Our flexible workflow designed with your schedule in mind
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <Image
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-4 ring-LightBrownAccent/80 sm:w-[57rem]"
                                src="/content/organization-clean-1.jpg"
                                height={500}
                                width={500}
                                alt="Image by Freepik"
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-DarkBrownShade lg:max-w-lg">
                                    <p>
                                        At Grime Guard, we understand the importance of a clean work environment, as well as the value of your time. That&apos;s why we&apos;ve designed a flexible, efficient workflow that aligns with your schedule and operational needs.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-DarkBrownShade">
                                        <li className="flex gap-x-3">
                                            <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-DarkBlueShade" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-DarkBlueShade">Consultation</strong> Our process begins with a detailed understanding of your cleaning needs and scheduling requirements.
                  </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-DarkBlueShade" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-DarkBlueShade">Scheduling</strong> Based on your business hours and preferences, we arrange our cleaning services to minimize disruption to your operations.
                  </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <ServerIcon className="mt-1 h-5 w-5 flex-none text-DarkBlueShade" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-DarkBlueShade">Clean as Scheduled</strong> Our team arrives as scheduled, performing the cleaning tasks diligently and efficiently, while respecting your workspace.
                  </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        This process ensures that our cleaning services not only meet the high-quality standards we uphold at Grime Guard but also seamlessly fit into your daily routine, enhancing your work environment without any disruptions.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-DarkBlueShade">Committed to Your Satisfaction</h2>
                                    <p className="mt-6">
                                        At Grime Guard, your satisfaction is our priority. We continually strive to refine our workflow and services based on your feedback and evolving needs. With our flexible scheduling and commitment to excellence, we aim to provide a service that surpasses your expectations while respecting your time and business operations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="lg:pr-4">
                                <div className="relative overflow-hidden rounded-3xl bg-LightBrownAccent px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                        src="/content/spray-bottles-plain-background.jpg"
                                        height={500}
                                        width={500}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-LightBrownAccent mix-blend-multiply" />
                                    <div
                                        className="absolute left-1/2 top-1/2 -ml-16"
                                        aria-hidden="true"
                                    >
                                        <div
                                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                                            style={{
                                                clipPath:
                                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                            }}
                                        />
                                    </div>
                                    <figure className="relative isolate">
                                        <Image src="/Grime Guard Logo.png" alt="Image by Freepik" className="h-12 w-auto" height={500} width={500} />
                                        <blockquote className="mt-6 text-xl font-semibold leading-8 text-white bg-DarkBlueShade/80 rounded-2xl p-3 ">
                                            <p>
                                                Perfecting cleanliness with passion in Lakewood and across the vibrant neighboring communities of Colorado&apos;s Front Range.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 text-sm leading-6 text-DarkBlueShade">
                                            <strong className="font-semibold text-DarkBlueShade">Locally Owned, Community Focused </strong> | Choose local. Choose Grime Guard.
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <p className="text-base font-semibold leading-7 text-LightBlueAccent">Proudly Serving Colorado&apos;s Front Range</p>
                                    <h4 className="mt-2 text-3xl font-bold tracking-tight text-DarkBlueShade sm:text-4xl">
                                        A Lakewood-Based Business for Your Janitorial Needs
                                    </h4>
                                    <div className="max-w-xl">
                                        <p className="mt-6 text-DarkBrownShade">
                                            Grime Guard is more than just a janitorial service; we&apos;re your neighbors. Proudly based in the vibrant city of Lakewood, we are well-positioned to serve businesses across the Colorado Front Range and within a 60-mile radius of our hometown.
                                        </p>
                                        <p className="mt-8 text-DarkBrownShade">
                                            From the bustling heart of Denver to the scenic city of Boulder, the historic charm of Golden to the dynamic cityscape of Aurora, we are here to serve you.
                                        </p>
                                        <p className="mt-8 text-DarkBrownShade">
                                            Our Colorado roots run deep, and our love for this region fuels our commitment to delivering top-tier janitorial services. We&apos;re excited to bring our professional, reliable, and affordable cleaning services to more businesses around the Centennial State.
                                        </p>
                                        <p className="mt-8 text-DarkBrownShade">
                                            Choose Grime Guard — your local partner in cleanliness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <Image
                        src="/content/cleaning-office-4.jpg"
                        height={500}
                        width={500}
                        alt="Image by Freepik"
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center "
                    />
                    <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl bg-LightBrownAccent/40">
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#083043] to-[#37260c] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#083043] to-[#37260c] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-DarkBlueShade sm:text-6xl">Your Partner in Cleanliness</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300 p-6 ring-inset ring-LightBrownAccent/80 ring-1 bg-DarkBlueShade/80 rounded-xl ">
                                As your trusted partner, Grime Guard upholds the cleanliness and hygiene of your workspace, providing high-quality, personalized janitorial services. With two decades of experience in the industry, we have honed our skills and refined our processes to ensure that every corner of your commercial space shine                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            {cards.map((card) => (
                                <div key={card.name} className="flex gap-x-4 rounded-xl bg-DarkBlueShade/80 p-6 ring-1 ring-inset ring-LightBrownAccent/80">
                                    <card.icon className="h-7 w-5 flex-none text-LightBrownAccent" aria-hidden="true" />
                                    <div className="text-base leading-7 text-DarkBlueShade">
                                        <h3 className="font-semibold text-white">{card.name}</h3>
                                        <p className="mt-2 text-gray-300">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <svg
                        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                width={200}
                                height={200}
                                x="50%"
                                y={-64}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                    </svg>
                    <div className="mx-auto max-w-xl lg:max-w-4xl">
                        <h2 className="text-4xl font-bold tracking-tight text-DarkBlueShade">Sign Up for a Quote Today</h2>
                        <p className="mt-2 text-lg leading-8 text-DarkBrownShade">Transform Your Workspace With Grime Guard</p>
                        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                            <form action="#" method="POST" className="lg:flex-auto">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-DarkBlueShade">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-DarkBlueShade sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-DarkBlueShade">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-DarkBlueShade sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-DarkBlueShade">
                                            Budget
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="budget"
                                                name="budget"
                                                type="text"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-DarkBlueShade sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-semibold leading-6 text-DarkBlueShade">
                                            Website
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="url"
                                                name="website"
                                                id="website"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-DarkBlueShade sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-DarkBlueShade">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-DarkBlueShade shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-DarkBlueShade focus:ring-2 focus:ring-inset focus:ring-DarkBlueShade sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-DarkBlueShade px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-LightBrownAccent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-DarkBlueShade"
                                    >
                                        Embark on Your Cleanliness Journey
                                    </button>
                                </div>
                                {/*<p className="mt-4 text-sm leading-6 text-gray-500">*/}
                                {/*    By submitting this form, I agree to the{' '}*/}
                                {/*    <a href="#" className="font-semibold text-DarkBlueShade">*/}
                                {/*        privacy&nbsp;policy*/}
                                {/*    </a>*/}
                                {/*    .*/}
                                {/*</p>*/}
                            </form>
                            <div className="lg:mt-6 lg:w-80 lg:flex-none">
                                <Image
                                    className="h-18 w-auto"
                                    src="/Grime Guard Logo.png"
                                    height={500}
                                    width={500}
                                    alt="" />
                                <figure className="mt-10">
                                    <blockquote className="text-lg font-semibold leading-8 text-DarkBlueShade">
                                        <p>
                                            Don&apos;t wait for grime to take over. Schedule a consultation with Grime Guard today and reclaim your clean, productive workspace. Fill out the form to begin your cleanliness journey.                                        </p>
                                    </blockquote>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white">
                <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                    <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    </nav>
                    <div className="mt-10 flex justify-center space-x-10">
                    </div>
                    <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                        &copy; 2023 Grime Guard Janitorial Services, Inc. All rights reserved by DSeeHappy.
                    </p>
                </div>
            </footer>
        </div>
    )
}
