from diffusers import StableDiffusionPipeline

def Get_Diffusion_API():
    
    TOKEN = ""
    
    try:
        pipeline =  StableDiffusionPipeline.from_pretrained(
                                                  "stabilityai/stable-diffusion-2",
                                                  use_auth_token=TOKEN
                                                  )
        return pipeline
    except Exception as e:
        print(f"Error loading model: {e}")
        return None