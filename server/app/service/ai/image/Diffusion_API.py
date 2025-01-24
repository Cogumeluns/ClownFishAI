from huggingface_hub import InferenceClient

def Get_Diffusion_API():
    TOKEN = ""
    try:
        api =  InferenceClient(
            "stabilityai/stable-diffusion-2",
            token=TOKEN
        )
        return api
    except Exception as e:
        print(f"Error loading model: {e}")
        return None