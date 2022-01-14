import UserRepository from "@/repository/UserRepository";

const repositories = {
  users: UserRepository,
};
export default {
  get: (name) => repositories[name],
};
