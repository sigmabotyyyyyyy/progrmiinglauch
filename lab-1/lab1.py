# Лабораторная работа №1
# Вариант 8 (средний уровень)
# Ввести количество секунд и определить количество полных часов,
# минут и оставшихся секунд.

total_seconds = int(input("Введите количество секунд: "))

hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print("Результат:", hours, "ч", minutes, "мин", seconds, "сек")
