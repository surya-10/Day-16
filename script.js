let text = document.querySelector(".div");
text.style.textAlign = "center";

function func1(callback){
    text.textContent=10;
    setTimeout(callback, 1000)
}
function func2(callback){
    text.textContent=9;
    setTimeout(callback, 1000)
}
function func3(callback){
    text.textContent=8;
    setTimeout(callback, 1000)
}
function func4(callback){
    text.textContent=7;
    setTimeout(callback, 1000)
}
function func5(callback){
    text.textContent=6;
    setTimeout(callback, 1000)
}
function func6(callback){
    text.textContent=5;
    setTimeout(callback, 1000)
}
function func7(callback){
    text.textContent=4;
    setTimeout(callback, 1000)
}
function func8(callback){
    text.textContent=3;
    setTimeout(callback, 1000)
}
function func9(callback){
    text.textContent=2;
    setTimeout(callback, 1000)
}
function func10(callback){
    text.textContent=1;
    setTimeout(callback, 1000)
}
function greet(){
    text.textContent="happy independence day";
}

func1(function(){
    func2(function(){
        func3(function(){
            func4(()=>{
                func5(()=>{
                    func6(()=>{
                        func7(()=>{
                            func8(()=>{
                                func9(()=>{
                                    func10(()=>{
                                        greet();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})