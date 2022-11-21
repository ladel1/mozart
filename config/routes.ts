import { ContactController } from "../src/Controller/ContactController";

export const routes = [
    {path:"/contact",controller:ContactController.index,method:"get"},
]