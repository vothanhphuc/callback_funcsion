import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

// const root = createRoot(document.querySelector('#root'));
// root.render(
// <>
//       <form className="login-fm">
//        <div className="login-fm__item">
//              <label className="login-fm__email" htmlFor="email">Email: </label>
//              <input className="login-fm__input" type="email" />
//        </div>
//        <div className="login-fm__item">
//              <label className="login-fm__email" htmlFor="password">Password:</label>
//             <input className="login-fm__input" type="email" />
//        </div>
//        <div className="login-fm__item">
//              <button className="login-fm__submit-btn" type="submit">login</button>
//        </div>
//       </form>
// </>
// );
class Main extends React.Component{
      constructor(props){
          super(props);
      }
  
      render(){
          // setTimeout(() =>{
          //     this.setState({ //cu phap mac dinh cua State
          //         demoState : "hello"
          //     })
          // },2000)
          return(
                <form className="login-fm">
                        <div className="login-fm__item">
                              <label className="login-fm__email" htmlFor="email">Email: </label>
                              <input className="login-fm__input" type="email" />
                        </div>
                        <div className="login-fm__item">
                              <label className="login-fm__email" htmlFor="password">Password:</label>
                              <input className="login-fm__input" type="email" />
                        </div>
                        <div className="login-fm__item">
                              <button className="login-fm__submit-btn" type="submit">login</button>
                        </div>
                </form>
            )
        }
  }
  
  export default Main