import random
from typing import Optional
from diffusers import DiffusionPipeline
from app.service.ai.image.Export_Image import Export_Image

def Generate_Image(model,
                    isAPI: bool,
                    prompt: str,
                    num_inference_steps: int = 180,
                    guidance_scale: int = 10,
                    height: int = 716,
                    width: int = 716,
                    seed: int = 2742008636) -> Optional[DiffusionPipeline]: # type: ignore
    
    try:
        seed = Generate_Seed()
        image = None
        
        if(isAPI):
            print("API")
            image = model.text_to_image(prompt,
                                        num_inference_steps=num_inference_steps,
                                        guidance_scale=guidance_scale,
                                        height=height,
                                        width=width,
                                        seed=seed)
            pass
        else:
            output = model(prompt,
                           num_inference_steps=num_inference_steps,
                           guidance_scale=guidance_scale,
                           height=height,
                           width=width,
                           seed=seed)
            
            image =output.images[0]
            pass
            
        Export_Image(image, prompt)
            
        return image
    except Exception as e:
        print(f"Error generating image: {e}")
        return None
    
def Generate_Seed() -> int:
    return random.randint(0, 2**32 - 1)