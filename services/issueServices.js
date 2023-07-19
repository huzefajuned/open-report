import { BACKEND_URI } from "../CONSTANTS";

export async function listIssuesByCoordinate(latitude, longitude) {
  const res = await fetch(
    `${BACKEND_URI}/v1/issue/list-by-location?latitude=${latitude}&longitude=${longitude}`
  );
  const data = await res.json();
  return data;
}

export async function listAllTags() {
  const res = await fetch(`${BACKEND_URI}/v1/tag/list`);
  const data = res.json();
  return data;
}

export async function listIssuesForUser() {
  const res = await fetch(
    `${BACKEND_URI}/v1/issue/list`
  );
  const data = await res.json();
  return data;
}
