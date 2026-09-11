const AMINO_ACIDS = [
  { id: "A", three: "Ala", en: "Alanine", zh: "丙氨酸", r: "CH₃", category: "脂肪族 R 基", polarity: "较低疏水", charge: "中性侧链", note: "R 基只是一个甲基；是识别脂肪族氨基酸的最简起点。", scope: "core" },
  { id: "R", three: "Arg", en: "Arginine", zh: "精氨酸", r: "(CH₂)₃–NH–C(=NH₂⁺)–NH₂", category: "碱性 R 基", polarity: "高度亲水", charge: "正电侧链", note: "胍基是强碱性基团；本章把 Arg、Lys、His 归为 pH 7 时带正电。", scope: "core" },
  { id: "N", three: "Asn", en: "Asparagine", zh: "天冬酰胺", r: "CH₂–CONH₂", category: "酰胺衍生物", polarity: "高度亲水", charge: "中性侧链", note: "Asn 是 Asp 的酰胺衍生物：把酸性末端记成 CONH₂。", scope: "core" },
  { id: "D", three: "Asp", en: "Aspartic acid", zh: "天冬氨酸", r: "CH₂–COO⁻", category: "酸性 R 基", polarity: "高度亲水", charge: "负电侧链", note: "侧链多一个羧基；本章指出它在 pH 7 时带负电。", scope: "core" },
  { id: "C", three: "Cys", en: "Cysteine", zh: "半胱氨酸", r: "CH₂–SH", category: "含硫 R 基", polarity: "较低疏水", charge: "中性侧链", note: "巯基可让两个 Cys 形成二硫键，帮助稳定蛋白质三维结构。", scope: "core" },
  { id: "E", three: "Glu", en: "Glutamic acid", zh: "谷氨酸", r: "CH₂–CH₂–COO⁻", category: "酸性 R 基", polarity: "高度亲水", charge: "负电侧链", note: "Glu 比 Asp 多一个 CH₂；同属酸性侧链，pH 7 时带负电。", scope: "core" },
  { id: "Q", three: "Gln", en: "Glutamine", zh: "谷氨酰胺", r: "CH₂–CH₂–CONH₂", category: "酰胺衍生物", polarity: "高度亲水", charge: "中性侧链", note: "Gln 是 Glu 的酰胺衍生物；可形成氢键但侧链不带电。", scope: "core" },
  { id: "G", three: "Gly", en: "Glycine", zh: "甘氨酸", r: "H", category: "脂肪族 R 基", polarity: "较低疏水", charge: "中性侧链", note: "唯一没有手性 α-碳的标准氨基酸，也是体积最小的一种。", scope: "core" },
  { id: "H", three: "His", en: "Histidine", zh: "组氨酸", r: "CH₂–咪唑基", category: "碱性 R 基", polarity: "高度亲水", charge: "正电侧链", note: "关键词是咪唑基；按本章 pH 7 分类，与 Lys、Arg 一起归为正电侧链。", scope: "core" },
  { id: "I", three: "Ile", en: "Isoleucine", zh: "异亮氨酸", r: "CH(CH₃)–CH₂–CH₃", category: "脂肪族 R 基", polarity: "高度疏水", charge: "中性侧链", note: "支链从靠近 α-碳处就分叉；Ile 与 Thr 都有两个手性碳。", scope: "core" },
  { id: "L", three: "Leu", en: "Leucine", zh: "亮氨酸", r: "CH₂–CH(CH₃)₂", category: "脂肪族 R 基", polarity: "高度疏水", charge: "中性侧链", note: "先走一个 CH₂ 再分叉；课件注明 Leu 在蛋白质中出现率很高。", scope: "core" },
  { id: "K", three: "Lys", en: "Lysine", zh: "赖氨酸", r: "(CH₂)₄–NH₃⁺", category: "碱性 R 基", polarity: "高度亲水", charge: "正电侧链", note: "长脂肪链末端是氨基；pH 7 时侧链带正电。", scope: "core" },
  { id: "M", three: "Met", en: "Methionine", zh: "甲硫氨酸（蛋氨酸）", r: "CH₂–CH₂–S–CH₃", category: "含硫 R 基", polarity: "高度疏水", charge: "中性侧链", note: "硫醚基不带电；课件强调 Met 通常是蛋白质的第一个氨基酸。", scope: "core" },
  { id: "F", three: "Phe", en: "Phenylalanine", zh: "苯丙氨酸", r: "CH₂–苯基", category: "芳香族 R 基", polarity: "高度疏水", charge: "中性侧链", note: "最直接的芳香族结构：CH₂ 后接一个苯环。", scope: "core" },
  { id: "P", three: "Pro", en: "Proline", zh: "脯氨酸", r: "(CH₂)₃ → α-N（闭环）", category: "环状亚氨基", polarity: "较低疏水", charge: "中性侧链", note: "R 基回连 α-氨基氮形成环，限制多肽几何并容易造成链方向突变。", scope: "core" },
  { id: "S", three: "Ser", en: "Serine", zh: "丝氨酸", r: "CH₂–OH", category: "含醇羟基 R 基", polarity: "较低疏水", charge: "中性侧链", note: "一个 CH₂ 加羟基；与 Thr 同属不带电的极性醇侧链。", scope: "core" },
  { id: "T", three: "Thr", en: "Threonine", zh: "苏氨酸", r: "CH(OH)–CH₃", category: "含醇羟基 R 基", polarity: "较低疏水", charge: "中性侧链", note: "羟基与甲基挂在同一个侧链碳上；课件指出它有两个手性碳。", scope: "core" },
  { id: "W", three: "Trp", en: "Tryptophan", zh: "色氨酸", r: "CH₂–吲哚基", category: "芳香族 R 基", polarity: "较低疏水", charge: "中性侧链", note: "双环吲哚基，字母 W 最特别；课件指出芳香族氨基酸可吸收紫外光。", scope: "core" },
  { id: "Y", three: "Tyr", en: "Tyrosine", zh: "酪氨酸", r: "CH₂–苯环–OH", category: "芳香族 R 基", polarity: "较低疏水", charge: "中性侧链", note: "在 Phe 的苯环上加一个酚羟基；仍归入芳香族。", scope: "core" },
  { id: "V", three: "Val", en: "Valine", zh: "缬氨酸", r: "CH(CH₃)₂", category: "脂肪族 R 基", polarity: "高度疏水", charge: "中性侧链", note: "紧邻 α-碳的侧链碳分出两个 CH₃，形状像字母 V。", scope: "core" },
  { id: "U", three: "Sec", en: "Selenocysteine", zh: "硒代半胱氨酸", r: "CH₂–SeH", category: "拓展：含硒侧链", polarity: "本章未分组", charge: "本章未分组", note: "课件第 43 页把 Sec 列作酶相关的其他氨基酸；它不在本章 20 种标准表中。", scope: "extended" },
  { id: "O", three: "Pyl", en: "Pyrrolysine", zh: "吡咯赖氨酸", r: "(CH₂)₄–NH–CO–吡咯啉环", category: "拓展：吡咯赖氨酸", polarity: "本章未分组", charge: "本章未分组", note: "为满足 22 种范围加入的拓展编码氨基酸；课件未收录其结构与分类。", scope: "extended" }
];

const STORAGE_KEY = "amino22-learning-v1";
const CATEGORY_OPTIONS = [...new Set(AMINO_ACIDS.map((item) => item.category))];
const POLARITY_OPTIONS = ["高度疏水", "较低疏水", "高度亲水", "本章未分组"];
const CHARGE_OPTIONS = ["正电侧链", "负电侧链", "中性侧链", "本章未分组"];
const SIDE_CHAIN_NAMES = {
  A: "甲基",
  R: "胍基",
  N: "酰胺侧链",
  D: "羧酸侧链",
  C: "巯基",
  E: "羧酸侧链",
  Q: "酰胺侧链",
  G: "氢",
  H: "咪唑基",
  I: "仲丁基侧链",
  L: "异丁基侧链",
  K: "ε-氨基",
  M: "硫醚基",
  F: "苄基（苯环）",
  P: "吡咯烷环",
  S: "羟甲基",
  T: "β-羟基侧链",
  W: "吲哚基",
  Y: "对羟基苄基",
  V: "异丙基",
  U: "硒醇基",
  O: "吡咯啉-羧酰胺侧链"
};

const elements = {
  moleculeStage: document.querySelector("#moleculeStage"),
  propertyPrompt: document.querySelector("#propertyPrompt"),
  propertyLetter: document.querySelector("#propertyLetter"),
  propertyEnglish: document.querySelector("#propertyEnglish"),
  propertyChinese: document.querySelector("#propertyChinese"),
  questionCounter: document.querySelector("#questionCounter"),
  questionType: document.querySelector("#questionType"),
  questionLabel: document.querySelector("#questionLabel"),
  answerGrid: document.querySelector("#answerGrid"),
  feedback: document.querySelector("#feedback"),
  feedbackIcon: document.querySelector("#feedbackIcon"),
  feedbackTitle: document.querySelector("#feedbackTitle"),
  feedbackName: document.querySelector("#feedbackName"),
  memoryNote: document.querySelector("#memoryNote"),
  answerTags: document.querySelector("#answerTags"),
  nextButton: document.querySelector("#nextButton"),
  headerStreak: document.querySelector("#headerStreak"),
  headerAccuracy: document.querySelector("#headerAccuracy"),
  masteredCount: document.querySelector("#masteredCount"),
  progressRing: document.querySelector("#progressRing"),
  aminoMap: document.querySelector("#aminoMap"),
  reviewList: document.querySelector("#reviewList"),
  reviewCount: document.querySelector("#reviewCount"),
  referenceDialog: document.querySelector("#referenceDialog"),
  referenceGrid: document.querySelector("#referenceGrid")
};

let saved = loadProgress();
let state = {
  mode: "mixed",
  questionNumber: 0,
  answered: false,
  sessionCorrect: 0,
  sessionTotal: 0,
  streak: 0,
  current: null,
  currentQuestion: null,
  lastId: null
};

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function persistProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function getRecord(id) {
  return saved[id] || { seen: 0, correct: 0, wrong: 0, mastery: 0 };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function weightedAmino() {
  const candidates = AMINO_ACIDS.filter((item) => item.id !== state.lastId || AMINO_ACIDS.length === 1);
  const weighted = candidates.map((item) => {
    const record = getRecord(item.id);
    return { item, weight: 2 + (5 - record.mastery) * 2 + record.wrong * 1.25 };
  });
  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let cursor = Math.random() * total;
  for (const entry of weighted) {
    cursor -= entry.weight;
    if (cursor <= 0) return entry.item;
  }
  return weighted.at(-1).item;
}

function chooseQuestionKind(amino) {
  if (state.mode === "image") return "image";
  if (state.mode === "property") return "property";
  if (amino.scope === "extended") return Math.random() < 0.7 ? "image" : "property";
  return Math.random() < 0.52 ? "image" : "property";
}

function makeQuestion(amino) {
  const kind = chooseQuestionKind(amino);
  if (kind === "image") {
    const distractors = shuffle(AMINO_ACIDS.filter((item) => item.id !== amino.id)).slice(0, 3);
    const options = shuffle([amino, ...distractors]).map((item) => ({ value: item.id, label: item.zh }));
    return { kind, property: null, correct: amino.id, options };
  }

  const propertyPool = amino.scope === "extended" ? ["category"] : ["category", "polarity", "charge"];
  const property = propertyPool[Math.floor(Math.random() * propertyPool.length)];
  const optionPool = property === "category" ? CATEGORY_OPTIONS : property === "polarity" ? POLARITY_OPTIONS : CHARGE_OPTIONS;
  const correct = amino[property];
  const distractors = shuffle(optionPool.filter((value) => value !== correct)).slice(0, 3);
  return {
    kind,
    property,
    correct,
    options: shuffle([correct, ...distractors]).map((value) => ({ value, label: value }))
  };
}

function sideLine(x1, y1, x2, y2, className = "side-bond") {
  return `<line class="${className}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;
}

function sideText(text, x, y, className = "side-atom") {
  return `<text class="${className}" x="${x}" y="${y}">${text}</text>`;
}

function groupCallout(label, y, fromX = 322, fromY = y - 8) {
  return `
    <g class="group-callout">
      <path d="M ${fromX} ${fromY} L 414 ${y - 10}" class="callout-line"></path>
      <circle cx="${fromX}" cy="${fromY}" r="4"></circle>
      <text class="group-caption" x="430" y="${y - 17}">R 基</text>
      <text class="group-label" x="430" y="${y + 7}">${escapeHtml(label)}</text>
    </g>`;
}

function phenylRing({ hydroxyl = false } = {}) {
  const ring = `
    <polygon class="ring" points="260,186 302,210 302,258 260,282 218,258 218,210"></polygon>
    ${sideLine(268, 199, 292, 213, "double-bond")}
    ${sideLine(291, 253, 267, 267, "double-bond")}
    ${sideLine(229, 251, 229, 218, "double-bond")}`;
  return hydroxyl
    ? `${ring}${sideLine(260, 282, 260, 314)}${sideText("OH", 260, 342, "side-atom hetero")}`
    : ring;
}

function sideChainSvg(amino) {
  const label = SIDE_CHAIN_NAMES[amino.id];
  switch (amino.id) {
    case "G":
      return `${sideLine(260, 120, 260, 157)}${sideText("H", 260, 190)}${groupCallout(label, 202, 275, 180)}`;
    case "A":
      return `${sideLine(260, 120, 260, 157)}${sideText("CH₃", 260, 190)}${groupCallout(label, 202, 292, 180)}`;
    case "V":
      return `${sideLine(260, 120, 260, 150)}${sideText("CH", 260, 178)}${sideLine(247, 180, 215, 217)}${sideLine(273, 180, 305, 217)}${sideText("CH₃", 201, 244)}${sideText("CH₃", 319, 244)}${groupCallout(label, 249, 326, 232)}`;
    case "L":
      return `${sideLine(260, 120, 260, 145)}${sideText("CH₂", 260, 174)}${sideLine(260, 180, 260, 204)}${sideText("CH", 260, 231)}${sideLine(247, 235, 215, 270)}${sideLine(273, 235, 305, 270)}${sideText("CH₃", 201, 298)}${sideText("CH₃", 319, 298)}${groupCallout(label, 304, 326, 286)}`;
    case "I":
      return `${sideLine(260, 120, 260, 146)}${sideText("CH", 260, 174)}${sideLine(246, 177, 210, 212)}${sideText("CH₃", 195, 241)}${sideLine(274, 177, 304, 209)}${sideText("CH₂", 314, 237)}${sideLine(314, 244, 314, 270)}${sideText("CH₃", 314, 300)}${groupCallout(label, 306, 335, 287)}`;
    case "S":
      return `${sideLine(260, 120, 260, 149)}${sideText("CH₂", 260, 179)}${sideLine(260, 186, 260, 217)}${sideText("OH", 260, 248, "side-atom hetero")}${groupCallout(label, 258, 280, 239)}`;
    case "T":
      return `${sideLine(260, 120, 260, 149)}${sideText("CH", 260, 178)}${sideLine(247, 181, 212, 216)}${sideText("OH", 197, 245, "side-atom hetero")}${sideLine(273, 181, 308, 216)}${sideText("CH₃", 323, 245)}${groupCallout(label, 258, 333, 235)}`;
    case "C":
      return `${sideLine(260, 120, 260, 149)}${sideText("CH₂", 260, 179)}${sideLine(260, 186, 260, 217)}${sideText("SH", 260, 248, "side-atom sulfur")}${groupCallout(label, 258, 280, 239)}`;
    case "U":
      return `${sideLine(260, 120, 260, 149)}${sideText("CH₂", 260, 179)}${sideLine(260, 186, 260, 217)}${sideText("SeH", 260, 248, "side-atom selenium")}${groupCallout(label, 258, 291, 239)}`;
    case "M":
      return `${sideLine(260, 120, 260, 142)}${sideText("CH₂", 260, 170)}${sideLine(260, 177, 260, 197)}${sideText("CH₂", 260, 225)}${sideLine(260, 232, 260, 252)}${sideText("S", 260, 280, "side-atom sulfur")}${sideLine(260, 287, 260, 307)}${sideText("CH₃", 260, 338)}${groupCallout(label, 318, 298, 270)}`;
    case "K":
      return `${sideLine(260, 120, 260, 140)}${sideText("CH₂", 260, 166)}${sideLine(260, 173, 260, 190)}${sideText("CH₂", 260, 216)}${sideLine(260, 223, 260, 240)}${sideText("CH₂", 260, 266)}${sideLine(260, 273, 260, 290)}${sideText("CH₂", 260, 316)}${sideLine(260, 323, 260, 340)}${sideText("NH₃⁺", 260, 373, "side-atom charged")}${groupCallout(label, 355, 300, 345)}`;
    case "R":
      return `${sideLine(260, 120, 260, 140)}${sideText("CH₂", 260, 166)}${sideLine(260, 173, 260, 190)}${sideText("CH₂", 260, 216)}${sideLine(260, 223, 260, 240)}${sideText("CH₂", 260, 266)}${sideLine(260, 273, 260, 290)}${sideText("NH", 260, 316, "side-atom hetero")}${sideLine(260, 323, 260, 343)}${sideText("C", 260, 371)}${sideLine(244, 368, 205, 350)}${sideText("NH₂", 179, 352, "side-atom hetero")}${sideLine(276, 365, 316, 342, "double-bond")}${sideLine(280, 373, 320, 350, "double-bond")}${sideText("NH₂⁺", 350, 350, "side-atom charged")}${groupCallout(label, 383, 322, 350)}`;
    case "D":
      return `${sideLine(260, 120, 260, 148)}${sideText("CH₂", 260, 177)}${sideLine(260, 184, 260, 214)}${sideText("C", 260, 244)}${sideLine(247, 248, 213, 276, "double-bond")}${sideLine(253, 255, 219, 283, "double-bond")}${sideText("O", 195, 305, "side-atom hetero")}${sideLine(274, 247, 311, 279)}${sideText("O⁻", 334, 307, "side-atom charged")}${groupCallout(label, 316, 347, 295)}`;
    case "E":
      return `${sideLine(260, 120, 260, 140)}${sideText("CH₂", 260, 168)}${sideLine(260, 175, 260, 196)}${sideText("CH₂", 260, 224)}${sideLine(260, 231, 260, 252)}${sideText("C", 260, 280)}${sideLine(247, 283, 213, 311, "double-bond")}${sideLine(253, 290, 219, 318, "double-bond")}${sideText("O", 195, 340, "side-atom hetero")}${sideLine(274, 283, 311, 315)}${sideText("O⁻", 334, 343, "side-atom charged")}${groupCallout(label, 351, 347, 331)}`;
    case "N":
      return `${sideLine(260, 120, 260, 148)}${sideText("CH₂", 260, 177)}${sideLine(260, 184, 260, 214)}${sideText("C", 260, 244)}${sideLine(247, 248, 213, 276, "double-bond")}${sideLine(253, 255, 219, 283, "double-bond")}${sideText("O", 195, 305, "side-atom hetero")}${sideLine(274, 247, 311, 279)}${sideText("NH₂", 343, 307, "side-atom hetero")}${groupCallout(label, 316, 362, 297)}`;
    case "Q":
      return `${sideLine(260, 120, 260, 140)}${sideText("CH₂", 260, 168)}${sideLine(260, 175, 260, 196)}${sideText("CH₂", 260, 224)}${sideLine(260, 231, 260, 252)}${sideText("C", 260, 280)}${sideLine(247, 283, 213, 311, "double-bond")}${sideLine(253, 290, 219, 318, "double-bond")}${sideText("O", 195, 340, "side-atom hetero")}${sideLine(274, 283, 311, 315)}${sideText("NH₂", 347, 343, "side-atom hetero")}${groupCallout(label, 351, 366, 333)}`;
    case "F":
      return `${sideLine(260, 120, 260, 143)}${sideText("CH₂", 260, 170)}${sideLine(260, 176, 260, 186)}${phenylRing()}${groupCallout(label, 255, 305, 234)}`;
    case "Y":
      return `${sideLine(260, 120, 260, 143)}${sideText("CH₂", 260, 170)}${sideLine(260, 176, 260, 186)}${phenylRing({ hydroxyl: true })}${groupCallout(label, 273, 305, 250)}`;
    case "H":
      return `${sideLine(260, 120, 260, 143)}${sideText("CH₂", 260, 170)}${sideLine(260, 176, 260, 194)}<polygon class="ring" points="260,194 307,226 289,282 231,282 213,226"></polygon>${sideLine(267, 207, 294, 226, "double-bond")}${sideLine(278, 269, 243, 269, "double-bond")}${sideText("N", 220, 236, "ring-atom")}${sideText("N–H", 296, 240, "ring-atom")}${groupCallout(label, 260, 315, 239)}`;
    case "W":
      return `${sideLine(260, 120, 260, 143)}${sideText("CH₂", 260, 170)}${sideLine(256, 176, 230, 194)}<polygon class="ring" points="230,194 270,211 270,260 224,266 198,229"></polygon><polygon class="ring" points="270,211 314,190 358,212 358,260 314,282 270,260"></polygon>${sideLine(207, 226, 226, 205, "double-bond")}${sideLine(235, 253, 259, 250, "double-bond")}${sideLine(280, 214, 311, 200, "double-bond")}${sideLine(346, 219, 346, 251, "double-bond")}${sideLine(305, 268, 281, 256, "double-bond")}${sideText("N–H", 218, 247, "ring-atom")}${groupCallout(label, 296, 366, 257)}`;
    case "O":
      return `${sideLine(260, 120, 260, 145)}${sideText("(CH₂)₄", 260, 174)}${sideLine(260, 181, 260, 207)}${sideText("NH", 260, 236, "side-atom hetero")}${sideLine(260, 243, 260, 268)}${sideText("C", 260, 296)}${sideLine(244, 296, 210, 276, "double-bond")}${sideLine(242, 304, 208, 284, "double-bond")}${sideText("O", 187, 282, "side-atom hetero")}${sideLine(278, 296, 311, 315)}<polygon class="ring" points="311,315 350,294 386,320 373,363 327,363"></polygon>${sideLine(343, 306, 375, 328, "double-bond")}${sideText("N", 327, 370, "ring-atom")}${groupCallout(label, 384, 392, 345)}`;
    default:
      return `${sideLine(260, 120, 260, 157)}${sideText(escapeHtml(amino.r), 260, 192)}${groupCallout(label, 205, 320, 184)}`;
  }
}

function prolineSvg(amino) {
  return `
    <svg viewBox="0 0 600 420" role="img" aria-label="${escapeHtml(amino.en)} 的完整结构式，R 基回连氮形成吡咯烷环">
      <text class="diagram-note" x="580" y="22">完整结构 · R 基绿色高亮</text>
      ${sideLine(223, 94, 145, 94, "bond")}
      ${sideLine(297, 94, 390, 94, "bond")}
      ${sideLine(260, 68, 260, 38, "bond")}
      ${sideText("H₂N⁺", 92, 103, "atom small")}
      ${sideText("Cα", 260, 103, "atom carbon")}
      ${sideText("COO⁻", 450, 103, "atom small")}
      ${sideText("H", 260, 29, "atom small")}
      <path class="side-bond" d="M 246 118 L 221 174 L 170 218 L 116 184 L 109 119"></path>
      ${sideText("CH₂", 220, 190)}
      ${sideText("CH₂", 166, 245)}
      ${sideText("CH₂", 101, 205)}
      ${groupCallout(SIDE_CHAIN_NAMES.P, 228, 206, 202)}
      <text class="structure-note" x="260" y="340">R 基与 α-氨基氮直接相连，形成五元环</text>
    </svg>`;
}

function moleculeSvg(amino) {
  if (amino.id === "P") return prolineSvg(amino);
  const scopeLabel = amino.scope === "extended" ? "拓展项 · 完整结构" : "完整结构 · R 基绿色高亮";
  return `
    <svg viewBox="0 0 600 420" role="img" aria-label="${escapeHtml(amino.en)} 的完整结构式，R 基为 ${escapeHtml(amino.r)}，中文名称 ${escapeHtml(SIDE_CHAIN_NAMES[amino.id])}">
      <text class="diagram-note" x="580" y="22">${scopeLabel}</text>
      <line class="bond" x1="220" y1="95" x2="142" y2="95"></line>
      <line class="bond" x1="300" y1="95" x2="390" y2="95"></line>
      <line class="bond" x1="260" y1="68" x2="260" y2="38"></line>
      <text class="atom small" x="92" y="104">H₃N⁺</text>
      <text class="atom carbon" x="260" y="104">Cα</text>
      <text class="atom small" x="450" y="104">COO⁻</text>
      <text class="atom small" x="260" y="29">H</text>
      ${sideChainSvg(amino)}
    </svg>`;
}

function renderQuestion() {
  const amino = weightedAmino();
  const question = makeQuestion(amino);
  state.current = amino;
  state.currentQuestion = question;
  state.lastId = amino.id;
  state.questionNumber += 1;
  state.answered = false;

  elements.questionCounter.textContent = `第 ${state.questionNumber} 题`;
  elements.feedback.className = "feedback";
  elements.feedback.setAttribute("aria-hidden", "true");

  if (question.kind === "image") {
    elements.questionType.textContent = "看结构选名称";
    elements.questionLabel.textContent = "这是什么氨基酸？";
    elements.moleculeStage.innerHTML = moleculeSvg(amino);
    elements.moleculeStage.classList.remove("hidden");
    elements.propertyPrompt.classList.add("hidden");
  } else {
    const labels = {
      category: "它按化学结构属于哪一类？",
      polarity: "它在本章疏水性分类中属于哪一组？",
      charge: "它在 pH 7 附近的侧链电荷是？"
    };
    elements.questionType.textContent = "看名称判性质";
    elements.questionLabel.textContent = labels[question.property];
    elements.propertyLetter.textContent = amino.id;
    elements.propertyEnglish.textContent = `${amino.en} · ${amino.three}`;
    elements.propertyChinese.textContent = amino.zh;
    elements.moleculeStage.classList.add("hidden");
    elements.propertyPrompt.classList.remove("hidden");
  }

  elements.answerGrid.innerHTML = question.options.map((option, index) => `
    <button class="answer-button" type="button" data-value="${escapeHtml(option.value)}" data-index="${index}">
      <span class="answer-index">${index + 1}</span>
      <span>${escapeHtml(option.label)}</span>
    </button>
  `).join("");

  elements.answerGrid.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button.dataset.value, button));
  });
}

function answerQuestion(value, selectedButton) {
  if (state.answered) return false;
  state.answered = true;
  const correct = value === state.currentQuestion.correct;
  const amino = state.current;
  const record = getRecord(amino.id);
  record.seen += 1;
  state.sessionTotal += 1;

  if (correct) {
    record.correct += 1;
    record.mastery = Math.min(5, record.mastery + 1);
    state.sessionCorrect += 1;
    state.streak += 1;
  } else {
    record.wrong += 1;
    record.mastery = Math.max(0, record.mastery - 1);
    state.streak = 0;
  }
  saved[amino.id] = record;
  persistProgress();

  const buttons = [...elements.answerGrid.querySelectorAll(".answer-button")];
  buttons.forEach((button) => {
    button.disabled = true;
    if (button.dataset.value === state.currentQuestion.correct) button.classList.add("correct");
  });
  if (!correct) selectedButton.classList.add("wrong");

  elements.feedback.className = `feedback visible${correct ? "" : " incorrect"}`;
  elements.feedback.setAttribute("aria-hidden", "false");
  elements.feedbackIcon.textContent = correct ? "✓" : "×";
  elements.feedbackTitle.textContent = correct ? "答对了" : "再记一次";
  elements.feedbackName.textContent = `${amino.zh} · ${amino.en} · ${amino.three} · ${amino.id}`;
  elements.memoryNote.textContent = amino.note;
  elements.answerTags.innerHTML = [amino.category, amino.polarity, amino.charge]
    .map((tag) => `<span class="answer-tag">${escapeHtml(tag)}</span>`)
    .join("");
  updateDashboard();
  elements.nextButton.focus({ preventScroll: true });
  return correct;
}

function updateDashboard() {
  const records = AMINO_ACIDS.map((item) => ({ item, record: getRecord(item.id) }));
  const mastered = records.filter(({ record }) => record.mastery >= 3).length;
  elements.masteredCount.textContent = mastered;
  elements.progressRing.style.setProperty("--progress", ((mastered / AMINO_ACIDS.length) * 100).toFixed(1));
  elements.headerStreak.textContent = state.streak;
  elements.headerAccuracy.textContent = state.sessionTotal
    ? `${Math.round((state.sessionCorrect / state.sessionTotal) * 100)}%`
    : "—";

  elements.aminoMap.innerHTML = records.map(({ item, record }) => {
    const classNames = ["amino-cell"];
    if (record.seen > 0) classNames.push("seen");
    if (record.mastery >= 3) classNames.push("mastered");
    if (item.scope === "extended") classNames.push("extended");
    return `<span class="${classNames.join(" ")}" title="${escapeHtml(item.zh)}：掌握度 ${record.mastery}/5">${item.id}</span>`;
  }).join("");

  const needsReview = records
    .filter(({ record }) => record.wrong > 0)
    .sort((a, b) => (b.record.wrong - b.record.correct) - (a.record.wrong - a.record.correct))
    .slice(0, 3);
  elements.reviewCount.textContent = `${needsReview.length} 项`;
  elements.reviewList.innerHTML = needsReview.length
    ? needsReview.map(({ item, record }) => `
      <div class="review-item">
        <span class="mini-letter">${item.id}</span>
        <div><strong>${escapeHtml(item.zh)}</strong><small>${item.three} · ${escapeHtml(item.category)}</small></div>
        <span class="review-score">错 ${record.wrong}</span>
      </div>`).join("")
    : '<p class="empty-review">错题会自动出现在这里，并提高后续抽题权重。</p>';
}

function setMode(mode) {
  if (!["mixed", "image", "property"].includes(mode)) throw new Error("不支持的练习模式");
  state.mode = mode;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  renderQuestion();
  return { mode, questionNumber: state.questionNumber };
}

function renderReference() {
  elements.referenceGrid.innerHTML = AMINO_ACIDS.map((item) => `
    <article class="reference-row ${item.scope === "extended" ? "extension" : ""}">
      <span class="reference-letter">${item.id}</span>
      <div>
        <strong>${escapeHtml(item.zh)}</strong>
        <small>${item.en} · ${item.three}</small>
      </div>
      <span class="reference-type">${escapeHtml(item.category)}<br>${escapeHtml(item.polarity)}</span>
    </article>
  `).join("");
}

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const report = (error) => console.warn("WebMCP tool registration failed", error);
  try {
    Promise.resolve(context.registerTool({
      name: "start_amino_quiz_mode",
      title: "切换氨基酸练习模式",
      description: "切换到混合训练、看图认名或名称判类，并显示一道新题。",
      inputSchema: {
        type: "object",
        properties: { mode: { type: "string", enum: ["mixed", "image", "property"] } },
        required: ["mode"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        return setMode(input.mode);
      }
    })).catch(report);

    Promise.resolve(context.registerTool({
      name: "answer_current_amino_question",
      title: "回答当前氨基酸题目",
      description: "用选项序号 1 至 4 回答当前题目，并更新页面上的学习进度。",
      inputSchema: {
        type: "object",
        properties: { option: { type: "integer", minimum: 1, maximum: 4 } },
        required: ["option"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const button = elements.answerGrid.querySelector(`[data-index="${input.option - 1}"]`);
        if (!button || state.answered) throw new Error("当前题目不能再作答");
        const correct = answerQuestion(button.dataset.value, button);
        return { correct, aminoAcid: state.current.zh, oneLetter: state.current.id };
      }
    })).catch(report);

    Promise.resolve(context.registerTool({
      name: "read_amino_learning_progress",
      title: "读取氨基酸学习进度",
      description: "读取已掌握数量、本次正确率和当前优先复习项目。",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      execute() {
        const mastered = AMINO_ACIDS.filter((item) => getRecord(item.id).mastery >= 3).length;
        const review = AMINO_ACIDS
          .filter((item) => getRecord(item.id).wrong > 0)
          .map((item) => ({ oneLetter: item.id, name: item.zh, wrong: getRecord(item.id).wrong }));
        return {
          mastered,
          total: AMINO_ACIDS.length,
          sessionAccuracy: state.sessionTotal ? state.sessionCorrect / state.sessionTotal : null,
          review
        };
      }
    })).catch(report);
  } catch (error) {
    report(error);
  }
}

document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => setMode(tab.dataset.mode));
});

elements.nextButton.addEventListener("click", renderQuestion);
document.querySelector("#openReference").addEventListener("click", () => elements.referenceDialog.showModal());
document.querySelector("#closeReference").addEventListener("click", () => elements.referenceDialog.close());
elements.referenceDialog.addEventListener("click", (event) => {
  if (event.target === elements.referenceDialog) elements.referenceDialog.close();
});

document.addEventListener("keydown", (event) => {
  if (elements.referenceDialog.open) return;
  if (/^[1-4]$/.test(event.key) && !state.answered) {
    elements.answerGrid.querySelector(`[data-index="${Number(event.key) - 1}"]`)?.click();
  } else if (event.key === "Enter" && state.answered) {
    renderQuestion();
  }
});

renderReference();
updateDashboard();
renderQuestion();
registerWebMcpTools();
