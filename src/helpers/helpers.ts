import {
  ERROR_CODE,
  FAIL_STATE,
  SUCCESS_CODE,
  SUCCESS_STATE
} from "../constants/app-constants.js";

export const generateResponse = (
  responseObject:any,
  isSuccess: boolean,
  data: any
) => {
  responseObject.json({
    status: isSuccess ? SUCCESS_STATE : FAIL_STATE,
    code: isSuccess ? SUCCESS_CODE : ERROR_CODE,
    data:data
  });
};
