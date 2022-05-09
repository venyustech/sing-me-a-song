import { prisma } from "../src/database.js";

async function main() {

    await prisma.recommendation.createMany({
        data:[
            {
	            name: "Falamansa - Xote dos Milagres",
	            youtubeLink: "https://www.youtube.com/watch?v=chwyjJbcs1Y"
            },
            {
	            name: "Esteban: segunda-feira ",
	            youtubeLink: "https://www.youtube.com/watch?v=gjit4OgRZFM"
            },
        ],
        skipDuplicates: true,
    })
}
main().catch((e) => {
    console.log("deu ruim:",e);
    process.exit(1);
}).finally(async()=>{
    await prisma.$disconnect();
})
