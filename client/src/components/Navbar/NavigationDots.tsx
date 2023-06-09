import React from 'react';
import { navbarItems } from '../../constants/data';

interface NavigationDotsProps {
    active: string;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => {
    return (
        <div className='app__navigation'>
            {navbarItems.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    );
}

export default NavigationDots;
