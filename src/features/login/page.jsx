import Button from '../../components/button/button'
import './login.css'

export default function LoginPage({
  navigateToPlay,
  navigateToAbout,
  score
}){

  return (
    <div className='page'>
      <div className='non-footer'>
      <header className="header">
          <span className="score">Score: {score}</span>
          <h1 className='heading'>Hangman</h1>
          <nav className='navbar'>
            <span onClick={navigateToPlay} className='navbar-link' href="#">Play</span>
            <span onClick={navigateToAbout} className='navbar-link' href="#">About</span>
          </nav>
        </header>
        <main className='login-main'>
          <form action="" className='login-form pane'>
            <h3 className='login-form-heading'>Log In</h3>
            <input required minLength={1} type="text" className='input' placeholder='username' id='username-input' name='username-input' />
            <input required minLength={1} type="password" className='input' placeholder='password' id='password-input' name='password-input' />
            <Button width='100%'>Log In</Button>
            <p className='login-prompt'>Log In to save your highest score</p>
          </form>
        </main>
      </div>
      <footer>
        <h3 className='footer-text'>It&apos;s ok if you don&apos;t want to login. Anonymous heroes are still heroes.</h3>
      </footer>
    </div>
  )
} 