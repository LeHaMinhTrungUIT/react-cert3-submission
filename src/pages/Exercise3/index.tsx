import React, { useEffect, useState } from 'react';
import ExerciseLayout from '../../layout/Exercise';
import Example1 from './components/Example/example1';
import Example2 from './components/Example/example2';

const Exercise3 = () => {
    const [data, setData] = useState([]);
    const getData = async () =>
      await fetch("https://jsonplaceholder.typicode.com/users");

    useEffect(() => {
      getData()
        .then((data) => data.json())
        .then((res) => setData(res));
    }, []);
    return (
      <ExerciseLayout>
        <Example1 data={data} />
        <br />
        <Example2 data={data} />
      </ExerciseLayout>
    );
};

export default Exercise3;