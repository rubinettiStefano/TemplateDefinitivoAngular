let oggetto = {};

oggetto.prop1 = "ciao";

console.log(oggetto.prop1)

oggetto["prop2"] = "bye";

console.log(oggetto.prop2)
console.log(oggetto["prop2"])

let variabile = "prop2";

console.log(oggetto[variabile]);

for(let k in oggetto)
{
  console.log(oggetto[k]);
}

// for(String k : oggetto.keySet())

// if(oggetto["prop3"])//valore esistente vale true, uno inesistente false
