import React from 'react';

interface TitleProps {
    text: string;
    darkMode?: boolean;
}

const Title: React.FunctionComponent<TitleProps> = ({ text, darkMode = false }) => {

    return <div className={`mb-7 font-sans text-4xl font-bold ${darkMode ? "text-white" : "text-black"}`}>{text}</div>;

};

export default Title;