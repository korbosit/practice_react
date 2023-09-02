function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "increment",



    () => {
      // Проверяем, что значение count не превышает 50
      if (this.state.count >= -50 && this.state.count < 50) {
        this.setState({
          count: this.state.count + 1 });

      }
      // Если условие выполняется, увеличиваем значение count на 1

    });_defineProperty(this, "decrement",

    () => {
      if (this.state.count > -50 && this.state.count < 50) {
        this.setState({
          count: this.state.count - 1 });

      }
    });_defineProperty(this, "round",

    () => {
      // Генерируем случайное число в диапазоне от -50 до 50
      const randomNumber = Math.floor(Math.random() * 101) - 50;

      this.setState({
        count: randomNumber });

    });_defineProperty(this, "reset",

    () => {
      this.setState({
        count: 0 });

    });this.state = { count: 0 };}



  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    const isButtonDisabled = this.state.count > 50 && this.state.count < -50;
    return /*#__PURE__*/(
      React.createElement("div", { class: "app" }, /*#__PURE__*/
      React.createElement("div", { class: "counter" }, this.state.count), /*#__PURE__*/
      React.createElement("div", { class: "controls" }, /*#__PURE__*/
      React.createElement("button", { onClick: this.increment, disabled: isButtonDisabled }, "INC"), /*#__PURE__*/
      React.createElement("button", { onClick: this.decrement, disabled: isButtonDisabled }, "DEC"), /*#__PURE__*/
      React.createElement("button", { onClick: this.round }, "RND"), /*#__PURE__*/
      React.createElement("button", { onClick: this.reset }, "RESET"))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, { counter: 0 }), document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов