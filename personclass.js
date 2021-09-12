class person{
    name;
    address;
    age;
    gender;
    qualification;

    constructor(name,address,age,gender,qualification){
        this.SetName(name);
        this.SetAddress(address);
        this.SetAge(age);
        this.SetGender(gender);
        this.SetQualification(qualification);
        
    }

    getName()
    {
        return this.name

    }
    SetName(name)
    {
        this.name= name;
    }

    getAddress()
    {
        return this.address

    }
    SetAddress(address)
    {
        this.address= address;
    }

    getAge()
    {
        return this.age

    }
    SetAge(age)
    {
        this.age= age;
    }

    getGender()
    {
        return this.gender

    }
    SetGender(gender)
    {
        this.gender= gender;
    }

    getQualification()
    {
        return this.qualification

    }
    SetQualification(qualification)
    {
        this.qualification= qualification;
    }
}

var details = new person("Yuvi","line1 line2 line3",60,"M","+2");
console.log(details);