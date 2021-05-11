import { AUTHENTICATION_PATH } from "../config/paths";
import { authenticatedRequest } from "../helpers/AuthenticatedRequest";

const getUserByID = async (userID) => {
  try {
    const response = await authenticatedRequest(
      `${AUTHENTICATION_PATH}/users/${userID}`,
      userID
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, user) => {
  try {
    const response = await authenticatedRequest(
      `${AUTHENTICATION_PATH}/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { updateUser, getUserByID };
