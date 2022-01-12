# Python
import asyncio
from typing import Optional
# Pydantic
from pydantic import BaseModel
# FastAPI
from fastapi import FastAPI
from fastapi import Body
import uvicorn


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Middlewares
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Models


class ContractRequirementsPF(BaseModel):
    apellido: str
    calle: str
    cedula: str
    codigoPostal: int
    colonia: str
    entidadFederativa: str
    identificacion: str
    municipio: str
    nacionalidad: Optional[str]
    nombre: str
    numExt: int
    numInt: int
    profesion: Optional[str]
    rfc: str
    segundoApellido: str


@app.get('/')
def home():
    return {"Hello": "World"}
# Request and Response Body


@app.post('/contract/new')
def create_contract(requirements: ContractRequirementsPF = Body(...)):
    print(requirements)


def run_server():
    loop = asyncio.get_event_loop()
    server_configuration = uvicorn.Config(
        app="main:app",
        host='127.0.0.1',
        port=8000,
        loop=loop,
        reload=True
    )
    server = uvicorn.Server(server_configuration)
    loop.run_until_complete(server.serve())


def main():
    run_server()


if __name__ == '__main__':
    main()
