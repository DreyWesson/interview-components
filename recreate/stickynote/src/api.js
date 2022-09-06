const getData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/charlesreid1/five-letter-words/master/sgb-words.txt"
  );
  let text = await res.text();
  const arr = [];
  let tmp = "";
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    if (element === "\n") {
      arr.push(tmp);
      tmp = "";
      continue;
    }
    tmp += element;
  }
  return JSON.stringify(arr);
  return arr;
};
