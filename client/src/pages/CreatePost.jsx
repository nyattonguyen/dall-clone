import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import preview from "../assets/preview.png"
import { getRandomPrompt } from "../utils"
import { FormField, Loader } from '../components'
const createPost = () => {
  const navigation = useNavigate();
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  })

  const handleSubmit = () => {}
  const handleChange = (e) => {}
  const handleSurpriseMe = () => {}
  
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoaing] = useState(false);
  return (
    <section className="max-w-7xl mx-auto" >
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <form className="mt-16 max-w-3xl" onsubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Nyatto"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="Prompt"
            placeholder="Nyatto"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}          />
        </div>
      </form>
    </section>
    )
}

export default createPost