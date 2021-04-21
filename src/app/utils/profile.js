import { getSignUpCall,getSignInCall,getFirstCall,setDoctypeCall, getbankAcclistUrl, setbankAcclistUrl } from './network';

export async function SignUpDetails(params) { 
const url = getSignUpCall().list;
try {
  const response = await fetch(url, {
      method : 'PUT',
      headers : {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(params)
    });
    const json = await response.json();
    return json;
} catch (error) {
    return error;
}
}


export async function SetDocumentType(params) {
const url = setDoctypeCall().list;
try {
  const response = await fetch(url, {
      method : 'POST',
      headers : {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
        'Authorization': "Bearer"  +' '+ params.token, //eslint-disable-line
      },
      body : JSON.stringify(params.kyc)
    });
    const json = await response.json();
    return json;
} catch (error) {
    return error;
}
}


export async function getCallReq(questionParams){    
  const url = getFirstCall().list;
  try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      return error;
    }
}


export async function getSignInDetails(params) {
  const url = getSignInCall().list;
  try {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(params)
      });
      const json = await response.json();
      return json;
  } catch (error) {
      return error;
  }
}

export async function verifyOtpDetails(params) {
  const url = getSignInCall().list;
  try {
    const response = await fetch(url, {
        method : 'POST',
        headers : {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(params)
      });
      const json = await response.json();
      return json;
  } catch (error) {
      return error;
  }
}

export async function getbankaccList(params) {
  const url = getbankAcclistUrl(params.id).list;
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

  export async function setbankaccList(params) {
    const url = setbankAcclistUrl().list;
    try {
      const response = await fetch(url, {
          method : 'POST',
          headers : {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json',
            'Authorization': "Bearer"  +' '+ params.token, //eslint-disable-line
          },
          body : JSON.stringify(params.bank_acc)
        });
        const json = await response.json();
        return json;
    } catch (error) {
        return error;
    }
    }