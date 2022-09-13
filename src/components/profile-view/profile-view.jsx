import UserInfo from './user-info';
import FavoriteMovies from './favorite-movies';
import { useEffect } from "react";
import UpdateUser from './update-user';

import './profile-view.scss';


export function ProfileView({ movies, onUpdatedUserInfo }) {
    const [user, setUser] = useState({
    })

    const favoriteMovieList = movies.filter((mosies) => {

    });

    const getUser = () => {

    }

    const handleSubmit = (e) => {

    }
    const removeFav = (id) => {

    }

    const handleUpdate = (e) => {

    };

    useEffect(() => {
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <UserInfo name={user.Username} email={user.Email} />
                </Col>
                <Col xs={12} sm={8}>
                    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
                </Col>
            </Row>

            <FavoriteMovies favoriteMovieList={favoriteMovieList} />

        </Container>
    );
}