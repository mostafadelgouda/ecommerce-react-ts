"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, User, Search, ChevronDown, Heart } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [shopExpand, setShopExpand] = useState(false);
    const linkClass = (active: boolean) =>
        `px-3 py-2 text-sm font-medium ${active
            ? "text-blue-700 underline"
            : "text-gray-700 hover:text-black"
        }`;

    return (
        <>
            <nav className="flex items-center w-full bg-header-bg px-4 lg:px-16 h-24">
                {/* Logo */}
                <Link
                    href="/"
                    className="relative flex items-center h-full w-48"
                >
                    <Image
                        src="/assets/logo.avif"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Nav items */}
                <div className="flex items-center gap-6 ml-8">
                    <Link href="/" className={linkClass(pathname === "/")}>HOME</Link>
                    <Link
                        href="/shop"
                        className={`${linkClass(pathname.startsWith("/shop"))} flex items-center h-auto`}
                        onMouseEnter={() => setShopExpand(true)}
                        onMouseLeave={() => setShopExpand(false)}
                    >
                        SHOP
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Link>

                    <Link href="/products" className={`${linkClass(pathname.startsWith("/shop"))} flex items-center`}>PRODUCTS <ChevronDown className="ml-2" /></Link>
                    <Link href="/blog" className={`${linkClass(pathname.startsWith("/shop"))} flex items-center`}>BLOG <ChevronDown className="ml-2" /></Link>
                    <Link href="/buy" className={linkClass(pathname.startsWith("/buy"))}>BUY NOW</Link>
                </div>

                <div className="flex items-center gap-6 ml-auto">
                    <Search className="w-6 h-6 text-gray-500" />
                    <User className="w-6 h-6 text-gray-500" />
                    <Heart className="w-6 h-6 text-gray-500" />
                    <ShoppingCart className="w-6 h-6 text-gray-500" />
                </div>

            </nav>
            {shopExpand && (
                <div
                    className="
                    left-0
                    top-full
                    w-screen
                    bg-white
                    shadow-lg
                    transition
                    duration-200
                    z-50
                    "
                    onMouseEnter={() => setShopExpand(true)}   // Keep open when hovering dropdown
                    onMouseLeave={() => setShopExpand(false)}  // Close when leaving dropdown
                >
                    <div className="px-16 py-8 grid grid-cols-4 gap-6">
                        <div>Category 1</div>
                        <div>Category 2</div>
                        <div>Category 3</div>
                        <div>Category 4</div>
                    </div>
                </div>
            )}
        </>

    );
}
