import { Routes, Link, Route } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, HomePage, Exchanges, Cryptocurriences, News, CryptoDetails  } from './components';

const App = () => {
  return (
    <>
      <div className='app'> 

        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurriences">
                  <Cryptocurriences />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
              </Routes>
            </div>
          </Layout>
        </div>

        <div className="footer">
        </div>

      </div>
    </>
  )
}

export default App;
