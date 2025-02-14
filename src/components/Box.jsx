export default function Card(props){
    return (
      <div className='p-4 h-fit border-2 border-black border-opacity-15 rounded-3xl'>
        <img className='py-2' src={props.img} />
        <h3 className='font-DM font-bold'>{props.title}</h3>
        <p className='font-DM text-xs font-medium'>{props.details}</p>
      </div>
    )
  }
  