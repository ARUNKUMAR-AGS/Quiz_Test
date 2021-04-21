import { setWalletaddress, getWalletaddress } from './network';

export async function setWalletAddress(params){ 
  const url = setWalletaddress().list;
  try {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json',
          'Authorization': "Bearer"  +' '+ params.token, //eslint-disable-line
        },
        body : JSON.stringify(params.data)
      });
      const json = await response.json();
      return json;
  } catch (error) {
      return error;
  }
}

export async function getWalletAddress(params){ 
  const url = getWalletaddress(params.id).list;
  try {
    const response = await fetch(url, {
        method : 'GET',
        headers : {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json',
          'Authorization': "Bearer"  +' '+ params.token, //eslint-disable-line
        },
      });
      const json = await response.json(); 
      return json;
  } catch (error) {
      return error;
  }
}