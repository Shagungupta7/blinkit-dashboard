import axios from "axios";

const BASE_URL = "http://localhost:8080/analytics";

export const getTotalOrders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/total-orders`);
        return response.data;
    }catch(error){
        console.log(error);
        throw error;
    }
};

export const getTotalOrdersPerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getCancellationRate = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cancellation-rate`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getAvgTimePerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/avg-time-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getOrderPerDay = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/orders-per-day`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getAvgOrderValue = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/avg-order-value`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getDeliveryTImeByHour = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/peak-delivery-hours`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}   

export const getRevenuePerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/revenue-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const getCancellationPerCity = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cancellation-per-city`);
        return response.data;
    }catch(e){
        console.error(e);
        throw e;
    }
}