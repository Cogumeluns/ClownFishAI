import os
from PIL import Image
from typing import Optional
from diffusers import DiffusionPipeline
from app.service.ai.image.Export_Image import Export_Image

def Generate_Image(model, 
                         prompt: str,
                         num_inference_steps: int = 60,
                         guidance_scale: int = 10,
                         height: int = 512,
                         width: int = 512,
                         seed: int = 2742008636) -> Optional[DiffusionPipeline]: # type: ignore
    
    try:
        output = model(prompt,
            num_inference_steps=num_inference_steps,
            guidance_scale=guidance_scale,
            height=height,
            width=width,
            seed=seed)
            
        image =output.images[0]
            
        Export_Image(image, prompt)
            
        return image
    except Exception as e:
        print(f"Error generating image: {e}")
        return None
    
def Mocked_Image(model, 
                         prompt: str,
                         num_inference_steps: int = 60,
                         guidance_scale: int = 10,
                         height: int = 512,
                         width: int = 512,
                         seed: int = 2742008636) -> Optional[DiffusionPipeline]: # type: ignore
    try:
        # Load the image
        print("Current Working Directory:", os.getcwd())
        image_path = "./files/imgs/image.png"  # Replace with your image path
        image = Image.open(image_path)
            
        Export_Image(image, prompt)
            
        return image
    except Exception as e:
        print(f"Error generating image: {e}")
        return None