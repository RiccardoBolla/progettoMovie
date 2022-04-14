export default function DetailListRow(props) {
    return (
        <tr>
            <td>{props.movie.title}</td>
            <td>{props.movie.year}</td>
            <td>{props.movie.imdbID}</td>
            <td>{props.movie.type}</td>
            <td>{props.movie.poster}</td>
        </tr>
    );
}