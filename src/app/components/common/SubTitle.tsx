import React from 'react';

interface SubtitleProps {
    text: string;
    darkMode?: boolean;
}

const Subtitle: React.FunctionComponent<SubtitleProps> = ({ text, darkMode = false }) => {

    return <h3 className={`mb-3 font-sans tracking-[0.5em] text-xs font-semibold ${darkMode ? "text-white" : "text-label-subtitle"}`}>{text.toUpperCase()}</h3>;

};

export default Subtitle;