import { SUCCESS_STATE } from "../constants/app-constants.js";
import { facebook_dummy_data } from "../data-files/facebook-dummy-data.js";

// dummy facebook data feting service
export const facebook_data_loader = (req, res) => {
  res.json({ status: SUCCESS_STATE, facebook_dummy_data});
};
