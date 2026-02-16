import {readFile, writeFile, appendFile, mkdir} from "fs/promises"

// const read_file = async (fileName) => {
//     const data = await readFile(fileName, "utf-8")
//     console.log(data)
// }

// const create_file = async (fileName, content) => {
//     await writeFile(fileName, content)
//     console.log("file created succesfully")
// }
// create_file("ai.text", "This file is for testing")
// create_file("app.jsx", "This file is reactjs file")


// const append_file = async (fileName, content) => {
//     await appendFile(fileName, content)
//     console.log("file updated succesfully")
// }
// append_file("ai.text", "this is new update in file")



const dir_file = async (dir) => {
    await mkdir(dir, {recursive: true})
    console.log("Folder created Succesfully")
}
dir_file("public")