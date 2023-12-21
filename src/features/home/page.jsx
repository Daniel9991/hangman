import Button from '../../components/button/button'
import './home.css'

export default function HomePage(){

  return (
    <div className='page'>
      <div className='non-footer'>
        <header className="header">
          <h1 className='heading'>Hangman</h1>
        </header>
        <main className='pane home-pane'>
          <h3>Welcome to Hangman</h3>
          <div className='home-pane-sections-wrapper'>
            <section className='home-pane-section home-pane-description-section'>
              <p>A  man  has  been  wrongfully  captured  and  sentenced  to  be  hanged, but  you  may  help  him  avoid  death.</p>      
              <p>Discover  the  word  before  you  run  out  of  lives.</p>      
              <p style={{width: "fit-content"}}>
                Decipher  the  code.
                <span style={{display: "block"}}>Save  this  poor  man&apos;s  life.</span>
                <img 
                  style={{
                    display: "block",
                    width: "43px",
                    margin: "2rem auto 0"
                  }}
                  src="../../assets/images/good_guy.png"
                  alt="image of a pixelated man" 
                />    
              </p>
            </section>
            <section className='home-pane-section home-pane-buttons-section'>
              <p>You  may  log  in  to  save  your  highest  score,  or play  as  an  anonymous  hero.</p>
              <div className="home-pane-buttons-wrapper">
                <Button width='full'>Play</Button>
                <Button width='full'>Log In</Button>
                <Button width='full'>About</Button>
              </div>
            </section>
          </div>
        </main>
      </div>
      <footer>
        <h3 className='footer-text'>Classic Hangman. 2023</h3>
      </footer>
    </div>
  )
} 