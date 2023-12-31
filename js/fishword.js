const fishwordArea =
  "ОСЁТРСАУСЕЛЕЦТКЕФАЛЬЬЬСРЛИСЬУААЗТУНЕЦЬГСНТННМПИРАНЬЯАУКЬЬЬАБЕНЕДКТФДСТГМКЛАПЯСЕАОАСИАОУОИЛЕККСРКЁЛУЛЛБРМАСЯАЕПМААОАЕУЮХЕКЗЛАГППТТЛЦЕШФШАЬЮАИИСЗУБАТКАНРЦГЯКОЕГЛГОЛАВЛЬЬЕШМПАЛТУСЕЛЬДЬКАЬРЛОСОСЬЩУКАА";

const answers = [
  { value: "Акула", letters: [58, 72, 86, 100, 114] },
  { value: "Белуга", letters: [101, 115, 129, 143, 157, 171] },
  { value: "Голавль", letters: [159, 160, 161, 162, 163, 164, 165] },
  { value: "Голец", letters: [70, 85, 100, 115, 130] },
  { value: "Елец", letters: [9, 10, 11, 12] },
  { value: "Зубатка", letters: [142, 143, 144, 145, 146, 147, 148] },
  { value: "Камбала", letters: [14, 29, 44, 59, 74, 89, 104] },
  { value: "Карась", letters: [120, 107, 94, 81, 68, 55] },
  { value: "Карп", letters: [64, 79, 94, 109] },
  { value: "Кета", letters: [91, 78, 65, 52] },
  { value: "Кефаль", letters: [14, 15, 16, 17, 18, 19] },
  { value: "Корюшка", letters: [72, 87, 102, 117, 132, 147, 162] },
  { value: "Лещ", letters: [161, 176, 191] },
  { value: "Линь", letters: [10, 25, 40, 55] },
  { value: "Лосось", letters: [185, 186, 187, 188, 189, 190] },
  { value: "Молот", letters: [71, 85, 99, 113, 127] },
  { value: "Налим", letters: [43, 58, 73, 88, 103] },
  { value: "Окунь", letters: [0, 14, 28, 42, 56] },
  { value: "Осётр", letters: [0, 1, 2, 3, 4] },
  { value: "Палтус", letters: [170, 171, 172, 173, 174, 175] },
  { value: "Пескарь", letters: [75, 90, 105, 120, 135, 150, 165] },
  { value: "Пикша", letters: [126, 140, 154, 168, 182] },
  { value: "Сёмга", letters: [82, 96, 110, 124, 138] },
  { value: "Сазан", letters: [93, 107, 121, 135, 149] },
  { value: "Севрюга", letters: [189, 176, 163, 150, 137, 124, 111] },
  { value: "Сельдь", letters: [175, 176, 177, 178, 179, 180] },
  { value: "Сом", letters: [141, 155, 169] },
  { value: "Стерлядь", letters: [141, 128, 115, 102, 89, 76, 63, 50] },
  { value: "Судак", letters: [39, 53, 67, 81, 95] },
  { value: "Тилапия", letters: [69, 83, 97, 111, 125, 139, 153] },
  { value: "Треска", letters: [32, 47, 62, 77, 92, 107] },
  { value: "Тунец", letters: [32, 33, 34, 35, 36] },
  { value: "Форель", letters: [66, 80, 94, 108, 122, 136] },
  { value: "Хек", letters: [118, 119, 120] },
  { value: "Щука", letters: [191, 192, 193, 194] },
  { value: "Язь", letters: [106, 121, 136] },
];

let hotLetters = {};
let highlightedLetters = [];
let magicMode = false;

function toggleFishes(fishes) {
  const value = document.getElementById("SelectAnswer").valueAsNumber;
  const letters = Array.from(document.getElementsByTagName("td"));

  highlightedLetters.forEach((letter) => {
    letters[letter].className = "";
  });
  highlightedLetters = [];
  fishes.forEach((fish) => {
    answers[fish].letters.forEach((letter) => {
      letters[letter].className = "highlighted";
      highlightedLetters.push(letter);
    });
  });
}

function selectFish(event) {
  const value = Number(event.target.value);
  toggleFishes(value > 0 ? [value - 1] : []);
}

function magicCursorMouseOver(event) {
  let arr = hotLetters[Number(event.target.id)];
  toggleFishes(arr || []);
}

function toggleMagicCursor(event) {
  magicMode = event.target.checked;
  toggleFishes([]);
  
  Array.from(document.getElementsByTagName("td")).forEach((letter) => {
    if (magicMode) {
      letter.addEventListener("mouseover", magicCursorMouseOver);
    } else {
      letter.removeEventListener("mouseover", magicCursorMouseOver);
    }
  });
  
  const selectAnswer = document.getElementById("SelectAnswer");
  selectAnswer.value = "0";
  selectAnswer.hidden = magicMode;
}

function InitPlayground() {
  let pos = 0;
  let str = "";
  for (let rr = 0; rr < 14; rr++) {
    str += "<tr>";
    for (let cc = 0; cc < 14; cc++) {
      str += `<td id="${pos}">${fishwordArea.charAt(pos)}</td>`;
      pos++;
    }
    str += "</tr>";
  }
  document.getElementById("FishWordArea").innerHTML = str;

  str = '<option value="0">Выбери рыбу своей мечты...</option>';
  answers.forEach((el, index) => {
    str +=
      `<option value="${(index + 1)}">${(index + 1)} - ${el.value}</option>`;

    el.letters.forEach((letter) => {
      // ChatGPT refactoring --->
      // el.letters.forEach((letter) => {
      //   hotLetters[letter] = hotLetters[letter] || [];
      //   hotLetters[letter].push(index);
      // });      
      // <--- ChatGPT refactoring
      if (hotLetters[letter] === undefined) {
        hotLetters[letter] = [index];
      } else {
        hotLetters[letter].push(index);
      }
    });
  });
  const selectAnswer = document.getElementById("SelectAnswer");
  selectAnswer.innerHTML = str;
  selectAnswer.value = "0";
  selectAnswer.addEventListener("change", selectFish);
  const magicCursor = document.getElementById("MagicCursor");
  magicCursor.checked = false;
  magicCursor.addEventListener("change", toggleMagicCursor);
}

InitPlayground();
