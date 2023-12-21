export default function StoryImage({imageIndex}){

  const images = [
    {
      name: 'frame1',
      width: "188px",
    },
    {
      name: 'frame2',
      width: "529px",
    },
    {
      name: 'frame3',
      width: "443px",
    },
    {
      name: 'frame4',
      width: "370px",
    },
    {
      name: 'frame5',
      width: "390px",
    },
    {
      name: 'frame6',
      width: "390px",
    },
  ]

  const {name, width} = images[imageIndex]

  return (
    <img src={`./assets/images/${name}.png`} style={{display: "block", width }} alt="" />
  )
}