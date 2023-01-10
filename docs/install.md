1. Устанавливаем node зависимости:
   
```
npm ci
```

2. Создаем в Intellij IDEA конфигурацию для запуска:
```
Тип: Mocha
Name: **/*Spec.ts
Environment variables: BASE_URL=http://localhost:1801
User interface: BDD
Extra Mocha options: --require ts-node/register --extension ts --timeout 10000
Text file patterns: **/*Spec.ts
```

3. Запускаем тест