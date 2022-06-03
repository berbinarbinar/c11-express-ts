# Simple server using TypeORM and Express written in Typescript

Untuk membuat simple server yang ditulis dalam TypeScript kita perlu untuk mengkonfigurasi file typescript terlebih dahulu:

sebelum memulai kita perlu instalasi beberapa package yang harus diinstall

`npm i -D typescript @types/node @types/express`

apabila sudah selesai kita juga bisa menginstall typescript secara global

`npm i -g typescript`

untuk verifikasi penginstalan kita hanya perlu menjalankan command

`tsc -v`

lalu akan keluar versi typescript apabila sudah terinstall

kemudian, untuk memulai project bisa langsung lakukan `tsc --init` untuk membuat konfigurasi file typescript yaitu tsconfig.json
tsconfig.json ini dipakai untuk memberi tahu Compiler typescript untuk melakukan sesuatu, kita perlu memberi tahu hal dasar pada typescript yaitu kurang lebih

```json
{
  "compilerOptions": {
    "lib": ["es5", "es6"],
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "./build",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true
  }
}
```

dimana:

1. lib itu untuk memberi tahu syntax javascript yang sekiranya akan dipakai saat compiling
2. target untuk memberi tahu compiler untuk mengcompile file TypeScript sesuai dengan target yang ditulis
3. module: syntax yang kita pakai dalam penulisan kode, commonJs -> import {} from ''. es6 -> const {} = require('')
4. outDir: untuk memberi tahu folder output hasil compiling akan ditaruh dimana

untuk kelengkapan mengenai informasi bisa di cek di url [ini](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

Selanjutnya kita bisa langsung setup server

## Setup Server

Pembuatan server menggunakan Express yang ditulis menggunakan TypeScript itu hanya sesimple dengan memberitahu bahwa req: Request, res: Response. Namun ini hanyalah konfigurasi yang simple atau konfigurasi dasar.

```ts
import * as express from 'express'
import { Request, Response } from 'express'
const PORT = 4000

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ini contoh request get ke /' })
})

app.listen(PORT, () => {
  console.log(PORT)
})
```

setelah menulis kode di atas, kita perlu mengubah atau menambahkan scripts pada `package.json` dimana kita perlu menambahkan scripts untuk build (compile) file typscript menjadi javascript. kita bisa menambahkan

```json
"scripts": {
  ...,
  "build": "tsc",
  "build-watch": "tsc -w"
  ...rest
}
```

apabila kita menjalankan `npm run build` keseluruhan file `.ts` akan dicompile menjadi file `.js` dimana hasil output itu disesuaikan dengan konfigurasi `outDir` yang berada pada `tsconfig.json`.

apabila kita ingin menjalankan servernya, kita tidak bisa menjalankan command `node index.ts` karena dia masih typescript, maka dari itu kita harus menjalankannya dari hasil compiling yang berada pada folder sesuai dengan yang ada di konfigurasi `outDir` di `tsconfig.json`. contoh di project ini kita bisa menjalankan dengan
`node build/index.js`

## SETUP LINTER

1. Dari VSCode -> Preferences
   a. Format on Save
   b. Prettier config dibikin true
   c. kita bikin di root folder `.prettierrc`

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "arrowParens": "always"
}
```

d. kita tambahkan satu script lagi yaitu "lint"

```json
"scripts": {
  ...,
   "lint": "prettier --write \"src/**/*{.js,.ts}\""
  ...rest
}
```
