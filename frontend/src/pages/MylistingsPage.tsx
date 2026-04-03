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
            image: 'data:image/jpeg;base64,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',
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
