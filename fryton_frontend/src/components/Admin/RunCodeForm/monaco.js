import * as monaco from 'monaco-editor';

monaco.languages.register({ id: 'fryton' });

monaco.languages.setMonarchTokensProvider('fryton', {
    tokenizer: {
        root: [
            [/\bFUNCTION\b/, 'keyword'],
            [/\bVAR\b/, 'control-keyword'],
            [/\b(IF|ELIF|ELSE|MIENTRAS|PARA|A|ENTONCES|PASO|FIN|VUELTO|CONTINUAR|ROMPER)\b/, 'control-keyword'],
            [/\b1\b|\b0\b/, 'boolean'],
            [/\b\d+\.?\d*\b/, 'number'],
            [/[a-zA-Z_]\w*/, 'identifier'],
            [/\bAND\b|\bOR\b|\bNOT\b/, 'logic-operator'],
            [/\+\+|--|[-+*/=<>!]=?/, 'operator'],
        ],
        string: [
            [/[^\\"]+/, 'string'],
            [/\\./, 'string.escape'],
            [/"/, 'string', '@pop']
        ]
    }
});

