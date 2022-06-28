import logo from '/Users/enriquegreene/Documents/Documents - Enrique’s MacBook Pro/PostGrad/portfolio/src/images/CAYACC-logo-wht-1-297x300.jpeg';
import '../css/Home.css'


let Home = () => {




    return ( 
        <div className='home-color container-fluid'>
            <div>
      <a href='https://cayacc.org/'><img className='img-fluid justify-content-center d-flex pic' src={logo}  alt="logo"/></a>
      </div>
      <h1>Learn the WORD OF GOD.</h1>
      <br/>
      <h3>Transform your life today!</h3>
</div>         
      
     
    )
}

export default Home;