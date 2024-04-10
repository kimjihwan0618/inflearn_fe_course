const getTodos = () => {
  return localStorage.getItem('todos');
};

const setTodos = (todo, action) => {
  let todoParse = JSON.stringify(todo);
  let todos =
    localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
  try {
    switch (action) {
      case 'add':
        todos === null ? (todos = [todoParse]) : todos.push(todoParse);
        localStorage.setItem('todos', JSON.stringify(todos));
        break;
      case 'update':
        for (let i = 0; i < todos.length; i++) {
          if (JSON.parse(todos[i]).id === todo.id) {
            todos[i] = JSON.stringify(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
            break;
          }
        }
        break;
      case 'delete':
        for (let i = 0; i < todos.length; i++) {
          if (JSON.parse(todos[i]).id === todo.id) {
            todos.splice(i, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            break;
          }
        }
        break;
    }
  } catch (e) {
    console.log(e);
  }
};

const handleCreateTodo = (todo, clear, storageSetFlag) => {
  const ul = document.querySelector('.todo__list');
  const li = document.createElement('li');
  const p = document.createElement('p');
  const button = document.createElement('button');
  clear && li.classList.add('clear');
  p.classList.add('todo__text');
  button.classList.add('todo__check__btn');
  p.textContent = todo.title;
  li.appendChild(button);
  li.appendChild(p);
  ul.appendChild(li);
  button.onclick = () => {
    li.classList.toggle('clear');
    setTodos(
      {
        id: todo.id,
        title: todo.title,
        clear: li.classList.value === 'clear',
      },
      'update'
    );
  };
  li.ondblclick = () => {
    ul.removeChild(li);
    setTodos(
      {
        id: todo.id,
        title: todo.title,
        clear: li.classList.value === 'clear',
      },
      'delete'
    );
  };
  if (storageSetFlag) {
    setTodos(
      {
        id: todo.id,
        title: todo.title,
        clear,
      },
      'add'
    );
  }
};

const pageInit = () => {
  if (getTodos() !== null) {
    const todos = JSON.parse(getTodos());
    for (let i = 0; i < todos.length; i++) {
      const todo = JSON.parse(todos[i]);
      handleCreateTodo(todo, todo.clear, false);
    }
  } else {
    const ul = document.querySelector('.todo__list');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
};

const handleTodoInput = (evt) => {
  if (evt.keyCode === 13) {
    handleCreateTodo(
      {
        id: new Date().getTime(),
        title: evt.target.value,
        clear: false,
      },
      false,
      true
    );
    evt.target.value = '';
  }
};

const handleAllRemoveClick = () => {
  localStorage.removeItem('todos');
  pageInit();
};

const accessToGeo = (position) => {
  const { latitude, longitude } = position.coords;
  weatherSearch({
    latitude,
    longitude,
  });
};

const askForLocation = () => {
  navigator.geolocation.getCurrentPosition(accessToGeo);
};

const weatherDataActive = ({ location, weather }) => {
  const weatherList = ['Clear', 'Clouds', 'Drizzle', 'Rain', 'Snow', 'Thunderstorm'];
  weather = weatherList.includes(weather) ? weather : 'Fog';
  document.querySelector('.todo__title').textContent = location;
  document.body.style.backgroundImage = `url(./images/${weather}.jpg)`;
};

const weatherSearch = ({ latitude, longitude }) => {
  const openWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e0596fa197e6fdefa35b481a34749588`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.weather[0].description);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

askForLocation();
pageInit();
