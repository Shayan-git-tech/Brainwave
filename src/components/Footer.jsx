import React from 'react';
import Section from './Section';
import { socials } from '../constants';

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10" id="footer">
            <div className="container flex item-center justify-center sm:justify-between gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">
                    {new Date().getFullYear()}. © All rights reserved.
                </p>
                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <a key={item.id} 
                            href={item.url}
                            target='_blank'
                            className='flex items-center justify-center w-10 h-10 rounded-full bg-n-7 hover:bg-n-6 transition-colors'
                        >
                        <img src={item.iconUrl} width={16} height={16} alt={item.title}/>
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;