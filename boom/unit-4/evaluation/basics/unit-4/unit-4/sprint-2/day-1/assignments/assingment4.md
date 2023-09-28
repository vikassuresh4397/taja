1. what is the difference between Props and State?
Ans-> props means properties and State are both plain JavaScript objects.props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

2. Explain the useState API?
Ans-> The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.

3. Explain the how map, filter, reduce work?
Ans-> 
    i. Map- map take an array and return an array.
       syntax-dataType.map((callback)=>{
        return callback;
       })
    ii. filter- filter take an array and it is return an array with satisfied condition.
        syntax- data.filter((el)=>{
            return el*2==3
        })
        here no. should be anything..it is just an example;
    iii.reduce- it will take an array but return a single element.
        syntax-data.reduce((acc,el){
            return acc+el
        })

4. Create your own map, filter, reducer methods and attach it to an array using prototype chain ?
Ans-> function MyArray(){
    this.length=0
}
MyArray.prototype.push=function (el){
    this[this.length]=el;
    this.length++;
    return this.length;
}
MyArray.prototype.pop=function (el){
    this.length--
    var popEle=this[this.length]
    delete this[this.length]
    return popEle;
}

var arr=new Myarray()
arr.push("masai")
arr.push("school")
console.log(arr[0]);

6. 