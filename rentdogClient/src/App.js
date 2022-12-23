import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Login from './components/login';
import Home from './components/home';
import Search from './components/search';
import Contract from './components/contract';
import RegisterUser from './components/register';
import HomeAdmin from './components/homeAdmin';
import Footer from './components/footer';

function App() {

  let navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [dog, setDog] = useState([]);
  const [contracts, setContract] = useState([]);

  async function fetchPostData(url, object) {
    return axios.post(url, object).then((resp) => resp.data)
  }

  async function fetchUpdateData(url, object) {
    return axios.put(url, object).then((resp) => resp.data)
  }

  async function fetchData(url) {
    return axios.get(url).then((resp) => resp.data)
  }

  async function fetchDeleteData(url) {
    return axios.delete(url).then((resp) => resp.data)
  }

  useEffect(() => {
    fetchData("http://localhost:5000/api/userinfo").then(result => setUser(result))
    fetchData("http://localhost:5000/api/doginfo").then(result => setDog(result))
    fetchData("http://localhost:5000/api/contractinfo").then(result => setContract(result))
  }, [])

  return (<div className="App">
    <Routes>
      <Route
        path="/"
        element={<Login
          credentials={(user) => {
            setCurrentUser(user)
            if (user.isAdmin) {
              navigate('/homeAdmin')
            } else {
              navigate('/home');
            }
          }}
        />}
      />
      <Route
        path='/homeAdmin'
        element={<HomeAdmin user={currentUser}
          userlist={user}
          changeAdmin={(useridUpdate, adminUpdate) => {
            const updateUserAdmin = { isAdmin: adminUpdate }
            fetchUpdateData(`http://localhost:5000/api/userinfo/${useridUpdate}`, updateUserAdmin).then((resp) => console.log(resp))
            fetchData("http://localhost:5000/api/userinfo").then(result => setUser(result))
          }} />}
      />
      <Route
        path="/home"
        element={<Home user={currentUser}
          update={(userUpdate) => {
            fetchUpdateData(`http://localhost:5000/api/userinfo/${userUpdate._id}`, userUpdate)
              .then(() => setCurrentUser(userUpdate))
            fetchData("http://localhost:5000/api/userinfo").then(user => {
              setUser(user)
            })
          }} />}
      />
      <Route
        path="/search"
        element={<Search
          dogs={dog}
          user={currentUser}
          newDog={() => fetchData("http://localhost:5000/api/doginfo").then(result => setDog(result))}
          removeDogList={(_id) => {
            fetchDeleteData(`http://localhost:5000/api/doginfo/${_id}`)
            fetchData("http://localhost:5000/api/doginfo").then(result => setDog(result))
          }}
          updateDogList={() => {
            fetchData("http://localhost:5000/api/doginfo").then(result => setDog(result))
          }}
          create={(nameContract, breedContract, dateContract) => {
            const contractList = { userId: currentUser._id, dogName: nameContract, dogBreed: breedContract, date: dateContract, like: 0 }
            fetchPostData("http://localhost:5000/api/contractinfo", contractList).then((resp) => console.log(resp))
            fetchData("http://localhost:5000/api/contractinfo").then(result => setContract(result))
            navigate('/contract');
          }}
        />}
      />
      <Route
        path="/contract"
        element={<Contract
          user={currentUser}
          contracts={contracts}
          contractlike={(contractSelected) => {
            fetchUpdateData(`http://localhost:5000/api/contractinfo/${contractSelected._id}`, contractSelected).then((resp) => console.log(resp))
            fetchData("http://localhost:5000/api/contractinfo").then(result => setContract(result))
          }} />}
      />
      <Route
        path="/register"
        element={<RegisterUser
          AddNewUser={() => {
            fetchData("http://localhost:5000/api/userinfo").then(result => setUser(result))
            navigate('/');
          }} />}
      />
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
