type Dictionary = {
    [pronName: string]: string
}

let normalDictionary: Dictionary = {
    hello: 'world',
    thisFeature: 'is Crazy'
}

let emptyDictionary: Dictionary = {}

// let wrongDictionary: Dictionary = {
//     hello : 123,
//     thisFeature:true
// }


interface StringTypedList {
    [index: string]: string
}

type UserInfo = {
    name: string,
    [prop: string]: string;
}
