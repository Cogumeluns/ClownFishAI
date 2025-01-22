from pydantic import BaseModel

# Pydantic model to define the structure of the incoming request
class TextRequest(BaseModel):
    text: str

class ImageInfosRequest(BaseModel):
    image: str
    text: str