// Implement a function that serialises a Javascript value into a JSON string.

const serializes = (value) =>{
    const stringData = JSON.stringify(value);
    return stringData;
}

const data  = {
    name:"Bhavik Tembhare",
    age:"26",

}


const serializedData = serializes(data);

console.log(serializedData)