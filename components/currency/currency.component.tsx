import React from 'react'; 
import { Text } from '../../components'; 


interface iProps {
    sign?: string,
    amount: number,

    bold?: boolean,
    color?: string,
    size?: number
}

const Currency:React.FC<iProps> = ({
    sign = '₱ ',
    amount,
    bold = false,
    color,
    size
}) => {

    const value = () => {
        const amountString = amount+'';
        if(amountString.length< 4)return `${sign} ${amount}.00`;

        const amountArray = amountString.split('').reverse();
        const amountArrayWithComma = amountArray.map( (digit,index) => {
            const divisibleBy3 = index > 0 && (index % 3) === 0;
            return !divisibleBy3 ? digit: `${digit},`;
        }).reverse().join('')

        return `${sign} ${amountArrayWithComma}.00`;
    }

    return ( 
            <Text 
                text={value()} 
                bold={bold}
                color={color}
                fontSize={size}
            /> 
    );
}


export default Currency;