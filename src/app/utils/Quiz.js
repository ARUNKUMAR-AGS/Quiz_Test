
import { getFirstCall } from './network';


export async function getCallReq(questionParams){    
  const url = getFirstCall().list;
  console.log(url,"url")
  try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      return error;
    }
}

