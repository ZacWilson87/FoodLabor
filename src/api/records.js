import Api from '../services/axios'

export const getRecords = async () => {
    try {
        const response = await Api.get(`/items/records??sort[]=sort&sort[]=-for_date`)
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const getRecordsByDate = async (date) => {
    try {
        //Will need to look at documentation to see where ${date} needs to go
        const response = await Api.get(`/items/records?filter={ "for_date": { "_eq": "${date}" }}`
        )
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const getRecordsByTwoDates = async (dateOne, dateTwo) => {
    try {
        //Will need to look at documentation to see where ${date} needs to go
        const response = await Api.get(`/items/records?filter={ "for_date": { "_between": ["${dateOne}", "${dateTwo}"] }}`
        )
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const createRecord = async (obj) => {
    try {
        const response = await Api.post('/items/records', obj);
        return response;
    } catch (error) {
        console.error(error);
    }
}