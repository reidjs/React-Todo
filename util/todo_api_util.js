export const requestTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);
// console.log('here');
// const x = 5;
// export default request;
// console.log('sdf');
