import { prisma } from '../src/config/database.js';

async function main() {
    await prisma.cars.createMany({
        data: [
            {
                model: 'HB20',
                licensePlate: 'ABC9090',
                year: 2001,
                color: 'AZUL'
            },
            {
                model: 'SONATA',
                licensePlate: 'EZD3035',
                year: 2010,
                color: 'PRETO'
            },
            {
                model: 'X1',
                licensePlate: 'FBI2231',
                year: 2018,
                color: 'BRANCO'
            },
            {
                model: 'CIVIC',
                licensePlate: 'LPA1019',
                year: 2021,
                color: 'CINZA'
            },
            {
                model: 'ONIX',
                licensePlate: 'HFA2713',
                year: 2023,
                color: 'AMARELO'
            }
        ]
    })
}

try {
    main();
    console.log('Registros inseridos');
} catch (error) {
    console.log(error);
    process.exit(1);
} finally {
    await prisma.$disconnect();
}

// main().
//     then(() => {
//     console.log('Registros inseridos')
//     }).catch((error) => {
//         console.log(error);
//         process.exit(1);
//     }).finally(async () => {
//         await prisma.$disconnect();
// })