import Api from '../services/axios';

export const getRecords = async () => {
    try {
        const response = await Api.get(`/records`)
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getRecordsByDate = async (date) => {
    try {
        //Will need to look at documentation to see where ${date} needs to go
        const response = await Api.get(`/records`)
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const createRecord = async (dailySales, forDate, laborAmount, laborPercent) => {
    try {
        const queryObj = {
            "daily_sales": { dailySales },
            "for_date": { forDate },
            "labor_amount": { laborAmount },
            "labor_percent": { laborPercent },
        }
        const response = await Api.put('/records', queryObj);
        return response;
    } catch (error) {
        console.error(error);
    }
}