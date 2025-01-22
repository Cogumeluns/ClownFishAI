from fastapi import FastAPI
from app.rest.generate_image import generate_image
from app.rest.get_image_infos import get_image_infos
from app.rest.get_image import get_image
from app.util.requests import TextRequest

app = FastAPI()

@app.post("/generate-image")
async def end_generate_image(request: TextRequest):
    return await generate_image(request)

@app.post("/get-image-infos")
async def end_get_image_infos():
    return await get_image_infos()

@app.post("/get-image")
async def end_get_image(request: TextRequest):
    return await get_image(request)

# To run this server, use: uvicorn <filename_without_py>:app --reload