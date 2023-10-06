import { useState } from 'react';
import iconList from '../images/icon-list.svg'
import signDesctop from '../images/illustration-sign-up-desktop.svg';
import signMobile from '../images/illustration-sign-up-desktop.svg';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required()

export default function SubscribeCard({onSubmit}) {
  function handleFormSubmit(data) {
    onSubmit(data.email);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

    return (
        <>
        <picture className='signUp-image'>
          <source srcSet={signDesctop} media="(min-width:900px)"/>
          <img src={signMobile}/>
        </picture>
        <div className='card-content grid-container'>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='list'>
            <li className='list-item'>
              <img src={iconList}/>
              <p>Product discovery and building what matters</p>
            </li>
            <li className='list-item'>
              <img src={iconList}/>
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className='list-item'>
              <img src={iconList}/>
              <p>And much more</p>
            </li>
          </ul>
          <form className='grid-container' onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={`input_form${errors.email?.message ? " input-error" : ""}`}>
              <label className='label' htmlFor='email'>Email adress</label>
              <p className='errors'>{errors.email?.message}</p>
              <input
                {...register("email")}
                id="email"
                placeholder='email@company.com'
                className="input"
              />
            </div>
           <button className='button'>Subscribe to monthly newsletter</button>
          </form>
        </div>
        </>
    )
}