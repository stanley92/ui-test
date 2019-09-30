import './index.css';
import React from 'react';
import webcamImg from '../img/icons/webcam.png';
import uploadImg from '../img/icons/upload.png';
import searchImg from '../img/icons/search.png';

import ImageBanner from '../components/ImageBanner';

const StatsContainer = ({stats}) => {
    return (
        <div id="stats-container">
            {
                stats ?
                    stats.map((val) => {
                        return (
                            <div className="stats-wrapper">
                                <div className="count">{val.count}</div>
                                <div className="text">{val.text}</div>
                            </div>
                        )
                    })
                    :
                    null

            }
        </div>
    );
};

const Trace = () => {
    const stats = [
        {
            'count': 1,
            'text': 'application'
        },
        {
            'count': 85,
            'text': 'subcultures'
        },
        {
            'count': 177,
            'text': 'cities'
        },
        {
            'count': 98576,
            'text': 'cultures traced'
        }
    ];
    return (
        <div id="trace-container">
            <h1 className="header">Cultural<span className="orange-bullet">&bull;</span>Trace</h1>
            <div className="content-box">
                <p className="message">
                    For the longest time, Artificial Intelligence models have been trained on biased and problematic datasets.
                    Cultural.Trace is an application designed to root out racial biases - through categorising human profiles based on a new dataset of over 50 subcultural identifiers tied to positive associations.
                    Our aim is to refine AI by adding a distinctly human touch; one of empathy, to see people through the least judgemental and positive lens.
                </p>
                <div className="action-container">
                    <div id="start-webcam" className="action">
                        <img src={webcamImg} alt=""/>
                        Start Webcam
                    </div>
                    <div id="upload-image" className="action">
                        <img src={uploadImg} alt=""/>
                        Upload Image
                    </div>
                    <div id="url-upload" className="action">
                        <img src={searchImg} alt=""/>
                        <input className="input-field" placeholder="Use Image Url"/>
                    </div>
                </div>
            </div>
            <StatsContainer stats={stats} />
            <ImageBanner />
        </div>
    );
};

export default Trace;
