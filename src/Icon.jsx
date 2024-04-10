import PropTypes from 'prop-types';
import React from "react";


/**
 * Minimal Icon React Component.
 * 
 * To Use Icon component, you must first add the Material Icons Font CSS. * 
 * View [Material Icons Guide](https://developers.google.com/fonts/docs/material_icons)
 *
 * @author [Amol Meshram](https://github.com/j4jinx)
 */
const Icon = (props) => {
    const { icon = false, size = 24, color = 'inherit', className = '', style = {}, ...rest } = props;

    return (
        <span className={`material-icons ${className}`}
            style={{
                color,
                fontSize: `${size}px`,
                lineHeight: `${size}px`,
                verticalAlign: `middle`,
                ...style
            }}
            {...rest}
        >{icon}</span>
    );
};

Icon.propTypes = {
    /**
     * Icon name   
     */
    icon: PropTypes.string,
    /**
    * Icon size   
    */
    size: PropTypes.number,
    /**
    * Icon Color   
    */
    color: PropTypes.string,
    /**
    *@ignore
    */
    className: PropTypes.string,
    /**
     *@ignore
     */
    style: PropTypes.object,
};

Icon.defaultProps = {
    icon: 'stop',
    size: 24,
    color: 'inherit',
};

export default Icon;