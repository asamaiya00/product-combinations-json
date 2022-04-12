export default class Product {
  getPossibleCombinations() {
    const jsonString = document.getElementById('json').value;
    const outputEl = document.getElementById('output');

    if (!jsonString.trim()) {
      alert('Please enter JSON');
      return;
    }

    try {
      const jsonObject = JSON.parse(jsonString);
      const obj = {};
      jsonObject.attributes.forEach((attr) => {
        if (attr.values.length)
          obj[attr.name] = attr.values
            .filter((value) => value.active)
            .map((value) => value.name);
      });

      // console.log(obj);
      for (let key in obj) {
        if (!obj[key].length) delete obj[key];
      }

      const valuesArray = Object.values(obj);

      const productArray = this.getCrossProduct(valuesArray);

      outputEl.innerHTML += `<p> Total ${productArray.length} ${jsonObject.name}</p>`;

      productArray.forEach((item) => {
        const arr = [];
        item.forEach((value, index) => {
          arr.push(`${[Object.keys(obj)[index]]}: ${value}`);
        });
        console.log(arr.join(' | '));
        outputEl.innerHTML += `<p> ${arr.join(' | ')} </p>`;
      });

      outputEl.innerHTML += '<br>';
    } catch (e) {
      alert('Invalid Json');
      return;
    }
  }

  getCrossProduct(valuesArray) {
    const productArray = valuesArray.reduce(
      (arrayOfArray, currArray) => {
        // console.log(arrayOfArray, currArray);
        return arrayOfArray
          .map((arrayTillNow) =>
            currArray.map((newElement) => arrayTillNow.concat(newElement))
          )
          .flat();
      },
      [[]]
    );
    if (!productArray[0].length) {
      return [];
    }
    return productArray;
  }
}

const product = new Product();
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('btn')
    .addEventListener('click', () => product.getPossibleCombinations());

  document.getElementById('json').value = `{
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
});
