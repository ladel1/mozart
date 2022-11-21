import {AbstarctController} from './AbstarctController'
import  {Request, Response } from 'express'
export class ContactController extends AbstarctController{
    
    static index(req: Request,res: Response){
        super.render(res,"index.html.twig",{name:"adel"})        
    } 

}

