import { useState } from "react";

const MyBody = ()=>{
    //state
    // let Myname = 'minhaj'
    // const nameState = useState('minhaj')
    // let [Myname,setMyname] = nameState
    const myCourses = ['html','css','js']
    const [courses,setCourses] = useState(myCourses)


    //change state
    // const changeValue = (e)=>{
    //     setMyname(e.target.value)

    //     console.log('myname',Myname)
    // }
    const addCourse = ()=>{
        courses.push('react')
        setCourses([...courses])
    
    }
    console.log(courses)
    // const nameChange = (e) =>{
    //     console.log(e.target.value)
    //     let NameInpState = useState(e.target.value)
    //     let [NameInp,setNameInp] = NameInpState

    // }
    return (
        <>
            <button onClick={addCourse}>add courses</button>
            {/* <h1>{Myname}</h1> */}
            {/* <button onClick={changeValue}>change</button> */}
            {/* <input type="text" onChange={(e)=>{changeValue(e)}} /> */}
            

        </>

    )
}

export default MyBody;