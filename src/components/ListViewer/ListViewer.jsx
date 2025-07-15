import './ListViewer.css'

export default function ListViewer({ list }) {
    return (
        <div className='list_view'>
            {list ? list : "loading"}
        </div>
    )
}
