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
            price: 26395,
            name: '2011 Nissan Sentra',
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
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => (item.id !== action.payload.id))
                },
                additionalFeatures: [...state.additionalFeatures]
            }
        default:
            return state;
    }
}