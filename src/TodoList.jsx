import './index.css'

export default function TodoList(props){
    return(
        <div className="list-containe">
            <li className="list-item">
            {props.item}
            <span className='icons'>
            <i className="fa-solid fa-trash-can"
            onClick={props.deleteListItem}></i>
            </span>
            </li>
        </div>
    )
}