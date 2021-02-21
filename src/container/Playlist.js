const PlayList = ({ children }) => {
    return (
        <table className="playlist">
            <thead>
                <tr>
                    <th className="play"></th>
                    <th>Titulo</th>
                    <th>Artista</th>
                    <th>Album</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default PlayList;