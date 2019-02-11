# Заметки

1. Поскольку не было указано как конкретно реализовать мульти ввод, был выбран вариант с textarea и перечислением через запятую(+38 (096) 111-22-33,+38 (095) 333-22-11);
2. Не было указано можно ли выбирать общие категории(Аграрний сектор, IT) в иерархических списках, было решено оставить возможность выбора;
3. Ошибка во входных данных enumType: 'ImporanceValue' → enumType: 'ImportanceValue';
4. Поскольку не было указано на особенности формата списков(enumTypes), было решено при написании алгоритма добавления отступов, полагаться на то, что дочерние элементы всегда следуют за родительскими и между родительским и дочерними элементами не может быть элементов не принадлежащих крайнему родителю;
5. Паттерн ^\\+38\\(\\d{3}\\)) \\d{3}-\\d{2}-\\d{2} не соответствует формату телефона +38 (XXX) XXX-XX-XX и содержит ошибку → ^\\+38 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2};
6. Порядок элементов в финальном JSON объекте может не соответствовать указанному в примере(firstName,lastName,age...).
7. Валидаторы min/max, minlength/maxlength возвращают true при отсутствии значения поскольку эти поля могут быть не обязательными.

# Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
