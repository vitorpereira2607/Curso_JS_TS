const name = ['Vitor', 'Tiago', 'Pereira'];
const obj = { name };

const newObj = { ...name };

for (let value in newObj){
    const name = newObj[value];
    console.log(name)
}