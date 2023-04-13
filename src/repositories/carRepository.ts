import {prisma} from "../config/database.js";

function getCars() {
  return prisma.cars.findMany();
}

function getCar(id: number) {
  return prisma.cars.findUnique({
    where: { id }
  })
}

function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUnique({
    where: {licensePlate}
  })
}

function createCar(model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.create({
    data: {model, licensePlate, year, color}
  })
   
}

function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {id}
  })
}

function updateCar(id: number, model: string, licensePlate: string, year: number, color: string) {
  return prisma.cars.update({
    where: { id },
    data: { model, licensePlate, year, color }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar
}

export default carRepository;