"use client"
import React from 'react';
import Image from 'next/image';
import { ShoppingCart, User, Search, ChevronDown, Heart } from "lucide-react";
interface ProductItemProps {
    imageUrl: string;
    name: string;
    clickOperation?: () => void;
}

const ProductItem: React.FunctionComponent<ProductItemProps> = ({ imageUrl, name = "", clickOperation }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div
            className="relative w-72 h-96 items-center justify-center cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={clickOperation}
        >
            <Image
                src={imageUrl}
                alt={typeof name === 'string' ? name : ''}
                fill
                className={`transform duration-500 ease-in-out ${isHovered ? "scale-110" : "scale-100"}`}
            />
            <div
                className={`absolute w-full h-full transform transition-all duration-500 ease-in-out bg-black ${isHovered ? "bg-opacity-50" : "bg-opacity-0"
                    }`}
            ></div>
            <div
                className={`absolute top-3 right-3 flex flex-col gap-3
                    transition-all duration-300 ease-out
                    ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                `}
            >
                <button className="p-2 bg-white/90 text-black rounded-full hover:scale-110 transition">
                    <ShoppingCart size={18} />
                </button>

                <button className="p-2 bg-white/90 text-black rounded-full hover:scale-110 transition delay-75">
                    <Heart size={18} />
                </button>

                <button className="p-2 bg-white/90 text-black rounded-full hover:scale-110 transition delay-150">
                    <Search size={18} />
                </button>
            </div>
            {/* hover:scale-110  */}
            <button className="absolute left-1/2 -translate-x-1/2 bottom-3 p-2 w-64 bg-white/90 text-black rounded-md transition delay-150">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;