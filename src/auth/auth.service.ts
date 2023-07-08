import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService{
     signUp(){
        return {msg:"im signup"}
     }
     signin(){
        return {msg:"im in"}

     }
}