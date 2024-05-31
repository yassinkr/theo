import {db} from "../server/db/index"
export const dynamic= "force-dynamic"
const mochdata: string[] =['https://utfs.io/f/5d30af62-28cd-4fee-b455-d43cc4d00143-mbg4sh.png',
'https://utfs.io/f/918c7273-4863-49a7-a363-553cdcb80af7-mbg4sk.png',
'https://utfs.io/f/62ffd3be-cb20-468c-b10a-8697c2f77410-mbg4si.png',
'https://utfs.io/f/4c102349-4ff9-428c-9de7-7d100d9e33c5-mbg4sl.png',
'https://utfs.io/f/d948272b-cff2-4d1f-9ea9-31707c8ffc69-mbg4sj.png'
]

const mockImages=mochdata.map((url,index)=>({
  id:1+index,
  url,
}))
export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="w-[80%] flex justify-around items-start gap-4 flex-wrap">
        {posts.map((poste,id)=>(
          <div key= {id}>
            <h1>{poste.name}</h1>
          </div>
        ))}
      { [...mockImages,...mockImages,...mockImages].map((image,index) =>(
               <div key={image.id+index}>
                <img src={image.url} alt="image " className="w-96 h-48 object-fill"/>
               </div>
       )

       )
      }</div>
    </main>
  );
}
