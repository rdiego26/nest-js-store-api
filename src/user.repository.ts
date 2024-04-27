export class UserRepository {
    private users = [];
    async createUser(userData) {
        this.users.push(userData);

        console.log(`Users: ${JSON.stringify(this.users)}`);
        return userData;
    }
}
