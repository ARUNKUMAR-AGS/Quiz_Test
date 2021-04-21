import { getTradeList, Settransactioncall, setDoctypeCall } from "./network";

export async function getTradeHistorty(params) {
  const url = getTradeList(params.id).list;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + params.token //eslint-disable-line
      }
      // body : JSON.stringify(params)
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
}

export async function SettransactionDetails(params) {
  const url = Settransactioncall().list;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + params.token //eslint-disable-line
      },
      body: JSON.stringify(params.transaction)
    });
    const json = await response.json();
    console.log("payment respo", json);
    return json;
  } catch (error) {
    return error;
  }
}

export async function SetpassportDataDetails(params) {
  const url = setDoctypeCall().list;
  console.log('value', params.data);
  const data = new FormData();
    data.append('kyc[document_type]', params.data.document_type);
    data.append('kyc[front_image]', params.data.front_image);
    data.append('kyc[back_image]', params.data.back_image);
    data.append('kyc[country_of_issuance]', params.data.country_of_issuance);
    data.append('kyc[user_id]', params.data.user_id); 
  try {
    console.log('append data', data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + params.token //eslint-disable-line
      },
      body: JSON.stringify(params.data)
    });
    const json = await response.json();
    console.log("passport respo", json);
    return json;
  } catch (error) {
    return error;
  }
}
