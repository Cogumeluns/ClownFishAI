from service.ai.image.Diffusion_AI import Get_Diffusion_AI
from service.ai.image import Generate_Image

def main():
    pipeline = Get_Diffusion_AI()
    
    prompt = "An adventurer with a lantern on a jungle cliff, overlooking ancient ruins and glowing plants, dynamic lighting, vibrant colors, thrilling, 8k."
    Generate_Image.Generate_Image(pipeline, prompt)

main()