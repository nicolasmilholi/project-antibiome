/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <>
        
            <div className="relative flex justify-center md:justify-center md:space-x-10">
                <div className="group">
                    <button className="flex flex-row justify-center items-center w-full px-4 py-4 mt-2 bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4">
                        <span>First Dropdown</span>
                    </button>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:grid">
                        <div className="px-2 pt-0 pb-2 bg-[#9D8E8E] shadow-lg">
                            <div className="relative grid w-full grid-cols-3 gap-4 md:grid-cols-1">
                                <nav
                                    className="relative grid px-4 py-8 bg-[#9D8E8E] sm:grid-cols-4 sm:gap-x-2 sm:py-2 sm:px-6 lg:px-8 xl:pr-12"
                                    aria-labelledby="solutions-heading"
                                >
                                    <div>
                                        <span className="text-sm font-sm tracking-wide text-white">brand philosophy</span>
                                    </div>
                                    <div>
                                        <span className="text-sm font-sm tracking-wide text-white">product technology</span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <button className="flex flex-row justify-center items-center w-full px-4 py-4 mt-2 bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4">
                        <span>Second Dropdown</span>
                    </button>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:grid">
                        <div className="px-2 pt-0 pb-2 bg-[#9D8E8E] shadow-lg">
                            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                                <nav
                                    className="relative grid px-4 py-8 bg-[#9D8E8E] sm:grid-cols-4 sm:gap-x-2 sm:py-2 sm:px-6 lg:px-8 xl:pr-12"
                                    aria-labelledby="solutions-heading"
                                >
                                    <div>
                                        <span className="text-sm font-sm tracking-wide text-white">brand philosophy</span>
                                    </div>
                                    <div>
                                        <span className="text-sm font-sm tracking-wide text-white">product technology</span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
