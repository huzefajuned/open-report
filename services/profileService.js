import { BACKEND_URI } from "../CONSTANTS";

export async function profileUpload(profileImage) {
    try {
      const response = await fetch(`${BACKEND_URI}/v1/issue/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: profileImage,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }