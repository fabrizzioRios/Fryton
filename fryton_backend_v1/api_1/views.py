from ninja import NinjaAPI
from ep14.shell import Menu
from pydantic import BaseModel

api = NinjaAPI()


class Code(BaseModel):
    code_content: str


@api.post("/send-code")
def main(request, code: Code):

    result = Menu.main(code.code_content)
    print((type(result)))
    print(result)
    return result
