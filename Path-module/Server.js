import path from "path"

const fullpath = path.join("/path", "index.py", "file.java")
// console.log(fullpath)

const absolutepath = path.resolve()
// console.log(absolutepath)

const extname = path.extname("resume.pdf")
console.log("extname file", extname)

if(extname == ".pdf"){
    console.log("Its ok")
}else{
    console.log("not ok")
}