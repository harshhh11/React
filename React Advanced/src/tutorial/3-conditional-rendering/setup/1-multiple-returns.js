import React, { useState, useEffect } from 'react';
const url = "https://api.github.com/users/cookieee1";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user')

  useEffect(() => {
    fetch(url)
      .then(resp => {
        if(resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText)
        }
      })
      .then(user => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      }) 
      .catch(err => console.log(err))
  }, [])
  if(isLoading) {
    return <h2>Loading....</h2>;
  } else if(isError) {
    return <h2>Error...</h2>;
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
