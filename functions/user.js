import { apiUrl } from "../next.config";

export const getUsers = async () => {
  try {
    const res = await fetch(`${apiUrl}/users`);

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const addUser = async (user) => {
  try {
    const res = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
};
