import { React, useState, useEffect } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const { Text, Title } = Typography;
const { Option } = Select;


// const News = ({ simplified }) => {
//     const count = simplified ? 10: 100;
//     const { data: cryptoNews } = useGetCryptoNewsQuery(count);

//         console.log(cryptoNews);

//         return (
//         <div>
//             News
//         </div>
//     )
// }


const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 10 : 100 });

    // undefined data -- try to find wky
    console.log(cryptoNews);


}

export default News 
