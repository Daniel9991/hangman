import './about.css'

export default function AboutPage({
  navigateToPlay,
  navigateToLogin,
}){

  return (
    <div className='page'>
      <div className='non-footer'>
      <header className="header">
          <h1 className='heading'>Hangman</h1>
          <nav className='navbar'>
            <span onClick={navigateToPlay} className='navbar-link' href="#">Play</span>
            <span onClick={navigateToLogin} className='navbar-link' href="#">Log In</span>
          </nav>
        </header>
        <main className='about-main'>
          <section className='about-game-rules'>
            <p className="about-game-rule">A man has been unjustly charged and sentenced to be hanged.</p>
            <p className="about-game-rule">To save him, you must find the word, one letter at a time, before using all lives.</p>
            <p className="about-game-rule">If you are stuck, you may use a hint at the expense of two lives.</p>
            <p className="about-game-rule">When you decipher the word, the man will escape. However, he will manage to get caught again.</p>
            <p className="about-game-rule">As you continue to free him, you will accumulate points.</p>
            <p className="about-game-rule">Do your best. Don&apos;t let the poor guy die.</p>
          </section>
          <section className='pane about-pane'>
            <div className="about-pane-group">
              <h4 className="about-pane-group-title">Developed by:</h4>
              <p className="about-pane-group-element">- Gabriel Fernández</p>
            </div>
            <div className="about-pane-group">
              <h4 className="about-pane-group-title">Designed by:</h4>
              <p className="about-pane-group-element">- Daniel Fernández</p>
            </div>
            <div className="about-pane-group">
              <h4 className="about-pane-group-title">Graphics by:</h4>
              <p className="about-pane-group-element">- Gabriel Fernández</p>
            </div>
            <div className="about-pane-group">
              <h4 style={{textAlign: "center", fontSize: "0.75rem"}} className="about-pane-group-title">2023</h4>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <h3 className='footer-text'>Got any ideas for the game? Contact us.</h3>
      </footer>
    </div>
  )
} 