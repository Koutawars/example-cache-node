import { UserFile } from "./UserFile";

const userRepository = new UserFile(`./database/users.json`);
export { userRepository };