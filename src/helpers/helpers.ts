import { FAIL_STATE, SUCCESS_STATE } from "../constants/app-constants.js";

export const generateResponse = (
  responseObject: any,
  data: any
) => {

  //default response object
  const response = {
    status: data? SUCCESS_STATE : FAIL_STATE,
  }

  //append data to the response only if data is available
  if(data){
    response["data"] = data
  }

  responseObject.json(response);
};
