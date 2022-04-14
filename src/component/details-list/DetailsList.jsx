import React from "react";
import { getMovies } from "../../functions/movies";
import DetailListRow from "../details-list-row/DetailListRow";

export default class DetailsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }


    componentDidMount() {
        getMovies().then(movies => this.setState({ movies }));

    }

    render() {
        const rows = this.state.movies.map(movie => <DetailListRow key={movie.imdbID} movie={movie} /> );
        return (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>imdbID</th>
                        <th>Type</th>
                        <th>Poster</th>
                    </tr>
                    <tbody>
                        {rows}
                    </tbody>
                </thead>

            </table>
            </>
        )
    }
}