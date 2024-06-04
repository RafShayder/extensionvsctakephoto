const palabrasReservadas: { [key: string]: string } ={
    // Palabras reservadas comunes en múltiples lenguajes
    'break': '#569CD6',
    'case': '#569CD6',
    'catch': '#569CD6',
    'class': '#569CD6',
    'const': '#569CD6',
    'continue': '#569CD6',
    'default': '#569CD6',
    'delete': '#569CD6',
    'do': '#569CD6',
    'else': '#569CD6',
    'export': '#569CD6',
    'extends': '#569CD6',
    'finally': '#569CD6',
    'for': '#569CD6',
    'function': '#569CD6',
    'if': '#569CD6',
    'import': '#569CD6',
    'in': '#569CD6',
    'instanceof': '#569CD6',
    'new': '#569CD6',
    'return': '#569CD6',
    'super': '#569CD6',
    'switch': '#569CD6',
    'this': '#569CD6',
    'throw': '#569CD6',
    'try': '#569CD6',
    'typeof': '#569CD6',
    'var': '#569CD6',
    'void': '#569CD6',
    'while': '#569CD6',
    'with': '#569CD6',
    'yield': '#569CD6',
    'true': '#4EC9B0',
    'false': '#4EC9B0',
    'null': '#4EC9B0',
    'undefined': '#4EC9B0',
    'async': '#569CD6',
    'await': '#569CD6',
    'let': '#569CD6',

    // Python
    'and': '#569CD6',
    'as': '#569CD6',
    'assert': '#569CD6',
    'def': '#569CD6',
    'del': '#569CD6',
    'elif': '#569CD6',
    'except': '#569CD6',
    'False': '#4EC9B0',
    'from': '#569CD6',
    'global': '#569CD6',
    'is': '#569CD6',
    'lambda': '#569CD6',
    'None': '#4EC9B0',
    'nonlocal': '#569CD6',
    'not': '#569CD6',
    'or': '#569CD6',
    'pass': '#569CD6',
    'raise': '#569CD6',
    'True': '#4EC9B0',
    // Java
    'abstract': '#569CD6',
    'boolean': '#569CD6',
    'byte': '#569CD6',
    'char': '#569CD6',
    'double': '#569CD6',
    'enum': '#569CD6',
    'final': '#569CD6',
    'float': '#569CD6',
    'goto': '#569CD6',
    'implements': '#569CD6',
    'int': '#569CD6',
    'interface': '#569CD6',
    'long': '#569CD6',
    'native': '#569CD6',
    'package': '#569CD6',
    'private': '#569CD6',
    'protected': '#569CD6',
    'public': '#569CD6',
    'short': '#569CD6',
    'static': '#569CD6',
    'strictfp': '#569CD6',
    'synchronized': '#569CD6',
    'throws': '#569CD6',
    'transient': '#569CD6',
    'volatile': '#569CD6',
    // C++
    'alignas': '#569CD6',
    'alignof': '#569CD6',
    'and_eq': '#569CD6',
    'asm': '#569CD6',
    'atomic_cancel': '#569CD6',
    'atomic_commit': '#569CD6',
    'atomic_noexcept': '#569CD6',
    'auto': '#569CD6',
    'bitand': '#569CD6',
    'bitor': '#569CD6',
    'bool': '#569CD6',
    'char8_t': '#569CD6',
    'char16_t': '#569CD6',
    'char32_t': '#569CD6',
    'compl': '#569CD6',
    'concept': '#569CD6',
    'consteval': '#569CD6',
    'constexpr': '#569CD6',
    'constinit': '#569CD6',
    'const_cast': '#569CD6',
    'co_await': '#569CD6',
    'co_return': '#569CD6',
    'co_yield': '#569CD6',
    'decltype': '#569CD6',
    'dynamic_cast': '#569CD6',
    'explicit': '#569CD6',
    'extern': '#569CD6',
    'friend': '#569CD6',
    'inline': '#569CD6',
    'module': '#569CD6',
    'mutable': '#569CD6',
    'namespace': '#569CD6',
    'noexcept': '#569CD6',
    'not_eq': '#569CD6',
    'nullptr': '#4EC9B0',
    'operator': '#569CD6',
    'or_eq': '#569CD6',
    'reflexpr': '#569CD6',
    'register': '#569CD6',
    'reinterpret_cast': '#569CD6',
    'requires': '#569CD6',
    'signed': '#569CD6',
    'sizeof': '#569CD6',
    'static_assert': '#569CD6',
    'static_cast': '#569CD6',
    'struct': '#569CD6',
    'template': '#569CD6',
    'thread_local': '#569CD6',
    'typedef': '#569CD6',
    'typeid': '#569CD6',
    'typename': '#569CD6',
    'union': '#569CD6',
    'unsigned': '#569CD6',
    'using': '#569CD6',
    'virtual': '#569CD6',
    'wchar_t': '#569CD6',
    'xor': '#569CD6',
    'xor_eq': '#569CD6'
};

const funciones: { [key: string]: string } = {
    'print': '#DCDCAA',
    'printf': '#DCDCAA',
    'println': '#DCDCAA',
    'console.log': '#DCDCAA',
    'alert': '#DCDCAA',
    'input': '#DCDCAA',
    'main': '#DCDCAA',
    'str': '#DCDCAA',
    'int': '#DCDCAA',
    'float': '#DCDCAA',
    'len': '#DCDCAA',
    'append': '#DCDCAA',
    'extend': '#DCDCAA',
    'insert': '#DCDCAA',
    'remove': '#DCDCAA',
    'pop': '#DCDCAA',
    'clear': '#DCDCAA',
    'index': '#DCDCAA',
    'count': '#DCDCAA',
    'sort': '#DCDCAA',
    'reverse': '#DCDCAA',
    'copy': '#DCDCAA',
    'get': '#DCDCAA',
    'set': '#DCDCAA',
    'update': '#DCDCAA',
    'find': '#DCDCAA',
    'findIndex': '#DCDCAA',
    'split': '#DCDCAA',
    'join': '#DCDCAA',
    'substring': '#DCDCAA',
    'replace': '#DCDCAA',
    'charAt': '#DCDCAA',
    'charCodeAt': '#DCDCAA',
    'slice': '#DCDCAA',
    'splice': '#DCDCAA',
    'filter': '#DCDCAA',
    'map': '#DCDCAA',
    'reduce': '#DCDCAA',
    'every': '#DCDCAA',
    'some': '#DCDCAA',
    'keys': '#DCDCAA',
    'values': '#DCDCAA',
    'entries': '#DCDCAA',
    'bind': '#DCDCAA',
    'call': '#DCDCAA',
    'apply': '#DCDCAA',
    'toString': '#DCDCAA',
    'toLocaleString': '#DCDCAA',
    'hasOwnProperty': '#DCDCAA',
    'isPrototypeOf': '#DCDCAA',
    'propertyIsEnumerable': '#DCDCAA',
    'valueOf': '#DCDCAA',
    'constructor': '#DCDCAA',
    // Agrega más funciones con sus colores correspondientes aquí
};

const textoEntreComillas = /(["'])(?:(?=(\\?))\2.)*?\1/g;
const parentesis: { [key: string]: string } = {
    '(': '#C586C0',
    ')': '#C586C0'
};

export function resaltarElementos(texto:string) {
    // Dividir el texto en tokens (palabras, números, etc.)
    const tokens = texto.split(/(\b|\W)/);

    // Bandera para saber si estamos dentro de comillas
    let dentroComillas = false;

    // Aplicar estilos a cada token según su tipo
    const textoResaltado = tokens.map(token => {
        if (token === '"' || token === "'") {
            dentroComillas = !dentroComillas;
            return `<span style="color: #CE9178">${token}</span>`;
        }
        // Si estamos dentro de comillas, resaltar en naranja
        if (dentroComillas) {
            return `<span style="color: #CE9178">${token}</span>`;
        }

        // Resaltar palabras reservadas
        if (Object.prototype.hasOwnProperty.call(palabrasReservadas, token)) {
            return `<span style="color: ${palabrasReservadas[token]}">${token}</span>`;
        }
        // Resaltar funciones
        else if (Object.prototype.hasOwnProperty.call(funciones, token)) {
            return `<span style="color: ${funciones[token]}">${token}</span>`;
        }
        // Resaltar paréntesis
        else if (Object.prototype.hasOwnProperty.call(parentesis, token)) {
            return `<span style="color: ${parentesis[token]}">${token}</span>`;
        }
        // Mantener otros tokens sin cambios
        else {
            return token;
        }
    }).join('');

    return textoResaltado;
}

module.exports = { resaltarElementos };

// Ejemplo de uso
//const { resaltarElementos } = require('./color.js');
//const texto = 'print("hola mundo")';
//const textoResaltado = resaltarElementos(texto);
//console.log(textoResaltado);
