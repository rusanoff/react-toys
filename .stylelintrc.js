module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // Всегда пустая строка между блоками
    "at-rule-empty-line-before": 'always',
    // Все имена правил должны содержать только строчные буквы
    "at-rule-name-case": 'lower',
    // Всегда должен быть символ новой строки после имен правил в правилах с многострочными параметрами
    "at-rule-name-newline-after": 'always-multi-line',
    // Всегда должен быть один пробел после имен в правилах
    "at-rule-name-space-after": 'always',
    // Не должно быть неизвестных правил
    "at-rule-no-unknown": true,
    // Обязательные свойства для правил
    "at-rule-property-requirelist": {
      // "at-rule-name": ["array", "of", "properties"]
    },
    // Запретить пробелы перед точкой с запятой в правилах
    "at-rule-semicolon-space-before": 'never',
    // Запретить пустую строку перед закрывающей скобкой в блоке
    "block-closing-brace-empty-line-before": 'never',
    // После закрывающей скобки всегда должен быть символ новой строки
    "block-closing-brace-newline-after": 'always',
    // Перед закрывающей скобкой всегда должен быть символ новой строки
    "block-closing-brace-newline-before": 'always',
    // Не должно быть пустых блоков
    "block-no-empty": true,
    // После открывающей скобки всегда должен быть перевод строки
    "block-opening-brace-newline-after": 'always',
    // Перед открывающей скобкой всегда должен быть один пробел
    "block-opening-brace-space-before": 'always',
    // Значение цвета должно быть в нижнем регистре
    "color-hex-case": 'lower',
    // Значение цвета должно быть сокращенным
    "color-hex-length": 'short',
    // Значение цвета не должно быть словом
    "color-named": 'never',
    // Запретить недопустимые значения цветов
    "color-no-invalid-hex": true,
    // Всегда должна быть пустая строка перед комментарием
    "comment-empty-line-before": [
      'always',
      {
        ignore: [
          // Игнорировать комментарии команд stylelint-а
          'stylelint-commands',
          // Игнорировать комментарии, следующие после комментариев
          'after-comment',
        ],
      },
    ],
    // Запретить пустые комментарии
    "comment-no-empty": true,
    // Пробелы внутри блока комментария обязательны
    "comment-whitespace-inside": 'always',
    // Шаблон для именования пользовательских имен медиазапросов, значение - regexp-строка
    "custom-media-pattern": '',
    // Пользовательские свойства не должны отделяться пустой строкой
    "custom-property-empty-line-before": 'never',
    // Шаблон для именования пользовательских свойств, значение - regexp-строка
    "custom-property-pattern": '',
    // После символа `!` не должно быть пробелов
    "declaration-bang-space-after": 'never',
    // Перед символом `!` должен быть пробел
    "declaration-bang-space-before": 'always',
    // Запретить повторяющиеся свойства в блоках объявления
    "declaration-block-no-duplicate-properties": true,
    // Запрещать произвольные свойства, которые можно объединить в одно сокращенное свойство
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          // Игнорировать свойство `font`
          'font',
        ],
      },
    ],
    // Запретить сокращенные свойства, которые переопределяют связанные сокращенные свойства
    "declaration-block-no-shorthand-property-overrides": true,
    // После точки с запятой всегда должен быть перевод строки
    "declaration-block-semicolon-newline-after": 'always',
    // В многострочных правилах никогда не должно быть пробелов перед точками с запятой
    "declaration-block-semicolon-newline-before": 'never-multi-line',
    // Никогда не должно быть пробелов перед точкой с запятой
    "declaration-block-semicolon-space-before": 'never',
    // В однострочных объявлениях должно быть только одно правило
    "declaration-block-single-line-max-declarations": 1,
    // Всегда должна быть точка с запятой после последнего правила
    "declaration-block-trailing-semicolon": 'always',
    // Всегда должен быть пробел после двоеточия
    "declaration-colon-space-after": 'always',
    // Никогда не должно быть пробела перед двоеточием
    "declaration-colon-space-before": 'never',
    // Не должно быть пустых строк между правилами
    "declaration-empty-line-before": 'never',
    // Не должно быть `!important`,
    "declaration-no-important": true,
    // Должны быть кавычки вокруг каждого имени семейства шрифтов, которое не является ключевым словом
    "font-family-name-quotes": 'always-unless-keyword',
    // Запретить дупликаты семейств шрифтов
    "font-family-no-duplicate-names": true,
    // Запретить отсутствие родовых семейств в списках семейств шрифтов
    "font-family-no-missing-generic-family-keyword": true,
    // Значение `font-weight` всегда должно быть числом
    "font-weight-notation": 'numeric',
    // Запретить недопустимые выражения в функции `calc()`
    "function-calc-no-invalid": true,
    // Запретить оператор без пробелов в функции `calc()`
    "function-calc-no-unspaced-operator": true,
    // В функциях после запятой всегда должен быть пробел
    "function-comma-space-after": 'always',
    // В функциях перед запятой не должно быть пробела
    "function-comma-space-before": 'never',
    // Запретить значения направления в вызовах `linear-gradient()`, недопустимые по стандартному синтаксису
    "function-linear-gradient-no-nonstandard-direction": true,
    // Названия функций должны быть в нижнем регистре
    "function-name-case": 'lower',
    // Должны быть пробелы в скобках функций
    "function-parentheses-space-inside": 'never',
    // Значение в `url()` дожно быть в кавычках
    "function-url-quotes": 'always',
    // Должны быть пробелы между функциями
    "function-whitespace-after": 'always',
    // Количество пробелов в отступах
    "indentation": 2,
    // Не должно быть `!important` в анимациях
    "keyframe-declaration-no-important": true,
    // Шаблон для названия анимаций, значение - regexp-строка
    "keyframes-name-pattern": '',
    // Запретить единицы измерения для 0
    "length-zero-no-unit": true,
    // Максимальное количество пустых строк между блоками
    "max-empty-lines": 1,
    // Количество символов в строке
    "max-line-length": 100,
    // Должен быть пробел после двоеточия в `@media`
    "media-feature-colon-space-after": 'always',
    // Не должно быть пробела перед двоеточием в `@media`
    "media-feature-colon-space-before": 'never',
    // Названия в `@media` должны быть в нижнем регистре
    "media-feature-name-case": 'lower',
    // Запретить префиксы в `@media`
    "media-feature-name-no-vendor-prefix": true,
    // В скобках в `@media` должны быть пробелы
    "media-feature-parentheses-space-inside": 'never',
    // После оператора диапазона всегда должен быть один пробел
    "media-feature-range-operator-space-after": 'always',
    // Перед оператором диапазона всегда должен быть один пробел
    "media-feature-range-operator-space-before": 'always',
    // После запятых в `@media` всегда должен быть один пробел
    "media-query-list-comma-space-after": 'always',
    // Не должно быть пробелов перед запятыми в `@media`
    "media-query-list-comma-space-before": 'never',
    // Запретить дублирование `@import`
    "no-duplicate-at-import-rules": true,
    // Запретить дублирование селекторов
    "no-duplicate-selectors": true,
    // Не должно быть пустой строки в начале файла
    "no-empty-first-line": true,
    // Файл не должен быть пустым
    "no-empty-source": true,
    // Не должно быть пробелов в конце строки
    "no-eol-whitespace": true,
    // Зпретить лишние точки с запятой
    "no-extra-semicolons": true,
    // В конце файла должна быть пустая строка
    "no-missing-end-of-source-newline": true,
    // Никогда не должно быть ведущего нуля в дробных значениях
    "number-leading-zero": 'never',
    // Количество знаков после точки в дробных значениях
    "number-max-precision": 3,
    // Запретить ненужные нули в дробных значениях
    "number-no-trailing-zeros": true,
    // Названия свойств должны быть в нижнем регистре
    "property-case": 'lower',
    // Запретить префиксы
    "property-no-vendor-prefix": true,
    // Перед правилами всегда должна быть пустая строка
    "rule-empty-line-before": [
      'always',
      {
        except: [
          // Отмените основной параметр для вложенных правил и первого дочернего элемента их родительского узла
          'first-nested',
        ],
        ignore: [
          // Игнорировать правила, следующие за комментарием
          'after-comment',
        ],
      },
    ],
    // В скобках `[]` всегда должны быть пробелы
    "selector-attribute-brackets-space-inside": 'never',
    // Не должно быть пробела после оператора в  атрибуте
    "selector-attribute-operator-space-after": 'never',
    // Не должно быть пробела перед оператором в атрибуте
    "selector-attribute-operator-space-before": 'never',
    // Знасения аттрибутов должны быть в кавычках
    "selector-attribute-quotes": 'always',
    // После комбинаторов всегда должен быть один пробел
    "selector-combinator-space-after": 'always',
    // Перед комбинатором всегда должен быть один пробел
    "selector-combinator-space-before": 'always',
    // Наследуемые селекторы должны быть разделены только одним пробелом
    "selector-descendant-combinator-no-non-space": true,
    // // После запятых в перечислении селекторов всегда должен быть перевод строки
    // "selector-list-comma-newline-after": 'always',
    // // Никогда не должно быть пробелов перед запятыми в многострочных списках селекторов
    // "selector-list-comma-newline-before": 'never-multi-line',
    // // Должен быть пробел после запятой в перечислениях селекторов
    // "selector-list-comma-space-after": 'never',
    // // Не должно быть пробела перед запятой в перечислениях селекторов
    // "selector-list-comma-space-before": 'never',
    // Количество пустых строк между селекторами
    "selector-max-empty-lines": 0,
    // Запретить префиксы для селекторов
    "selector-no-vendor-prefix": true,
    // Псевдоклассы должны быть в нижнем регистре
    "selector-pseudo-class-case": 'lower',
    // Требовать один пробел внутри скобок в селекторах псевдоклассов
    "selector-pseudo-class-parentheses-space-inside": true,
    // Псевдоэлементы должны быть в нижнем регистре
    "selector-pseudo-element-case": 'lower',
    // Для псевдоэлементов должно быть двойное двоеточие
    "selector-pseudo-element-colon-notation": 'double',
    // Теги должны быть в нижнем регистре
    "selector-type-case": 'lower',
    // Запретить неэкранированные переводы строк
    "string-no-newline": true,
    // Вокруг строк должны быть только одинарные ковычки
    "string-quotes": 'single',
    // Минимальное значение для миллисекунд
    // "time-min-milliseconds": 20,
    // Единицы измерения должны быть в нижнем регистре
    "unit-case": 'lower',
    // Список доступных единиц измерений
    "unit-whitelist": [
      'em',
      'rem',
      '%',
      'px',
      'vh',
      'vw',
      's',
      'ms',
    ],
    // Значения свойств должны быть в нижнем регистре
    "value-keyword-case": 'lower',
    // После запятых всегда должен быть один пробел
    "value-list-comma-space-after": 'always-single-line',
    // Никогда не должно быть пробелов перед запятыми
    "value-list-comma-space-before": 'never',
    // Количество пустых строк в списке значений
    "value-list-max-empty-lines": 0,
    // Запретить префиксы значений
    "value-no-vendor-prefix": true,

    /* Stylelint Order Plugin */

    // Свойства должны быть в алфавитном порядке
    "order/properties-alphabetical-order": true,
  },
};
