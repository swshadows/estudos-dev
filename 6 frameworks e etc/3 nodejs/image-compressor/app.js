const sharp = require("sharp");

const file = process.argv[2];
const width = Number(process.argv[3]);

function resize(arg_file, arg_output, arg_width) {
  sharp(arg_file)
    .resize({ width: arg_width })
    .toFile(arg_output, (error) => {
      if (error) console.log(error);
      else {
        console.log("Imagem redimensionada com sucesso");
      }
    });
}

resize(file, "./compressed/output_resize.jpg", width);
