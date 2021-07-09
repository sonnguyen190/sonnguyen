import './App.css';
import anhson from './image/anhson.jpg';
function App() {
  return (
    <div className="App" >
      <div className='fss'>   <h1> My Profile</h1>
   <img className="image" src={anhson} alt="" />
   <h2>Nguyễn Văn Lâm Sơn  </h2>
   <h4>Lập Trình Viên Cùi Bắp</h4>
   <img className='gif' src="https://img2.thuthuatphanmem.vn/uploads/2018/12/31/anh-dong-de-thuong-va-dep_112053878.gif" alt="" />

   <div> <h4>Chào Bro.Rất vui vì được làm quen với Bro! <br/>
    Bro muốn thông tin gì của tui nào?</h4>
    
   </div>
</div>

   <div>
    <ul className="ulli"> 

      <li>
     <button className='button'><a className='linkfb' href="https://www.facebook.com/sonvjpro.nguyen/"> <i class="bi bi-facebook"></i>  Facebook</a></button>
      
      </li>

      <li>
      <button className='button'><a className='linkphone' href="tel:0355047879"><i class="bi bi-telephone-fill"></i> Phone</a></button>
      
      </li>

      <li>
      <button className='button'><a className='linkgmail' href="mailto:sonkute190@gmail.com"><i class="bi bi-envelope-fill"></i>  Gmail</a></button>
      
      </li>

    </ul>
   </div>
   © 2021 Namecard | Created by <a className='linkfb1' href="https://www.facebook.com/sonvjpro.nguyen">Sơn Nguyễn</a> 
    </div>
    
  );
}

export default App;
