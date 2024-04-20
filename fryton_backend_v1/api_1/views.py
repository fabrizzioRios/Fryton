from ninja import NinjaAPI
from ep14.shell import Menu
from pydantic import BaseModel

api = NinjaAPI()


class Code(BaseModel):
    code_content: str


@api.post("/send-code")
def main(request, code: Code):
    f = open("ep14/example.myopl", "w")
    f.write('')
    f.write(code.code_content)
    f.close()
    cleaned_code_content = 'RUN("ep14/example.myopl")'
    Menu.main(cleaned_code_content)
    result = open("read.txt", "r").read()
    clean_txt = open("read.txt", "w")
    clean_txt.write('')
    return result

