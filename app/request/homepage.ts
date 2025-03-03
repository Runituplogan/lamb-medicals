import axiosInstance from "./axios";

export async function getDynamicPageData(slug: string): Promise<any> {
  try {
    const response = await axiosInstance.get(`/pages/${slug}`);
    console.log("API Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return {
      title: "Error",
      description: "Could not load data",
      image: "error.jpg",
    };
  }
}
