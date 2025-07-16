export async function getGradientFromImage(url, options = {}) {
  const { step = 10, topN = 4 } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; 

    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const colorCount = {};

      for (let y = 0; y < img.height; y += step) {
        const row = ctx.getImageData(0, y, img.width, 1).data;

        for (let x = 0; x < img.width; x += step) {
          const i = x * 4;
          const r = row[i];
          const g = row[i + 1];
          const b = row[i + 2];
          const key = `rgb(${r},${g},${b})`;

          colorCount[key] = (colorCount[key] || 0) + 1;
        }
      }

      const topColors = Object.entries(colorCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([color]) => color);

      const gradient = `linear-gradient(to bottom, ${topColors.join(", ")})`;
      resolve(gradient);
    };

    img.onerror = reject;
    img.src = url;
  });
}
