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
const navigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: '#',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
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
const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$19',
        description: "The perfect plan if you're just getting started with our product.",
        features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
        featured: false,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$49',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Unlimited products',
            'Unlimited subscribers',
            'Advanced analytics',
            'Dedicated support representative',
            'Marketing automations',
            'Custom integrations',
        ],
        featured: true,
    },
]
const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]
const benefits = [
    'Two Decades of Expertise',
    'Personalized Approach',
    'Reliable and Consistent',
    'Affordable Excellence',
    'Eco-friendly Cleaning',
    'Committed to Customer Satisfaction',
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">

            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <div className="mx-auto max-w-7xl">
                        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
                            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Grime Guard Janitorial Services</span>
                                    <Image
                                        alt="Grime Guard Janitorial Services Logo"
                                        className="h-20 w-auto"
                                        src="/Grime Guard Logo@3x.png"
                                        height={250}
                                        width={250}
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
                                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
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
                                <a href="#" className="-m-1.5 p-1.5">
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

            </div>
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
                                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                            Scheduled Cleaning | Two Decades of Industry Experience
                                        </div>
                                    </div>
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        Step into a World of Exceptional Cleanliness with Grime Guard
                                    </h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
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
                            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                At Grime Guard, we tailor our services to meet your specific needs, fostering a clean, comfortable, and productive work environment.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Embark on your journey with Grime Guard today. Our straightforward process ensures that your commercial space not only shines but also facilitates productivity, leaving you to concentrate on what truly matters in your business.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex flex-col">
                                        <dt className="text-base font-semibold leading-7 text-gray-900">
                                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </div>
                                            {feature.name}
                                        </dt>
                                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
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
                <div className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                        <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                            <div
                                className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
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
                                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
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
                                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                                        The Grime Guard Advantage
                                    </h2>
                                    <p className="mt-4 text-gray-500">
                                        Choosing Grime Guard means choosing a dedicated ally who will value and respect your space as much as you do. We take immense pride in our attention to detail, professional demeanor, and the relentless pursuit of customer satisfaction.
                                    </p>
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src="/content/cleaning-office-2.jpg"
                                        alt=""
                                        className="object-cover object-center"
                                        height={250}
                                        width={500}
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
                                            <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                                            <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="overflow-hidden bg-white py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
                                <p className="mt-6 text-xl leading-8 text-gray-600">
                                    At the core of Grime Guard is our dedicated team, small but mighty, led by a seasoned professional with 20 years of industry experience. Our people are more than our strength - they are our defining factor.                                </p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Choosing Grime Guard means choosing a small business that operates with the passion, dedication, and personal touch that larger firms often lack. You're not just hiring a cleaning service – you're partnering with a team that brings a wealth of industry knowledge and skill to your commercial space.
                                </p>
                                {/*<div className="mt-10 flex">*/}
                                {/*    <a*/}
                                {/*        href="#"*/}
                                {/*        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                                {/*    >*/}
                                {/*        Join our team <span aria-hidden="true">&rarr;</span>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                            </div>
                            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                    <Image
                                        src="/content/team-image-2.jpg"
                                        height={250}
                                        width={250}
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature section */}
                <div className="bg-gray-900 py-24 sm:py-32">
                    <div className="relative isolate">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                                <Image
                                    src="/content/team-image-3.jpg"
                                    height={250}
                                    width={500}
                                    alt="Image by wirestock on Freepik"
                                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
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
                                className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                                style={{
                                    clipPath:
                                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="relative bg-gray-900">
                    <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                        <Image
                            className="h-full w-full object-cover"
                            src="/content/cleaning-office-3.jpg"
                            height={500}
                            width={900}
                            alt=""
                        />
                        <svg
                            viewBox="0 0 926 676"
                            aria-hidden="true"
                            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                        >
                            <path
                                fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                                fillOpacity=".4"
                                d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                            />
                            <defs>
                                <linearGradient
                                    id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                                    x1="926.392"
                                    x2="-109.635"
                                    y1=".176"
                                    y2="321.024"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#776FFF" />
                                    <stop offset={1} stopColor="#FF4694" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
                        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">Diligence & Timeliness</h2>
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
                                    <p className="text-base font-semibold leading-7 text-indigo-600">Accommodating Your Schedule</p>
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Streamlined Process, Optimized Results</h1>
                                    <p className="mt-6 text-xl leading-8 text-gray-700">
                                        Our flexible workflow designed with your schedule in mind
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <Image
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src="/content/organization-clean-1.jpg"
                                height={500}
                                width={500}
                                alt="Image by Freepik"
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <p>
                                        At Grime Guard, we understand the importance of a clean work environment, as well as the value of your time. That's why we've designed a flexible, efficient workflow that aligns with your schedule and operational needs.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-gray-900">Consultation</strong> Our process begins with a detailed understanding of your cleaning needs and scheduling requirements.
                  </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-gray-900">Scheduling</strong> Based on your business hours and preferences, we arrange our cleaning services to minimize disruption to your operations.
                  </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>
                    <strong className="font-semibold text-gray-900">Clean as Scheduled</strong> Our team arrives as scheduled, performing the cleaning tasks diligently and efficiently, while respecting your workspace.
                  </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8">
                                        This process ensures that our cleaning services not only meet the high-quality standards we uphold at Grime Guard but also seamlessly fit into your daily routine, enhancing your work environment without any disruptions.
                                    </p>
                                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Committed to Your Satisfaction</h2>
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
                                <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                    <Image
                                        className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                                        src="/content/spray-bottles-plain-background.jpg"
                                        height={500}
                                        width={500}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                                    <div
                                        className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
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
                                        <Image src="/Grime Guard Logo extra.png" alt="Image by Freepik" className="h-12 w-auto" height={500} width={500} />
                                        <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                            <p>
                                                Perfecting cleanliness with passion in Lakewood and across the vibrant neighboring communities of Colorado's Front Range.
                                            </p>
                                        </blockquote>
                                        <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                                            <strong className="font-semibold text-white">Locally Owned, Community Focused </strong> | Choose local. Choose Grime Guard.
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div>
                                <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                    <p className="text-base font-semibold leading-7 text-indigo-600">Proudly Serving Colorado's Front Range</p>
                                    <h4 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                        A Lakewood-Based Business for Your Janitorial Needs
                                    </h4>
                                    <div className="max-w-xl">
                                        <p className="mt-6">
                                            Grime Guard is more than just a janitorial service; we're your neighbors. Proudly based in the vibrant city of Lakewood, we are well-positioned to serve businesses across the Colorado Front Range and within a 60-mile radius of our hometown.
                                        </p>
                                        <p className="mt-8">
                                            From the bustling heart of Denver to the scenic city of Boulder, the historic charm of Golden to the dynamic cityscape of Aurora, we are here to serve you.
                                        </p>
                                        <p className="mt-8">
                                            Our Colorado roots run deep, and our love for this region fuels our commitment to delivering top-tier janitorial services. We're excited to bring our professional, reliable, and affordable cleaning services to more businesses around the Centennial State.
                                        </p>
                                        <p className="mt-8">
                                            Choose Grime Guard — your local partner in cleanliness.
                                        </p>
                                    </div>
                                </div>
                                {/*<dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">*/}
                                {/*    {stats.map((stat, statIdx) => (*/}
                                {/*        <div key={statIdx}>*/}
                                {/*            <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>*/}
                                {/*            <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>*/}
                                {/*        </div>*/}
                                {/*    ))}*/}
                                {/*</dl>*/}
                                {/*<div className="mt-10 flex">*/}
                                {/*    <a href="#" className="text-base font-semibold leading-7 text-indigo-600">*/}
                                {/*        Learn more about our company <span aria-hidden="true">&rarr;</span>*/}
                                {/*    </a>*/}
                                {/*</div>*/}
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
                        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                    />
                    <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                        <div
                            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Partner in Cleanliness</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                As your trusted partner, Grime Guard upholds the cleanliness and hygiene of your workspace, providing high-quality, personalized janitorial services. With two decades of experience in the industry, we have honed our skills and refined our processes to ensure that every corner of your commercial space shine                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                            {cards.map((card) => (
                                <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                                    <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                    <div className="text-base leading-7">
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
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Sign Up for a Quote Today</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Transform Your Workspace With Grime Guard</p>
                        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                            <form action="#" method="POST" className="lg:flex-auto">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Budget
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="budget"
                                                name="budget"
                                                type="text"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Website
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="url"
                                                name="website"
                                                id="website"
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                  <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                  />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Embark on Your Cleanliness Journey
                                    </button>
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-500">
                                    By submitting this form, I agree to the{' '}
                                    <a href="#" className="font-semibold text-indigo-600">
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </p>
                            </form>
                            <div className="lg:mt-6 lg:w-80 lg:flex-none">
                                <Image
                                    className="h-18 w-auto"
                                    src="/Grime Guard Logo.png"
                                    height={500}
                                    width={500}
                                    alt="" />
                                <figure className="mt-10">
                                    <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                                        <p>
                                            Don't wait for grime to take over. Schedule a consultation with Grime Guard today and reclaim your clean, productive workspace. Fill out the form to begin your cleanliness journey.                                        </p>
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
                        {/*{navigation.main.map((item) => (*/}
                        {/*    <div key={item.name} className="pb-6">*/}
                        {/*        <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">*/}
                        {/*            {item.name}*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                    </nav>
                    <div className="mt-10 flex justify-center space-x-10">
                        {/*{navigation.social.map((item) => (*/}
                        {/*    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">*/}
                        {/*        <span className="sr-only">{item.name}</span>*/}
                        {/*        <item.icon className="h-6 w-6" aria-hidden="true" />*/}
                        {/*    </a>*/}
                        {/*))}*/}
                    </div>
                    <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                        &copy; 2023 Grime Guard Janitorial Services, Inc. All rights reserved by DSeeHappy.
                    </p>
                </div>
            </footer>
        </div>
    )
}
