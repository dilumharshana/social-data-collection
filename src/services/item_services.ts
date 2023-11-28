import { facebook_dummy_data } from "../data-files/facebook-dummy-data.js";
import { generateResponse } from "../helpers/helpers.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// dummy facebook data feting service
export const addItems = async (req, res) => {
  const { name, unitPrice } = req.body;

  try {
    const response = await prisma.items.create({
      data: {
        name,
        unitPrice
      }
    });

    return generateResponse(res, response);
  } catch (error) {
    console.log(error);
    return generateResponse(res, null);
  }
};
