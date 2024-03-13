from ep14 import basic


class Menu:
	@classmethod
	def main(cls, text):
		if text.strip() == "":
			pass
		result, error = basic.run('<stdin>', text)
		if error:
			return error.as_string()
		elif result:
			if len(result.elements) == 1:
				return repr(result.elements[0])
			else:
				return repr(result)
