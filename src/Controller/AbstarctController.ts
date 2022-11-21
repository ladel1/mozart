import {TwingEnvironment, TwingLoaderFilesystem} from 'twing'
import { Response } from 'express'
import dotenv from 'dotenv';

export  class AbstarctController{
    static render(res:Response,template:string,params?:any){
        // load .env file
        dotenv.config();        
        let loader = new TwingLoaderFilesystem(process.env.TEMPLATES);
        let twing = new TwingEnvironment(loader);        
        twing.render(template, params).then((output) => {
            res.end(output);
        });
    }
}

