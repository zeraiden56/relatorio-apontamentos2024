export function getSheetData(sheetName) {
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((res) => {
        console.log(res);
        resolve(res);
      })
      .withFailureHandler((msg) => {
        console.log(msg);
        reject(msg);
      })
      .getSheetData(sheetName);
  });
}

export function anotherFunction() {
  // Function implementation
}

export function yetAnotherFunction() {
  // Function implementation
}
