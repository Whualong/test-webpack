
export default function add(a,b){
    import('./flow.js').then((res)=>{
        res.flow()
    })
   
    return a + b
}