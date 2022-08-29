import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL  } from "firebase/storage";
import { UserAuth } from "../context/AuthContext";

const Test = () => {
const [imageUpload, setImageUpload] = useState()
const [imageList, setImageList] = useState([])

const {user} = UserAuth()

useEffect(() => {
    const listRef = ref(storage, 'imagesOFFER')
    listAll(listRef).then(res => {res.items.forEach(item => {
        getDownloadURL(item).then(url => {
            setImageList(prev => [...prev, url])
        })
    })}).catch(e => console.log(e)) 
    console.log(imageList)
}, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (imageUpload === null) return;
    if (!user || user === undefined) return;
    console.log(imageUpload)
    const imageRef = ref(storage, `imagesOFFER/${user.uid}-postID`)
    await uploadBytes(imageRef, imageUpload).then(() => {
        console.log('uploaded')
    })
  };

  return <form onSubmit={(e) => handleSubmit(e)}>
    <input type="file" onChange={(e) => setImageUpload(e.target.files[0])}/>
    <input type="submit"/>
  </form>;
};

export default Test;
