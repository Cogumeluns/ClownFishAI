from huggingface_hub import InferenceClient

def Get_Diffusion_API(TOKEN: str):
    try:
        api =  InferenceClient(
            "stabilityai/stable-diffusion-2",
            token=TOKEN,
            timeout=300
        )
        return api
    except Exception as e:
        print(f"Error loading model: {e}")
        return None