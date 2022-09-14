function AnyName(name,aadhar,mobile,gender){
    this.firstName=name;
    this.aadhar=aadhar;
    this.mobile=mobile;
}
AnyName.prototype.gender='male';
let names=new AnyName('Maehsh','yes',0987654,'male');
let names2=new AnyName('Rakesh','no',786756434,'yes');
console.log(names['mobile'])
console.log(names2['firstName'])
console.log(names2['gender']);