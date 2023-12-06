import { IUserModel, UserModel } from "./../Models/User";
import { ClientError, VideoNotFoundError } from "../Models/Clients-Errors";

const getUser = async () => {
  return UserModel.find().exec();
};

const addUser = async (newUser: IUserModel) => {
  console.log(newUser);
  return UserModel.create(newUser);
};

export { getUser, addUser };
