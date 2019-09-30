import React from 'react';
import image1 from '../img/imageProfiles/image-1.jpg';
import image2 from '../img/imageProfiles/image-2.jpg';
import image3 from '../img/imageProfiles/image-3.jpg';
import image4 from '../img/imageProfiles/image-4.jpg';
import image5 from '../img/imageProfiles/image-5.jpg';
import image6 from '../img/imageProfiles/image-6.jpg';
import image7 from '../img/imageProfiles/image-7.jpg';
import image8 from '../img/imageProfiles/image-8.jpg';
import image9 from '../img/imageProfiles/image-9.jpg';
import image10 from '../img/imageProfiles/image-10.jpg';
import image11 from '../img/imageProfiles/image-11.jpg';
import image12 from '../img/imageProfiles/image-12.jpg';
import image13 from '../img/imageProfiles/image-13.jpg';
import image14 from '../img/imageProfiles/image-14.jpg';
import image15 from '../img/imageProfiles/image-15.jpg';
import image16 from '../img/imageProfiles/image-16.jpg';
import image17 from '../img/imageProfiles/image-17.jpg';
import image18 from '../img/imageProfiles/image-18.jpg';
import image19 from '../img/imageProfiles/image-19.jpg';
import image20 from '../img/imageProfiles/image-20.jpg';
import image21 from '../img/imageProfiles/image-21.jpg';
import image22 from '../img/imageProfiles/image-22.jpg';

const ImageBanner = () => {
    const imageColOne = [
        {
            'src': image1
        },
        {
            'src': image2
        },
        {
            'src': image3
        },
        {
            'src': image4
        },
        {
            'src': image5
        },
        {
            'src': image6
        },
        {
            'src': image7
        },
        {
            'src': image8
        },
        {
            'src': image9
        },
        {
            'src': image10
        },
        {
            'src': image11
        },
        {
            'src': image12
        },
        {
            'src': image13
        },
        {
            'src': image14
        },
        {
            'src': image15
        },
        {
            'src': image16
        },
        {
            'src': image17
        },
        {
            'src': image18
        },
        {
            'src': image19
        },
        {
            'src': image20
        },
        {
            'src': image21
        },
        {
            'src': image22
        }
    ];

    return (
        <div id="images-container">
            <div className="image-col">
                {
                    imageColOne.map((val) => {
                        return (
                            <img
                                className="image"
                                src={val.src}
                                alt=""
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ImageBanner;