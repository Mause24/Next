import {IncomingMessage,ServerResponse} from 'http'
import DB from '@database'

const allAvos = (req:IncomingMessage,res:ServerResponse) => {
    const db = new DB();
    const allEntries = await db.getAll();
    console.log(allEntries);
    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    res.end(JSON.stringify({data:allEntries}))
}

export default allAvos;