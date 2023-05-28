const http = require("http");
const rupiah = require("rupiah-format");
const host = "127.0.0.1";
const port = 3002;

const server = http.createServer(function (request, response) {
  const name = "ALDI RIZKI";
  let uang = 50000;
  let jajan = 25000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang)
  jajan = rupiah.convert(jajan)
  sisa = rupiah.convert(sisa)

  const hasil = `nama saya ${name}, saya jajan  sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}. `;

  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`server menyala di ${host}:${port} `);
});
