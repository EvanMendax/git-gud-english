import React from 'react';

export const BoldText: React.FC<{ children: string }> = ({children}) => {
    return (
        <span style={{fontWeight: 'bold'}}> {children} </span>
    )
}
