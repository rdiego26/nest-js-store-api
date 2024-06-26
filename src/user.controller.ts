import {Body, Controller, Post} from "@nestjs/common";
import {UserRepository} from "./user.repository";

@Controller('/users')
export class UserController {

    private userRepository = new UserRepository()
    @Post()
    async createUser(@Body() userData) {
        return this.userRepository.createUser(userData);
    }
}
