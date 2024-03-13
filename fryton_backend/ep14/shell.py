import basic


def main(text):
    if text.strip() == "":
        pass
    result, error = basic.run('<stdin>', text)
    if error:
        print(error.as_string())
    elif result:
        if len(result.elements) == 1:
            print(repr(result.elements[0]))
        else:
            print(repr(result))


if __name__ == '__main__':
    main()
