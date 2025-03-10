// const{URL}=require('url')
// const myUrl=new URL("https://example.com:8080/path?name=nodejs#hash");

// console.log(myUrl.href);
// console.log(myUrl.protocol);
// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.port);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.hash);
// console.log(myUrl.origin);

// myUrl.pathname='/api/user'
// myUrl.searchParams.append('id','123')
// myUrl.searchParams.append('status','active')
// console.log(myUrl.toString())

// const myUrl1 =new URL("https://example.com?name=bhuvi&age=21")
// console.log(myUrl1.searchParams.get('name'))
// console.log(myUrl1.searchParams.get('age'))

// //adding parameters
// myUrl1.searchParams.append('city','New York');

// const url=require('url');
// const baseUrl='https://examle.com/home/';
// const relativePath='../about'
// const resolveUrl1=url.resolve(baseUrl,relativePath)
// console.log(resolveUrl1);
// const resolveUrl=new URL('../about','https://example.com/home/')
// console.log(resolveUrl.href)

// const queryString='Hello world'
// const encoded=encodeURIComponent(queryString)
// console.log(encoded);

// const decoded=decodeURIComponent(queryString)
// console.log(decoded);

// //ZLIB-module for compressing and decompressing String
const zlib=require('zlib');
//sample data
const input='Hello ,TEST DATA STRING'
zlib.gzip(input,(err,compressed)=>{
    if (err) throw err;
    console.log('Compressed:',compressed.toString('base64'))

    //decompress
    zlib.gunzip(compressed,(err,decompressed)=>{
        if (err) throw err;
        console.log('Decompressed:',decompressed.toString())
    })
})

const fs=require('fs');
const inputFile='example.txt'

const compressedFile='example.txt.gz'
const decompressedFile='output.txt'

fs.createReadStream(inputFile)
.pipe(zlib.createDeflate())
.pipe(fs.createWriteStream(compressedFile))
.on('finish',()=>{
    console.log('File compressed successfully')
})

fs.createReadStream(compressedFile)
.pipe(zlib.createInflate())
.pipe(fs.createWriteStream(decompressedFile))
.on('finish',()=>{
    console.log('File Decompressed successfully')

})