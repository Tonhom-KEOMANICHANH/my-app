const Day9 = () => {
    //const button


    return (
        <div className="container">
            <div className="product-card">
                <p>
                    <h1>My Profile</h1></p>
                <img src="https://th.bing.com/th/id/R.f25986f83d29f263ebd06dd09a346e51?rik=QPBxgQ87xx3frQ&riu=http%3a%2f%2fhdwpro.com%2fwp-content%2fuploads%2f2016%2f01%2fFree-Nature-Wallpaper.jpeg&ehk=%2bdwlu1hrDz81nIaXvoD0RKirrjcGvcYEPG2pwH9q6ss%3d&risl=&pid=ImgRaw&r=0"></img>
                <h1></h1>
                <p></p>
                <p></p>
            </div>

            <button>
                Follow
            </button>

            <div className="text">
                <div className="About Myprofile">
                    <p>
                        <h1>About myself</h1>
                        <p>Telling someone about yourself can be tricky if you’re not sure how to go about it, but when you’re in an interview or at the start of your first day on the job, giving someone an overview of your previous work and education experience isn’t only necessary – it shows that you’re excited to be there and prepared to work hard.</p>
                    </p>
                </div>
            </div>
            <div>

            </div>

            <style jsx>
                {`
        .counter {
          margin: 20px 0;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
         }
        p {
         font-size: 18px;
       }   
        .text {
            margin: 20px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
            text-align: start
        }
        button {
          padding: 10px 30px;
          font-size: 16px;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s;
          margin: 0 80px;
          background-color: orange;
        }
          img {
            height: 50%;
            width: 50%;
            border-radius: 100px;
        }
       `}
            </style>
        </div>

    )
};

export default Day9;