# ClownFishAI

<img src="docs/clownfishai_banner.png" alt="Banner ClowFishAI" width="400"/>

Demonstration of use of AI capacities in the context of CV to sketch Arts.

<p>
    <img src="docs/cogumeluns.png" alt="Cogumeluns logo" width="50"/>
    <img src="docs/clownfishai.png" alt="ClownFishAI logo" width="50"/>
</p>



## About Project

**Clownfish AI** is a study exploring the development of AI-powered image generation systems. This project delves into the integration of advanced artificial intelligence tools, backend technologies, and modern frontend frameworks to create a seamless image generation experience.

The goal of **Clownfish AI** is to experiment with the end-to-end development of an AI-driven application. By leveraging tools like **Stable Diffusion**, **FastAPI**, **Hugging Face**, and **PyTorch**, this project serves as a hands-on exploration of building and deploying AI systems.

#### By: 
- [George P.](https://github.com/GeorgePaulino)
- [Otaviano M.](https://github.com/Otaviano-Manoel)

## How to Run

### Server

- Install dependencies: `pip install -r requirements.txt`

- Run Server (for default at port 8000): `uvicorn app.main:app --reload`

- To run with API, create a .env file at root of the server project, and define the `HUGGING_TOKEN` equals the token of your Hugging Face account

### Client

- Install dependencies: `npm install`

- Run Client: `npm run dev`

- Access at browser: http://localhost:3000

## Main Dependencies

### Server

- FastAPI
<div align="center">
    <a href="https://fastapi.tiangolo.com/" target="_blank">
        <img src="docs/dependencies/fastapi.png" alt="FastAPI" width="400"/>
    </a>
</div>

- Hugging Face
<div align="center">
    <a href="https://huggingface.co/" target="_blank">
        <img src="docs/dependencies/hugging_face.png" alt="Hugging Face" width="400"/>
    </a>
</div>

- PyTorch
<div align="center">
    <a href="https://pytorch.org/" target="_blank">
        <img src="docs/dependencies/pytorch.png" alt="PyTorch" width="400"/>
    </a>
</div>

### Client

- NextJS
<div align="center">
    <a href="https://nextjs.org/" target="_blank">
        <img src="docs/dependencies/nextjs.png" alt="NextJS" width="400"/>
    </a>
</div>