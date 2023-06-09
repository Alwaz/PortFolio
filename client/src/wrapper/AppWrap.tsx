import React, { ComponentType } from 'react';
import { NavigationDots, SocialMedia } from '../components';

interface AppWrapProps {
    idName: string;
    classNames?: string;
}

const AppWrap = <P extends {}>(
    WrappedComponent: ComponentType<P | {}>,
    idName: string,
    classNames?: string
): React.FC<AppWrapProps & P> => {
    const EnhancedComponent: React.FC<AppWrapProps & P> = () => {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <WrappedComponent />
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

    return EnhancedComponent;
};

export default AppWrap;

