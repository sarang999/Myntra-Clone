import React, { useState } from 'react';
import Section from './Section';
import './menswomen.css'
import data from '../../assets/data';
import Heading from './Heading'

export const  MensWomen = () => {
    const [currentTab, setCurrentTab] = useState('men');

    const { men, women } = data;

    let dataToRender = men;

    if (currentTab === 'women') {
        dataToRender = women;
    }

    return (
        <div>
            <button onClick={() => {
                setCurrentTab('men')
            }}>men</button>
            <button onClick={() => {
                setCurrentTab('women')
            }}>women</button>

            {
                dataToRender.banner.map((row, index) => {
                    return <Section imageList={row} key={index} />
                })
            }
            {
                dataToRender.categories.map((row, index) => {
                    return (<div key={index}>
                        <Heading title={row.title} />
                        <Section imageList={row.imageList} />
                    </div>)
                })
            }
            {
                <Heading title={dataToRender.brandOffers.title} />
            }
            {
                dataToRender.brandOffers.mat.map((row, index) => {
                    return <Section imageList={row} key={index} />
                })
            }
        </div>
    )
}

