import React, { useState } from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        photo: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MamoonAhmadKhan");
    const res = await data.json();

    this.setState({
      userInfo: res,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;

    return (
      <>
        <div className="flex items-center content-between m-8 pl-20 pr-20 mb-20 space-x-5">
          <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <p className="font-mono font-bold ml-10 mt-2 mb-5">Hello!, I'm Mamoon Ahmad Khan, {bio}</p>
            <p className="font-mono font-bold ml-10 mt-2 mb-5">Skills : C, C++, HTML-"HyperText Markup Language", CSS-"Cascading Style Sheets", JavaScript, REACT.JS, Redux-Toolkit, TailwindCSS, DSA-"Data Structures & Algorithms"</p>
            <h2 className="text-xl font-bold">Location: {location}</h2>
            <h3 className="text-xl font-bold">
              Contact: khanmamoon887@gmail.com
            </h3>
          </div>
          <div>
            <img className="w-200" src={avatar_url} alt="profile_photo" />
          </div>
        </div>
      </>
    );
  }
}

export default User;
