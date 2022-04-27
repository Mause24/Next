import {NextApiRequest,NextApiResponse} from 'next'
import DB from '@database'

const allAvos = async(req:NextApiRequest,res:NextApiResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    res.status(200).json({data:allEntries})
}


export default allAvos;