import { Col, Row, Form, Input, Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { loginUser } from 'redux/actions/userActions';

//user login
const Login = () => {
    const dispatch=useDispatch();
    function login(values){
         dispatch(loginUser(values));
    }
    return (
        <div className='login' style={{backgroundColor:"Background"}}>
           
            <Row justify="center">
            
                <Col lg={8} sm={20} className='login-form'>
                <h3 className='login-form-title'>Login</h3>
                    <Form layout='vertical' onFinish={login}>
                        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className='login-form-button' htmlType='submit' >Login here</Button>
                        <h6 style={{textAlign:"center"}}>Not Registered Yet</h6>
                        <Link to="/register"><h6 style={{textAlign:"center",textDecoration:"none",}}>Register Here</h6></Link>
                        
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login

// import React from "react";
// import { Row, Col, Form, Input, Button } from "antd";
// import { loginUser } from "../redux/actions/userActions";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// // import AOS from 'aos';
// // import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// // AOS.init();

// function Login() {
//     const dispatch = useDispatch()
//     function login(values){

//         dispatch(loginUser(values))

//     }
//   return (
//     <div className="login">
//       <Row justify="center" className="flex align-items-center">
//         <Col lg={5}><h1 className="heading1" data-aos='slide-left'>Shey</h1></Col>
//         <Col lg={10} sm={24} className="bs p-5 login-form">
//           <h3>Login</h3>
//           <hr />
//           <Form layout="vertical" onFinish={login}>
//             <Form.Item
//               label="username"
//               name="username"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="password"
//               name="password"
//               rules={[{ required: true }]}
//             >
//               <Input />
//             </Form.Item>

//             <Button htmlType="submit" className='mb-3'>Login</Button><br />

//             <Link to='/register' className='mt-3'>Not registerd ? , Click here to register</Link>
//           </Form>
//         </Col>
//         <Col lg={5}><h1 className='heading2' data-aos='slide-right'>Jobs</h1></Col>
//       </Row>
//     </div>
//   );
// }

// export default Login;

