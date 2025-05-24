import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageAPI";

const Home = () => {
    const [image, setImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (file) => {
        setImage(URL.createObjectURL(file));
        setEnhancedImage(null);
        setLoading(true);

        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setLoading(false);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Failed to upload image. Please try again.");
        }
    };


    return (
        <>
            <ImageUpload handleImageUpload={handleImageUpload}></ImageUpload>
            <ImagePreview
                loading={loading}
                uploadedImage={image}
                enhancedImage={enhancedImage}
            ></ImagePreview>
        </>
    );
}
export default Home;