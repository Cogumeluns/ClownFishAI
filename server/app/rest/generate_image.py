from fastapi import HTTPException
from fastapi.responses import StreamingResponse
from io import BytesIO
from pydantic import BaseModel
from sympy import false, true
from app.service.ai.image.Diffusion_AI import Get_Diffusion_AI
from app.service.ai.image.Diffusion_API import Get_Diffusion_API
from app.service.ai.image import Generate_Image

isApi=true

async def generate_image(request: BaseModel):
    try:
        print(request)
        # Ensure the request contains valid text
        if not hasattr(request, "text"):
            raise HTTPException(status_code=400, detail="Invalid request. Missing 'text' field.")

        # Extract text from the request
        text = request.text
        if not text:
            raise HTTPException(status_code=400, detail="Text prompt cannot be empty.")

        # Initialize the diffusion pipeline
        pipeline = None
        if isApi:
            pipeline = Get_Diffusion_API()
        else:
            pipeline = Get_Diffusion_AI()
        #
        if not pipeline:
            raise HTTPException(status_code=500, detail="Failed to initialize diffusion model.")

        # Generate the image using the provided text prompt
        generated_image = Generate_Image.Generate_Image(model=pipeline, isAPI=isApi, prompt=text)
        if generated_image is None:
            raise HTTPException(status_code=500, detail="Image generation failed.")

        # Save the image to a BytesIO stream
        image_stream = BytesIO()
        generated_image.save(image_stream, format="PNG")
        image_stream.seek(0)

        # Return the image as a StreamingResponse
        return StreamingResponse(image_stream, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")