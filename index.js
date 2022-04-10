class Product {
  getPossibleCombinations(jsonObject) {
    // console.log(jsonObject);
    const obj = {};
    jsonObject.attributes.forEach((attr) => {
      obj[attr.name] = attr.values
        .filter((value) => value.active)
        .map((value) => value.name);
    });

    // const pair = [];
    // const ans = new Set();

    // for (let key of Object.keys(obj)) {
    //   console.log(key);
    //   for (let property in obj[key]) {
    //     pair.push({ [key]: obj[key][property] });
    //     console.log(obj[key][property]);
    //   }
    // }
    // console.log(pair);

    Object.values(obj).forEach((valuesArray) => {
      valuesArray.forEach((value) => {
        console.log(value);
      });
    });
    return obj;
  }
}

const input1 = `{
    "name": "Lightning Cable",
    "attributes": [
        {
            "name": "color",
            "values": [
                {
                  "name": "red",
                  "active": true
                },
                {
                  "name": "blue",
                  "active": true
                },
                {
                  "name": "green",
                  "active": true
                }
            ]
        },
        {
            "name": "length",
            "values": [
                {
                  "name": "1m",
                  "active": true
                },
                {
                  "name": "3m",
                  "active": true
                },
                {
                  "name": "6m",
                  "active": true
                }
            ]
        },
        {
            "name": "finish",
            "values": [
              {
                "name": "nylon",
                "active": true
              },
              {
                "name": "rubber",
                "active": false
              }
            ]
        }
    ]
}`;

const input2 = `{
    "name": "Tshirt",
    "attributes": [
        {
            "name": "color",
            "values": [
                {
                  "name": "red",
                  "active": true
                },
                {
                  "name": "blue",
                  "active": true
                },
                {
                  "name": "green",
                  "active": true
                }
            ]
        },
        {
            "name": "size",
            "values": [
                {
                  "name": "S",
                  "active": true
                },
                {
                  "name": "M",
                  "active": false
                },
                {
                  "name": "L",
                  "active": true
                }
            ]
        }
    ]
}`;

const json = JSON.parse(input2);
const product = new Product();
const obj = product.getPossibleCombinations(json);
console.log(obj);
console.log(Object.values(obj));
const obj2 = product.getPossibleCombinations(JSON.parse(input1));

document.body.innerHTML =
  JSON.stringify(json) + '<br><br>' + JSON.stringify(obj) + '<br><br>';
document.body.innerHTML +=
  '<br>' + JSON.stringify(json) + '<br><br>' + JSON.stringify(obj2);
