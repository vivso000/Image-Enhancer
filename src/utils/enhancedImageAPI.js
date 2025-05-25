import axios from 'axios';
// const API_KEY = import.meta.env.API_KEY;
const API_KEY = "wxnsawy85jay2o21c"; 
const BASE_URL = "https://techhk.aoscdn.com";
const MAXIMUM_RETRIES = 10; // Maximum number of retries for polling

export const enhancedImageAPI = async (file) => {

    try {
        const taskId = await uploadImage(file);
        console.log("Image uploaded successfully, Task ID:", taskId);

        const enhancedImage = await PollforEnhancedImage(taskId);
        console.log("Enhanced image fetched successfully:", enhancedImage);

        return enhancedImage;
    } catch (error) {
        console.log("Error in enhancedImageAPI:", error.message);
    }

};


const uploadImage = async (file) => {
    // function to upoad the image to the server
    const formData = new FormData();
    formData.append('image_file', file); // image_file = name of variable in API documentation

    const {data} = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`, 
        formData, 
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY
            }
        }
    );

    if(!data?.data?.task_id){
        throw new Error("Task ID not found in response");
    }
    console.log(data.data.task_id)
    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    // function to fetch the enhanced image from the server
    const {data} = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY
            }
        }
    );

    if(!data?.data){
        throw new Error("Image data not found in response");
    }

    return data.data;
};


const PollforEnhancedImage = async (taskId, retries=0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);
        
        if (retries < MAXIMUM_RETRIES) {
            throw new Error("Max retries reached while polling for enhanced image");
        }

        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before retrying
        return PollforEnhancedImage(taskId, retries + 1);
    }

    console.log("Enhanced image is ready. URL:", result);

    return result;
};