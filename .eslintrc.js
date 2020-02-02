module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    // node: true,
    browser: true,
    jest: true,
  },
  extends: [
    // Базовый набор правил eslint
    'eslint:recommended',
    // Базовый набор правил из плагина eslint-plugin-promise
    'plugin:promise/recommended',
    // Базовый набор правил из плагина eslint-plugin-sonarjs
    'plugin:react/recommended',
    // Отключаем часть правил из базового набора правил eslint, который несовместимы с TypeScript
    'plugin:@typescript-eslint/eslint-recommended',
    // Базовые правила для TypeScript
    'plugin:@typescript-eslint/recommended',
    // Правила TypeScript, требующие информации о типах
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    "__dirname": 'readonly',
    "module": 'readonly',
    "process": 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
  plugins: [
    // Плагин для правил импортов и экспортов
    'import',
    // Плагин для проверки кода React компонентов
    'react',
    // Плагин для правил использваония React Hooks
    'react-hooks',
    // Плагин для проверки типичных ошибок использования Promise
    'promise',
    // Плагин для правил по улучшению регулярных выражений
    'optimize-regex',
    // Плагин для проверки на сложность кода и типичные ошибки рефакторинга
    'sonarjs',
    // Плагин для правил доступности в JSX
    'jsx-a11y',
    // Плагин с наборами правил для TypeScript
    '@typescript-eslint',
  ],
  rules: {
    /* ESLint Rules */

    "arrow-body-style": [
      'error',
      'always',
    ],
    "array-bracket-newline": [
      'error',
      {
        multiline: true,
      },
    ],
    "arrow-parens": [
      'error',
      'always',
    ],
    "arrow-spacing": 'error',
    "block-scoped-var": 'error',
    "brace-style": 'off',
    "camelcase": 'off',
    "comma-dangle": [
      'error',
      'always-multiline',
    ],
    "comma-style": 'error',
    "curly": [
      'error',
      'all',
    ],
    "eol-last": 'error',
    "eqeqeq": 'error',
    "func-call-spacing": 'off',
    "generator-star-spacing": [
      'error',
      'after',
    ],
    "indent": 'off',
    "jsx-quotes": [
      'error',
    ],
    "key-spacing": 'error',
    "keyword-spacing": 'error',
    "max-classes-per-file": [
      'error',
      1,
    ],
    "new-parens": 'error',
    "no-alert": 'warn',
    "no-bitwise": 'warn',
    "no-confusing-arrow": 'error',
    "no-console": 'warn',
    "no-duplicate-imports": [
      'error',
      {
        includeExports: true,
      },
    ],
    "no-else-return": [
      'error',
      {
        allowElseIf: false,
      },
    ],
    "no-empty-function": 'off',
    "no-extra-parens": 'off',
    "no-implicit-coercion": 'error',
    "no-labels": 'error',
    "no-lone-blocks": 'error',
    "no-lonely-if": 'warn',
    "no-multi-spaces": 'error',
    "no-multiple-empty-lines": 'error',
    "no-nested-ternary": 'error',
    "no-new": 'error',
    "no-new-func": 'error',
    "no-new-object": 'error',
    "no-new-wrappers": 'error',
    "no-return-await": 'error',
    "no-self-compare": 'error',
    "no-sequences": 'error',
    "no-shadow": [
      'error',
      {
        builtinGlobals: true,
      },
    ],
    "no-tabs": [
      'error',
      {
        allowIndentationTabs: true,
      },
    ],
    "no-template-curly-in-string": 'error',
    "no-throw-literal": 'error',
    "no-trailing-spaces": 'error',
    "no-undefined": 'error',
    "no-unneeded-ternary": 'error',
    "no-unused-expressions": 'error',
    "no-useless-call": 'error',
    "no-useless-computed-key": 'error',
    "no-useless-concat": 'error',
    "no-useless-rename": 'error',
    "no-useless-return": 'error',
    "no-whitespace-before-property": 'error',
    "object-curly-newline": 'error',
    "object-curly-spacing": [
      'error',
      'always',
    ],
    "object-shorthand": [
      'error',
      'always',
    ],
    "prefer-arrow-callback": 'warn',
    "prefer-destructuring": 'error',
    "prefer-promise-reject-errors": 'error',
    "quotes": 'off',
    "radix": 'error',
    "rest-spread-spacing": [
      'error',
      'never',
    ],
    "require-await": 'off',
    "semi": 'off',
    "semi-spacing": 'error',
    "sort-imports": 'warn',
    "space-before-blocks": 'error',
    "space-before-function-paren": [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    "space-in-parens": 'error',
    "space-infix-ops": 'error',
    "space-unary-ops": 'error',
    "spaced-comment": [
      'error',
      'always',
    ],
    "switch-colon-spacing": 'error',
    "template-curly-spacing": 'error',

    /* Optimize Regex Rules */

    "optimize-regex/optimize-regex": 'warn',

    /* Promise Rules */

    "promise/prefer-await-to-then": 'error',

    /* Typescript ESLint Rules */

    "@typescript-eslint/array-type": [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    "@typescript-eslint/await-thenable": 'error',
    "@typescript-eslint/ban-ts-ignore": 'error',
    "@typescript-eslint/ban-types": 'error',
    "@typescript-eslint/brace-style": [
      'error',
      '1tbs',
    ],
    "@typescript-eslint/camelcase": [
      'error',
      {
        properties: 'always',
      },
    ],
    "@typescript-eslint/class-name-casing": 'error',
    "@typescript-eslint/consistent-type-definitions": [
      'error',
      'interface',
    ],
    "@typescript-eslint/explicit-function-return-type": [
      'error',
      {
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false,
      }
    ],
    "@typescript-eslint/func-call-spacing": [
      'error',
      'never',
    ],
    "@typescript-eslint/indent": [
      'error',
      2,
    ],
    "@typescript-eslint/interface-name-prefix": 'off',
    "@typescript-eslint/member-delimiter-style": [
      'error',
    ],
    "@typescript-eslint/member-naming": [
      'warn',
      {
        private: '^_',
      },
    ],
    "@typescript-eslint/member-ordering": 'warn',
    "@typescript-eslint/no-array-constructor": 'error',
    "@typescript-eslint/no-empty-function": 'error',
    "@typescript-eslint/no-empty-interface": 'error',
    "@typescript-eslint/no-explicit-any": 'warn',
    "@typescript-eslint/no-extra-parens": [
      'error',
    ],
    "@typescript-eslint/no-for-in-array": 'error',
    "@typescript-eslint/no-inferrable-types": [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    "@typescript-eslint/no-magic-numbers": [
      'warn',
      {
        ignoreNumericLiteralTypes: true,
        ignoreEnums: true,
        enforceConst: true,
        ignoreReadonlyClassProperties: true,
        ignore: [0, 24, 60, 1000],
      }
    ],
    "@typescript-eslint/no-misused-promises": 'error',
    "@typescript-eslint/no-non-null-assertion": 'error',
    "@typescript-eslint/no-parameter-properties": 'error',
    "@typescript-eslint/no-require-imports": 'error',
    "@typescript-eslint/no-this-alias": 'error',
    "@typescript-eslint/no-unnecessary-type-arguments": 'warn',
    "@typescript-eslint/no-unused-vars": [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_$',
      },
    ],
    "@typescript-eslint/no-useless-constructor": 'error',
    "@typescript-eslint/no-var-requires": 'error',
    "@typescript-eslint/prefer-for-of": 'warn',
    "@typescript-eslint/prefer-function-type": 'warn',
    "@typescript-eslint/prefer-includes": 'warn',
    "@typescript-eslint/prefer-readonly": 'warn',
    "@typescript-eslint/promise-function-async": [
      'error',
    ],
    "@typescript-eslint/quotes": [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": 'warn',
    "@typescript-eslint/require-await": 'error',
    "@typescript-eslint/restrict-plus-operands": 'error',
    "@typescript-eslint/semi": [
      'error',
      'always',
    ],
    "@typescript-eslint/type-annotation-spacing": 'error',

    /* React Rules */

    "react/button-has-type": 'warn',
    "react/default-props-match-prop-types": 'error',
    "react/destructuring-assignment": [
      'error',
      'always',
    ],
    "react/display-name": 'error',
    "react/forbid-component-props": 'error',
    "react/forbid-dom-props": 'error',
    "react/jsx-boolean-value": [
      'error',
      'never',
    ],
    "react/jsx-closing-bracket-location": 'error',
    "react/jsx-closing-tag-location": 'error',
    "react/jsx-curly-brace-presence": 'error',
    "react/jsx-curly-newline": [
      'error',
      {
        multiline: 'require',
        singleline: 'forbid',
      },
    ],
    "react/jsx-curly-spacing": [
      'error',
      {
        when: 'never',
        children: {
          when: 'always',
        },
        allowMultiline: true,
        spacing: {
          objectLiterals: 'always',
        },
      },
    ],
    "react/jsx-filename-extension": [
      'error',
      {
        extensions: [
          '.tsx',
        ],
      }
    ],
    "react/jsx-first-prop-new-line": [
      'error',
      'multiline',
    ],
    "react/jsx-fragments": [
      'error',
      'syntax',
    ],
    "react/jsx-handler-names": [
      'warn',
    ],
    /*"react/indent": [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    "react/indent-props": [
      'error',
      2,
    ],*/
    "react/jsx-key": 'error',
    "react/jsx-max-props-per-line": [
      'warn',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    "react/jsx-no-bind": 'error',
    "react/jsx-no-comment-textnodes": 'error',
    "react/jsx-no-duplicate-props": 'error',
    "react/jsx-no-literals": 'off',
    "react/jsx-no-target-blank": [
      'error',
      {
        enforceDynamicLinks: 'always',
      },
    ],
    "react/jsx-no-undef": [
      'error',
      {
        allowGlobals: true,
      },
    ],
    "react/jsx-pascal-case": 'error',
    "react/jsx-props-no-spreading": 'off',
    "react/jsx-sort-default-props": 'warn',
    "react/jsx-space-before-closing": 'error',
    "react/jsx-uses-react": 'error',
    "react/jsx-uses-vars": 'error',
    "react/jsx-wrap-multilines": [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    "react/no-access-state-in-setstate": 'error',
    "react/no-array-index-key": 'error',
    "react/no-children-prop": 'error',
    "react/no-danger": 'error',
    "react/no-danger-with-children": 'error',
    "react/no-deprecated": 'warn',
    "react/no-did-mount-set-state": 'warn',
    "react/no-did-update-set-state": [
      'error',
      'disallow-in-func',
    ],
    "react/no-direct-mutation-state": 'error',
    "react/no-find-dom-node": 'error',
    "react/no-is-mounted": 'error',
    "react/no-multi-comp": 'error',
    "react/no-redundant-should-component-update": 'error',
    "react/no-render-return-value": 'error',
    "react/no-set-state": 'off',
    "react/no-string-refs": 'error',
    "react/no-this-in-sfc": 'error',
    "react/no-typos": 'error',
    "react/no-unescaped-entities": 'error',
    "react/no-unknown-property": 'error',
    "react/no-unsafe": 'error',
    "react/no-unused-prop-types": 'error',
    "react/no-unused-state": 'error',
    "react/no-will-update-set-state": [
      'error',
      'disallow-in-func',
    ],
    "react/prefer-es6-class": [
      'error',
      'always',
    ],
    "react/prefer-stateless-function": 'error',
    "react/prop-types": 'off',
    "react/react-in-jsx-scope": 'error',
    "react/require-default-props": [
      'error',
      {
        forbidDefaultForRequired: true,
      },
    ],
    "react/require-render-return": 'error',
    "react/self-closing-comp": [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    "react/sort-comp": [
      'error',
      {
        order: [
          'constructor',
          'static-methods',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          '/^on.+$/',
          'everything-else',
          'lifecycle',
          '/^render.+$/',
          'render',
        ],
      }
    ],
    "react/state-in-constructor": 'off',
    "react/static-property-placement": 'error',
    "react/style-prop-object": 'error',
    "react/void-dom-elements-no-children": 'error',

    /* React Hooks Rules */

    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'warn',

    /* Import Rules */

    "import/dynamic-import-chunkname": [
      'error',
      {
        importFunctions: [
          'dynamicImport',
        ],
        webpackChunknameFormat: '[a-zA-Z0-9-/_]+',
      },
    ],
    "import/export": 'warn',
    "import/exports-last": 'warn',
    "import/first": 'warn',
    "import/group-exports": 'warn',
    "import/newline-after-import": [
      'error',
    ],
    "import/no-anonymous-default-export": [
      'error',
    ],
    "import/no-mutable-exports": 'error',
    "import/no-named-default": 'error',
    "import/no-self-import": 'error',
    "import/no-unused-modules": 'warn',
    "import/no-unresolved": 'off',

    /* SonarJS Rules */

    "sonarjs/cognitive-complexity": 'warn',
    "sonarjs/max-switch-cases": 'error',
    "sonarjs/no-all-duplicated-branches": 'error',
    "sonarjs/no-collapsible-if": 'warn',
    "sonarjs/no-collection-size-mischeck": 'error',
    "sonarjs/no-duplicated-branches": 'error',
    "sonarjs/no-element-overwrite": 'error',
    "sonarjs/no-extra-arguments": 'error',
    "sonarjs/no-identical-conditions": 'error',
    "sonarjs/no-identical-expressions": 'error',
    "sonarjs/no-identical-functions": 'error',
    "sonarjs/no-inverted-boolean-check": 'warn',
    "sonarjs/no-one-iteration-loop": 'error',
    "sonarjs/no-redundant-jump": 'error',
    "sonarjs/no-same-line-conditional": 'error',
    "sonarjs/no-small-switch": 'error',
    "sonarjs/no-unused-collection": 'error',
    "sonarjs/no-use-of-empty-return-value": 'error',
    "sonarjs/no-useless-catch": 'warn',
    "sonarjs/prefer-immediate-return": 'warn',
    "sonarjs/prefer-object-literal": 'error',
    "sonarjs/prefer-single-boolean-return": 'error',
    "sonarjs/prefer-while": 'warn',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        '.ts',
        '.tsx',
      ],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        directory: './tsconfig.json',
      },
    },
    "linkComponents": [
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
    "react": {
      version: 'detect',
    },
  },
};
