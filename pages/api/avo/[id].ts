import DB from '@database'
import {NextApiRequest,NextApiResponse} from 'next'

const avoById = async(req:NextApiRequest,res:NextApiResponse) => {
    const db = new DB();
    const id=req.query.id as string
    const avo = await db.getById(id);
    res.status(200).json(avo)
}


export default avoById;