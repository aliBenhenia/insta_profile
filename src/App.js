import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import gf from "./gf.jpg"
import {VerifiedOutlined,ContactsOutlined,UserAddOutlined,HeartOutlined} from '@ant-design/icons'
import { Button, Space } from 'antd';
import {Posts} from "./Posts.js"
function App() {
  return (
    <div className="container mt-5">
        <div className='row' id='block'>
            <div className='col-6'>
                <img src={gf} id="pro"/>
            </div>
            <div className='col-6'>
              <h4>
                  codecademy 
                  <VerifiedOutlined style={{marginLeft:"1rem"}}/>
              </h4>
               <div className='row'>
               <Button className='col-3 mt-3' id='folow' type="primary">Follow</Button>
              <Button className='col-3 mt-3' id='contact'  type="primary" >contacte</Button>
               </div>
              <div className='row mt-5'>
                  <div className='col-md-4 mt-3'>
                     517 publications
                  </div>
                  <div className='col-md-4 mt-3'>
                     517 publications
                  </div>
                  <div className='col-md-4 mt-3'>
                     517 publications
                  </div>
                  <hr className='mt-3' />
                  <div className='col-md-12 text-bold'>
                  Join the millions of people learning to code with Codecademy, from Skillsoft.
                  </div>
              </div>
            </div>
        </div>
        <div id='str' className='mt-5'>
           <div className='str'>
              <img src={gf} className="story"/>
              <p>Weekly Reads</p>
           </div>
           <div className='str'>
              <img src={gf} className="story"/>
              <p>Weekly Reads</p>
           </div>
           <div className='str'>
              <img src={gf} className="story"/>
              <p>Weekly Reads</p>
           </div>
           <div className='str'>
              <img src={gf} className="story"/>
              <p>Weekly Reads</p>
           </div>
        </div>
        <hr />
        <Posts/>
    </div>
  );
}

export default App;
