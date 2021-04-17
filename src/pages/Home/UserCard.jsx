import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { userPropType } from '../../utils/propTypes';

function UserCard({ user }) {
  const history = useHistory();

  function handleDetailsClick() {
    history.push(`/${user.login}`);
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        {`@${user.login}`}
      </p>
      <p>{user.bio}</p>
      <p>
        followers:
        {user.followers}
      </p>
      <p>
        following:
        {user.following}
      </p>
      <div>
        <Button type="button" onClick={handleDetailsClick}>+ Details</Button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: userPropType.isRequired,
};

export default UserCard;
