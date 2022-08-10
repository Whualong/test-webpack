export default function flow(){
    import('./square.js').then((res)=>{
        res.square(4,6)
    })
    return 'flow'
}   