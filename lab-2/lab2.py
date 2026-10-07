# Лабораторная работа №2
# Вариант 8 (средний уровень)
# Ввести количество секунд и представить время в формате часы:минуты:секунды.

total_seconds = int(input("Введите количество секунд: "))

hours = total_seconds // 3600
minutes = total_seconds % 3600 // 60
seconds = total_seconds % 60

print(f"{hours:02d}:{minutes:02d}:{seconds:02d}")
