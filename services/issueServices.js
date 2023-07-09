const BACKEND_URI='http://192.168.137.56:8080'

export async function listIssuesByCoordinate(latitude, longitude){
    const res = await fetch(
        `${BACKEND_URI}/v1/issue/list-by-location?latitude=${latitude}&longitude=${longitude}`
      );
      const data = await res.json();
      return data
}