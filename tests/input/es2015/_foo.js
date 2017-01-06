export function foo(argument) {
    console.log('foo');
}

export var bar = [{a: 1, b: 2}];

export default function foobar(arg) {
    // console.log(bar);
    return `foobar ${arg}`;
}