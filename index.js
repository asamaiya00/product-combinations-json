class Product {
  getPossibleCombinations() {
    const jsonString = document.getElementById('json').value;

    if (!jsonString.trim()) {
      alert('Please enter JSON');
      return;
    }
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

    // let result = Object.values(obj).reduce((mergedArray, currArray) => {
    //   console.log(mergedArray, currArray);
    //   return mergedArray.reduce((collectionArray, arrayTillNow) => {
    //     console.log(collectionArray);
    //     console.log(arrayTillNow);
    //     return collectionArray.concat(
    //       currArray.map((currElement) => [].concat(arrayTillNow, currElement))
    //     );
    //   }, []);
    // });

    const valuesArray = Object.values(obj);

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

    // console.log(productArray);

    document.getElementById(
      'output'
    ).innerHTML += `<p> Total ${productArray.length} ${jsonObject.name}</p>`;
    productArray.forEach((item) => {
      const arr = [];
      item.forEach((value, index) => {
        arr.push(`${[Object.keys(obj)[index]]}: ${value}`);
      });
      console.log(arr.join(' | '));
      document.getElementById('output').innerHTML += `<p> ${arr.join(
        ' | '
      )} </p>`;
    });
    document.getElementById('output').innerHTML += '<br>';
  }
}

const product = new Product();

document
  .getElementById('btn')
  .addEventListener('click', () => product.getPossibleCombinations());
