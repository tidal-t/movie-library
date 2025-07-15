import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ListViewer from "../../ListViewer/ListViewer";
import Item from "../../Item";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzQxNTg5NDE2YTlkZDRmOTFkNDA5YzgxN2NhYmNmNCIsIm5iZiI6MTc0MTg3MDQ0Ny40NCwic3ViIjoiNjdkMmQ1NmZlZWRiNTNlNTJjMWRlZmIxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.mAyAn17iuMSMf0n2PfovX9pokHsybhV4IoCiaih2vbo'
  }
};

export default function SimilarList() {
  const { type, id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setData(res.results))
      .catch(err => console.error(err));
  }, [type, id])
  data && console.log(data)
  const list = data && data.map(item => { return (<Item data={item} type={type} />) });

  return (
    <div>
      <ListViewer list={list} />
    </div>
  )
}
