// src/pages/MyListingsPage.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

interface Car {
    id: string;
    title: string;
    price: number;
    location?: string;
    image: string;
}

const userListings: { [key: string]: Car[] } = {
    '2': [
        {
            id: '1',
            title: '2020 Hyundai Verna',
            price: 950000,
            location: 'Ahmedabad',
            image: 'https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/30719/1681800812705/AccessoriesStory.jpg',
        },
        {
            id: '2',
            title: '2018 Hyundai Creta',
            price: 820000,
            location: 'Ahmedabad',
            image: 'https://ymimg1.b8cdn.com/uploads/car_model/10653/pictures/13372468/2023_Hyundai_Creta_Exterior_01.jpg',
        },
        {
            id: '3',
            title: '2019 Mahindra Thar',
            price: 620000,
            location: 'Ahmedabad',
            image: 'https://wallpapercave.com/wp/wp4555934.jpg',
        },
    ],
    '3': [
        {
            id: '4',
            title: '2020 Mini Cooper',
            price: 620000,
            location: 'Ahmedabad',
            image: 'https://images.summitmedia-digital.com/topgear/images/2020/10/20/2020-mini-john-cooper-works-gp-01-1603155530.jpg',
        },
        {
            id: '5',
            title: '2021 Tata Harrier',
            price: 1400000,
            location: 'Ahmedabad',
            image: 'https://s.yimg.com/uu/api/res/1.2/PXo72.C9qP.w_0c1Tp4Uiw--~B/aD04MDk7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/1874e552b6c7420f8ab393f64b4f6de5',
        },
        {
            id: '3',
            title: '2022 Volkswagen Virtus',
            price: 620000,
            location: 'Ahmedabad',
            image: 'https://www.team-bhp.com/forum/attachments/official-new-car-reviews/2305674-volkswagen-virtus-review-smartselect_20220508143635_instagram.jpg',
        },

    ],
    '4': [
        {
            id: '6',
            title: '2019 Honda City',
            price: 950000,
            location: 'Gandhinagar',
            image: 'https://news.maxabout.com/wp-content/uploads/2020/04/2020-Honda-City-RS-JTC-11.jpg',
        },
        {
            id: '7',
            title: '2018 Honda Amaze',
            price: 650000,
            location: 'Gandhinagar',
            image: 'https://img.indianautosblog.com/2016/11/Honda-Amaze-Type-R-front-three-quarter-Rendering.jpg',
        },
        {
            id: '6',
            title: '2019 Ford Endeavour',
            price: 110000,
            location: 'Gandhinagar',
            image: 'https://images.hindustantimes.com/auto/img/2020/09/22/1600x900/New_Ford_Endeavour_Sport_2_1600758635440_1600758646190.jpg',
        },
    ],
};

const MyListingsPage: React.FC = () => {
    const { userId } = useAuth();
    const myListings = userListings[userId] || [];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">My Listings</h1>

            {myListings.length === 0 ? (
                <p className="text-gray-600">You haven’t listed any cars yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myListings.map((car) => (
                        <div
                            key={car.id}
                            className="bg-white shadow-md rounded-lg overflow-hidden"
                        >
                            <img
                                src={car.image}
                                alt={car.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-900">{car.title}</h2>
                                <p className="text-gray-700 mb-2">Rs {car.price.toLocaleString()}</p>
                                <p className="text-gray-500 text-sm">{car.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyListingsPage;
