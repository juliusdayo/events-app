import axios from "axios";
import { apiUrl } from "../next.config";

export const getEvent = async () => {
  try {
    const res = await fetch(`${apiUrl}/events`);

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const addEvent = async (event) => {
  try {
    const res = await fetch(`${apiUrl}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export const updateEvent = async (id, event) => {
  try {
    const res = await fetch(`${apiUrl}/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};
