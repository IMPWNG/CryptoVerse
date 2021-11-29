import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {

    
    const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 10 : 100 });

    // undefined data -- try to find wky
    console.log(cryptoNews);

    return (
        <div>
            News
        </div>
    )
}

export default News 
