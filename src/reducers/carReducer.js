import { BUY_ITEM, REMOVE_ITEM } from '../actions/carActions'

export const initialState = {
    cars: [
        {    
            additionalPrice: 0,
            car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
            },
            additionalFeatures: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
            ]
        },
        {    
            additionalPrice: 0,
            car: {
            price: 34259,
            name: '2020 Jeep Wrangler',
            image:
                'https://cdn.motor1.com/images/mgl/zonOE/s1/2019-jeep-wrangler.jpg',
            features: []
            },
            additionalFeatures: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Leather Seats', price: 3600 },
            { id: 3, name: 'Mounted Television', price: 2400 },
            { id: 4, name: 'Rear spoiler', price: 250 }
            ]
        },
        {    
            additionalPrice: 0,
            car: {
            price: 8534,
            name: '2011 Nissan Sentra',
            image:
                'https://cdn-w.v12soft.com/photos/mpsvz2D/11610312/077886_800600.jpg',
            features: []
            },
            additionalFeatures: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 },
            { id: 5, name: 'Sick wheels with dollar signs on em', price:2500 }
            ]
        },
        {    
            additionalPrice: 0,
            car: {
            price: 100,
            name: 'Cybertruck',
            image:
                'https://cdn.motor1.com/images/mgl/LNZVG/s1/tesla-cybertruck-outdoor-image.jpg',
            features: []
            },
            additionalFeatures: [
            { id: 1, name: 'Autodrive - City', price: 1500 },
            { id: 2, name: 'Autodrive - Country', price: 2000 },
            { id: 3, name: 'BOSE Speakers', price: 1200 },
            { id: 4, name: 'Glovebox Mini Bar', price: 300 },
            ]
        }
    ]
};

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
    case BUY_ITEM:
            let alreadyPresent = false;
            state.cars[action.index].car.features.forEach(feature => {
                if (action.payload.id === feature.id) {
                    alreadyPresent = true;
                }
            })
            return (alreadyPresent ? {
                ...state,
                cars: state.cars.map(vehicle => {
                    return {
                        ...vehicle,
                        car: {
                            ...vehicle.car,
                            features: [...vehicle.car.features]
                        },
                        additionalFeatures: [...vehicle.additionalFeatures]
                    }
                })
            } 
            : {
                ...state,
                cars: state.cars.map((vehicle, index) => {
                    if (action.index === index.toString()) {
                        return {
                            ...vehicle,
                            additionalPrice: vehicle.additionalPrice + action.payload.price,
                            car: {
                                ...vehicle.car,
                                features: [...vehicle.car.features, action.payload]
                            },
                            additionalFeatures: [...vehicle.additionalFeatures]
                        }
                    }
                    return {
                        ...vehicle,
                        car: {
                            ...vehicle.car,
                            features: [...vehicle.car.features]
                        },
                        additionalFeatures: [...vehicle.additionalFeatures]
                    }
                })
            })
        case REMOVE_ITEM:
            return {
                ...state,
                cars: state.cars.map((vehicle, index) => {
                    console.log(action.index, index.toString());
                    if (action.index === index.toString()) {
                        return {
                            ...vehicle,
                            additionalPrice: vehicle.additionalPrice - action.payload.price,
                            car: {
                                ...vehicle.car,
                                features: vehicle.car.features.filter(feature => {
                                    return (action.payload.id !== feature.id)
                                })
                            },
                            additionalFeatures: [...vehicle.additionalFeatures]
                        }
                    }
                    return {
                        ...vehicle,
                        car: {
                            ...vehicle.car,
                            features: [...vehicle.car.features]
                        },
                        additionalFeatures: [...vehicle.additionalFeatures]
                    }
                })
            }
        default:
            return state;
    }
}