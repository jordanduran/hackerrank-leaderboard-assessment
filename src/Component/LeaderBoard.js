import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { response } from '../response';

function LeaderBoard(props) {
  const [data, setData] = useState(response.list);
  const [pathName, setPathName] = useState('');

  useEffect(() => {
    if (pathName === 'rank') {
      let updatedData = [...data].sort((a, b) => a.rank - b.rank);
      setData(updatedData);
    } else if (pathName === 'name') {
      let updatedData = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
      setData(updatedData);
    } else if (pathName === 'points') {
      let updatedData = [...data].sort((a, b) => a.points - b.points);
      setData(updatedData);
    } else if (pathName === 'age') {
      let updatedData = [...data].sort((a, b) => a.age - b.age);
      setData(updatedData);
    }

    //eslint-disable-next-line
  }, [pathName]);

  return (
    <div className='text-center mt-50'>
      <div>
        <div>
          <Link to='/rank'>
            <button
              data-testid='route-rank'
              className='outlined'
              type='button'
              onClick={(e) => setPathName(e.target.innerHTML.toLowerCase())}
            >
              Rank
            </button>
          </Link>
          <Link to='/name'>
            <button
              data-testid='route-name'
              className='outlined'
              type='button'
              onClick={(e) => setPathName(e.target.innerHTML.toLowerCase())}
            >
              Name
            </button>
          </Link>
          <Link to='/points'>
            <button
              data-testid='route-points'
              className='outlined'
              type='button'
              onClick={(e) => setPathName(e.target.innerHTML.toLowerCase())}
            >
              Points
            </button>
          </Link>
          <Link to='/age'>
            <button
              data-testid='route-age'
              className='outlined'
              type='button'
              onClick={(e) => setPathName(e.target.innerHTML.toLowerCase())}
            >
              Age
            </button>
          </Link>
        </div>
      </div>
      <div className='card mx-auto pb-20 mb-30' style={{ width: '50%' }}>
        <table className='mt-50' data-testid='app-table'>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className='numeric'>Points</th>
              <th className='numeric'>Age</th>
            </tr>
          </thead>
          <tbody data-testid='app-tbody'>
            {data.length
              ? data.map((person, index) => {
                  return (
                    <tr key={person.rank}>
                      <td data-testid={`rank-${index}`}>{person.rank}</td>
                      <td data-testid={`name-${index}`}>{person.name}</td>
                      <td data-testid={`points-${index}`} className='numeric'>
                        {person.points}
                      </td>
                      <td data-testid={`age-${index}`} className='numeric'>
                        {person.age}
                      </td>
                    </tr>
                  );
                })
              : 'No data found'}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
