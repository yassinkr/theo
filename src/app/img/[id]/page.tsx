import {getImage} from "~/server/db/queries"

export default async function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}
){    const idAsNumber= parseInt(photoId)
      const image = await getImage(idAsNumber);
    return <div>{photoId}
    <img src={image.url} alt={image.name} className="w-96 h-96"/> 
    </div>
}