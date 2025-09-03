import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
  const res = await fetch(`https://pk-sheets-api.onrender.com/students/${params.id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch student');
  }
  const student = await res.json();

  return { student };
};
