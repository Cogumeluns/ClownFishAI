from fastapi import FastAPI
from app.rest.generate_image import generate_image
from app.rest.get_image_infos import get_image_infos
from app.rest.get_image import get_image
from app.util.requests import TextRequest
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://10.0.0.108:3000"],  # Substitua pelo domínio permitido
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

@app.post("/generate-image")
async def end_generate_image(request: TextRequest):
    return await generate_image(request)

@app.get("/get-image-infos")
async def end_get_image_infos():
    return await get_image_infos()

@app.post("/get-image")
async def end_get_image(request: TextRequest):
    return await get_image(request)

# To run this server, use: uvicorn <filename_without_py>:app --reload