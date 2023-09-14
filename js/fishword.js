const fishwordarea =
  "ОСЁТРСАУСЕЛЕЦТКЕФАЛЬЬЬСРЛИСЬУААЗТУНЕЦЬГСНТННМПИРАНЬЯАУКЬЬЬАБЕНЕДКТФДСТГМКЛАПЯСЕАОАСИАОУОИЛЕККСРКЁЛУЛЛБРМАСЯАЕПМААОАЕУЮХЕКЗЛАГППТТЛЦЕШФШАЬЮАИИСЗУБАТКАНРЦГЯКОЕГЛГОЛАВЛЬЬЕШМПАЛТУСЕЛЬДЬКАЬРЛОСОСЬЩУКАА";

const answers = [
  { value: "АКУЛА", letters: [58, 72, 86, 100, 114] },
  { value: "БЕЛУГА", letters: [101, 115, 129, 143, 157, 171] },
  { value: "ГОЛАВЛЬ", letters: [159, 160, 161, 162, 163, 164, 165] },
  { value: "ГОЛЕЦ", letters: [70, 85, 100, 115, 130] },
  { value: "ЕЛЕЦ", letters: [9, 10, 11, 12] },
  { value: "ЗУБАТКА", letters: [142, 143, 144, 145, 146, 147, 148] },
  { value: "КАМБАЛА", letters: [14, 29, 44, 59, 74, 89, 104] },
  { value: "КАРАСЬ", letters: [120, 107, 94, 81, 68, 55] },
  { value: "КАРП", letters: [64, 79, 94, 109] },
  { value: "КЕТА", letters: [91, 78, 65, 52] },
  { value: "КЕФАЛЬ", letters: [14, 15, 16, 17, 18, 19] },
  { value: "КОРЮШКА", letters: [72, 87, 102, 117, 132, 147, 162] },
  { value: "ЛЕЩ", letters: [161, 176, 191] },
  { value: "ЛИНЬ", letters: [10, 25, 40, 55] },
  { value: "ЛОСОСЬ", letters: [185, 186, 187, 188, 189, 190] },
  { value: "МОЛОТ", letters: [71, 85, 99, 113, 127] },
  { value: "НАЛИМ", letters: [43, 58, 73, 88, 103] },
  { value: "ОКУНЬ", letters: [0, 14, 28, 42, 56] },
  { value: "ОСЁТР", letters: [0, 1, 2, 3, 4] },
  { value: "ПАЛТУС", letters: [170, 171, 172, 173, 174, 175] },
  { value: "ПЕСКАРЬ", letters: [75, 90, 105, 120, 135, 150, 165] },
  { value: "ПИКША", letters: [126, 140, 154, 168, 182] },
  { value: "СЁМГА", letters: [82, 96, 110, 124, 138] },
  { value: "САЗАН", letters: [93, 107, 121, 135, 149] },
  { value: "СЕВРЮГА", letters: [189, 176, 163, 150, 137, 124, 111] },
  { value: "СЕЛЬДЬ", letters: [175, 176, 177, 178, 179, 180] },
  { value: "СОМ", letters: [141, 155, 169] },
  { value: "СТЕРЛЯДЬ", letters: [141, 128, 115, 102, 89, 76, 63, 50] },
  { value: "СУДАК", letters: [39, 53, 67, 81, 95] },
  { value: "ТИЛАПИЯ", letters: [69, 83, 97, 111, 125, 139, 153] },
  { value: "ТРЕСКА", letters: [32, 47, 62, 77, 92, 107] },
  { value: "ТУНЕЦ", letters: [32, 33, 34, 35, 36] },
  { value: "ФОРЕЛЬ", letters: [66, 80, 94, 108, 122, 136] },
  { value: "ХЕК", letters: [118, 119, 120] },
  { value: "ЩУКА", letters: [191, 192, 193, 194] },
  { value: "ЯЗЬ", letters: [106, 121, 136] },
];

function highlightFish() {
  const value = Number(document.getElementById("SelectAnswer").value);
  const letters = Array.from(document.getElementsByTagName("td"));
  letters.forEach((element) => {
    element.className = "";
  });
  if (value > 0) {
    answers[value - 1].letters.forEach((letter) => {
      letters[letter].className = "highlighted";
    });
  }
}

function InitPlayground() {
  let pos = 0;
  let str = "";
  for (let rr = 0; rr < 14; rr++) {
    str = str + "<tr>";
    for (let cc = 0; cc < 14; cc++) {
      str = str + "<td>" + fishwordarea.charAt(pos) + "</td>";
      pos++;
    }
    str = str + "</tr>";
  }
  document.getElementById("FishWordArea").innerHTML = str;

  str = '<option value="0">Выбери рыбу своей мечты...</option>';
  answers.forEach((el, index) => {
    str =
      str +
      '<option selected value="' +
      (index + 1) +
      '">' +
      (index + 1) +
      " - " +
      el.value +
      "</option>";
  });
  let select_answer = document.getElementById("SelectAnswer");
  select_answer.innerHTML = str;
  select_answer.value = "0";
  select_answer.addEventListener("change", highlightFish);
}

InitPlayground();
