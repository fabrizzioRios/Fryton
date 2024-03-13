from ep14.shell import main


def begin():
    text = input("")
    main(text)
    begin()

if __name__ == '__main__':
    begin()