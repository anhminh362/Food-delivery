import Card from "./card"

export default ListCard = ({list}) => {
  return(
    <>
      {list.map((item)=>(
        <Card data={item} key={item.id}/>
      ))}
    </>
  )
}