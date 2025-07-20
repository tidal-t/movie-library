import './ListViewer.css'

export default function ListViewer({ children }) {
    return (
        <div className='list_view'>
            {children ? children : "loading"}
        </div>
    )
}
