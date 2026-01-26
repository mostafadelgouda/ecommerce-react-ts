import React from 'react';
import Image from 'next/image';

interface CollectionsItemProps {
    imageUrl: string;
    name: string;
    clickOperation?: () => void;
}

const CollectionsItem: React.FunctionComponent<CollectionsItemProps> = ({ imageUrl, name = "", clickOperation }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div
            className="relative w-80 h-80 rounded-full items-center justify-center cursor-pointer overflow-hidden"
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
            <h2
                className={`absolute inset-0 flex items-center justify-center
                    text-white text-3xl font-semibold text-center
                    max-w-[80%] mx-auto 
                    transition-all duration-500 ease-in-out
                    ${isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-7"}`}
            >
                {name}
            </h2>
        </div>
    );
};

export default CollectionsItem;