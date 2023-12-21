import './hearts.css'

export default function Hearts({amount, lostAmount}){

  const livesRange = [...Array(amount).keys()]

  return (
    <div className="hearts-wrapper">
      {livesRange.map((index) => (
        <img 
          key={index}
          className='heart'
          src={`./assets/images/${index < livesRange.length - lostAmount ? "good" : "bad"}_heart.png`}
          alt="image of a heart"
        />
      ))}
    </div>
  )
}