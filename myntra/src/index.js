import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Section from './components/Section';
import './index.css'
import data from './assets/data';
import Heading from './components/Heading'

function App() {
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

            {/* {console.log(brandOffers)} */}
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
                dataToRender.brandOffers.mat.map((row, index) => {
                    return <Section imageList={row} key={index} />
                })
            }
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
