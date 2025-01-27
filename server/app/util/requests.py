from pydantic import BaseModel

class TextRequest(BaseModel):
    text: str

class ImageInfosRequest(BaseModel):
    image: str
    text: str