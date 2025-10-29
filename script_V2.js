document.getElementById("calcBtn").addEventListener("click", () => {
  const voltage = parseFloat(document.getElementById("voltage").value);
  const current = parseFloat(document.getElementById("current").value);
  const distance = parseFloat(document.getElementById("distance").value);
  const cableType = document.getElementById("cableType").value;

  // 各ケーブルの仮抵抗率データ（Ω・mm²/m）
  const cableResistance = {
    "VVF": 0.0172,
    "AE": 0.0180,
    "AZ-C": 0.0185,
    "AZ-C-EM": 0.0186,
    "AZ-CP": 0.0182,
    "AZ-CP-EM": 0.0184,
    "CV": 0.0178,
    "CVV": 0.0180,
    "IV": 0.0172,
    "HP": 0.0190,
  };

  // 未登録ケーブルは標準値で計算
  const resistivity = cableResistance[cableType] || 0.0175;

  // 電圧降下の簡易計算（片道距離×2）
  const voltageDrop = resistivity * distance * current * 2 / 100; 
  const voltageAtEnd = voltage - voltageDrop;

  document.getElementById("result").innerHTML = `
    <p>ケーブル種類：${cableType}</p>
    <p>抵抗率：${resistivity} Ω・mm²/m</p>
    <p>電圧降下：${voltageDrop.toFixed(2)} V</p>
    <p>末端電圧：${voltageAtEnd.toFixed(2)} V</p>
  `;
});
