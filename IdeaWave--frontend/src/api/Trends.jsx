import { useEffect, useState } from 'react';

const Trends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/trends/');
        const data = await response.json();
        setTrends(data.trends || []);
        localStorage.setItem('trends', JSON.stringify(data.trends || []));
      } catch (error) {
        console.error('Error fetching trends:', error);
      }
    };

    fetchTrends();
  }, []);

  return (
      <ol className='list'>
        {trends.map((trend, index) => (
          <li key={index}>{trend}</li>
        ))}
      </ol>
  );
};

export default Trends;
