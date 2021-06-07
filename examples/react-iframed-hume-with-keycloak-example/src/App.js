import React, {useState} from 'react';

function invokeHumeAction(actionName, params) {
    const message = {
        event: "INVOKE_ACTION",
        payload: {
            name: actionName,
            params
        }
    };
    document.getElementById('humeIframe').contentWindow.postMessage(message, '*');
    document.getElementById('customInput').value = '';
}

function App() {

    const [movieName, setMovieName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>Secure React App with Keycloak</div>
      </header>


        <div style={{width: '100%', display: 'flex'}}>
            <div style={{"width":"80%","background":"#c4cfdc","padding":"16px"}}>
                <div>
                    Hume
                </div>
                <div>
                    <iframe id="humeIframe" title={"humeIframe"} src={window._env_.HUME_URL} style={{width: '100%', height: '900px', border: '0px'}}/>
                </div>
            </div>
            <div style={{"width":"20%","padding":"16px","background":"#e3ebf3"}}>
                <div>
                    Other App
                </div>
                <div style={{padding: '16px 0'}}>
                    <input id="customInput" onChange={event => setMovieName(event.target.value)}/>
                    <button
                        onClick={() => invokeHumeAction('FindMovie', {movieName})}>find movie
                    </button>
                </div>
                <div style={{padding: '16px 0'}}>
                    <p>
                        ^^ Invokes global action 'FindMovie' with parameter 'movieName'.
                    </p>
                    <p>
                        {
                            `MATCH path = (m:Movie {title: $movieName})-[]-() RETURN path`
                        }
                    </p>
                </div>
            </div>
        </div>


    </div>
  );
}

export default App;







// axios example setup
//
// export const createActiosInstance = () => {
//     const axiosInstance = axios.create({
//         baseURL: apiBaseURL,
//     });
//
//     axiosInstance.interceptors.request.use(request => {
//         const token = localStorage.getItem("react-token");
//         if (token) {
//             request.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return request;
//     });
//
//     return axiosInstance;
// };
