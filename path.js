// const path=require('path');

// const filePath=(path.join(__dirname,'files','example.txt'));
// console.log('File Path',filePath);
// const fileName=path.basename(filePath);
// console.log('File Name:',fileName);

// const ext=path.extname(fileName);
// console.log('Extension:',ext);

// //OS 
// const os=require('os');
// console.log('Operating System',os.type());
// console.log('Total Memory',os.totalmem());
// console.log('Free memory:',os.freemem());
// console.log('CPU information',os.cpus());

// const EventEmitter=require('events');
// const emitter=new EventEmitter();
// emitter.on('greet',(name)=>{
//     console.log(`Hello,${name}`)
     
// })
// emitter.emit('greet','bhuvi');

// //convert the buffer to string
// const buffer=require('buffer')
// console.log(buffer.toString());
// const emptyBuffer=Buffer.alloc(10);
// console.log(emptyBuffer);

//Random token generation
const crypto=require('crypto');
// const hash=crypto.createHash('SHA256').update
crypto.randomBytes(16,(err,buffer)=>{
    if(err)throw err;
    console.log("Random Tooken:",buffer.toString('hex'))
})

//public and private key generation
 const {publicKey,privateKey}=crypto.generateKeyPairSync('rsa',{
    modulusLength:2048,
 })
 console.log("Public Key:",publicKey.export({type:'pkcs1',format:'pem'}))
 console.log("Private Key:",privateKey.export({type:'pkcs1',format:'pem'}))

 function encryptData(data){
    return crypto.public.Encrypt(publicKey,Buffer.from(data)).toString('base64')
 }

 function decryptData(encryptData){
    return crypto.privateDecrypt(privateKey,Buffer.from(encryptData,'base64')).toString()
 }
const message="Confidential data";
const encryptMessage=encryptData(message);
console.log('Encrypted:',encrypMessage);
const decryptMessage=encryptData(message);


//Password Hashing
 const password='securepassword';
 const salt=crypto.randomBytes(16).toString('hex')
 crypto.pbkdf2(password,salt,100000,64,'sha512',(err,derivedKey)=>
{
    if(err) throw err;

    console.log('Derived Key:',derivedKey.toString('hex'))
})

 