from io import BytesIO
from fastapi import HTTPException
from PIL import Image
from fastapi.responses import StreamingResponse
from pydantic import BaseModel


async def get_image(request: BaseModel):
    print(request)
    try:
        if not hasattr(request, "text"):
            raise HTTPException(status_code=400, detail="Invalid request. Missing 'text' field.")

        text = request.text
        if not text:
            raise HTTPException(status_code=400, detail="Text prompt cannot be empty.")

        image_path = f"files/imgs/{request.text}"
        image = Image.open(image_path)

        image_stream = BytesIO()
        image.save(image_stream, format="PNG")
        image_stream.seek(0)
            
        return StreamingResponse(image_stream, media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")