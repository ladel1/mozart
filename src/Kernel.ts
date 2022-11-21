import express, { Application } from 'express'
import { routes } from '../config/routes';
import dotenv from 'dotenv';
// load .env file
dotenv.config();

const PORT:any = process.env.NODE_PORT || process.env.PORT;
const app: Application = express()

export class Kernel{
    static start(){
        for(let route of routes){
            if(route.method.toLowerCase()=="get"){
                app.get(route.path,route.controller);
            }
            if(route.method.toLowerCase()=="post"){
                app.post(route.path,route.controller);
            }            
        }
        app.listen(PORT, () => {
            console.log(`Server listening on 127.0.0.1:${PORT}`);
        });
    }

}

