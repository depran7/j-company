import './App.css';
import homeBg from './asset/bg-removebg-preview 1.png'
import logo from './asset/profil.jpg'
import owner1 from './asset/myFace.jpg'
import owner2 from './asset/sad man.png'
import alatSekolah from './asset/istockphoto-1161275231-1024x1024-removebg-preview 1.png'
import alatRumah from './asset/istockphoto-620696548-1024x1024-removebg-preview 1.png'
import alatBangunan from './asset/istockphoto-886519714-170667a-removebg-preview 1.png'
import camera from './asset/58-580597_pull-sketch-away-creative-camera-drawing-clipart-camera-removebg-preview 1.png'
import img1 from './asset/image 1.png'
import img2 from './asset/image 2.png'
import img3 from './asset/image 3.png'
import img4 from './asset/image 4.png'
import img5 from './asset/image 5.png'
import img6 from './asset/image 6.png'
import img7 from './asset/image 7.png'
import img8 from './asset/image 8.png'
import arrow from './asset/chevron-down-regular-24.png'

function App() {
  return (
    <div className="container">
      <div className='home menu' id='home'>
        <header className='navBox'>
          <div className='logoBox'>
            <img src={logo} className='logo' alt='logo' />
            <h1 className='logoTitle'>J Company</h1>
            <nav>
              <ul>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#products'>Products</a>
                </li>
                <li>
                  <a href='#galery'>Galery</a>
                </li>
              </ul>
            </nav>
            <img src={arrow} className='arrow' alt='arrow' />
          </div>
        </header>
        <h2 className='heroTxt'>Kami menyediakan<br/>semua yang anda butuhkan</h2>
        <div className='homebgBox'>
          <img src={homeBg} className='homeBg' alt='bg' />
        </div>
      </div>
      <div className='about menu' id='about'>
        <h2 className='aboutTitle'>J Company</h2>
        <div className='textBox'>
          <p className='text'>Adalah perusahaan yang berdiri <b>dibidang <br/> penyedia barang </b>rumah tangga,<br/><b>perlengkapan sekolah, dan peralatan <br/> keperluan bangunan</b></p>
        </div>
        <div className='data'>
          <div className='bulat1'></div>
          <div className='bulat2'></div>
          <div className='bulat3'></div>
          <div className='rectangel'></div>
        </div>
          <h2 className='bulat1Txt'>Didirikan oleh 3 orang ditahun 2017<br/> dengan nama for family</h2>
          <h2 className='bulat2Txt'>Dibeli oleh J Corps<br/> pada tahun 2019</h2>
          <h2 className='bulat3Txt'>Berganti nama menjadi J Company<br/> pada tahun 2022 - kini</h2>
        <div className='ownerBox'>
          <div className='owner1Box'>
            <img src={owner1} className='owner1 owner' alt='owner1' />
            <p>Owner<br/>Kul Be'd</p>
          </div>
          <div className='owner2Box'>
            <img src={logo} className='owner3 owner' alt='owner3' />
            <p>Owner<br/>Mr.Hahay</p>
          </div>
          <div className='owner3Box'>
            <img src={owner2} className='owner2 owner' alt='owner2' />
            <p>Owner<br/>Mr. Set</p>
          </div>
        </div>
      </div>
      <div className='products menu' id='products'>
        <div className='productsBox'>
          <div className='box1 box'>
            <img src={alatSekolah} className='alatSekolah' alt='alatSekolah' />
          </div>
          <div className='box2 box'>
            <img src={alatRumah} className='alatRumah' alt='alatRumah' />
          </div>
          <div className='box3 box'>
            <img src={alatBangunan} className='alatBangunan' alt='alatBangunan' />
          </div>
        </div>
      </div>
      <div className='galery menu' id='galery'>
        <img src={camera} className='camera' alt='camera' />
        <div className='galeryBox'>
          <img src={img1} className='img1 imgGalery' alt='img1' />
          <img src={img2} className='img2 imgGalery' alt='img2' />
          <img src={img3} className='img3 imgGalery' alt='img3' />
          <img src={img4} className='img4 imgGalery' alt='img4' />
          <div className='img56'>
            <img src={img5} className='img5 imgGalery' alt='img5' />
            <img src={img6} className='img6 imgGalery' alt='img6' />
          </div>
          <div className='img78'>
            <img src={img7} className='img7 imgGalery' alt='img7' />
            <img src={img8} className='img8 imgGalery' alt='img8' />
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='findusBox'>
          <h1 className='findusTxt' style={{ fontWeight: '500' }} >Find Us</h1>
          <hr className='findusLine' style={{ borderColor: 'black' }} />
          <p className='findusWord' style={{ fontWeight: '500' }}>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua.</p>
          <p className='findusIg'>@JCompany_</p>
        </div>
        <div className='contactBox'>
          <h1 className='contactTxt' style={{ fontWeight: '500' }} >Contact</h1>
          <hr className='contactLine' style={{ borderColor: 'black' }} />
          <p className='number num1' style={{ fontWeight: '500' }} >+628 2275 3380 90</p>
          <p className='number num2' style={{ fontWeight: '500' }} >+628 5581 6788 23</p>
        </div>
        <div className='companyBox'>
          <h1 className='contactTxt' style={{ fontWeight: '500' }} >Contact</h1>
          <hr className='contactLine' style={{ borderColor: 'black' }} />
          <p className='companyBrand' style={{ fontWeight: 'bold' }}>Ikea</p>
          <p className='companyBrand' style={{ fontWeight: 'bold' }}>YouTube</p>
          <p className='companyBrand' style={{ fontWeight: 'bold' }}>Pertamina</p>
        </div>
      </footer>
    </div>
  );
}

export default App;