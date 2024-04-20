from ep14 import basic


class Menu:
	@classmethod
	def main(cls, text):
		if text.strip() == "":
			return  # Exit the method if the text is empty

		result, error = basic.run('<stdin>', text)

		if error:
			print(error.as_string())
		elif result:
			if len(result.elements) == 1:
				print(repr(result.elements[0]))
			else:
				print(repr(result))
