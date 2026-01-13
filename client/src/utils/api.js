import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


const api = axios.create({
  baseURL: BASE_URL,
});


async function authHeader(getAccessTokenSilently) {
  const token = await getAccessTokenSilently();
  return { Authorization: `Bearer ${token}` };
}



export async function getCourses(getAccessTokenSilently) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.get("/api/courses", { headers });
  return res?.data?.data ?? [];
}

export async function createCourse(getAccessTokenSilently, prompt) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.post("/api/courses", { prompt }, { headers });
  return res?.data?.data;
}

export async function deleteCourse(getAccessTokenSilently, courseId) {
  const headers = await authHeader(getAccessTokenSilently);
  await api.delete(`/api/courses/${courseId}`, { headers });
}

export async function getCourseById(getAccessTokenSilently, courseId) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.get(`/api/courses/${courseId}`, { headers });
  return res?.data?.data;
}

/* -------------- Lesson -------------- */

export async function getLesson(
  getAccessTokenSilently,
  courseId,
  moduleIndex,
  lessonIndex
) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.get(
    `/api/courses/${courseId}/module/${moduleIndex}/lesson/${lessonIndex}`,
    { headers }
  );
  return res?.data?.data;
}



export async function searchYouTube(getAccessTokenSilently, query) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.get(`/api/youtube`, {
    headers,
    params: { q: query },
  });
  
  return res?.data?.videos ?? null;
}


export async function getLessonTTS(getAccessTokenSilently, lessonId) {
  const headers = await authHeader(getAccessTokenSilently);
  const res = await api.post(`/api/tts/${lessonId}`, null, {
    headers,
    responseType: "blob", 
  });

  const blob = res.data;
  return URL.createObjectURL(blob); 
}
