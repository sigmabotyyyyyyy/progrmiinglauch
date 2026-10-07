# Лабораторная работа №3
# Вариант 8 (средний уровень)
# Product: название, цена, количество;
# изменение цены, добавление и стоимость запасов.

class Product:
    def __init__(self, name, price, quantity, category="Без категории"):
        self.name = name
        self.price = price
        self.quantity = quantity
        self.category = category

    def change_price(self, new_price):
        if new_price > 0:
            self.price = new_price

    def add_quantity(self, amount):
        if amount > 0:
            self.quantity += amount

    def stock_value(self):
        return self.price * self.quantity

    def info(self):
        return (
            f"{self.name} | категория: {self.category} | "
            f"цена: {self.price:.2f} ₸ | количество: {self.quantity} | "
            f"стоимость запасов: {self.stock_value():.2f} ₸"
        )


product1 = Product("Клавиатура", 25000, 4, "Периферия")
product2 = Product("Мышь", 12000, 7, "Периферия")
product3 = Product("Наушники", 18000, 3, "Аудио")

print("До изменений:")
print(product1.info())
print(product2.info())
print(product3.info())

product1.change_price(23000)
product2.add_quantity(3)
product3.change_price(17000)
product3.add_quantity(2)

print("\nПосле изменений:")
print(product1.info())
print(product2.info())
print(product3.info())
