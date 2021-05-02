import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
const ContactMeDetails = () => {
  ////////////////
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = e => {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         "service_iiluu9r",
  //         "template_9d4l0pq",
  //         e.target,
  //         "user_o8Tv2LDlheDIOO91GunSi"
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         }
  //       );
  // };
  //////////////////
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iiluu9r",
        "template_9d4l0pq",
        e.target,
        "user_o8Tv2LDlheDIOO91GunSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="container">
      <div className="side w-75">
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" required />
          <label>Name</label>

          <input
            type="text"
            name="user_name"
            className="form-control w-100"
            required
            placeholder="Name"
          />
          <br />
          <label>Email</label>

          <input
            type="email"
            name="user_email"
            className="form-control w-100"
            placeholder="Email"
            required
          />
          <br />
          <label>Message</label>

          <textarea
            name="message"
            className="form-control w-100"
            placeholder="Massage"
            required
          />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
    
      <input defaultValue="test" {...register("example")} />
      
    
      <input {...register("exampleRequired", { required: true })} />
   
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form> */}
    </div>
  );
};

export default ContactMeDetails;
