import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {List} from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

const companies = ['facebook', 'airbnb', 'recruit'];

const Home: FC = () => (
  <>
    <List celled relaxed>
      {companies.map(companyName => (
        <List.Item className="list-item" key={companyName}>
          <Link to={`/${companyName}/members`}>
            {capitalize(companyName)}のメンバー
          </Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
