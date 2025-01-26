from typing import Optional
from diffusers import DiffusionPipeline

def Get_Diffusion_AI() -> Optional[DiffusionPipeline]:
    
    model_id = "stabilityai/stable-diffusion-2"
    
    try:
        pipeline = DiffusionPipeline.from_pretrained(model_id)
        return pipeline
    except Exception as e:
        print(f"Error loading model: {e}")
        return None