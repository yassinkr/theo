import "server-only"
import {db} from "~/server/db/index"
import {auth} from "@clerk/nextjs/server"
export async function getMyImages(){
    const user = auth();
    if(!user.userId) throw new Error("unauthorized")

    const images = await db.query.images.findMany({
        where:(model,{eq})=>eq(model.userId,user.userId),
        orderBy:(model,{desc})=>desc(model.id),
      });
      return images;
}