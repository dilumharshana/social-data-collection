import { facebook_dummy_data } from "../data-files/facebook-dummy-data.js";
import { generateResponse } from "../helpers/helpers.js";

// dummy facebook data feting service
export const facebook_data_loader = (req, res) =>
  generateResponse(res, true, facebook_dummy_data);
