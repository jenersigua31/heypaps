import React from 'react'; 
import { Text } from '../../components'; 


interface iProps {
    sign?: string,
    amount: number,

    bold?: boolean,
    color?: string,
    size?: number,

    style?: any
}

const Currency:React.FC<iProps> = ({
    sign = '₱ ',
    amount,
    bold = false,
    color,
    size,
    style
}) => {

    const value = (price: number) => {
        const amountString = price+'';
        if(amountString.length< 4)return `${sign} ${price}.00`;

        const amountArray = amountString.split('').reverse();
        const amountArrayWithComma = amountArray.map( (digit,index) => {
            const divisibleBy3 = index > 0 && (index % 3) === 0;
            return !divisibleBy3 ? digit: `${digit},`;
        }).reverse().join('')

        return `${sign} ${amountArrayWithComma}.00`;
    }

    return ( 
            <Text 
                text={value(amount)} 
                bold={bold}
                color={color}
                fontSize={size}
                style={style}
            /> 
    );
}


export default Currency;