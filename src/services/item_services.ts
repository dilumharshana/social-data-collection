import { generateResponse } from "../helpers/helpers.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// add an item to the items table
export const addItems = async (req, res) => {
  const { items } = req.body;

  try {
    const response = await prisma.items.createMany({ data: items });

    return generateResponse(res, response);
  } catch (error) {
    console.log(error);
    return generateResponse(res, null);
  } finally {
    await prisma.$disconnect();
  }
};
// add an item to the items table
export const addItem = async (req, res) => {
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

// update a single item by id from items table
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

// update multiple item by id from items table
export const updateItems = async (req, res) => {
  const { currentUnitPrice, newUnitPrice } = req.body || null;

  if (!currentUnitPrice) return;

  try {
    const response = await prisma.items.updateMany({
      where: {
        unitPrice: {
          gte: currentUnitPrice
        }
      },
      data: {
        unitPrice: newUnitPrice
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

// delete multiple item by id from items table
export const deleteItems = async (req, res) => {

  console.log("req =>", req);
  
  const unitPrice = req.body.unitPrice || null;

  if (!unitPrice) return;

  try {
    const response = await prisma.items.deleteMany({
      where: {
        unitPrice: {
          gt: unitPrice
        }
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

// delete a single item by id from items table
export const deleteItem = async (req, res) => {
  const itemId = req.params.id || null;

  if (!itemId) return;

  try {
    const response = await prisma.items.delete({
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
