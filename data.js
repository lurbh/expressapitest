const BUS_STOP_API = "http://datamall2.mytransport.sg/ltaodataservice/BusStops";
const header = { 
  'AccountKey': 'fLf0y6ycSKSzqshZhvw7Gw=='
};

const axios = require('axios');

// async function LoadAxiosData()
// {
//   const response  = await axios.get(BUS_STOP_API,{
//     headers : header
//   })
//   console.log(response.data);
// }

module.exports = {
  LoadAxiosData : async function() {
    const response  = await axios.get(BUS_STOP_API,{
      headers : header
    })
    console.log(response.data);
  }
}