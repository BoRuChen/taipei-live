import axios from 'axios';
import {actionTypes} from "../actionTypes";

export const getData = (town) => async dispatch => {
    const response = await axios.get(`https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/109?COUNTY=臺北市&TOWN=${town}`);
    let household_ordinary_m = 0;
    let household_single_m = 0;
    let household_ordinary_f = 0;
    let household_single_f = 0;

    response.data.responseData.map(data => {
        household_ordinary_m += parseInt(data.household_ordinary_m);
        household_single_m += parseInt(data.household_single_m);
        household_ordinary_f += parseInt(data.household_ordinary_f);
        household_single_f += parseInt(data.household_single_f);
    })
    const data = {
        town:town,
        data:{
            household_ordinary_m,
            household_single_m,
            household_ordinary_f,
            household_single_f
        }
    }
    dispatch({
        type:actionTypes.GET_DATA,
        payload:data,
    })
}