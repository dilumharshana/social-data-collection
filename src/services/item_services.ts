import { generateResponse } from "../helpers/helpers.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// add an item to the items table
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
  } finally {
    await prisma.$disconnect();
  }
};

// get all items from items table
export const getItems = async (req, res) => {
  try {
    const response = await prisma.items.findMany();

    return generateResponse(res, response);
  } catch (error) {
    console.log(error);
    return generateResponse(res, null);
  } finally {
    await prisma.$disconnect();
  }
};

// get a single item by id from items table
export const getItem = async (req, res) => {
  const itemId = req.params.id || null;

  if (!itemId) return;

  try {
    const response = await prisma.items.findFirst({
      where: {
        id: parseInt(itemId)
      }
    });

    return generateResponse(res, response);
  } catch (error) {
    console.log(error);
    return generateResponse(res, null);
  } finally {
    await prisma.$disconnect();
  }
};

// get a single item by id from items table
export const updateItem = async (req, res) => {
  const { itemId, itemName } = req.body || null;

  if (!itemId) return;

  try {
    const response = await prisma.items.update({
      where: {
        id: parseInt(itemId)
      },
      data: {
        name: itemName
      }
    });

    return generateResponse(res, response);
  } catch (error) {
    console.log(error);
    return generateResponse(res, null);
  } finally {
    await prisma.$disconnect();
  }
};
